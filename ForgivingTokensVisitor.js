/**
 File: ForgivingTokensVisitor.js 
 Author: Lyn Turbak

 Known Bugs; DO expr doesn't work correctly (because has embedded suite/statements)
   Can be fixed by handling decl_blocks, suites, and stat_blocks as 
   conversions from listTrees rather than mutating accumulators of tokens. 
 
 History:

 * [2020/06/26, lyn]
   + Remove EOF token from parsed tokens. 
   + Mark suite tokens in empty suite as optional 
   + Handle optional socket labels: 
     - THING/LIST for INDEX_IN_LIST, and 
     - TEXT/SEGMENT/REPLACEMENT for REPLACE_ALL

 * [2020/06/24, lyn] At Qianqian's request, modify handling of get to allow `get(a)`,
   (as well as `get (global a)`, `get global (a)` and variants with different braces).
   Also mark outer braces and `get` as optional in these cases, and deleter inner braces.

 * [2020/06/23-24, lyn] 
   + Added inserting/deleting/correcting braces for expressions via a combination
     of ListTreeVisitor, exprTreeToTokensWithParens, and exprTreeToTokens
   + NEG_NUM special case is now handled by exprTreeToTokens
 * [2020/06/22, lyn] Fixed bug in counting newlines when file begins with comment
 * [2020/06/16-18, lyn] Created
 
 Generate an array of tokens from a VenbraceForgiving parse tree. 
 
 Calling .visit on a program, test_program, or test_blocks parse tree returns
 a list of tokens that includes inserted, deleted, and corrected tokens.
 Also, optional tokens are marked optional. Here are the new properties on 
 these tokens:
 
   + tok.inserted is true if tok is an inserted token (undefined otherwise). 
     Currently, the only inserted tokens are braces and 
     the MINUS token inserted when processing expr_block NEG_NUM. 
 ===== Qianqian Jun. 20, 2020 =====
 - removed the `inserted' tag for corrected NEG_NUM
 
 
   + tok.deleted is true if tok is a deleted token (undefined otherwise)
      Currently, only brace tokens are deleted, in these situations: 
      - when used around a suite
      - 

 
   + tok.corrected has the previous token text if tok has been corrected 
      (undefined otherwise). Currently, the only tokens corrected are 
      wrong-type braces and the NEG_NUM in expr_block NEG_NUM. 
 ===== Qianqian Jun. 20, 2020 =====
 - removed the `corrected' tag for corrected NEG_NUM
 
   + tok.optional is true if tok is optional in the grammar (undefined otherwise).
     As a special case, an explicit GET token is also optional, as are parens
     wrapping a getter with an explicit GET. 
     Deleted tokens are never marked optional. 
     The only inserted tokens marked optional are those inserted 
       around a getter with an explicit GET. 
     Corrected braces may also be optional, e.g. when {17} is corrected to 17.
 
 In cases where expr NEG_NUM is converted to expr MINUS <positive version of NEG_NUM>,
 the new MINUS token is marked as inserted and the <positive version of NEG_NUM>
 token is marked as corrected. 
 
 After .visit is called on a top-level program node, the following properties are
 defined on the visitor: 
 
   + visitor.unfixedTokens is the unfixed list of tokens, in which tokens
       do not have correct tokenIndex, start, stop, line, and column information.
       In particular, inserted tokens have bogus information, and any tokens
       following an inserted token have incorrect information. 
 
   + visitor.tokens is the fixed list of tokens, in which all tokens have correct 
       tokenIndex, start, stop, line, and column information.
    
   + visitor.stringForTokens is a string that is consistent for the parsed tokens.
     I.e. the start/stop/line/column information for every tokens in visitor.tokens
     is consistent with this string. So this string can be used for the highlighting
     in the syntax editor using information on the tokens. 
 
*/

// inBrowser is defined in .html file. 
// If it's defined, then we're in the browser version.
// Otherwise, we're in the terminal version = node.js version. 
if ((typeof inBrowser) === 'undefined') {
  inBrowser = false;
}

var antlr4;

if (inBrowser) {
  antlr4 = require('./antlr4/index.js');
} else {
  // antlr4 = require('antlr4');
  antlr4 = require('./antlr4/index.js');
}

