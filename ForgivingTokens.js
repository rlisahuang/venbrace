/**
 * File: ForgivingTokens.js 
 * Author: Lyn Turbak
 * Date: 2020/06/16-18
 * 
 * Generate three lists of Venbrace tokens for an input
 *   1. The tokens from the lexer
 *   2. The unfixed tokens from the forgiving parser. These include tokens marked inserted,
 *        deleted, corrected, and optional. Because of newly inserted tokens, the
 *        tokenIndex, start, stop, line, and column properties may be incorrect
 *   3. The fixed tokens from the forgiving parser. These have correct 
 *         tokenIndex, start, stop, line, and column properties. 
 * 
 * Additionally generates a new input string that's consistent with the information 
 * in the fixed tokens. 
 * 
 * This JavaScript program can be run both (1) in a terminal using node (i.e. node.js) via
 * 
 *   node ParserTokens.js examples/boolexp.ven // examples/boolexp.ven is a sample filename 
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
  document = new Object();
}

var VenbraceForgivingLexer = require('./VenbraceForgivingLexer').VenbraceForgivingLexer;
var VenbraceForgivingParser = require('./VenbraceForgivingParser').VenbraceForgivingParser;
var ForgivingTokensVisitor = require('./ForgivingTokensVisitor').ForgivingTokensVisitor;
var Utils = require('./Utils');

function getAndDisplayTokens() {
  getInput (function (input) {
      var chars = new antlr4.InputStream(input);
      var lexer = new VenbraceForgivingLexer(chars);
      var tokenStream = new antlr4.CommonTokenStream(lexer);
      var lexerTokens = displayLexerTokens(tokenStream); 
      var parser = new VenbraceForgivingParser(tokenStream);
      parser.buildParseTrees = true;
      if (!inBrowser) {
        console.log("\nRunning parser to Build parse tree.");
      }
    
      // Choose one of the following three trees:
      var tree = parser.test_blocks(); // Sequence of any blocks
      // var tree = parser.test_program();  // Single block of any kind
      // var tree = parser.program();  // Top-level decls only 

      var parserTokensVisitor = new ForgivingTokensVisitor();

      // Collect and return list of terminal tokens via visitor. 
      var parserTokens = parserTokensVisitor.visit(tree); 
      var unfixedParserTokens = parserTokensVisitor.unfixedTokens;
      var stringForParserTokens = parserTokensVisitor.stringForTokens; 
      displayUnfixedParserTokens(unfixedParserTokens);
      displayFixedParserTokens(parserTokens); 
      displayStringForFixedParserTokens(stringForParserTokens);
    });
}

function tokenString(tok) {
  // Add marker for optional tokens
  /* 
  var opt = tok.optional;
  var correctedText = tok.corrected;
  var deleted = tok.deleted;
  var inserted = tok.inserted;
  return tok.toString() 
         + (deleted ? '; deleted': '')
         + (inserted ? '; inserted': '')
         + (correctedText ? '; corrected: ' + correctedText : '')
         + (opt === true ? '; optional' : '')
  */
  return tok.toString();
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
  tokens.forEach( tok => (tokensString += tok.toString() + "\n") );
  return tokensString;
}

function displayUnfixedParserTokens(tokens) {
  if (inBrowser) {
    document.getElementById('unfixedParserTokens').innerHTML = tokensToString(tokens)
  } else {
    console.log("\nUnfixed tokens from parser:");
    tokens.forEach( tok => console.log(tok.toString()) );
  }
  return tokens;
}

function displayFixedParserTokens(tokens) {
  if (inBrowser) {
    document.getElementById('fixedParserTokens').innerHTML = tokensToString(tokens)
  } else {
    console.log("\nFixed tokens from parser:");
    tokens.forEach( tok => console.log(tok.toString()) );
  }
  return tokens;
}

function displayStringForFixedParserTokens(str) {
  if (inBrowser) {
    document.getElementById('stringForFixedParserTokens').innerHTML = str;
  } else {
    var dashString = Utils.dashes(60);
    console.log("\nString for fixed up tokens from parser:");
    console.log(dashString);
    console.log(str);
    console.log(dashString);
  }
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







