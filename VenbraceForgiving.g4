/*
Venbrace grammar (simplified version)

Author: Lyn Turbak 

History: 
[2020/06/16-18, lyn] First draft handles decl_blocks, suites, and statement_blocks.
  Expressions are *not* yet handles, nor are insertions of GLOBAL and LOCAL
  after INITIALIZE. See notes below 

IMPORTANT: To compile this file with antlr4 use 

     antlr4 -Dlanguage=JavaScript -visitor VenbraceForgiving.g4

 In particular:

   * The `language = 'JavaScript';` option has been commented out
   * The -visitor option *must be specified.

 To see this parser in action, go to these web pages:

   * http://localhost:8000/ForgivingTokens.html
   * http://localhost:8000/venbrace-test.html

Notes: 

   This is "forgiving" parser for Venbrace that

  * Inserts missing required braces:

    + Some inserted braces are nonambiguous, as in 
          to count n do set Counter.Text to n + Counter.Text
      => [to count n do {set Counter.Text to (n + Counter.Text)}]

    + Some inserted braces are ambiguous, as for 

        [when Button1.click do 
           if (a < 10) then
             set b 12
             set c 12]

      which can be parsed as 

        [when Button1.click do 
           {if (a < 10) then
              {set b 12}
              {set c 12}}]

      or as 

        [when Button1.click do 
           {if (a < 10) then
              {set b 12}}
           {set c 12}]

      The forgiving parser chooses the first option. E.g., the innermost suite
      gobbles up as many statements as it can by default. 

      Expressions are not handled yet, but when they are

         max neg a + b c * d 

      will be parsed  as
       
         (max (neg (a + b)) (c * d))

      which has many other parsings, like ((max ((neg a) + b) c) * d)

    + Some inserted braces are justified by traditional precedence rules, as in 
         (a + b * c ^ d + e / f) => (a + (b * (c ^ d)) + (e / f))
      [This is not handled yet, but will be when expressions are done.]

  * Deletes incorrect extra brace tokens, e.g. 

       {if (a < b) then { {set c to d} {set e to f} } }
    => {if (a < b) then {set c to d} {set e to f} }

    (Actually, it will keep the extra tokens, but mark them as deleted.)

  * Corrects wrong type braces by changing the token type.  E.g. 
       (set a to {1 + 2}) => {set a to (1 + 2)}

  * Converts expr_block NEG_NUM to expr_block MINUS <positive version of NEG_NUM>,
    where new MINUS token is marked pas inserted and the <positive version of NEG_NUM>
    token is marked as corrected. 

  * Marks any optional token as being optional. 

  I experimented with inserting missing GLOBAL or LOCAL token after INITIALIZE/INIT,
  but there's no way I can see (yet) to make this work. Why? Consider something like

      when Button1.Click do init num ...

  The problem is that when parsing decls, the parser is happy to make
  the `do` suite empty and tries to turn the `init num ...` into a
  top-level GLOBAL declaration even though it's local!

      [when Button1.Click do] // Effectively Inserted brackets
      [init global num ... ] // Effectively Inserted brackets

  I tried many attempts to make the suite nonempty without luck.  The
  essential issue is (1) that both global and local decls begin with
  init/initialize and there is no *required* {} for an empty
  sequence. Changing either of these might make it possible. I still
  don't "get" why it's happier to chose an empty suite and go on to
  the next decl_block as opposed to trying a non-empty suite.  Indeed,
  even if global is required and only local can be inserted, the ANTLR
  error correction mechanism tries to insert GLOBAL in this situation

  There might be some magic with semantic predicates that force
  parsing to prefer init local in this situation, or require init
  global to begin with a square, or do something special with error
  handling; these are worthy of future exploration.

  The ForgivingTokensVisitor associated with this grammer generates:

    1. A sequence of tokens that can be marked as 

         + 'inserted' for new tokens inserted by the parser.
         + 'deleted' for tokens deleted by the parser. 
         + 'corrected' for tokens whose text is corrected by the parser
           (along with the previous text that was corrected). 
         + optional for tokens that are optional in the grammar. 

    2. A program string that matches the sequence of tokens in terms of
       start/stop/line/column position information.  This is necessary 
       for handling inserted, deleted, and corrected tokens

  See ForgivingTokensVisitor.js for more information. 

*/