var CommonToken = antlr4.CommonToken;
// [2020/06/17, lyn] None of these work. Why?
// var TerminalNodeImpl = antlr4.tree.TerminalNodeImpl;
// var TerminalNodeImpl = antlr4.Tree.TerminalNodeImpl;
// var TerminalNodeImpl = antlr4.TerminalNodeImpl;
// console.log('TerminalNodeImpl');
// console.log(TerminalNodeImpl);
var VenbraceForgivingVisitor = require('./VenbraceForgivingVisitor').VenbraceForgivingVisitor;
var ListTreeVisitor = require('./ListTreeVisitor').ListTreeVisitor;
var Utils = require('./Utils');
var tokenIntMap = require('./TokenIntMap').tokenIntMap;
var tokenTextMap = require('./TokenTextMap').tokenTextMap;

// ---------- Set up inheritance ----------
function ForgivingTokensVisitor() {
  VenbraceForgivingVisitor.call(this);
}

ForgivingTokensVisitor.prototype = Object.create(VenbraceForgivingVisitor.prototype);
ForgivingTokensVisitor.prototype.constructor = ForgivingTokensVisitor;
// -----------------------------------------

ForgivingTokensVisitor.prototype.visitTop = function(ctx) {
  this.tokens = [] // Initialize token list that will be mutated 
                   // by each call to visitTerminal in tree walk by visitor. 
                   // After the walk, grab the tokens field from the listener. 
  this.visitChildren(ctx); // Walk the tree, ignoring the visitor return value. 
  this.unfixedTokens = this.tokens; // Rename tokens generated by visitor
  this.tokens = this.tokens
    .filter( tok => tok.type !== antlr4.Token.EOF ) // Filter out EOF token
    .map( tok => tok.clone() ); // this.tokens now contains clones of visitor tokens. 
  // Mutate tokens in this.tokens to fix them, and generate consistent string for fixed tokens. 
  this.stringForTokens = fixupTokens(this.tokens)
  return this.tokens; // Return fixed tokens list at the end of the walk. 
}

// Visit a parse tree produced by #test_top_blocks.
ForgivingTokensVisitor.prototype.visitTest_decl_blocks = function(ctx) {
  return this.visitTop(ctx);
}
// Visit a parse tree produced by #test_top_blocks.
ForgivingTokensVisitor.prototype.visitTest_top_blocks = function(ctx) {
  return this.visitTop(ctx);
}
// Visit a parse tree produced by #test_blocks.
ForgivingTokensVisitor.prototype.visitTest_blocks = function(ctx) {
  return this.visitTop(ctx);
}

// Visit a parse tree produced by #program
ForgivingTokensVisitor.prototype.visitProgram = function(ctx) {
  return this.visitTop(ctx);
}

// Visit a parse tree produced by #test_program.
ForgivingTokensVisitor.prototype.visitTest_program = function(ctx) {
  return this.visitTop(ctx);
}

/* // Now handled by exprBlockTreeToTokens
// Special case for converting expr_block NEG_NUM to binary subtraction in cases like (a-17)
ForgivingTokensVisitor.prototype.visitImmutable_neg_num_special_case = function (ctx) {
  var negNumToken = ctx.NEG_NUM().getSymbol();
  var newMinusToken = negNumToken.clone(); 
  newMinusToken.type = tokenIntMap['MINUS']; 
  newMinusToken.stop = newMinusToken.start; // MINUS token is one character long
  newMinusToken.text = '-';
  // newMinusToken.inserted = true;

  // negNumToken.corrected = negNumToken.text;
  negNumToken.text = negNumToken.text.substring(1); // remove - sign
  newMinusToken.type = tokenIntMap['NUMBER']; 
  negNumToken.start = negNumToken.start + 1; // exclude - sign
  negNumToken.column = negNumToken.column + 1; // exclude - sign

  
  this.tokens.push(ctx.LPAREN().getSymbol()); 
  this.visit(ctx.expr_block()); // recursively process left operand expression
  this.tokens.push(newMinusToken);
  this.tokens.push(negNumToken);
  this.tokens.push(ctx.RPAREN().getSymbol()); 
}
*/

