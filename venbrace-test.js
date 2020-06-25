var antlr4 = require('./antlr4/index.js');
var VenbraceLexer = require('./VenbraceForgivingLexer').VenbraceForgivingLexer;
var VenbraceParserLib = require('./VenbraceForgivingParser')
var VenbraceParser = VenbraceParserLib.VenbraceForgivingParser;
var ForgivingTokensVisitor = require('./ForgivingTokensVisitor').ForgivingTokensVisitor;
var errorMsg = undefined;

'use strict';
var editor = CodeMirror.fromTextArea(document.getElementById("input"), {
  mode: "venbrace",  
  lineNumbers: true,
  autoCloseBrackets: true, // do we still want to enable this?
  matchBrackets: true,
  // scanForBracket: true,
  cursorBlinkRate: 0}
  );

var Pos = CodeMirror.Pos;
var tokenMarks = [];
var solutionTokens = undefined;
var valueTokens = undefined;

var braces = new Set(['(', ')', '{', '}', '[', ']']);


class VenbraceErrorListener extends antlr4.error.ErrorListener {
  
  
  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    var sourceName = recognizer.getInputStream();
    // console.log(sourceName);
    errorMsg = `line ${line}, col ${column}: ${msg}\n`;
    // console.log(`Error found: ${offendingSymbol} line ${line}, col ${column}: ${msg}`);
    
    this.underlineError(recognizer, offendingSymbol, line, column);
    console.log(errorMsg);
  }

  underlineError(recognizer, offendingToken, line, column) {
      var tokens = recognizer.getInputStream();
      // var input = tokens.getTokenSource().getInputStream().toString();
      var input = tokens.tokenSource.inputStream.strdata
      var lines = input.split("\n");
      var errorLine = lines[line - 1];
      errorMsg += errorLine + "\n";
      // console.log(errorLine);
      for (var i=0; i<column; i++) errorMsg += " ";
      var start = offendingToken.start;
      var stop = offendingToken.stop;
      if ( start>=0 && stop>=0 ) {
          for (var i=start; i<=stop; i++) errorMsg += "^";
      }
      this.markError(editor, line-1, start, stop+1, "CodeMirror-invalidToken");

  }

  markError(editor, line, start, end, style) {
    var mark = editor.markText(Pos(line, start), Pos(line, end), {className: style});
    tokenMarks.push(mark);
  }

}


