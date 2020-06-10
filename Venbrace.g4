/*
Venbrace grammar (simplified version)

Author: Ruanqianqian Huang
Modified: Jun 7, 2020

FEATURES:
- Text representations for *some* App Inventor blocks

NOT INCLUDED:
- Venbrace-to-XML (only for testing purposes, still work-in-progress)
- New rules currently under development that are not covered in the thesis body
*/

// ==========GRAMMAR MACROS==========
grammar Venbrace;

options
{
  language = 'JavaScript';
  // tokenVocab=VenbraceLexer;
}

@lexer::members{
	var errors = [];

  VenbraceLexer.prototype.emitErrorMessage = function(error) {
  	    //var hdr = getErrorHeader(e);
        //var msg = getErrorMessage(e, tokenNames);
        errors.push(error);
    }
  VenbraceLexer.prototype.getErrors = function() {
        return errors;
    }

  VenbraceLexer.prototype.setTokenFactory = function(newFactory) {
    factory = newFactory;
  }
}

@parser::members{

	var errors = [];

  VenbraceParser.prototype.emitErrorMessage = function(error) {
        //var hdr = getErrorHeader(e);
        //var msg = getErrorMessage(e, tokenNames);
        errors.push(error);
    };

  VenbraceParser.prototype.getErrors = function() {
        return errors;
    };

  VenbraceParser.prototype.recoverFromMismatchedToken = function(input, ttype, follow){
  	throw new antlr4.runtime.MismatchedTokenException(ttype, input);
  }

  document.createVenbraceElement = function (tagName) {
        var element = document.createElement(tagName);
        element.appendChildReal = element.appendChild; // save original appendChild method
        element.appendChild = function (child) { 
          if (child) {
            element.appendChildReal(child); // Only append child if not null
          } 
        };
        return element;
    }
}

// catching grammar rule errors
@rulecatch{
	catch (re){
		throw re;
    //alert(re);
	}
}


/* ================================
 * ==========PARSER RULES==========
 * ================================ */

program returns [var tokens]
@init {$tokens = [];}
  : (decl_block {$tokens.push(...($decl_block.tokens))})* EOF;

// rule for testing single blocks
test_program returns [var tokens]
@init {$tokens = [];}
  : (decl_block {$tokens.push(...($decl_block.tokens));})
  | (stat_block {$tokens.push(...($stat_block.tokens));})
  | (expr_block {$tokens.push(...($expr_block.tokens));});

decl_block returns [var tokens]
@init {$tokens = [];}
  : (LSQR decl RSQR
  {
    $tokens.push($LSQR);
    $tokens.push(...($decl.tokens));
    $tokens.push($RSQR);
  }
  );

decl returns [var tokens] 
@init {$tokens = [];}
  : global_decl {$tokens = $global_decl.tokens;}
  | procedure_do {$tokens = $procedure_do.tokens;}
  | procedure_result {$tokens = $procedure_result.tokens;}
  | event_handler {$tokens = $event_handler.tokens;}
  ;

global_decl returns [var tokens]
@init{
  $tokens = [];
}
  : INITIALIZE GLOBAL ID TO 
  {
    $tokens.push($INITIALIZE);
    $tokens.push($GLOBAL);
    $tokens.push($ID);
    $tokens.push($TO);
  }
  expr_block {$tokens.push(...$expr_block.tokens);};

procedure_do returns [var tokens]
@init {
  $tokens = [];
}
  : TO {$tokens.push($TO);}
  proc_name=ID {$tokens.push($proc_name);}
  (arg_name=ID {$tokens.push($arg_name);})* 
  (DO {
    $DO['optional'] = true;
    $tokens.push($DO);
    })? 
  suite {$tokens.push(...$suite.tokens);};

procedure_result returns [var tokens]
@init {
 $tokens = []; 
}
  : TO {$tokens.push($TO);}
  proc_name=ID {$tokens.push($proc_name);}
  (arg_name=ID {$tokens.push($arg_name);})* 
  (RESULT {
    $RESULT['optional'] = true;
    $tokens.push($RESULT);
  })? expr_block {$tokens.push(...$expr_block.tokens);};