ForgivingTokensVisitor.prototype.visitDecl_block = function(ctx) {
  /* 
     Allows zero or one left-brace tokens before stat and zero or one matching 
     right-brace tokens after stat. It will insert square brackets in no brace case 
     and convert nonsquares to squares. 
   */
  var lbraceToken = toToken(ctx.declLbrace);
  if (!lbraceToken) {
    // console.log('no declLbrace token'); 
    this.tokens.push(newToken('LSQR')); // No left brace token; add LSQR
  } else {
    // console.log('declLbrace token: ' + lbraceToken.toString());
    this.tokens.push(ensureTokenType('LSQR', lbraceToken));
  }
  this.visit(ctx.decl());
  var rbraceToken = toToken(ctx.declRbrace);
  if (!rbraceToken) {
    // console.log('no declLbrace token'); 
    this.tokens.push(newToken('RSQR')); // No right brace token; add RSQR
  } else {
    // console.log('declRbrace token: ' + rbraceToken.toString());
    this.tokens.push(ensureTokenType('RSQR', rbraceToken));
  }
}

ForgivingTokensVisitor.prototype.visitSuite = function(ctx) {
  /* 
     Allows zero or one left-brace tokens before stat suite zero or one matching 
     right-brace tokens after stat. The braces need not match. It will insert
     a curly in no brace case and convert noncurlies to curlies. 
   */
  // Collect all the child stat blocks
  // console.log('------------------------------------\nvisitSuite');
  var statBlockContexts = [];
  var i = 0;
  var statBlockContext = ctx.stat_block(i);
  while (statBlockContext) {
    statBlockContexts.push(statBlockContext);
    i += 1;
    statBlockContext = ctx.stat_block(i);
  }
  var emptyStatBlocks = statBlockContexts.length == 0;
  var lbraceToken = toToken(ctx.suiteLbrace);
  var rbraceToken = toToken(ctx.suiteRbrace);
  // console.log('num statBlocks: ' + statBlockContexts.length);
  // console.log('emptyStat=' + emptyStat);
  // console.log('lbraceToken:');
  // console.log(lbraceToken);
  // console.log('rbraceToken:');
  // console.log(rbraceToken);
  if (emptyStatBlocks && lbraceToken && rbraceToken) {
    console.log('empty suite branch');
    // special case for explicit empty suite braces
    this.tokens.push(ensureTokenType('LCURLY', optionalToken(lbraceToken)));
    this.tokens.push(ensureTokenType('RCURLY', optionalToken(rbraceToken)));
  } else {
    // all other cases have no explicit suite braces
    if (lbraceToken) {
      // console.log('deleting lbrace branch');
      this.tokens.push(deletedToken(lbraceToken));
    }
    statBlockContexts.forEach( childCtx => this.visit(childCtx) ); 
    if (rbraceToken) {
      // console.log('deleting rbrace branch');
      this.tokens.push(deletedToken(rbraceToken));
    }
  }
}

ForgivingTokensVisitor.prototype.visitStat_block = function(ctx) {
  /* 
     Allows zero or one left-brace tokens before stat and zero or one matching 
     right-brace tokens after stat. It will insert a curly in no brace case and 
     convert noncurlies to curlies. 
   */
  // console.log('Visiting stat_block');
  var lbraceToken = toToken(ctx.statLbrace);
  if (!lbraceToken) {
    // console.log('no statLbrace token'); 
    this.tokens.push(newToken('LCURLY')); // No left brace token; add LCURLY
  } else {
    // console.log('statLbrace token: ' + lbraceToken.toString());
    this.tokens.push(ensureTokenType('LCURLY', lbraceToken));
  }
  this.visit(ctx.stat());
  var rbraceToken = toToken(ctx.statRbrace);
  if (!rbraceToken) {
    // console.log('no statLbrace token'); 
    this.tokens.push(newToken('RCURLY')); // No right brace token; add RCURLY
  } else {
    // console.log('statRbrace token: ' + rbraceToken.toString());
    this.tokens.push(ensureTokenType('RCURLY', rbraceToken));
  }
}