var parse = function () { 
  $("#error").html("");
  $("#output").html("");
  $("#inputLexerTokens").val("");
  $("#inputParserTokens").val("");
  $("#modifiedInput").val("");
  


  if (tokenMarks.length) {
    editor.operation(function() {
        for (var i = 0; i < tokenMarks.length; i++) tokenMarks[i].clear();
      });
    tokenMarks = [];
  }

  // solution
  var solution = $("#solution").val().replace("&gt;", ">");

  var sol_lexer = new VenbraceLexer(new antlr4.InputStream(solution));
  var sol_stream = new antlr4.CommonTokenStream(sol_lexer); 
  sol_stream.fill(); //test code
  var sol_lexer_tokens = sol_stream.tokens.filter(function (t) {return t.type !== antlr4.Token.EOF;});
  $("#solutionLexerTokens").val(tokensToString(sol_lexer_tokens));
  
  var sol_parser = new VenbraceParser(sol_stream);
  // solutionTokens = sol_parser.test_program().tokens;
  var sol_tree = sol_parser.test_program();
  var solutionParserTokensVisitor = new ForgivingTokensVisitor();
  solutionTokens = solutionParserTokensVisitor.visit(sol_tree); 
  $("#solutionParserTokens").val(tokensToString(solutionTokens));

  var sol_nonbrace_tokens = getNonbraceTokens(solutionTokens);
  console.log("solution nonbrace tokens:");
  console.log(sol_nonbrace_tokens);

  //input
  var input = editor.getValue();
  var cstream = new antlr4.InputStream(input);
  var lexer = new VenbraceLexer(cstream);

  var tstream = new antlr4.CommonTokenStream(lexer); 
  tstream.fill(); //test code
  var rawTokens = tstream.tokens.filter(function (t) {return t.type !== antlr4.Token.EOF;})
  var lexTokens = preprocessing(rawTokens); //type: CommonToken
  $("#inputLexerTokens").val(tokensToString(rawTokens));

  var parser = new VenbraceParser(tstream);

  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser.addErrorListener(new VenbraceErrorListener());

  var dom = undefined;
  var visit = undefined;

  if (lexer.getErrors().length === 0) {
    // console.log("tokens from input:");
    // console.log(lexTokens);
    var tokenCount = countTokens(lexTokens);
    var tokenCheckResult = tokenCheck(tokenCount, sol_nonbrace_tokens);
    // console.log("compare input tokens with solution tokens (nonbrace):");
    // console.log(tokenCheckResult);

    if (!tokenCheckResult) {
      dom = parser.test_program();
      console.log(dom);
      // valueTokens = dom.tokens;
      // console.log(valueTokens);

      var inputParserTokensVisitor = new ForgivingTokensVisitor();
      var tokens = inputParserTokensVisitor.visit(dom); 
      $("#inputParserTokens").val(tokensToString(tokens));

      var stringForParserTokens = inputParserTokensVisitor.stringForTokens;
      $("#modifiedInput").val(stringForParserTokens);

      // var tokenCount = countTokens(tokens);
      // console.log("tokens from input:");
      // console.log(tokenCount);
      // var tokenCheckResult = tokenCheck(tokenCount, sol_nonbrace_tokens);
      // console.log("compare input tokens with solution tokens:");
      // console.log(tokenCheckResult);

      if (dom === undefined) {
        console.log("Unable to parse due to parsing errors.");
        document.getElementById("output").innerHTML = "Parsing failed.";
      } else {
        valueTokens = tokens;
        editor.setValue(stringForParserTokens);
        markTokens(valueTokens);
        console.log(tokenMarks);
        
        var tam_table = CalcTable();
        // console.log(tam_table);
        var alignment = Backtrace(tam_table);
        console.log(alignment);
        if (solutionCheck(alignment)) {
          console.log("correct!");
          document.getElementById("output").innerHTML = "Input accepted.";
        } else {
          console.log("incorrect!");
          document.getElementById("output").innerHTML = "Parsing succeeded, but input was incorrect.";
        }
      }
    } else {
      document.getElementById("error").innerHTML = tokenCheckResult;
    }
    
    
  } else {
    console.log("Lexer errors:");
    lexer.getErrors().forEach(function(error){
      console.log(error);
    });
  }
  
}

function isEmpty(dict) {
  return Object.keys(dict).length == 0;
}

function markTokens(tokens) {
  for (var i in tokens) {
    var t = tokens[i];
    var length = t.stop-t.start+1;
    if (t.inserted || t.corrected) {
      tokenMarks.push(editor.markText(Pos(t.line-1,t.column), Pos(t.line-1, t.column+length), {className: "CodeMirror-modifiedToken"}));
    }
    else if (t.deleted) {
      tokenMarks.push(editor.markText(Pos(t.line-1,t.column), Pos(t.line-1, t.column+length), {className: "CodeMirror-deletedToken"}));
    }
  }
}

function preprocessing(tokens) {
  var result = [];
  for (var i=0; i<tokens.length; i++) {
    var t = tokens[i].clone();
    ////console.log(t);
    if (t.type == 121 && i > 0) { // t is NEG_NUM
      var prev = tokens[i-1];
      if (prev.type == 120
        || prev.type == 121
        || prev.type == 123
        || prev.type == 5) { // prev is NUM, NEG_NUM, ID, or RPAREN (end of an expr)

        var op = t.clone();
        op.text = "-";
        op.type = 62;
        op.stop = op.start;

        t.text = t.text.substring(1);
        t.type = 120;
        t.start = t.start + 1;
        t.column = t.column + 1;
        
        result.push(op);
      }
    }
    result.push(t);
  }
  return result;
}

function getNonbraceTokens(ts) {
  var result = {"required": {}, "optional": {}};
  for (var i = 0; i < ts.length; i++) {
    var t = ts[i];
    var t_text = t.text;
    if (braces.has(t_text)) continue; // skip brace tokens
    if (t.optional) {
      if (result.optional[t_text]) {
        result.optional[t_text] = result.optional[t_text] + 1;
      } else result.optional[t_text] = 1;
    } else {
      if (result.required[t_text]) {
        result.required[t_text] = result.required[t_text] + 1;
      } else result.required[t_text] = 1;
    }
  } 

  return result;
}

