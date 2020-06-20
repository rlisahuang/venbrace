/**
  File: SexpVisitor.js 
  Author: Lyn Turbak
  
  History: 
  * [2020/06/18-19, lyn] Created
  
  Return a Lisp-style s-expressionn string representation of a VenbraceForgiving parse tree. 

  See Sexp.js for an example.
  
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
  antlr4 = require('antlr4');
}

// var CommonToken = antlr4.CommonToken;
var VenbraceForgivingVisitor = require('./VenbraceForgivingVisitor').VenbraceForgivingVisitor;
var Utils = require('./Utils');

// ---------- Set up inheritance ----------
function SexpVisitor() {
  VenbraceForgivingVisitor.call(this);
}

SexpVisitor.prototype = Object.create(VenbraceForgivingVisitor.prototype);
SexpVisitor.prototype.constructor = SexpVisitor;
// -----------------------------------------

SexpVisitor.prototype.visitTest_blocks = function(ctx) {
  var listTree = this.visitChildren(ctx);
  return sexpString(listTree);
}

SexpVisitor.prototype.visitTest_program = function(ctx) {
  var listTree = this.visitChildren(ctx);
  return sexpString(listTree);
}

SexpVisitor.prototype.visitProgram = function(ctx) {
  var listTree = this.visitChildren(ctx);
  return sexpString(listTree);
}

SexpVisitor.prototype.visitChildren = function(ctx) {
  if (ctx.children) {
    // ctx.children is a list (i.e., JavaScript array)
    var sublist = ctx.children.map ( child => child.accept(this) ).filter( elt => ! tokensToOmit.includes(elt) );
    var nameWithContext = Utils.className(ctx);
    var nameWithoutContext = nameWithContext.split('Context')[0].toLowerCase(); 
    var listKeyword = listKeywordMap[nameWithoutContext];
    if (listKeyword) {
      sublist.unshift(listKeyword);
    } else if (sublist.length === 1) {
      return sublist[0]; // Simple wrapper; just keep contents
    } else {
      sublist.unshift(nameWithoutContext);
    }
    if ((sublist[0] === 'seq') && (sublist.length === 2)) {
      return sublist[1]; // Simplify seq with one element
    } else if (sublist[0] === 'mod') {
      var newSublist = sublist.filter ( elt => elt !== '/' );
      return newSublist;
    } else if (sublist[0] === 'if_stat') {
      if (sublist.length <= 4) { // if/then or if/then/else
        sublist.shift();
        sublist.unshift('if'); // replace if_stat by if
        return sublist;
      } else {
        var lastIndex= sublist.length - 1;
        var tests = sublist.filter ( (elt, index) => (index % 2 == 1 && index < lastIndex) );
        var thens = sublist.filter ( (elt, index) => (index % 2 == 0 && index > 0) );
        var lastElse = sublist.length % 2 == 1 ? undefined : sublist[lastIndex]; 
        var newSublist = ['cond', Utils.zip(tests, thens)]
        if (lastElse) {
          newSublist.push(['else', lastElse]);
        }
        return newSublist;
      }
    } else {
      var operators = operatorMap[sublist[0]]; 
      if (operators) {
        var op = operators.find( s => (sublist.includes(s) ));
        newSublist = sublist.filter ( elt => elt !== op );
        newSublist[0] = op;
        return newSublist;
      } else {
      return sublist;
      }
    }
  } else {
    return null;
  }
}

var braces = ['[', ']', '{', '}' , '(', ')'];
var tokensToOmit = 
  braces.concat(
   ['to', 'do', 'result', 'when',
    'if', 'then', 'else', 'else if',
    'for each', 'test', 'from', 'by', 'in', 'call', 'set',
    'not', 'modulo', 'of',
    'length', 'join', 'reverse', 'split at spaces'
    ]);

var listKeywordMap = {
  'test_blocks': 'blocks', 
  'test_program': 'block', 
  'program': 'decls', 
  'suite': 'seq', 
  'event_handler': 'when', 
  'for_each_from_to': 'forEach',
  'immutable_neg_num_special_case': '-', 
  'setter': 'set',
  'not_expr': 'not',
  'procedure_do': 'procNoReturn', 
  'procedure_result': 'procReturn', 
  'str_length': 'length', 
  'str_join': 'join', 
  'str_reverse': 'reverse', 
  'str_split_at_spaces': 'split_at_spaces', 
}

var operatorMap = {
  'mutable_op': ['+', '*'], 
  'immutable_regular_case': ['-', '/', '^'],
  'compare_math_expr': ['<', '<=', '=', '!=', '>=', '>'],
  'logic_expr': ['and', 'or'],
  'min_max' : ['min', 'max'],
  'unary_op' : ['square root', 'absolute', 'neg', 'log', 'e^', 'round', 'ceiling', 'floor'],
  'trig': ['sin', 'cos', 'tan', 'asin', 'acos', 'atan']
}

// Not used yet 
var indentAfterKeywordMap = {
  'topBlocks': 0, 
  'when': 1, 
  'initLocal': 1, 
  'initGlobal': 1, 
  'forEach': 4
}

SexpVisitor.prototype.visitGlobal_decl = function(ctx) {
  return ['initGlobal', toToken(ctx.ID()).text, this.visit(ctx.suite())];
}

SexpVisitor.prototype.visitLocal_var_decl_stat = function(ctx) {
  var bindings = [];
  var i = 0;
  var id = ctx.ID(i);
  while (id) {
    bindings.push([toToken(id).text, this.visit(ctx.expr_block(i))]);
    i++; 
    var id = ctx.ID(i);
  }
  return ['initLocal', bindings, this.visit(ctx.suite())];
}

SexpVisitor.prototype.visitTerminal = function(ctx) {
  // Default handler for terminal tokens not handled by explicit visitor
  var token = ctx.getSymbol(); // Returns the token at the terminal 
  var text = token.text;
  // console.log('visitTerminal ' + text);
  var parentNameWithContext = ctx.getParent().constructor.name;
  // if (isBrace(text)) {
  //   console.log('Brace token ' + text + ' with parent ' + parentNameWithContext);
  // 
  // if (isOptional(ctx, token)) {
  //   token['optional'] = true;
  // }
  return text; 
};

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
  var  className = Utils.className(ctxOrToken);
  // console.log('toToken className: ' + className);
  if (className === "LbraceContext" || className === "RbraceContext") {
    return ctxOrToken.start;
  } else if (className === "TerminalNodeImpl") {
    return ctxOrToken.getSymbol();
  } else if (className === "CommonToken") {
    return ctxOrToken;
  } else {
    throw "can't convert object to a token: " + className;
  }
}

function sexpString(listTree) {

  function sexpStrings(ltr, width) {
    if ((typeof ltr) === 'string') {
      return [ltr];
    } else { // must be array
      if (ltr.length == 0) {
        // list is empty
        return ['()'];
      } else {
        // list has at least one element
        // might begin with keyword or be list of name/sexp bindings
        var keyword = ltr[0];
        if ((typeof keyword) !== 'string') {
          keyword = undefined;
        }
        var prefix = '(' + (keyword ? keyword + ' ' : '');
        var indent = prefix.length;
        var subwidth = width - indent; 
        var subStringss = ltr.map( lt => sexpStrings(lt, subwidth) );
        var sexp = oneLineSexp(subStringss);
        if (sexp && sexp.length <= width) { 
            return [sexp];
        } 
        var outStrings;
        if (keyword) {
          if (subStringss.length === 1) {
            return [prefix + ')'];
          } else {
            subStringss[0].shift(); // remove keyword, leaving stringss[0] empty
            outStrings = [prefix + subStringss[1].shift()]; // remove first string from stringss[1] 
                                                         // and add it on same line with keyword
          }
        } else {
          outStrings = [prefix + subStringss[0].shift()]; // remove first string from stringss[0] 
        }
        subStringss.forEach(
            function (strings) {
                strings.forEach( function(str) {
                    outStrings.push(Utils.spaces(indent) + str)
                      });
              });
        var lastIndex = outStrings.length - 1;
        outStrings[lastIndex] += ')'; // Close paren to match open paren in index
        return outStrings;
      }
    }
  }

  function oneLineSexp(eltsStringss) {
    // If each list of strings has length 1, concatenate the singletons 
    // in each list wrapped in parens. Else return undefined
    if (eltsStringss.every( eltStrings => eltStrings.length === 1)) {
      return '(' + eltsStringss.map( eltStrings => eltStrings[0] ).join(' ') + ')';
    } else {
      return undefined;
    }
  }

  // Return a single string with newlines between lines
  return sexpStrings(listTree, 100).join('\n');
   
}

exports.SexpVisitor = SexpVisitor;