/* Automatic insertion of GLOBAL and LOCAL no longer supported.
   In practice, it does *not* work, because parser will 
   try to convert a LOCAL decl to a global decl ...

ForgivingTokensVisitor.prototype.visitGlobal_decl_keyword = function(ctx) {
  var terminalNode = ctx.GLOBAL();
  if (terminalNode) {
    this.tokens.push(terminalNode.getSymbol());
  } else {
    this.tokens.push(newToken('GLOBAL'));
  }
}

ForgivingTokensVisitor.prototype.visitLocal_decl_keyword = function(ctx) {
  var terminalNode = ctx.LOCAL();
  if (terminalNode) {
    this.tokens.push(terminalNode.getSymbol());
  } else {
    this.tokens.push(newToken('LOCAL'));
  }
}
*/


// Rather than directly process expression tokens via ForgivingTokenVisitor,
// instead, use ListTreeVisitor to create a list tree representation of 
// the outermost expr_block, and process that tree for its tokens. 
ForgivingTokensVisitor.prototype.visitExpr_block = function(ctx) {
  // console.log('Visiting expr_block');
  var listTreeVisitor = new ListTreeVisitor();   
  // Note: do *not* call this.visit(ctx). Instead make a list tree of expr
  var exprBlockListTree = listTreeVisitor.visit(ctx);
  // console.log('exprBlockListTree');
  // console.log(exprBlockListTree);
  var exprBlockTokens = exprTreeToTokensWithParens(exprBlockListTree);
  // console.log('exprBlockTokens');
  // console.log(exprBlockTokens);
  Utils.pushArray(this.tokens, exprBlockTokens);
}

function getNodeType(listTree) {
  if (listTree instanceof CommonToken) {
    return 'token';
  } else if (! (listTree instanceof Array)) {
    var nodeTypeString = (typeof listTree).toString();
    if (nodeTypeString === 'object') {
      nodeTypeString = Utils.className(listTree);
    }
    if (nodeTypeString === 'CommonToken') {
      return 'token'; 
    } else {
      throw 'getNodeType expects token or Array; found ' + nodeTypeString;
    }
  } else if (listTree.length == 0) {
    throw 'getNodeType expects nonempty array;';
  } else {
    return listTree[0];
  }
}

function exprTreeToTokensWithParens(etr) {
  // Translate an expr listTree to tokens, inserting outer parens if necessary
  // (not done for abbreviations)
  var nodeType = getNodeType(etr); 
  // console.log('withParens nodeType=' + nodeType);
  var subtokens = exprTreeToTokens(etr); 
  if (! ['atom', 'getterAbbrev', 'token', 'emptyExpr', 
         'parensExpr', 'curliesExpr', 'squaresExpr'].includes(nodeType)) {
    // Need to insert paren tokens
    // console.log('inserting parens for ' + subtokens.map( t => t.toString() ));
    var lparen = newToken('LPAREN');
    var rparen = newToken('RPAREN');
    subtokens.unshift(lparen);
    subtokens.push(rparen);
    if (['getterVerbose', 'getter_inner_braces'].includes(nodeType)) {
      // Parens always optional with `get` keyword
      lparen.optional = true;
      rparen.optional = true;
    }
  }
  // console.log('exprTreeToTokensWithParens returns:');
  // subtokens.forEach( tok=> console.log(tok.toString()) );
  return subtokens;
}