// only supports event handlers without built-in parameters
event_handler returns [var tokens]
@init {
  $tokens = [];
}
  : WHEN COMPONENT_PROPERTY 
  {
    $tokens.push($WHEN);
    $tokens.push($COMPONENT_PROPERTY);
  }
  (param_name=ID {$tokens.push($param_name);})* 
  (DO {
    $DO['optional'] = true;
    $tokens.push($DO);
  })? suite {$tokens.push(...$suite.tokens);};

suite returns [var tokens]
@init {
  $tokens = [];
}
  : (stat_block {$tokens.push(...$stat_block.tokens);})*
 | (LCURLY RCURLY {
   $tokens.push($LCURLY);
  $tokens.push($RCURLY);
  }); // empty statement sequence

stat_block returns [var tokens]
@init {
  $tokens = [];
}
  : LCURLY stat RCURLY
  {
    $tokens.push($LCURLY);
    $tokens.push(...$stat.tokens);
    $tokens.push($RCURLY);
  }
  ;

stat returns [var tokens]
@init {$tokens = [];}
  : control_stat {$tokens = $control_stat.tokens;}
  | call_procedure_stat {$tokens = $call_procedure_stat.tokens;}
  | var_stat {$tokens = $var_stat.tokens;};

// STATEMENT BLOCKS
/* Feb 28, 2020: keep only if_stat for study 1 */

// list_stat: ADD_ITEMS_TO_LIST label? expr_block label? expr_block;

control_stat returns [var tokens]
@init {$tokens = [];}
  : if_stat {$tokens = $if_stat.tokens;}
  | for_each_from_to {$tokens = $for_each_from_to.tokens;}
  | while_stat {$tokens = $while_stat.tokens;};

if_stat returns [var tokens]
@init {
  $tokens = [];
}
  : IF e1=expr_block THEN s1=suite 
    {
      $tokens.push($IF);
      $tokens.push(...$e1.tokens);
      $tokens.push($THEN);
      $tokens.push(...$s1.tokens);
    }
  (
    (ELSE_IF e2=expr_block THEN s2=suite
    {
      $tokens.push($ELSE_IF);
      $tokens.push(...$e2.tokens);
      $tokens.push($THEN);
      $tokens.push(...$s2.tokens);
    }
    )* 
    (ELSE s3=suite
      {
        $tokens.push($ELSE);
        $tokens.push(...$s3.tokens);
      }
    )?
  )?;

for_each_from_to returns [var tokens]
@init {
  $tokens = [];
}
  : FOREACH ID 
  {
    $tokens.push($FOREACH);
    $tokens.push($ID);
  } (FROM
  {
    $FROM['optional'] = true;
    $tokens.push($FROM);
  }
  )? from=expr_block {$tokens.push(...$from.tokens);}
  (TO
  {
    $TO['optional'] = true;
    $tokens.push($TO);
  }
  )? to=expr_block {$tokens.push(...$to.tokens);}
  (BY
  {
    $BY['optional'] = true;
    $tokens.push($BY);
  })? by=expr_block {$tokens.push(...$by.tokens);}
  (DO
  {
    $DO['optional'] = true;
    $tokens.push($DO); 
  })? suite {$tokens.push(...$suite.tokens);}
  ;

while_stat returns [var tokens]
@init {
  $tokens = [];
}
: WHILE {$tokens.push($WHILE);}
(TEST {
  $TEST['optional'] = true;
  $tokens.push($TEST);
})? expr_block {$tokens.push(...$expr_block.tokens);}
(DO {
  $DO['optional'] = true;
  $tokens.push($DO);
})? suite {$tokens.push(...$suite.tokens);};

// 03/23/20: only allows procedure calls w/o arguments
// 04/20/20: made `call' optional
call_procedure_stat returns [var tokens]
@init {
  $tokens = [];
}
: (CALL
{
  $CALL['optional'] = true;
  $tokens.push($CALL);
})? ((ID {$tokens.push($ID);}) | (component=ID DOT event=ID 
{
  $tokens.push($ID);
  $tokens.push($DOT);
  $tokens.push($event);
})) ((label
{
  // label only has one token
  var label_token = $label.tokens[0];
  label_token['optional'] = true;
  $tokens.push(label_token);
}
)? arg=expr_block {$tokens.push(...$arg.tokens);})*;