// ==========GRAMMAR MACROS==========
grammar VenbraceForgiving;

options
{
  // language = 'JavaScript'; 
  // tokenVocab=VenbraceLexer;
}

@lexer::members{
	var errors = [];

  var VenbraceLexer = VenbraceForgivingLexer;

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

  var VenbraceParser = VenbraceForgivingParser;

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

program: (decl_block)* EOF
  ;

// rule for testing single blocks
test_program: 
    decl_block 
  | stat_block 
  | expr_block 
  ;

// rule for testing multiple blocks
test_blocks: 
  (  decl_block | stat_block | expr_block )+ 
  ;

decl_block: 
    declLbrace=LSQR decl declRbrace=RSQR
  | declLbrace=LCURLY decl declRbrace=RCURLY
  | declLbrace=LPAREN decl declRbrace=RPAREN
  | decl
  ; 

// This following rule is *very* forgiving for declarations. 
//
// lbrace* decl rbrace*
// 
// but ended up causing problems in testing of forgiving parser, 
// so I removed it. 
// 
// It does not require matched types or numbers of braces on either side of the decl. 
// Any (possibly empty) sequence of left braces is allowed to the left of decl, 
// and any (possibly empty) sequence of right braces is allowed to the right of decl. 
// The ForgivingTokenVisitor attempts to deal with all situations, 
// inserting, changing, or deleting tokens as necessary.
// 
// One downside of this rule is that when parsing sequences of any top-level blocks
// for testing (as opposed to sequences of top-level decl blocks)
// statements in a suite can end up as top-level blocks with the suite
// being empty or shorter than usual. 
//
// lbrace: LPAREN | LCURLY | LSQR;
// rbrace: RPAREN | RCURLY | RSQR;

decl: 
    global_decl
  | procedure_do
  | procedure_result
  | event_handler
  ;

global_decl: 
  (INIT | INITIALIZE) global_decl_keyword ID TO? expr_block 
  ;

// [2020/06/17] Split this out into a separate rule as part of experiment 
// for automatically inserting missing GLOBAL in a top-level decl. 
// But its a BAD IDEA, because it interacts badly with automatically
// inserting missing LOCAL in local var decls. In particular, cases like
//
//   when Button1.Click do init num 17
// 
// end up being parsed as 
//  
//   [when Button1.Click do] // empty suite
//   [init global num to 17] // creates new top-level decl rather than local decl!
// 
global_decl_keyword: GLOBAL // Require this!
  ; 

procedure_do: 
  TO proc_name=ID (arg_name=ID)* DO? suite
  ;

procedure_result:
  TO proc_name=ID (arg_name=ID)* RESULT? expr_block
  ;

event_handler:
  WHEN COMPONENT_PROPERTY (param_name=ID)* DO? suite
  ;

// This rule allows zero or one matched pair of braces (of any type) around a suite.
// The ForgivingTokenVisitor will correctly delete all such braces, except for the 
// special empty sequence case of LCURLY RCURLY. 
suite: 
    stat_block* // Put this *first* so will by default associate braces with 
                // statements in stat_block* rather than for suite
  | suiteLbrace=LCURLY stat_block* suiteRbrace=RCURLY // Encompasses special LCURLY RCURLY case
  | suiteLbrace=LSQR stat_block* suiteRbrace=RSQR
  | suiteLbrace=LPAREN stat_block* suiteRbrace=RPAREN

  ;

// This rule allows zero or one matched pair of braces (of any type) around a statement. 
// The ForgivingTokenVisitor will correctly deal with all situations, 
// inserting, changing, or deleting tokens as necessary.
stat_block: 
    statLbrace=LCURLY stat statRbrace=RCURLY 
  | statLbrace=LSQR stat statRbrace=RSQR
  | statLbrace=LPAREN stat statRbrace=RPAREN
  | stat
  ;      
/*
stat_block: 
    statLbrace=lbrace stat statRbrace=rbrace?
  | stat
  ;      
*/

stat: control_stat
  | call_procedure_stat
  | var_stat
  | local_var_decl_stat // [2020/06/15] Added by Lyn for testing (not used in Round 2)
  ;

// STATEMENT BLOCKS
/* Feb 28, 2020: keep only if_stat for study 1 */

// list_stat: ADD_ITEMS_TO_LIST label? expr_block label? expr_block;

control_stat: if_stat 
  | for_each_from_to 
  | while_stat 
  ;

if_stat: 
  IF e1=expr_block THEN s1=suite 
  (ELSE_IF e2=expr_block THEN s2=suite)*
  (ELSE s3=suite)?
  ;

for_each_from_to:
  FOREACH ID 
    FROM? from=expr_block 
    TO? to=expr_block 
    BY? by=expr_block 
    DO? suite
  ;

while_stat:
  WHILE TEST? expr_block DO? suite 
  ;

call_procedure_stat:
  CALL ID (label? arg=expr_block)*
  ;

var_stat:
  setter 
  ;

// [2020/06/15] Added by Lyn for testing (not used in Round 2)
local_var_decl_stat:
   (INITIALIZE local_decl_keyword ID TO? expr_block)+ IN? suite
   ;

// [2020/06/17, lyn] Split this out into a separate rule as part of experiment 
// for automatically inserting missing LOCAL in a local declaration. 
// But this is a BAD IDEA, because it interacts badly with 
// other aspects of forgiving parser, which wants to interpret any
// `init var to ...` as `init global var to ...` in the context of a suite,
// which can be made empty and allow a following decl. E.g. 
//
//   when Button1.Click do init num 17
// 
// ends up being parsed as 
//  
//   [when Button1.Click do] // empty suite
//   [init global num to 17] // parser error correction inserts a global for missing local!
// 
// This is *nasty*. I dont see any way around it *except* to insert 
// LOCAL tokens in token stream 
local_decl_keyword: LOCAL // Actually required due to reasoning above. 
  ; 

// 05/04/2020: although GLOBAL setter is implemented, it is not used in the translation tasks of study 1
setter:
  SET GLOBAL? target=(ID | COMPONENT_PROPERTY) TO? expr_block
  ;

expr_block: LPAREN RPAREN
  | atom 
  | expr 
  ;

expr: getter 
  | control_expr
  | logic_expr
  | not_expr
  | compare_eq_expr
  | compare_math_expr
  | math_expr
  | str_expr
  | call_procedure_expr
  | local_var_decl_expr // [2020/06/15] Added by Lyn for testing (not used in Round 2)
  | atom
  ;

control_expr: if_expr
  | do_expr
  ;

if_expr:
  LPAREN IF c=expr_block THEN e1=expr_block ELSE e2=expr_block RPAREN
  ;

do_expr:
  LPAREN DO suite RESULT expr_block RPAREN
  ;

logic_expr:
  LPAREN a=expr_block (AND | OR) b=expr_block RPAREN
  ;

not_expr:
  LPAREN NOT expr_block RPAREN
  ; 

compare_eq_expr:
  LPAREN a=expr_block (LOGIC_EQ | LOGIC_NOT_EQ) b=expr_block RPAREN
  ;

compare_math_expr: 
  LPAREN a=expr_block (EQ | NEQ | GT | GE | LT | LE) b=expr_block RPAREN
  ;

// only contains blocks that have no long sequences of helper words
math_expr: mutable_op 
  | immutable_op 
  | min_max 
  | unary_op 
  | mod 
  | remainder  
  | quotient 
  | trig 
  | atan2
  ;

mutable_op:
    LPAREN a=expr_block (PLUS b=expr_block)+ RPAREN
  | LPAREN a=expr_block (MUL b=expr_block)+ RPAREN
  ;

immutable_op:
    LPAREN a=expr_block (MINUS | DIV | POW) b=expr_block RPAREN #immutable_regular_case
  | LPAREN expr_block NEG_NUM RPAREN #immutable_neg_num_special_case 
  ; 

min_max:
  LPAREN (MIN | MAX) expr_block* RPAREN 
  ;

// only contains blocks without long sequences of helper words
unary_op:
  LPAREN 
  (SQRT 
   | ABS 
   | NEG 
   | LOG 
   | EULER
   | ROUND
   | CEILING
   | FLOOR)
   expr_block 
   RPAREN
   ;

mod:
  LPAREN MODULO OF a=expr_block DIV b=expr_block RPAREN
  ;

remainder:
  LPAREN REMAINDER OF a=expr_block DIV b=expr_block RPAREN
  ;

quotient:
  LPAREN QUOTIENT OF a=expr_block DIV b=expr_block RPAREN
  ;

trig:
  LPAREN 
  (SIN 
  | COS 
  | TAN 
  | ASIN 
  | ACOS 
  | ATAN)
  expr_block 
  RPAREN
  ;

atan2:
  LPAREN ATAN2 // (y='y')? 
         y_expr=expr_block // (x='x')? 
         x_expr=expr_block RPAREN 
  ;

str_expr: str_join 
  | str_length  
  | str_reverse  
  | str_split_at_spaces 
  ;

str_length:
  LPAREN LENGTH expr_block RPAREN 
  ;

str_join:
  LPAREN JOIN expr_block* RPAREN
  ;

str_reverse:
  LPAREN REVERSE expr_block RPAREN
  ; 

str_split_at_spaces:
  LPAREN SPLIT_AT_SPACES expr_block RPAREN
  ;

getter: ID
  | LPAREN GET GLOBAL? ID RPAREN
  ;

call_procedure_expr:
  // CALL required for Round 2
  LPAREN CALL (ID | component=ID DOT method=ID) 
              (label? arg=expr_block)* RPAREN
  ;

// [2020/06/15] Added by Lyn for testing (not used in Round 2)
local_var_decl_expr:
   LPAREN (INITIALIZE LOCAL? ID TO? init_val=expr_block)* IN? body=expr_block RPAREN
   ;

atom: atom_elements
  | LPAREN atom_elements RPAREN
  ;

atom_elements:
    NUMBER 
  | NEG_NUM
  | STRING 
  | TRUE 
  | FALSE 
  | COMPONENT_PROPERTY
  ;

label: ID
  ;


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
INIT: 'init';
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

// COMMENTS:
// [2020/06/16] Lyn added line comments (not tied to this syntax)
// Note use of nongreedy *?; see ANTLR Reference p. 283
LINECOMMENT: '//' .*? '\n' -> channel(HIDDEN) ; 

// [2020/06/16] Lyn added nestable block comments (not tied to this syntax)
// Got this from Stack overflow, which claims that Terrence Parr does this in Swift grammar:
// https://stackoverflow.com/questions/27539351/how-to-handling-nested-comments-in-antlr-lexer
// Note use of nogreedy *?; see ANTLR Reference p. 283
BLOCKCOMMENT: '/*' (BLOCKCOMMENT|.)*? '*/' -> channel(HIDDEN) ;


// STRING
STRING: ('\'' (ESC | ~('\\' | '\n' | '\''))* '\'')
	| ('"' (ESC | ~('\\' | '\n' | '"'))* '"');


// HEX
// 	: '#' ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM
// 	;

