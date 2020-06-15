/**
 * File: ParserTokens.js 
 * Author: Lyn Turbak
 * Date: 2020/06/12-14
 * 
 * Generate two lists of Venbrae tokens for an input
 *   1. The tokens from the lexer
 *   2. The tokens from a visitor over the parse tree 
 *      (which can mark optional and missing tokens).
 * 
 * This JavaScript program can be run both (1) in a terminal using node (i.e. node.js) via
 * 
 *   node ParserTokens.js boolexp.ven // boolexp.ven is a sample filename 
 * 
 * and (2) in a web browser (via ParserTokens.html).
 */

// inBrowser is defined in .html file. 
// If it's defined, then we're in the browser version.
// Otherwise, we're in the terminal version = node.js version. 
if ((typeof inBrowser) === 'undefined') {
  inBrowser = false;
}

var antlr4;
var fs; // JavaScript file system for node.js

if (inBrowser) {
  console.log("Running in web browser");
  antlr4 = require('./antlr4/index.js');
} else {
  console.log("Running in node.js");
  fs = require('fs');
  antlr4 = require('antlr4');
}

var VenbraceNoCodeLexer = require('./VenbraceNoCodeLexer').VenbraceNoCodeLexer;
var VenbraceNoCodeParser = require('./VenbraceNoCodeParser').VenbraceNoCodeParser;
var ParserTokensVisitor = require('./ParserTokensVisitor').ParserTokensVisitor;

function getAndDisplayTokens() {
  getInput (function (input) {
      var chars = new antlr4.InputStream(input);
      var lexer = new VenbraceNoCodeLexer(chars);
      var tokenStream = new antlr4.CommonTokenStream(lexer);
      var lexerTokens = displayLexerTokens(tokenStream); 
      var parser = new VenbraceNoCodeParser(tokenStream);
      parser.buildParseTrees = true;
      if (!inBrowser) {
        console.log("\nRunning parser to Build parse tree.");
      }
      var tree = parser.test_program();    
      var parserTokensVisitor = new ParserTokensVisitor();
      // Collect and return list of terminal tokens via visitor. 
      var tokens = parserTokensVisitor.visit(tree); 
      displayParserTokens(tokens);
      // For debugging only
      // var parserCtxTokenPairs = parserTokensVisitor.visit(tree); 
      // displayParserCtxTokenPairs(parserCtxTokenPairs);
    });
}

function tokenString(tok) {
  // Add marker for optional tokens
  var opt = tok['optional'];
  return tok.toString() + (opt === true ? '; optional' : '')
}

function ctxTokenPairToString(ctxTokenPair) {
  var ctx = ctxTokenPair[0];
  var token = ctxTokenPair[1];
  return tokenString(token) 
    + '; class=' + ctx.constructor.name
    + '; parent=' + ctx.getParent().constructor.name;
}

function displayLexerTokens(tokenStream) {
  tokenStream.fill();
  var tokens = tokenStream.tokens.filter(function (t) {return t.type !== antlr4.Token.EOF;})
  if (inBrowser) {
    document.getElementById('lexerTokens').innerHTML = tokensToString(tokens);
  } else {
    console.log('\nTokens from lexer:');
    tokens.forEach(tok => console.log(tok.toString()));
  }
  return tokens;
}

function tokensToString(tokens) {
  tokensString = ''; 
  tokens.forEach( tok => (tokensString += tokenString(tok) + "\n") );
  return tokensString;
}

// For debugging only 
function ctxTokenPairsToString(ctxTokenPairs) {
  pairsString = ''; 
  ctxTokenPairs.forEach( ctxTokenPair => (pairsString += ctxTokenPairToString(ctxTokenPair) + "\n") );
  return pairsString;
}

function displayParserTokens(tokens) {
  if (inBrowser) {
    document.getElementById('parserTokens').innerHTML = tokensToString(tokens)
  } else {
    console.log("\nTokens from parser:");
    tokens.forEach( tok => console.log(tokenString(tok)) );
  }
  return tokens;
}

// For debugging only 
function displayParserCtxTokenPairs(ctxTokenPairs) {
  if (inBrowser) {
    document.getElementById('parserTokens').innerHTML = ctxTokenPairsToString(ctxTokenPairs)
  } else {
    console.log("\nTokens from parser:");
    ctxTokenPairs.forEach( ctxTokenPair => console.log(ctxTokenPairToString(ctxTokenPair)));
  }
  return ctxTokenPairs;
}

function getInput(callback) {
  if (inBrowser) {
    callback(document.getElementById("input").value); 
  } else {
    if (process.argv.length <= 2) {
      console.log('Filename not provided as argument to program');
      process.exit(1);
    } else {
      var argFileName = process.argv[2];
      readFileAsString(argFileName, callback); 
    }
  }
}

function readFileAsString (fileName, callback) {
  console.log('Reading file ' + fileName);
  fs.readFile(fileName, function(err, data) { 
      if (err) {
        if (err.code === 'ENOENT') {
          console.error(fileName + ' does not exist!');
          return;
        } else {
          throw err;
        }
      }
      // data is a buffer containing file content
      callback(data.toString('utf8'));
    });
}

if (!inBrowser) {
  getAndDisplayTokens(); // Perform getAndDisplayTokens() in node.js 
} // Otherwise, parse() will be performed by button click in HTML file 