/* Feb 28 2020: remove local_init_stat from the first user study */
var_stat returns [var tokens]
@init {$tokens = [];}
  : setter {$tokens = $setter.tokens;};

// 05/04/2020: although GLOBAL setter is implemented, it is not used in the translation tasks of study 1
setter returns [var tokens]
@init {
  $tokens = [];
}
  : SET {$tokens.push($SET);}
  (((GLOBAL {$tokens.push($GLOBAL);})? ID {$tokens.push($ID);}) 
  | (COMPONENT_PROPERTY {$tokens.push($COMPONENT_PROPERTY);})) 
  (TO {
    $TO['optional'] = true;
    $tokens.push($TO);
  })? expr_block {$tokens.push(...$expr_block.tokens);};

expr_block returns [var tokens]
@init {
  $tokens = [];
}
  : (LPAREN RPAREN {
   $tokens.push($LPAREN);
   $tokens.push($RPAREN); 
  }) //empty expr
  | atom {$tokens.push(...($atom.tokens));}
  | expr {$tokens.push(...($expr.tokens));};

// EXPR BLOCKS
expr returns [var tokens]
@init {
  $tokens = [];
}
  : getter {$tokens = $getter.tokens;}
  | control_expr {$tokens = $control_expr.tokens;}
  | logic_expr {$tokens = $logic_expr.tokens;}
  | not_expr {$tokens = $not_expr.tokens;}
  | compare_eq_expr {$tokens = $compare_eq_expr.tokens;}
  | compare_math_expr {$tokens = $compare_math_expr.tokens;}
  | math_expr {$tokens = $math_expr.tokens;}
  | str_expr {$tokens = $str_expr.tokens;}
  | call_procedure_expr {$tokens = $call_procedure_expr.tokens;}
  | atom {$tokens = $atom.tokens;}
  ;

control_expr returns [var tokens]
@init {$tokens = [];}
  : if_expr {$tokens = $if_expr.tokens;}
  | do_expr {$tokens = $do_expr.tokens;};

if_expr returns [var tokens]
@init {
  $tokens = [];
}
  : LPAREN IF c=expr_block THEN e1=expr_block ELSE e2=expr_block RPAREN
  {
    $tokens.push($LPAREN);
    $tokens.push($IF);
    $tokens.push(...$c.tokens);
    $tokens.push($THEN);
    $tokens.push(...$e1.tokens);
    $tokens.push($ELSE);
    $tokens.push(...$e2.tokens);
    $tokens.push($RPAREN);
  }
  ;

do_expr returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN DO suite RESULT expr_block RPAREN
  {
    $tokens.push($LPAREN);
    $tokens.push($DO);
    $tokens.push(...$suite.tokens);
    $tokens.push($RESULT);
    $tokens.push(...$expr_block.tokens);
    $tokens.push($RPAREN);
  }
;

logic_expr returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN a=expr_block 
{
  $tokens.push($LPAREN);
  $tokens.push(...$a.tokens);
}
(AND {$tokens.push($AND);}| OR {$tokens.push($OR);}) 
b=expr_block RPAREN
{
  $tokens.push(...$b.tokens);
  $tokens.push($RPAREN);
}
;

not_expr returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN NOT expr_block RPAREN
{
  $tokens.push($LPAREN);
  $tokens.push($NOT);
  $tokens.push(...$expr_block.tokens);
  $tokens.push($RPAREN);
}
;

compare_eq_expr returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN a=expr_block 
{
  $tokens.push($LPAREN);
  $tokens.push(...$a.tokens);
}
(LOGIC_EQ {$tokens.push($LOGIC_EQ);}| LOGIC_NOT_EQ {$tokens.push($LOGIC_NOT_EQ);}) 
b=expr_block RPAREN
{
  $tokens.push(...$b.tokens);
  $tokens.push($RPAREN);
};

compare_math_expr returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN a=expr_block 
{
  $tokens.push($LPAREN);
  $tokens.push(...$a.tokens);
}
(EQ {$tokens.push($EQ);}
| NEQ {$tokens.push($NEQ);}
| GT {$tokens.push($GT);}
| GE {$tokens.push($GE);}
| LT {$tokens.push($LT);}
| LE {$tokens.push($LE);}) 
b=expr_block RPAREN
{
  $tokens.push(...$b.tokens);
  $tokens.push($RPAREN);
}
;

