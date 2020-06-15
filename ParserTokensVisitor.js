/**
 * File: ParserTokensVisitor.js 
 * Author: Lyn Turbak
 * Date: 2020/06/12-14
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
  console.log('isOptional: parent=' + parentNameWithoutContext);
  console.log('isOptional token=' + token.text);
  // console.log('isOptional token:');
  // console.log(token);
  optionalTexts = optionalTokens[parentNameWithoutContext]; 
  if (optionalTexts === undefined) {
    // not in dictionary
    console.log('isOptional context undefined; returns false');
    return false;
  } else {
    console.log('isOptional optionalTexts =' + optionalTexts);
    console.log('isOptional returns ' + optionalTexts.includes(token.text));
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