function exprTreeToTokens(etr) {
  // A tree node is either (1) a token or (2) a list beginning with 
  // a string context type followed by subtrees. 
  // Return a nonempty list of (possibly annotated) tokens
  // Does not necessarily include outer parens (but might)
  var nodeType = getNodeType(etr);
  if (etr instanceof CommonToken 
      || nodeType === 'token') {
    return [etr]; 
  } else if (! (etr instanceof Array)) {
    throw 'exprTreeToTokens expects token or Array; found ' + (typeof etr);
  }
  if (etr.length <= 1) {
    throw 'exprTreeToTokens expects Array length >= 2 ' + etr;
  }
  // Invariant: etr is Array of length >= 2
  if (nodeType == 'emptyExpr') {
    return [ensureTokenType('LPAREN', etr[1]), // left brace, might not be paren
            ensureTokenType('RPAREN', etr[2])] // right brace, might not be paren
  } else if (['parensExpr', 'curliesExpr', 'squaresExpr'].includes(nodeType)) {
    var subnodeType = getNodeType(etr[2]);
    var subtokens = exprTreeToTokens(etr[2]); // etr[2] is subexp, do *not* require parens
                                              // since the enclosing context adds braces.
    var lbraceToken = etr[1]; 
    var rbraceToken = etr[3]; 
    // console.log('subnodeType for braces: ' + subnodeType);
    if (['parensExpr', 'curliesExpr', 'squaresExpr', 
         'emptyExpr', 'getterAbbrev'].includes(subnodeType)) {
      // subexp already braced or is abbreviated getter, 
      // so outer braces are extra and should be deleted
      lbraceToken.deleted = true;
      rbraceToken.deleted = true;
    } else { // subexp isn't braced; make sure innermost braces are parens
      ensureTokenType('LPAREN', lbraceToken);
      ensureTokenType('RPAREN', rbraceToken);
      if (subnodeType === 'getterVerbose') {
        // parens for verbose getter are considered optional
        lbraceToken.optional = true;
        rbraceToken.optional = true;
      }
    }
    if (subnodeType === 'atom') {
      // parens around atoms are optional 
      lbraceToken.optional = true;
      rbraceToken.optional = true;
    }
    // In all cases add braces token to token list
    subtokens.unshift(lbraceToken);
    subtokens.push(rbraceToken);
    return subtokens; // Return mutated list 
  } else if (nodeType === 'subNegNumExpr') {
    // Specially handle case of converting expr_block NEG_NUM to binary subtraction
    var subtokens = exprTreeToTokensWithParens(etr[1]); // etr[1] is listTree for expr_block
    var negNumToken = etr[2]; // etr[2] is NEG_NUM token
    
    var newMinusToken = negNumToken.clone(); 
    newMinusToken.type = tokenIntMap['MINUS']; 
    newMinusToken.stop = newMinusToken.start; // MINUS token is one character long
    newMinusToken.text = '-';
    // newMinusToken.inserted = true;
    
    // Update negNum token to be 
    
    var newNumberToken = negNumToken.clone(); 
    newNumberToken.type = tokenIntMap['NUMBER']; 
    newNumberToken.text = negNumToken.text.substring(1); // remove - sign
    newNumberToken.start = negNumToken.start + 1; // exclude - sign
    newNumberToken.column = negNumToken.column + 1; // exclude - sign
    // negNumToken.corrected = negNumToken.text;
    
    subtokens.push(newMinusToken, newNumberToken);
    return subtokens;
  } else if (['getterVerbose', 'getter_inner_braces'].includes(nodeType)) {
    return etr.slice(1) // remove nodeType
      .map ( tok => (isOptional(nodeType, tok))
             ? optionalToken(tok)
             : ((isBrace(tok)) ? deletedToken(tok) : tok ) 
             );
    /*
  } else if (['str_replace_all', 'index_in_list'].includes(nodeType)) {
    return etr.slice(1) // remove nodeType
      .map ( tok => (isOptional(nodeType, tok)) ? display(optionalToken(tok)) : display(tok) )
    */
  } else {
    // General case: collect tokens for *parenthesized* subexpressions from below
    return Utils.concatArrays(// Combine array of arrays into one arraya
                              etr.slice(1) // Remove nodeType
                              .map(// convert subparts to token lists. 
                                   function (part) {
                                     if (part instanceof CommonToken) {
                                       return [isOptional(nodeType, part) 
                                               ? optionalToken(part)
                                               : part];
                                     } else {
                                       return exprTreeToTokensWithParens(part);
                                     }
                                   })
                              );
  }
}

ForgivingTokensVisitor.prototype.visitTerminal = function(ctx) {
  // Default handler for terminal tokens not handled by explicit visitor
  var token = ctx.getSymbol(); // Returns the token at the terminal 
  var text = token.text;
  // console.log('visitTerminal ' + text);
  var parentNameWithContext = ctx.getParent().constructor.name;
  // if (isBrace(text)) {
  //   console.log('Brace token ' + text + ' with parent ' + parentNameWithContext);
  // 
  if (isOptional(ctx, token)) {
    token.optional = true;
  }
  this.tokens.push(token); // Add this token to end of visitor's tokens list
};

