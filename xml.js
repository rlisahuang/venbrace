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
        //console.log("the length of the sexpList is "+sexpList.length);
        var sexpString = sexpVisitor.sexpString(sexpList);
        //console.log("the sexp String is "+ sexpString);
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
    //console.log("proessed sexp String is " + sexpVisitor.sexpString(sexpListProcessed))
    
    function xmlNode(parentNode, ltr){
      if(['string', 'number'].includes(typeof ltr)){ // there is only one element in the array, number is when the value is negative
        if (parseInt(ltr) || ltr < 0){ // if the ele is a number, pos or neg
          var num = parseInt(ltr) || ltr ;
          var node = builder.begin().ele('block',{'type': 'math_number'})
                                    .ele('field', {'name': 'NUM'}, num);  
          // Zhining: another way to create an element
          // var element = {
          //   'block' : {'@type':'math_number'},  --> <block type="math_number">
          //   'field' : {#text': num, '@name':'NUM'} --> <field name="NUM"> num </field>
          // }
          parentNode.importDocument(node);
        }
      }else{
        var blockType;
        var childrenList;
        var blockNode;
        if (ltr[0] === 'unary_operation'){
          blockType = unary_operationMap.get(ltr[1]); // example: (unary_operation absolute (.....))
          childrenList = ltr.slice(2);
          var opName = opNameMap.get(blockType);
          blockNode = builder.begin().ele('block').att('type', blockType)
                                          .ele('field', {'name': 'OP'}, opName).up();
        }else{ // math ops, math_on_list, logic_operation
          blockType = operatorMap.get(ltr[0]);
          var opName = opNameMap.get(ltr[0]);
          childrenList = ltr.slice(1); // remove the first keyword from ltr by making a copy of ltr starting at index 1

          if (blockType === 'math_add' || blockType === 'math_multiply'){ // only add and multiply has mutation
            blockNode = builder.begin().ele('block').att('type', blockType)
                                        .ele('mutation',{'items': ltr.length-1}, ' ').up();
          }else if (blockType === 'math_on_list' || blockType === 'logic_operation'){
            blockNode = builder.begin().ele('block').att('type', blockType)
                                        .ele('mutation',{'items': ltr.length-1}, ' ').up()
                                        .ele('field', {'name': 'OP'}, opName).up();
          }else if (blockType === 'math_compare'){
            blockNode = builder.begin().ele('block').att('type', blockType)
                                        .ele('field', {'name': 'OP'}, opName).up();
          }else{
            blockNode = builder.begin().ele('block').att('type', blockType);
          }

        }

        childrenList.map(function(child, index){ // every time a blockNode is created, create valueNodes for each child
          var valueType;
          if(childrenList.length === 1){
            valueType = 'NUM';
          }else if(['math_division','math_subtract','logic_operation','math_compare'].includes(blockType)){
            valueType = capLetters[index];
          } 
          else{
            valueType = 'NUM'+index.toString();
          }
          
          var valueNode = builder.begin().ele('value',{'name': valueType});
          xmlNode(valueNode, child);
          blockNode.importDocument(valueNode);
          // console.log("----------------------blockNode and each Child print out----------------------");
          // console.log(blockNode.end({pretty:true}));
        });
        parentNode.importDocument(blockNode);
      }
    }

    xmlNode(xml,sexpListProcessed)
    return xml.end({ pretty: true});
  }
  
  var operatorMap = new Map();
  operatorMap.set('+','math_add');
  operatorMap.set('-','math_subtract');
  operatorMap.set('*', 'math_multiply');
  operatorMap.set('/', 'math_division');
  operatorMap.set('max','math_on_list');
  operatorMap.set('min','math_on_list');
  operatorMap.set('and','logic_operation');
  operatorMap.set('or','logic_operation');
  operatorMap.set('=','math_compare');
  operatorMap.set('<','math_compare');
  operatorMap.set('>','math_compare');

  var unary_operationMap = new Map();
  unary_operationMap.set('absolute', 'math_abs');

  var opNameMap = new Map();
  opNameMap.set('math_abs', 'ABS');
  opNameMap.set('and', 'AND');
  opNameMap.set('or', 'OR');
  opNameMap.set('=', 'EQ');
  opNameMap.set('<', 'LT');
  opNameMap.set('>', 'GT');
  
  var capLetters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
 
  if (!inBrowser) {
    getAndDisplayXml(); // Perform getAndDisplayXml() in node.js 
  } // Otherwise, it will be performed by button click in HTML file 