/**
 * File: ParserTokensVisitor.js 
 * Author: Lyn Turbak
 * Date: 2020/06/12-15
 * 
 * Generate an array of tokens from a VenbraceNoCode parse tree. 
 */

var VenbraceNoCodeVisitor = require('./VenbraceNoCodeVisitor').VenbraceNoCodeVisitor;

// ---------- Set up inheritance ----------
function ParserTokensVisitor() {
  VenbraceNoCodeVisitor.call(this);
}

ParserTokensVisitor.prototype = Object.create(VenbraceNoCodeVisitor.prototype);
ParserTokensVisitor.prototype.constructor = ParserTokensVisitor;
// -----------------------------------------

// Visit a parse tree produced by LabeledExprParser#prog.
ParserTokensVisitor.prototype.visitTest_program = function(ctx) {
  this.tokens = [] // Initialize token list that will be mutated 
                   // by each call to visitTerminal in tree walk by visitor. 
                   // After the walk, grab the tokens field from the listener. 
  this.visitChildren(ctx); // Walk the tree, ignoring the visitor return value. 
  return this.tokens; // Return the mutated tokens list at the end of the walk. 
}

// Special case for converting expr_block NEG_NUM to binary subtraction in cases like (a-17)
ParserTokensVisitor.prototype.visitImmutable_neg_num_special_case = function (ctx) {
  var negNumToken = ctx.NEG_NUM().getSymbol();
  var newMinusToken = negNumToken.clone(); 
  newMinusToken.type = 63; // hard-coded MINUS token type
  newMinusToken.stop = newMinusToken.start; // MINUS token is one character long
  newMinusToken.text = '-';

  negNumToken.text = negNumToken.text.substring(1); // remove - sign
  negNumToken.type = 121; // NUMBER = 121, NEG_NUM = 122
  negNumToken.start = negNumToken.start + 1; // exclude - sign
  negNumToken.column = negNumToken.column + 1; // exclude - sign
  
  this.tokens.push(ctx.LPAREN().getSymbol()); 
  this.visit(ctx.expr_block()); // recursively process left operand expression
  this.tokens.push(newMinusToken);
  this.tokens.push(negNumToken);
  this.tokens.push(ctx.RPAREN().getSymbol()); 
}

ParserTokensVisitor.prototype.visitTerminal = function(ctx) {
  var terminalToken = ctx.getSymbol(); // Returns the token at the terminal 
  if (isOptional(ctx, terminalToken)) {
    terminalToken['optional'] = true;
  }
  this.tokens.push(terminalToken); // Add this token to end of visitor's tokens list
};

function isOptional (ctx, token) {
  var parentNameWithContext = ctx.getParent().constructor.name;
  // Turn names like 'Decl_blockContext' into 'decl_block'
  var parentNameWithoutContext = parentNameWithContext.split('Context')[0].toLowerCase(); 
  optionalTexts = optionalTokens[parentNameWithoutContext]; 
  if (optionalTexts === undefined) {
    // not in dictionary
    return false;
  } else {
    return optionalTexts.includes(token.text);
  }
}

var optionalTokens = { // Dictionary for optional tokens
  'global_declContext': ['to'], // What about params? 
  'event_handler': ['do'], 
  // Note for proc_decl: are 'do' and 'result' necessary for distinguishing noreturn and return cases?
  'procedure_do': ['do'], 
  'procedure_result': ['result'], 
  'for_each_from_to': ['from', 'to', 'by', 'do'], 
  'while': ['test', 'do'], 
  // Does *not* handle proc/method call labels as optional
  'setter': ['to'], 
  'local_var_decl_stat': ['local', 'to', 'in'], 
  'getter': ['(', 'get', ')'], 
  'local_var_decl_expr': ['local', 'to', 'in'], 
  'atom': ['(', ')']
  // Does *not* handle expression operation labels as optional
};

exports.ParserTokensVisitor = ParserTokensVisitor;





