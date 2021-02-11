if ((typeof inBrowser) === 'undefined') {
    inBrowser = false;
}
  
var antlr4;
  
if (inBrowser) {
    antlr4 = require('./antlr4/index.js');
} else {
    antlr4 = require('./antlr4/index.js');
}
  
var VenbraceForgivingVisitor = require('./VenbraceForgivingVisitor').VenbraceForgivingVisitor;
var Utils = require('./Utils');
var builder = require('xmlbuilder');
  
  // ---------- Set up inheritance ----------
function XmlVisitor() { //constructor
    VenbraceForgivingVisitor.call(this);
}
  
XmlVisitor.prototype = Object.create(VenbraceForgivingVisitor.prototype);
XmlVisitor.prototype.constructor = XmlVisitor;
 
XmlVisitor.prototype.visitTop = function(ctx) {
    var listTree = this.visitChildren(ctx);
    return xmlString(listTree);
  }
  
XmlVisitor.prototype.visitTest_decl_blocks = function(ctx) {
    return this.visitTop(ctx);
  }
  
XmlVisitor.prototype.visitTest_top_blocks = function(ctx) {
    return this.visitTop(ctx);
  }
  
XmlVisitor.prototype.visitTest_blocks = function(ctx) {
    return this.visitTop(ctx);
  }
  
XmlVisitor.prototype.visitTest_program = function(ctx) {
    return this.visitTop(ctx);
  }
  
XmlVisitor.prototype.visitProgram = function(ctx) {
    return this.visitTop(ctx);
  }

XmlVisitor.prototype.visitChildren = function(ctx){
    var nameWithContext = Utils.className(ctx);
    console.log(nameWithContext);
    var nameWithoutContext = nameWithContext.split('Context')[0].toLowerCase(); 
  if (ctx.children) {
    // ctx.children is a list (i.e., JavaScript array)
    var sublist = ctx.children.map ( child => child.accept(this) ).filter( elt => ! tokensToOmit.includes(elt) );
    var listKeyword = listKeywordMap[nameWithoutContext];
    if (listKeyword) {
      sublist.unshift(listKeyword);
    } else if (sublist.length === 1) {
      return sublist[0]; // Simple wrapper; just keep contents
    } else {
      // console.log('Unshifting ' + nameWithoutContext + ' for length ' + sublist.length);
      sublist.unshift(nameWithoutContext);
    }
    if ((sublist[0] === 'seq') && (sublist.length === 2)) {
      return sublist[1]; // Simplify seq with one element
    } else if (sublist[0] === 'mod') {
      var newSublist = sublist.filter ( elt => elt !== '/' );
      return newSublist;
    } else if (sublist[0] === 'subnegnumexpr') {
      sublist[2] = Math.abs(sublist[2]); // position of negative number
      sublist[0] = '-'; 
      return sublist;
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
    console.log('Returning null for ctx ' + nameWithoutContext);
    return null;
  }
};

function xmlString(xml){
    return xml.end({pretty:true});
}

exports.XmlVisitor = XmlVisitor;