// only contains blocks that have no long sequences of helper words
math_expr returns [var tokens]
@init {$tokens = [];}
  : mutable_op {$tokens = $mutable_op.tokens;}
  | immutable_op {$tokens = $immutable_op.tokens;}
  | min_max {$tokens = $min_max.tokens;}
  | unary_op {$tokens = $unary_op.tokens;}
  | mod {$tokens = $mod.tokens;}
  | remainder  {$tokens = $remainder.tokens;}
  | quotient  {$tokens = $quotient.tokens;}
  | trig {$tokens = $trig.tokens;}
  | atan2 {$tokens = $atan2.tokens;};

mutable_op returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN a=expr_block 
{
  $tokens.push($LPAREN);
  $tokens.push(...$a.tokens);
}
((PLUS b=expr_block
{
  $tokens.push($PLUS);
  $tokens.push(...$b.tokens);
}
)+ 
| (MUL c=expr_block
{
  $tokens.push($MUL);
  $tokens.push(...$c.tokens);
}
)+) RPAREN {$tokens.push($RPAREN);};

// not allowing a + b * c + d
immutable_op returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN {$tokens.push($LPAREN);}
((a=expr_block {$tokens.push(...$a.tokens);}
(MINUS {$tokens.push($MINUS);}
| DIV {$tokens.push($DIV);}
| POW {$tokens.push($POW);}) 
b=expr_block {$tokens.push(...$b.tokens);})
| (a=expr_block NEG_NUM
{
  var num = $NEG_NUM;

  var neg = $NEG_NUM.clone();
  neg.type = 63; // hard-coded
  neg.stop = neg.start;
  neg.text = $MINUS.text;

  num.text = num.text.substring(1);
  num.type = num.type - 1; // NUMBER = 121, NEG_NUM = 122
  num.start = num.start + 1;
  num.column = num.column + 1;


  $tokens.push(...$a.tokens);
  //$tokens.push($NEG_NUM);
  $tokens.push(neg);
  $tokens.push(num);
}
)) 
RPAREN {$tokens.push($RPAREN);}; // special hack handling a -b

min_max returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN {$tokens.push($LPAREN);}
(MIN {$tokens.push($MIN);}| MAX {$tokens.push($MAX);}) 
a=expr_block {$tokens.push(...$a.tokens);}
(b=expr_block {$tokens.push(...$b.tokens);})+ 
RPAREN {$tokens.push($RPAREN);};

// only contains blocks without long sequences of helper words
unary_op returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN {$tokens.push($LPAREN);} 
(SQRT {$tokens.push($SQRT);}
| ABS {$tokens.push($ABS);}
| NEG {$tokens.push($NEG);}
| LOG {$tokens.push($LOG);}
| EULER {$tokens.push($EULER);}
| ROUND {$tokens.push($ROUND);}
| CEILING {$tokens.push($CEILING);}
| FLOOR {$tokens.push($FLOOR);})
 expr_block {$tokens.push(...$expr_block.tokens);}
 RPAREN {$tokens.push($RPAREN);};

mod returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN MODULO OF a=expr_block DIV b=expr_block RPAREN
{
  $tokens.push($LPAREN);
  $tokens.push($MODULO);
  $tokens.push($OF);
  $tokens.push(...$a.tokens);
  $tokens.push($DIV);
  $tokens.push(...$b.tokens);
  $tokens.push($RPAREN);
}
;

remainder returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN REMAINDER OF a=expr_block DIV b=expr_block RPAREN
{
  $tokens.push($LPAREN);
  $tokens.push($REMAINDER);
  $tokens.push($OF);
  $tokens.push(...$a.tokens);
  $tokens.push($DIV);
  $tokens.push(...$b.tokens);
  $tokens.push($RPAREN);
};

quotient returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN QUOTIENT OF a=expr_block DIV b=expr_block RPAREN
{
  $tokens.push($LPAREN);
  $tokens.push($QUOTIENT);
  $tokens.push($OF);
  $tokens.push(...$a.tokens);
  $tokens.push($DIV);
  $tokens.push(...$b.tokens);
  $tokens.push($RPAREN);
};

