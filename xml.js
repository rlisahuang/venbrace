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
    xmlNode(xml,sexpListProcessed)
    return xml.end({ pretty: true});
  }
  
  function xmlNode(parentNode, ltr){ // moved outside of sexp2XML --> needs this function to be global
    if(['string', 'number'].includes(typeof ltr)){ // leaf case
      if (isFinite(ltr)|| ltr < 0){ // if the ele is a number, pos or neg
        var num;
        if(Number.isInteger(ltr)){
          num = parseInt(ltr) || ltr ;
        }else{
          num = parseFloat(ltr) || ltr;
        } 
        var node = builder.begin().ele('block',{'type': 'math_number'})
                                  .ele('field', {'name': 'NUM'}, num);  
        parentNode.importDocument(node);
      }else{ // if it's a String
        var node;
        if(ltr === 'true' || ltr === 'false'){
          node = builder.begin().ele('block',{'type': 'logic_boolean'})
                                .ele('field',{'name': 'TEXT'}, ltr.toUpperCase());
        }else{
          node = builder.begin().ele('block',{'type': 'text'})
          .ele('field', {'name': 'TEXT'}, ltr);  
        }
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
        blockType = mathOpMap.get(ltr[0]);
        if(blockType === undefined){
          blockType = textOpMap.get(ltr[0]);
        }
        console.log("----------------------blockNodeType prints out----------------------");
        console.log(blockType);

        var opName = opNameMap.get(ltr[0]);
        childrenList = ltr.slice(1); // remove the first keyword from ltr by making a copy of ltr starting at index 1

        if (['math_add','math_multiply','text_join'].includes(blockType)){ // only add and multiply has mutation
          blockNode = builder.begin().ele('block').att('type', blockType)
                                      .ele('mutation',{'items': ltr.length-1}, ' ').up();
        }else if (blockType === 'math_on_list' || blockType === 'logic_operation'){
          blockNode = builder.begin().ele('block').att('type', blockType)
                                      .ele('mutation',{'items': ltr.length-1}, ' ').up()
                                      .ele('field', {'name': 'OP'}, opName).up();
        }else if (['math_compare', 'math_divide', 'math_trig', 'logic_compare'].includes(blockType)){
          blockNode = builder.begin().ele('block').att('type', blockType)
                                      .ele('field', {'name': 'OP'}, opName).up();
        }else{
          blockNode = builder.begin().ele('block').att('type', blockType);
        }

      }

      childrenList.map(function(child, index){ // every time a blockNode is created, create valueNodes for each child
        var valueType;
        if(blockType === 'text_split_at_spaces'){
          valueType = 'TEXT';
        }else if(blockType === 'controls_choose'){// an array looks like [[evaluate_if], [then_return], [else_return]]
          if(index === 0){// [evaluate_if]
            valueType = 'TEST';
          }else if(index === 1){ // [then_return]
            valueType = 'THENRETURN';
          }else if(index === 2){// [else_return]
            valueType = 'ELSERETURN';
          }else{
            throw "invalid if_expr";
          }
        }else if (blockType === 'logic_negate'){
          valueType = 'BOOL';
        }else if(['math_division','math_subtract','logic_operation','math_compare','logic_compare'].includes(blockType)){
          valueType = capLetters[index];
        }else if(blockType === 'math_divide'){
          valueType = moduloArr[index];
        }else if(blockType === 'text_join'){
          valueType = 'ADD' + index.toString();
        }else if(['text_length','text_reverse'].includes(blockType)){
          valueType = 'VALUE';
        }else if(childrenList.length === 1){
          valueType = 'NUM';
        }else{
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





  var mathOpMap = new Map();
  mathOpMap.set('+','math_add');
  mathOpMap.set('-','math_subtract');
  mathOpMap.set('*', 'math_multiply');
  mathOpMap.set('/', 'math_division');
  mathOpMap.set('mod', 'math_divide');
  mathOpMap.set('max','math_on_list');
  mathOpMap.set('min','math_on_list');
  mathOpMap.set('and','logic_operation');
  mathOpMap.set('or','logic_operation');
  mathOpMap.set('not','logic_negate');
  mathOpMap.set('!=','logic_compare');
  mathOpMap.set('=','math_compare');
  mathOpMap.set('<','math_compare');
  mathOpMap.set('<=','math_compare');
  mathOpMap.set('>','math_compare');
  mathOpMap.set('>=','math_compare');
  mathOpMap.set('sin','math_trig');
  mathOpMap.set('cos','math_trig');
  mathOpMap.set('tan','math_trig');
  mathOpMap.set('asin','math_trig');
  mathOpMap.set('acos','math_trig');
  mathOpMap.set('atan','math_trig');

  var textOpMap = new Map();
  textOpMap.set('join', 'text_join');
  textOpMap.set('length', 'text_length');
  textOpMap.set('reverse', 'text_reverse');
  textOpMap.set('split_at_spaces', 'text_split_at_spaces');
  textOpMap.set('if_expr', 'controls_choose');

  // too many cases
  // var controlsMap = new Map();
  // controlsMap.set('if_expr', 'controls_choose');


  var unary_operationMap = new Map();
  unary_operationMap.set('absolute', 'math_abs');
  unary_operationMap.set('square root', 'math_single');
  unary_operationMap.set('neg', 'math_neg');
  unary_operationMap.set('round', 'math_round');
  unary_operationMap.set('ceiling', 'math_ceiling');
  unary_operationMap.set('floor', 'math_floor');

  var opNameMap = new Map();
  opNameMap.set('math_abs', 'ABS');
  opNameMap.set('math_single', 'ROOT');
  opNameMap.set('math_neg', 'NEG');
  opNameMap.set('math_round', 'ROUND');
  opNameMap.set('math_ceiling', 'CEILING'); 
  opNameMap.set('math_floor', 'FLOOR');
  opNameMap.set('and', 'AND');
  opNameMap.set('or', 'OR');
  opNameMap.set('=', 'EQ');
  opNameMap.set('!=', 'NEQ');
  opNameMap.set('<', 'LT');
  opNameMap.set('<=', 'LTE');
  opNameMap.set('>', 'GT');
  opNameMap.set('>=', 'GTE');
  opNameMap.set('mod', 'MODULO');
  opNameMap.set('sin', 'SIN');
  opNameMap.set('cos', 'COS');
  opNameMap.set('tan', 'TAN');
  opNameMap.set('asin', 'ASIN');
  opNameMap.set('acos', 'ACOS');
  opNameMap.set('atan', 'ATAN');
  
  var capLetters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  var moduloArr = ['DIVIDEND','DIVISOR'];
  var atan2Arr = ['Y', 'X']; 
  var if_expr_handler = function(ltr){ // an array looks like [if_expr, [...], [then_return], [else_return]]

  }
 
  if (!inBrowser) {
    getAndDisplayXml(); // Perform getAndDisplayXml() in node.js 
  } // Otherwise, it will be performed by button click in HTML file 