/* ***********************************************************
 * TOKEN HELPER FUNCTIONS
 * *********************************************************** 
 */



// Modify CommonToken toString method to handle 
// inserted, deleted, correct, and optional tokens
CommonToken.prototype.toString = function() {
  var txt = this.text;
  var correctedText = this.corrected;
  if (txt !== null) {
    txt = txt.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
  } else {
    txt = "<no text>";
  }
        return "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" 
                + txt + "',<" + this.type + ">"
                + (this.channel > 0 ? ",channel=" + this.channel : "") + "," +
                + this.line + ":" + this.column 
                + (this.inserted ? ',inserted' : '')
                + (this.deleted ? ',deleted' : '')
                + (correctedText ? ',corrected:' + correctedText : '')
                + (this.optional ? ',optional' : '')
                + "]";
};

// Modify CommonToken clone method to handle 
// inserted, deleted, correct, and optional tokens
CommonToken.prototype.clone = function() {
  var t = new CommonToken(this.source, this.type, this.channel, this.start,
                          this.stop);
  t.tokenIndex = this.tokenIndex;
  t.line = this.line;
  t.column = this.column;
  t.text = this.text;
  if (this.inserted) { t.inserted = this.inserted; }
  if (this.deleted) { t.deleted = this.deleted; }
  if (this.corrected) { t.corrected = this.corrected; }
  if (this.optional) { t.optional = this.optional; }
  return t;
};

function isBrace(tok) {
  return ['(', ')', '{', '}', '[',']'].includes(tok.text);
}

function isOpenBrace(tok) {
  // console.log("isOpenBrace('" + tok.text + "')=" + ['(', '[', '{'].includes(tok.text));2
  return ['(', '[', '{'].includes(tok.text);
}

function markDeleted(tok) {

}

function isOptional (ctxOrString, token) {
  var nodeType; 
  // console.log('(typeof ctxOrString)=' + ctxOrString);
  if ((typeof ctxOrString) === 'string') {
    nodeType = ctxOrString;
  } else {
    var parentNameWithContext = ctxOrString.getParent().constructor.name;
    // console.log('Debug: ' + token + ' ' + parentNameWithContext);
    // Turn names like 'Decl_blockContext' into 'decl_block'
    nodeType = Utils.uncapitalizeFirstLetter(parentNameWithContext.split('Context')[0]);
  }
  optionalTexts = optionalTokens[nodeType]; 
  if (optionalTexts === undefined) {
    // not in dictionary
    // console.log("isOptional(" + nodeType + ", '" + token.text + "')=" + false);
    return false;
  } else {
    // console.log("isOptional(" + nodeType + ", '" + token.text + "')=" 
    //            + optionalTexts.includes(token.text));
    return optionalTexts.includes(token.text);
  }
}

var optionalTokens = { // Dictionary for optional tokens 
                       // (only works for decls/suites/stats, not exprs
  'global_decl': ['to'], // Lyn sez `global` should *not* be optional
  'event_handler': ['do'], // What about params? 
  // Note for proc_decl: are 'do' and 'result' necessary for distinguishing noreturn and return cases?
  'procedure_do': ['do'], 
  'procedure_result': ['result'], 
  'for_each_from_to': ['from', 'to', 'by', 'do'], 
  'while': ['test', 'do'], 
  // Does *not* handle proc/method call labels as optional
  'setter': ['to'], 
  'local_var_decl_stat': ['to', 'in'], // Should 'local' be optional? Lyn sez NO!

  // [2020/06/26] These are used by exptTreeToTokens
  'getterVerbose': ['get'], 
  'getter_inner_braces': ['get'], 
  'index_in_list': ['thing', 'list'],
  'str_replace_all': ['text', 'segment', 'replacement'],
  // [2020/06/26] These are currently unused: 
  'local_var_decl_expr': ['to', 'in'], // Should 'local' be optional? Lyn sez NO!
  // 'str_segment': ['text', 'start', 'length'],
  'atom': ['(', ')']
  // Does *not* handle expression operation labels as optional
};