function countTokens(ts) {
  var result = {};
  for (var i = 0; i < ts.length; i++) {
    var t = ts[i].text;
    if (braces.has(t)) continue; // skip brace tokens
    if (result[t]) {
      result[t] = result[t] + 1;
    } else result[t] = 1;
  }

  return result;
}

function tokenCheck(input, solution) {
  var result = {"missing": {}, "unexpected": {}};
  for (var t in input) {
    var count = input[t];
    if (!(solution.required[t])) {
      if (!(solution.optional[t])) {
        result.unexpected[t] = count;
      } else {
        if (count > solution.optional[t]) {
          result.unexpected[t] = count - solution.optional[t];
        }
      }
    } else {
      if (count < solution.required[t]) {
        result.missing[t] = solution.required[t] - count;
      } else if (count > solution.required[t]) {
        if (!(solution.optional[t])) {
          result.unexpected[t] = count - solution.required[t];
        } else {
          var delta = count - solution.required[t] - solution.optional[t];
          if (delta > 0) {
            result.unexpected[t] = delta;
          }
        }
      }
    }
  }

  for (var r in solution.required) {
    if (!(input[r])) {
      result.missing[r] = solution.required[r];
    }
  }
  
  var resultText = "";
  if (!isEmpty(result.missing)) {
    resultText += "missing: ";
    for (var m in result.missing) {
      resultText += `${result.missing[m]} occurrences of ${m}; `;
    }
    resultText += "<br>";
  }

  if (!isEmpty(result.unexpected)) {
    resultText += "unexpected: ";
    for (var m in result.unexpected) {
      resultText += `${result.unexpected[m]} occurrences of ${m}; `;
    }
    resultText += "<br>";
  }
    
  return resultText;
}

function solutionCheck(alignment) {
  // var pass = ;
  var sol = alignment[0];
  var input = alignment[1];
  for (var c = 0; c < sol.length; c++) {
    // sol.length == input.length
    var s = sol[c];
    var i = input[c];
    if (s != null && i != null) {
      if (s.text != i.text) return false;
    } else if (s == null && i != null) { // extra or deleted token
      if (!i.deleted) return false;
    } else if (s != null && i == null) { // missing or optional
      if (!s.optional) return false;
    }
  }
  return true;
}

function CalcTable() {
  console.log(valueTokens);
  console.log(solutionTokens);
  var table = CreateTable();
  var rows = table.length;
  var cols = table[0].length;
  for (var r = 1; r < rows; r++) {
      for (var c = 1; c < cols; c++) {
          CalcCell(table, r, c);
      }
  }
  return table;
}

function CreateTable() {
  var cols = solutionTokens.length + 1;
  var rows = valueTokens.length + 1;
  var table = new Array(rows);
  for (var i = 0; i < table.length; i++) {
      table[i] = new Array(cols);
  }
  for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
          var entry = new Cell(r, c);
          if (r == 0 && c == 0) {
              entry.value = 0;
          }
          else if (r == 0) {
              entry.prev = table[0][c - 1];
              entry.value = entry.prev.value - 2;
          }
          else if (c == 0) {
              entry.prev = table[r - 1][0];
              entry.value = entry.prev.value - 2;
          }
          table[r][c] = entry;
      }
  }
  return table;
}