trig returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN {$tokens.push($LPAREN);}
(SIN {$tokens.push($SIN);}
| COS {$tokens.push($COS);}
| TAN {$tokens.push($TAN);}
| ASIN {$tokens.push($ASIN);}
| ACOS {$tokens.push($ACOS);}
| ATAN {$tokens.push($ATAN);}) 
expr_block RPAREN
{
  $tokens.push(...$expr_block.tokens);
  $tokens.push($RPAREN);
}
;

atan2 returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN ATAN2 
{
  $tokens.push($LPAREN);
  $tokens.push($ATAN2);
}
(y='y' 
{
  $y['optiona'] = true;
  $tokens.push($y);  
})? 
y_expr=expr_block {$tokens.push(...$y_expr.tokens);}
(x='x'
{
  $x['optiona'] = true;
  $tokens.push($x);  
}
)? x_expr=expr_block RPAREN 
{
  $tokens.push(...$x_expr.tokens);
  $tokens.push($RPAREN);  
};

str_expr returns [var tokens]
@init {$tokens = [];}
  : str_join {$tokens = $str_join.tokens;}
  | str_length  {$tokens = $str_length.tokens;}
  | str_reverse  {$tokens = $str_reverse.tokens;}
  | str_split_at_spaces {$tokens = $str_split_at_spaces.tokens;};

str_length returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN LENGTH expr_block RPAREN 
{
  $tokens.push($LPAREN);
  $tokens.push($LENGTH);
  $tokens.push(...$expr_block.tokens);
  $tokens.push($RPAREN);
}
;

str_join returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN JOIN a=expr_block 
{
  $tokens.push($LPAREN);
  $tokens.push($JOIN);
  $tokens.push(...$a.tokens);
}
(b=expr_block {$tokens.push(...$b.tokens);})+ RPAREN{$tokens.push($RPAREN);}
;

str_reverse returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN REVERSE expr_block RPAREN
{
  $tokens.push($LPAREN);
  $tokens.push($REVERSE);
  $tokens.push(...$expr_block.tokens);
  $tokens.push($RPAREN);
};

str_split_at_spaces returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN SPLIT_AT_SPACES expr_block RPAREN
{
  $tokens.push($LPAREN);
  $tokens.push($SPLIT_AT_SPACES);
  $tokens.push(...$expr_block.tokens);
  $tokens.push($RPAREN);
};

getter returns [var tokens]
@init {
  $tokens = [];
}
: (ID {$tokens.push($ID);}) 
| (LPAREN GET 
  {
    $LPAREN['optional'] = true;
    $GET['optional'] = true;
    $tokens.push($LPAREN);
    $tokens.push($GET);
  } 
  (GLOBAL {$tokens.push($GLOBAL);})? ID {$tokens.push($ID);} 
  RPAREN
  {
    $RPAREN['optional'] = true;
    $tokens.push($RPAREN);
  });

// 04/20/20: made `call' optional; only supports zero-argument calls
call_procedure_expr returns [var tokens]
@init {
  $tokens = [];
}
: LPAREN {$tokens.push($LPAREN);}
(CALL {
 $CALL['optional'] = true;
 $tokens.push($CALL); 
})? 
(ID {$tokens.push($ID);}
| (component=ID DOT event=ID {
 $tokens.push($component);
 $tokens.push($DOT);
 $tokens.push($event); 
})) 
((label
{
 var label_token = $label.tokens[0];
 label_token['optional'] = true;
 $tokens.push(label_token); 
})? arg=expr_block {$tokens.push(...$arg.tokens);}
)* RPAREN {$tokens.push($RPAREN);};

// OTHER ELEMENTS

atom returns [var tokens]
@init {
  $tokens = [];
}
  : atom_elements {$tokens.push(...$atom_elements.tokens);}
| (LPAREN atom_elements RPAREN 
{
  $LPAREN['optional'] = true;
  $tokens.push($LPAREN);
  $tokens.push(...$atom_elements.tokens);
  $RPAREN['optional'] = true;
  $tokens.push($RPAREN);
  });

atom_elements returns [var tokens]
@init {
  $tokens = [];
}
  : NUMBER {$tokens.push($NUMBER);}
  | NEG_NUM {$tokens.push($NEG_NUM);} 
  | STRING {$tokens.push($STRING);} 
  | TRUE {$tokens.push($TRUE);} 
  | FALSE {$tokens.push($FALSE);} 
  | COMPONENT_PROPERTY {$tokens.push($COMPONENT_PROPERTY);};