function ensureTokenType(tokenType, token) {
  // Change token to tokenType and mark as corrected; otherwise leave unchanged.
  var oldText = token.text;
  var newText = tokenTextMap[tokenType];
  if (oldText !== newText) {
    token.corrected = oldText;
    token.type = tokenIntMap[tokenType];
    token.text = newText;
  }
  return token;
}

function newToken(tokenType) {
  tok = new CommonToken(undefined, tokenIntMap[tokenType], 
                        undefined, undefined, undefined);
  tok.text = tokenTextMap[tokenType], // Warning: can be undefined for types like 'NUMBER'
  // Don't fill out other properties (channel, start, stop, tokenIndex, line, column) yet
  tok.inserted = true;
  return tok; 
}

function toToken(ctxOrToken) {
  // extract a token from ctxOrToken, or propagate null/undefined
  // Lyn sez Can't use instanceof with TerminalNodeImpl because I can't 
  // figure out how to import TerminalNodeImpl
  if (ctxOrToken == null) {
    return null;
  } 
  if (ctxOrToken == undefined) {
    return undefined;
  }
  var  className = getClassName(ctxOrToken);
  // console.log('toToken className: ' + className);
  if (className === "LbraceContext" || className === "RbraceContext") {
    return ctxOrToken.start;
  } else if (className === "TerminalNodeImpl") {
    return ctxOrToken.getSymbol();
  } else if (className === "CommonToken") {
    return ctxOrToken;
  } else {
    throw "can't convert object to a token";
  }
}

function deletedToken(tok) {
  tok.deleted = true;
  return tok;
}

function optionalToken(tok) {
  // console.log('Calling optionalToken on' + tok.toString());
  tok.optional = true;
  // console.log('Result of optionalToken is ' + tok.toString());
  return tok;
}

function display(thing) {
  console.log(thing.toString());
  return thing;
}

function getClassName(object) {
  return object.constructor.name;
}

