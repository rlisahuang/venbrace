/**
  File: ListTreeVisitor.js 
  Author: Lyn Turbak
  
  History: 
  * [2020/06/22, lyn] Created

  Return a list-based represented of a parse tree (including token objects, 
  not just their strings). This is helpful in the forgiving parser for
  understanding the structure of an expression, guiding the insertion,
  deletion, and corection of braces for expressions (which Lyn can't
  figure out how to do directly in SexpVisitor, because not enough tree info).

  Because its purpose is for finding the essential structure of exprs
  and not stats and decls, only expr visitors are stressed here. 
  
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

// var CommonToken = antlr4.CommonToken;
var VenbraceForgivingVisitor = require('./VenbraceForgivingVisitor').VenbraceForgivingVisitor;
var Utils = require('./Utils');

// ---------- Set up inheritance ----------
function ListTreeVisitor() {
  VenbraceForgivingVisitor.call(this);
}

ListTreeVisitor.prototype = Object.create(VenbraceForgivingVisitor.prototype);
ListTreeVisitor.prototype.constructor = ListTreeVisitor;
// -----------------------------------------

var specialNodeTypes = 
  ['decl_block', 'stat_block', 'suite', 
   // 'expr_block': Do *not* track expr_block; it gets in the way
   // Want to see its child node type directly
   'parensExpr', 'curliesExpr', 'squaresExpr', // track explicit paren nodes
   'atom', 'getterAbbrev', // Track abbrevation nodes 
   'min_max' // because can have token and zero operands
   ]

ListTreeVisitor.prototype.visitChildren = function(ctx) {
  var nameWithContext = Utils.className(ctx);
  var nameWithoutContext = Utils.uncapitalizeFirstLetter(nameWithContext.split('Context')[0]);
  if (ctx.children) {
    // ctx.children is a list (i.e., JavaScript array)
    var sublist = ctx.children.map ( child => child.accept(this) );
    // console.log('sublist for ' + nameWithoutContext);
    // console.log(sublist);
    if ((sublist.length === 1) && 
        (! specialNodeTypes.includes(nameWithoutContext))) {
      //console.log('returning sublist[0] for ' + nameWithoutContext);      
      // console.log(sublist[0]);
      return sublist[0]; // Simple wrapper; just keep contents
                         // (except for "important" node types like decl_block,
                         //  stat_block, suite, and expr_block)
    } else {
      sublist.unshift(nameWithoutContext);
      // console.log('returning sublist for ' + nameWithoutContext);      
      // console.log(sublist);
      return sublist;
    }
    /* // No need for this special case; handled by more general case above:
     if (nameWithoutContext.endsWith('bogus')) {
       if (sublist.length == 1) {
        return sublist[0]; // Prune bogus tree nodes 
      } else {
        throw 'ListTreeVisitor: expected sublist of length 1 but found length ' + sublist.      }
    */
  } else {
    console.log('Returning null for ctx ' + nameWithoutContext);
    return null;
  }
}

ListTreeVisitor.prototype.visitTerminal = function(ctx) {
  // Default handler for terminal tokens not handled by explicit visitor
  var token = ctx.getSymbol(); // Returns the token at the terminal 
  return token; // Return actual token, not just text of token. 
};

exports.ListTreeVisitor = ListTreeVisitor;
