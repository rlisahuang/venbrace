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
  var builder = require('xmlbuilder');
  var sexpVisitor = new SexpVisitor();
  var sexpList;
  
  function getAndDisplayXml() {
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
        sexpList = sexpVisitor.visit(tree);
        console.log("the length of the sexpList is "+sexpList.length);
        var sexpString = sexpVisitor.sexpString(sexpList);
        console.log("the sexp String is "+ sexpString);
        displayXml(sexpList);
      });
  }
  
  function displayXml(sexpTree) {
    var xmlString = sexp2XML(sexpTree);
    if (inBrowser) {
      document.getElementById('xml').innerHTML = xmlString;
    } else {
      console.log('\nxml tree from parser:');
      console.log(xmlString);
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

  function sexp2XML(sexpList){
    var xml = builder.begin().ele('xml',{'xmlns':'http://www.w3.org/1999/xhtm'});
    var sexpListProcessed = sexpList[1]; // remove (block ())
    console.log("processed sexp String is " + sexpVisitor.sexpString(sexpListProcessed))
    
    function xmlNode(parentNode, ltr, index){
      if((typeof ltr) === 'string'){ // there is only one element in the array
        if (parseInt(ltr)){ // if the ele is a number
          var num = parseInt(ltr);
          var node = builder.begin().ele('value',{'name': 'NUM'+index.toString()})
                                    .ele('block',{'type': 'math_number'})
                                    .ele('field', {'name': 'NUM'}, num);          
          parentNode.importDocument(node);
          // console.log("---------------the current node is---------------");
          // console.log(parentNode.end({pretty:true}));
        }
      }else{
        var blockType = operatorMap.get(ltr[0]);
        var block = builder.begin().ele('block').att('type', blockType)
                                    .ele('mutation').att('items', ltr.length-1);
        for (let i = 1; i<ltr.length; i++){
          xmlNode(block,ltr[i],i-1);
        }
        parentNode.importDocument(block);
      }
    }

    xmlNode(xml,sexpListProcessed,0)
    return xml.end({ pretty: true});
  }
  
  var operatorMap = new Map();
  operatorMap.set('+','math_add');
  operatorMap.set('-','math_subtract');
  operatorMap.set('*', 'math_multiply');
  operatorMap.set('/', 'math_divide');

  if (!inBrowser) {
    getAndDisplayXml(); // Perform getAndDisplayXml() in node.js 
  } // Otherwise, it will be performed by button click in HTML file 