// Fix token sequence with inserted tokens to have correct 
// tokenIndex, start, stop, line, and column numbers
// Perform fixes by mutating existing tokens. 
// Assume there is at least one regular (=noninserted) token
// Mutates tokens and returns a string that is consistent with being the 
// "source" input string for the fixed up tokens
function fixupTokens(tokens) {

  var resultString = ''; // New input string to match fixed up tokens
  var tokenIndex = 0;
  var charIndex = 0;
  var line = 0; // Lines start at 0, so this is smaller than first line
  var column = 0;
  var numSpaces = 0;

  var pendingInsertedOpenBraces = []; // Hold inserted open braces for later processing
                                      // They will come before next regular token,
                                      // and might be on next line rather than current one.
  var prevRegularTokenStop = undefined; 
  var prevRegularTokenLine = 1; 

  function printState(msg, t) { // For debugging
    console.log(msg + t.toString()
                + "; token.text=" + t.text
                + "; tokenIndex=" + tokenIndex
                + "; charIndex=" + charIndex
                + "; line=" + line
                + "; column=" + column
                + "; resultString='" + resultString + "'"
                );
  }

  function processToken(t) {
    // Update a token based on current state, and use token info to update state
    // printState("\nBefore processing ", t);
    var text = t.text;
    t.text = text; // IMPORTANT: This is required. Before this assignment to t.text,
                   // token uses start/stop to extract token from source.
                   // This assignment to token property caches the text string locally
                   // in the token itself for future references.
    t.tokenIndex = tokenIndex;
    tokenIndex++; // Increment token index for next token    
    t.line = line;
    t.column = column;
    t.start = charIndex;
    charIndex += text.length;
    t.stop = charIndex-1;
    column += text.length; // Update column for next token
    resultString += text; // Add token text to end of string
    // printState(" After processing ", t);
  }
  
  // Process all tokens, updating state values and token states. 
  tokens.forEach ( function (tok) {
      if (tok.tokenIndex != -1) {
        // This is a regular (noninserted) token
	if (prevRegularTokenStop === undefined) {
          // This is the first regular token on first nonempty line
          charIndex = tok.start;
          // console.log('numSpaces special before=' + numSpaces);
          numSpaces = tok.start; // [2020/06/22, lyn] Fixed bug cause by initial comments
                                 // by adding this line
          // console.log('numSpaces special after=' + numSpaces);
        } else {
          // Maintain space from prev regular token
          // console.log('numSpaces before=' + numSpaces);
          numSpaces = tok.start - (prevRegularTokenStop + 1); // space between tokens
          // console.log('numSpaces after=' + numSpaces);
          charIndex += numSpaces;
          column += numSpaces;
        }

        if (tok.line > line) {
          // First regular token on new line
          // Reset line, column, and charIndex
          line = tok.line;
          column = tok.column;
          if (tok.line === 1) {
            // On first line
            resultString += Utils.spaces(tok.column); // Insert spaces before first token
          } else {
            // For line other than first line, determine where newlines should go. 
            var leadingSpacesThisLine = Utils.spaces(tok.column); 
            var numNewlines = tok.line - prevRegularTokenLine;
            /* 
            console.log('tok.line=' + tok.line 
                        + '; prevRegularTokenLine=' + prevRegularTokenLine
                        + '; numNewlines=' + numNewlines
                        + '; numSpaces=' + numSpaces
                        + '; tok.column=' + tok.column);
            */
            var trailingSpacesPrevLine = Utils.spaces(numSpaces - tok.column - numNewlines); 
            var newWhitespace = trailingSpacesPrevLine + Utils.newlines(numNewlines) + leadingSpacesThisLine; 
            // Invariant: newWhitespace.length == numSpaces
            resultString += newWhitespace
          }

        } else {
          resultString += Utils.spaces(numSpaces); // Add spaces before token. 
        }

        prevRegularTokenStop = tok.stop // remember for next time. 
        prevRegularTokenLine = tok.line // remember for next time. 

        // Process any pending open braces before the regular token
        // (these might be on a new line)
        pendingInsertedOpenBraces.forEach ( processToken );
        pendingInsertedOpenBraces = []; 
 
        // Process the regular token itself.
        processToken(tok);
      } else {
        // This is an inserted token (assumed a one-character brace, for now)
        if (isOpenBrace(tok)) {
          pendingInsertedOpenBraces.push(tok); // save for later processing before next regular token
        } else {
          processToken(tok); // process closed braces immediately (without any new space in front of them).
        }
      }
    });  
  // There shouldn't be any pending open braces at end,
  // but don't leave any tokens unprocessed:
  if (pendingInsertedOpenBraces.length > 0) {
    console.log('***WARNING; unexpected open braces at end of tokens: ' + pendingOpenBraces);
    pendingInsertedOpenBraces.forEach ( processToken );
    pendingInsertedOpenBraces = []; 
  }

  // Verify that start/stop info of mutated tokens matches result string
  tokens.forEach ( function (tok) {
      var textFromString = resultString.substring(tok.start, tok.stop+1);
      if (tok.text !== textFromString) {
        console.log("*** ParserTokenString verification failed for start/stop!");
        console.log("***       token text: '" + tok.text + "'");
        console.log("*** text from string: '" + textFromString + "'");
      } else {
        // console.log("ParserTokenString verification for start/stop suceeds at '" + tok.text + "'"); 
      }
    });

  // Verify that line/column info of mutated tokens matches result string
  lines = ['bogus 0th line'].concat(resultString.split('\n'));
  tokens.forEach ( function (tok) {
      var textFromLines = lines[tok.line].substring(tok.column, tok.column + (tok.stop + 1) - tok.start);
      if (tok.text !== textFromLines) {
        console.log("*** ParserTokenString verification failed for line/column!");
        console.log("***     token text: '" + tok.text + "'");
        console.log("*** text from lines: '" + textFromLines + "'");
      } else {
        // console.log("ParserTokenString verification for line/column suceeds at '" + tok.text + "'"); 
      }
    });

  return resultString; // Return the string matching the mutated tokens
}

exports.ForgivingTokensVisitor = ForgivingTokensVisitor;
