/**
 File: Sexp.js 
 Author: Lyn Turbak
 
 History:
 * [2020/06/18-19, lyn] Created

 Notes: Generate a Lisp-style s-expression tree for a VenbraceForgiving input

   This JavaScript program can be run both (1) in a terminal using node (i.e. node.js) via

      node ParserTokens.js examples/boolexp.ven // examples/boolexp.ven is a sample filename 

   and (2) in a web browser (via Sexp.html).

   For example, given the input file examples/round1.ven, whose contents is:

(10^3)

((4*9)/(35-29))

(45*(absolute (18-31))*6)

(max (6*4) (57) (()/3))

((not Button1.Enabled) or ((length "cat") >= num))

{set Label1.Text to (3*(TextBox1.Text + score))}

{if (num > 3) 
 then {set Button1.Text to "Greater"} 
      {set num to (num-1)}
 else if (num <3) 
 then {set Button1.Text to "Less"}
 else {set Button1.Text to "Equal"}}

[when Switch1.Changed
  do {if ((length TextBox1.Text) < 0)
      then {if Switch1.On
      then {set Switch1.On to false}}
      }
  ]

[to SizeUpButton scale do
  {set Button1.Height to (Button1.Height * scale)}
  {set Button1.Width to (Button1.Width * scale)}]

[to ConcatString s1 s2
   result (join s1 s2)]

  the printed sexp output is

(blocks (^ 10 3)
        (/ (* 4 9) (- 35 -29))
        (* 45 (absolute (- 18 -31)) 6)
        (max (* 6 4) 57 (/ (expr_block) 3))
        (or (not Button1.Enabled) (>= (length "cat") num))
        (set Label1.Text (* 3 (+ TextBox1.Text score)))
        (cond (((> num 3) (seq (set Button1.Text "Greater") (set num (- num -1))))
              ((< num 3) (set Button1.Text "Less")))
              (else (set Button1.Text "Equal")))
        (when Switch1.Changed (if (< (length TextBox1.Text) 0) (if Switch1.On (set Switch1.On false))))
        (procNoReturn SizeUpButton
                      scale
                      (seq (set Button1.Height (* Button1.Height scale))
                           (set Button1.Width (* Button1.Width scale))))
        (procReturn ConcatString s1 s2 (join s1 s2)))
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
  // antlr4 = require('antlr4');
  antlr4 = require('./antlr4/index.js');
  document = new Object();
}

var VenbraceForgivingLexer = require('./VenbraceForgivingLexer').VenbraceForgivingLexer;
var VenbraceForgivingParser = require('./VenbraceForgivingParser').VenbraceForgivingParser;
var SexpVisitor = require('./SexpVisitor').SexpVisitor;
var Utils = require('./Utils');
var sexpVisitor = new SexpVisitor();

function getAndDisplaySexp() {
  getInput (function (input) {
      var chars = new antlr4.InputStream(input);
      var lexer = new VenbraceForgivingLexer(chars);
      var tokenStream = new antlr4.CommonTokenStream(lexer);
      // var lexerTokens = displayLexerTokens(tokenStream); 
      var parser = new VenbraceForgivingParser(tokenStream);
      parser.buildParseTrees = true;
      if (!inBrowser) {
        console.log("\nRunning parser to Build parse tree.");
      }
    

      var tree = Utils.displayTimeTaken(
        'Time taken by parser: ', 
        parser, 

        // Choose one of the following four trees:
        // parser.test_top_blocks // Sequence of any blocks, each introduced by *required*
                               // `decl`, `stat`, or `expr` tag 
                               // (to avoid ambiguities across top-level blocks)
        parser.test_blocks // Sequence of any blocks, each introduced by *optional*
                           // `decl`, `stat`, or `expr` tag 
                           // (to avoid ambiguities across top-level blocks)
        // parser.test_program // Single block of any kind
        // parser.program // Top-level decls only 
      );

      // Collect and return list of terminal tokens via visitor. 
      var listTree = sexpVisitor.visit(tree);
      displaySexp(listTree);
    });
}

function displaySexp(listTree) {
  // [2021/01/29, lyn] moved the call of sexpString from .visitTop 
  // in SexpVisitor.js to here, in order to make sexpVisitor.visit
  // more modular (and more useful) by returning a listTree as opposed
  // to an sexpString. 
  var sexpString = sexpVisitor.sexpString(listTree);
  if (inBrowser) {
    document.getElementById('sexp').innerHTML = sexpString;
  } else {
    console.log('\nS-expression tree from parser:');
    console.log(sexpString);
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
  getAndDisplaySexp(); // Perform getAndDisplaySexp() in node.js 
} // Otherwise, it will be performed by button click in HTML file 