label returns [var tokens]
@init {
  $tokens = [];
}
: ID {$tokens.push($ID);};

/* ================================
 * ==========LEXER RULES==========
 * ================================ */


WS  :   ( ' '
        | '\t'
        | '\r'
        | '\n'
        ) -> skip;


// === TOKENS ===

// SYMBOLS
LCURLY: '{';
RCURLY: '}';
LPAREN: '(';
RPAREN: ')';
LSQR: '[';
RSQR: ']';
COMMA: ',';
DIVIDER: '===';
DOT: '.';
ASSIGN: '<-';
COLON: ':';


//KEYWORDS

TRUE: 'true';
FALSE: 'false';
WHEN: 'when';
IF: 'if';
THEN: 'then';
ELSE: 'else';
ELSE_IF: 'else if';
FOREACH: 'for each';

DO: 'do';
RESULT: 'result';
TO: 'to';
CALL: 'call';

// variables
GET: 'get';
SET: 'set';
GLOBAL: 'global';
INITIALIZE: 'initialize';
LOCAL: 'local';

// control statements
 
IN: 'in';
BY: 'by';
FROM: 'from';
WHILE: 'while';
TEST: 'test';

EVAL_BUT_IGNORE_RESULT: 'evaluate but ignore';
OPEN_ANOTHER_SCREEN: 'open another screen';
OPEN_ANOTHER_SCREEN_WITH_START_VALUE: 'open another screen with start value';
CLOSE_SCREEN: 'close screen';
CLOSE_SCREEN_WITH_VALUE: 'close screen with value';
CLOSE_SCREEN_WITH_PLAIN_TEXT: 'close screen with plain text';
CLOSE_APPLICATION: 'close application';
SCREEN_NAME: 'screenName';
START_VALUE: 'startValue';
TEXT: 'text';
BREAK: 'break';

GET_START_VALUE: 'get start value';
GET_PLAIN_START_TEXT: 'get plain start text';

//OPERATORS
NOT: 'not';
AND: 'and';
OR: 'or';
XOR: 'xor';
LT: '<';
GT: '>';
LE: '<=';
GE: '>=';
EQ: '=';
NEQ: '!=';
LOGIC_EQ: EQ;
LOGIC_NOT_EQ: NEQ;

PLUS: '+';
MINUS: '-';
MUL: '*';
DIV: '/';
POW: '^';



//Math Ops
DECIMAL: 'decimal';
BINARY: 'binary';
OCTAL: 'octal';
HEXADECIMAL: 'hexadecimal';
BITWISE: 'bitwise';
SQRT: 'square root';
ABS: 'absolute';
NEG: 'neg';
LOG: 'log';
EULER: 'e^';
ROUND: 'round';
CEILING: 'ceiling';
FLOOR: 'floor';
RANDOM_INTEGER: 'random integer';
RANDOM_FRACTION: 'random fraction';
MIN: 'min';
MAX: 'max';
MODULO: 'modulo';
REMAINDER: 'remainder';
QUOTIENT: 'quotient';
OF: 'of';
CONVERT: 'convert';
// RAD_2_DEG: 'radians to degrees';
// DEG_2_RAD: 'degrees to radians';
// FORMAT_AS_DECIMAL: 'format as decimal';
// IS: 'is';
// ISNUMBER: 'number?';
// BASE10: 'Base 10?';
// ISHEX: 'hexadecimal?';
// ISBIN: 'binary?';
// CONVERT_NUM: 'convert number';
// BASE_10_TO_HEX: 'base 10 to hex';
// HEX_TO_BASE_10: 'hex to base 10';
// BASE_10_TO_BIN: 'base 10 to binary';
// BIN_TO_BASE_10: 'binary to base 10';

SIN: 'sin';
COS: 'cos';
TAN: 'tan';
ASIN: 'asin';
ACOS: 'acos';
ATAN: 'atan';
ATAN2: 'atan2';