function CalcCell(table, row, col) {
  var cell = table[row][col];
  var cellAbove = table[cell.row - 1][cell.col];
  var cellLeft = table[cell.row][cell.col - 1];
  var cellDiag = table[cell.row - 1][cell.col - 1];
  var scoreFromAbove = cellAbove.value - 2;
  var scoreFromLeft = cellLeft.value - 2;
  var scoreFromDiag = cellDiag.value;
  // (1) token w/ same text content & optional tag
  // (2) token w/ different text content but same type & optional tag
  if ((((solutionTokens[cell.col - 1].text == valueTokens[cell.row - 1].text) || 
        (solutionTokens[cell.col - 1].type == valueTokens[cell.row - 1].type)) && (!valueTokens[cell.row-1].deleted))
      && ((solutionTokens[cell.col - 1].optional && valueTokens[cell.row - 1].optional)
          || (!solutionTokens[cell.col-1].optional && !valueTokens[cell.row - 1].optional))) {
      scoreFromDiag += 1;
  }
  else
      scoreFromDiag -= 1;
  if (scoreFromAbove >= scoreFromLeft) {
      if (scoreFromDiag >= scoreFromAbove) {
          cell.value = scoreFromDiag;
          cell.prev = cellDiag;
      }
      else {
          cell.value = scoreFromAbove;
          cell.prev = cellAbove;
      }
  }
  else {
      if (scoreFromDiag >= scoreFromLeft) {
          cell.value = scoreFromDiag;
          cell.prev = cellDiag;
      }
      else {
          cell.value = scoreFromLeft;
          cell.prev = cellLeft;
      }
  }
  return false;
}


class Cell {
  constructor(row, col) {
      this.row = row;
      this.col = col;
      this.value = 0;
      this.prev = null; //Cell
      return this;
  }
  toString() {
    return this.value;
  }
}


Cell.prototype.constructor = Cell;

function Backtrace(table) {
  var solutionTokensAligned = [];
  var valueTokensAligned = [];
  var current = table[table.length-1][table[0].length-1];
  while (current.prev != null) {
    if ((current.row - current.prev.row) == 1) {
      valueTokensAligned.unshift(valueTokens[current.row - 1]);
    } else {
      valueTokensAligned.unshift(null);
    }
    if ((current.col - current.prev.col) == 1) {
      solutionTokensAligned.unshift(solutionTokens[current.col - 1]);
    } else {
      solutionTokensAligned.unshift(null);
    }
    current = current.prev;
  }


  var n = solutionTokensAligned.length;
  var result = new Array(2);
  
  result[0] = solutionTokensAligned;
  result[1] = valueTokensAligned;
  return result;
}

var printTokens = function(ts) {
  if (!ts) return "";
  var result = "";
  for (var i = 0; i < ts.length; i++) {
    var t = ts[i];
    var optional = (t.optional ? "(optional)" : "");
    var text = t.text;
    var line = t.line;
    var col = t.column;
    var str = `token: ${text}, pos: (${line}, ${col}) ${optional}\n`;
    result += str;
  }
  return result;
}



// From Blockly core xml.js
/**
 * Converts a DOM structure into properly indented text.
 * @param {!Element} dom A tree of XML elements.
 * @return {string} Text representation.
 */
var domToPrettyText = function(dom) {
  // This function is not guaranteed to be correct for all XML.
  // But it handles the XML that Blockly generates.
  var blob = domToText(dom);
  // Place every open and close tag on its own line.
  var lines = blob.split('<');
  // Indent every line.
  var indent = '';
  for (var x = 1; x < lines.length; x++) {
    var line = lines[x];
    if (line[0] == '/') {
      indent = indent.substring(2);
    }
    lines[x] = indent + '<' + line;
    if (line[0] != '/' && line.slice(-2) != '/>') {
      indent += '  ';
    }
  }
  // Pull simple tags back together.
  // E.g. <foo></foo>
  var text = lines.join('\n');
  text = text.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, '$1</$2>');
  // Trim leading blank line.
  return text.replace(/^\n/, '');
};

/**
 * Converts a DOM structure into plain text.
 * Currently the text format is fairly ugly: all one line with no whitespace.
 * @param {!Element} dom A tree of XML elements.
 * @return {string} Text representation.
 */
var domToText = function(dom) {
  var oSerializer = new XMLSerializer();
  return oSerializer.serializeToString(dom);
};

// From http://forums.asp.net/t/1151879.aspx?HttpUtility+HtmlEncode+in+javaScript+                                              
function escapeHTML (str) {
  var div = document.createElement('div');
  var text = document.createTextNode(str);
  div.appendChild(text);
  return div.innerHTML;
}

function tokensToString(tokens) {
  tokensString = '';
  tokens.forEach( tok => (tokensString += tok.toString() + "\n") );
  return tokensString;
}