//String Ops
JOIN: 'join';
LENGTH: 'length';
IS_EMPTY: 'is empty';
COMPARE_TEXTS: 'compare texts';
TRIM: 'trim';
UPCASE: 'upcase';
DOWNCASE: 'downcase';
STARTS_AT: 'starts at';
// PIECE: 'piece';
CONTAINS: 'contains';
SPLIT: 'split';
SPLIT_AT_FIRST: 'split at first';
SPLIT_AT_ANY: 'split at any';
SPLIT_AT_FIRST_OF_ANY: 'split at first of any';
// AT: 'at';
// AT_LIST: 'at (list)';
SPLIT_AT_SPACES: 'split at spaces';
SEGMENT: 'segment';
// START: 'start';
REPLACE_ALL: 'replace all';
REPLACEMENT: 'replacement';
OBFUSCATED_TEXT: 'Obfuscated Text';
IS_A_STR: 'is a string?';
// THING: 'thing';
REVERSE: 'reverse';
MAPPINGS: 'mappings';
IN_TEXT: 'in text';
PREFERRING: 'preferring';
LONGEST_STRING_FIRST: 'longest string first';
DICTIONARY: 'dictionary';
// ORDER: 'order';


//lists
// CREATE_EMPTY_LIST: ('create empty ')? 'list';
// MAKE_LIST: 'make a list';
// // LIST: 'list';
// ADD_ITEMS_TO_LIST: 'add items to list';
// // ITEM: 'item';
// IS_IN_LIST: 'is in list?';
// LENGTH_OF_LIST: 'length of list';
// IS_LIST_EMPTY: 'is list empty?';
// PICK_A_RANDOM_ITEM: 'pick a random item';
// INDEX_IN_LIST: 'index in list';
// SELECT_LIST_ITEM: 'select list item';
// // INDEX: 'index';
// REPLACE_LIST_ITEM: 'replace list item';
// REMOVE_LIST_ITEM: 'remove list item';
// APPEND_TO_LIST: 'append to list';
// COPY_LIST: 'copy list';
// IS_A_LIST: 'is a list?';
// REVERSE_LIST: 'reverse list';
// LIST_TO_CSV_ROW: 'list to csv row';
// LIST_TO_CSV_TABLE: 'list to csv table';
// LIST_FROM_CSV_ROW: 'list from csv row';
// LIST_FROMCSV_TABLE: 'list from csv table';
// LOOK_UP_IN_PAIRS: 'look up in pairs';
// JOIN_ITEMS_USING_SEPARATOR: 'join items using separator';

//Colors
// COLOR: 'color';
// MAKE_COLOR: 'make color';
// SPLIT_COLOR: 'split color';
// BLACK: 'black';
// BLUE: 'blue';
// WHITE: 'white';
// MAGENTA: 'magenta';
// RED: 'red';
// LIGHT_GRAY: 'light_gray';
// PINK: 'pink';
// GRAY: 'gray';
// ORANGE: 'orange';
// DARK_GRAY: 'dark_gray';
// YELLOW: 'yellow';
// GREEN: 'green';
// CYAN: 'cyan';


// //Generic Component Block Stuff
// OF_COMPONENT: 'of_component:';
// FOR_COMPONENT: 'for_component:';
// COMPONENT: 'component';




// INTEGER
fragment DIGIT : ('0'..'9');
fragment HEX_DIGIT : (DIGIT | 'a'..'f' | 'A'..'F');
// INT : ((DIGIT)+ | '0x' (HEX_DIGIT)+);
NUMBER : ((DIGIT* DOT DIGIT+) | (DIGIT+ (DOT)?) | ('0x' (HEX_DIGIT)+));
NEG_NUM : MINUS NUMBER;


fragment ALPHA : ('a' .. 'z' | 'A' .. 'Z');
fragment ALPHA_NUM: ALPHA | DIGIT;
// OTHER CHARACTERS
fragment ESC :  '\\' .;



// identifiers
COMPONENT_PROPERTY: ID DOT ID;
//PROC_DECL: CALL? ID;
//VAR: ID;
ID : (ALPHA | '_') (ALPHA | '_' | DIGIT)*;


// STRING
STRING: ('\'' (ESC | ~('\\' | '\n' | '\''))* '\'')
	| ('"' (ESC | ~('\\' | '\n' | '"'))* '"');

// HEX
// 	: '#' ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM
// 	;

