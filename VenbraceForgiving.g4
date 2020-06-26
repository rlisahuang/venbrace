/*
Forgiving grammar for Venbrace. 

Author: Lyn Turbak, based on Qianqian's Venbrace.g4

History: 

* [2020/06/26, lyn] 
  + Added test_decl_blocks for multiple top-level decls in Venbrace translation task
  + Add the following (and associated socket labels)
     REPLACE_ALL 
     DOWNCASE
     INDEX_IN_LIST 
  + Remove SEGMENT added yesterday by Qianqian

* [2020/06/24, lyn] Allow `global var` in getterAbbreviated (bug noticed by Qianqian).

* [2020/06/24, lyn] Modify handling of get to allow `get(a)`, 
  `get (global a)`, `get global (a)` and variants with different braces. 

* [2020/06/23-24, lyn] Handle insertion/deletion/correction of expression braces. 
  This requires naming some productions to be able to refer to them in 
  ForgivingTokensVisitor. 

* [2020/06/21-22, lyn] Added forgiving handling of expressions, including operator 
  precedence, base on my experimentation with a smaller expression grammar in 
  ~fturbak/Projects/antlr4/Prec/Prec8.g4. However, neglected to handle
  insertion/deletion/correction of expression braces 

* [2020/06/21, lyn] Added forgiving handling of expressions, including operator 
  precedence, base on my experimentation with a smaller expression grammar in 
  ~fturbak/Projects/antlr4/Prec/Prec8.g4.

* [2020/06/16-18, lyn] First draft handles decl_blocks, suites, and statement_blocks.
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

// For Venbrace study testing of top-level decl blocks w/o EOF 
test_decl_blocks: (decl_block)*
  ;

// rule for testing single blocks
test_program: 
    decl_block 
  | stat_block 
  | expr_block 
  ;

// rule for testing multiple blocks explicitly introduced by explicit 
// `decl`, `stat`, or `expr` keyword (which reduces amiguities across 
// multiple test expressions when testing.)
test_top_blocks: top_block+ ; 

top_block: 
    'decl' decl_block
  | 'stat' stat_block
  | 'expr' expr_block
  ; 

// Like test_top_block, but allows *optional* `decl`, `stat`, or `expr` keyword
// This takes a tad longer to parse than test_top_blocks, even with 
// the explicit keywords.
test_blocks: block+ ; 

block: 
    'decl'? decl_block
  | 'stat'? stat_block
  | 'expr'? expr_block
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

global_decl: init_keyword global_decl_keyword ID TO? expr_block ;

init_keyword: INITIALIZE | INIT ;

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
   (init_keyword local_decl_keyword ID TO? expr_block)+ IN? suite
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
    SET GLOBAL? ID TO? expr_block // Only allow global with ID
  | SET COMPONENT_PROPERTY TO? expr_block
  ;

// [2020/06/21] Parens-optional version of expression with a relatively standard 
// precedence hiearchy, except that args to prefix operators allow 
// parenthesization of low-precedence operators. May want to revisit this
// decision based on testing with bad Round 1 and Round 2 inputs. 
expr_block: 
    and_expr                 // Dont name this: #andExprBogus // lowest precedence level 
                             // Want this rule still name expr_block!
  ; 

and_expr: 
    or_expr                  #orExprBogus // ascend to higher precedence level 
  | <assoc=right> and_expr AND and_expr #andExpr
    // Lyn thinks right associativity here is more natural in App Inventor than 
    // standard left associativity. But this can be easily changed to left associativity 
    // by removing <assoc=right> decl.
  ; 

or_expr: 
    math_compare_expr        #mathCompareExprBogus // ascend to higher precedence level 
  | <assoc=right> or_expr OR or_expr #orExpr
    // Lyn thinks right associativity here is more natural in App Inventor than 
    // standard left associativity. But this can be easily changed to left associativity 
    // by removing <assoc=right> decl.
  ; 

math_compare_expr: 
    add_sub_expr             #addSubExprBogus // ascend to higher precedence level 
  | add_sub_expr math_compare_op add_sub_expr  #mathCompareExpr
    // No recursion with math_rel_op since doesn't make sense 
    // for relops to have other relops as args.
  ;

math_compare_op: LT | LE | EQ | NEQ | GE | GT ; 

/* 

// [2020/06/21, lyn] commented these out because can't currently disctinguish 
// logic operators = or != from same math operators in Venbrace.
// Ideas for handling this: 
//   * use keyword `logic` or `compare` at beginning of block 
//   * use operator symbols like logic=, log= or L= 

logic_compare_expr: LPAREN a=expr_block logic_compare_op b=expr_block RPAREN; 

logic_compare: EQ | NEQ ;  

 */

add_sub_expr:
    mul_div_expr             #mulDivExprBogus // ascend to higher precedence level 
  | mul_div_expr (PLUS add_sub_expr)+  #mutableAddExpr // addition with >=2 args (can't handle <= arg
                                                       // but it's silly for AppInventor to support this!)
  | add_sub_expr NEG_NUM     #subNegNumExpr // special case binary subtraction
  | <assoc=right> add_sub_expr MINUS add_sub_expr #subExpr // binary subtraction
    // Lyn thinks right associativity here is more natural in App Inventor than 
    // standard left associativity. But this can be easily changed to left associativity 
    // by removing <assoc=right> decl.
  ;

mul_div_expr: 
    pow_expr                 #powExprBogus // ascend to higher precedence level 
  | pow_expr (MUL mul_div_expr)+ #mutableMulExpr  // multiplication with >=2 args (can't handle <= arg
                                                  // but it's silly for AppInventor to support this!)
  | <assoc=right> mul_div_expr DIV mul_div_expr #divExpr // binary division
    // Lyn thinks right associativity here is more natural in App Inventor than 
    // standard left associativity. But this can be easily changed to left associativity 
    // by removing <assoc=right> decl.
  ;

pow_expr: 
    core_expr                #coreExprBogus // ascend to higher precedence level 
  | <assoc=right> pow_expr POW pow_expr #powExpr // Right associativity is standard for exponentiation
  ; 

// Core expressions with optional (due to "forgivingness")  braces
core_expr: 
    getter                   #getterExpr
  | control_expr             #controlExpr
  | not_expr                 #notExpr
  | math_expr                #mathExpr
  | str_expr                 #strExpr
  | list_expr                #listExpr
  | call_procedure_expr      #callProcedureExpr
  | local_var_decl_expr      #locaVarDeclExpr // [2020/06/15, lyn] Added for testing (not used in Round 2)
  | atom                     #atomExpr
  | ((LPAREN RPAREN) 
     | (LCURLY RCURLY)
     | (LSQR RSQR))          #emptyExpr // special case for empty expression 
  | LPAREN expr_block RPAREN #parensExpr // Explict parens
  | LCURLY expr_block RCURLY #curliesExpr // Explict curlies; wrong, but allowed by forgiving parser
  | LSQR expr_block RSQR     #squaresExpr // Explict squares; wrong, but allowed by forgiving parser
  ;

control_expr: if_expr
  | do_expr
  ;

if_expr:
  IF c=expr_block THEN e1=expr_block ELSE e2=expr_block
  ;

do_expr:
  DO suite RESULT expr_block 
  ;

not_expr:
  NOT expr_block
  ; 

// only contains blocks that have no long sequences of helper words
math_expr: 
    min_max 
  | unary_operation
  | mod 
  // | remainder  // Lyn sez: AI2 does *not* have a remainder op, only modulo of
  // | quotient  // Lyn sez: AI2 does *not* have a quotient op, only /
  | trig 
  // | atan2  // Lyn sez: atan2 problematics because of x and y keywords. Punting for now. 
  ;

/* // [2020/06/21, lyn] Commented out becase mutable_op and immutable_op now handled 
   // as part of precedence chain above

mutable_op:
    LPAREN a=expr_block (PLUS b=expr_block)+ RPAREN
  | LPAREN a=expr_block (MUL b=expr_block)+ RPAREN
  ;

immutable_op:
    LPAREN a=expr_block (MINUS | DIV | POW) b=expr_block RPAREN #immutable_regular_case
  | LPAREN expr_block NEG_NUM RPAREN #immutable_neg_num_special_case 
  ; 
*/

min_max: (MIN | MAX) expr_block*
  ;

// only contains blocks without long sequences of helper words
unary_operation: unary_op expr_block ;

unary_op: 
     SQRT 
   | ABS 
   | NEG 
   | LOG 
   | EULER
   | ROUND
   | CEILING
   | FLOOR
   ;

mod: MODULO OF expr_block DIV expr_block ;

/* // Lyn sez: AI2 does *not* have remainder or quotient operations. 
remainder:
  LPAREN REMAINDER OF a=expr_block DIV b=expr_block RPAREN
  ;

quotient:
  LPAREN QUOTIENT OF a=expr_block DIV b=expr_block RPAREN
  ;
 */

trig: trig_op expr_block ; 

trig_op: 
    SIN 
  | COS 
  | TAN 
  | ASIN 
  | ACOS 
  | ATAN
  ; 


/* // Lyn sez: atan2 is problematic because of x and y keywords. 
   // Punting it for now
atan2:
  LPAREN ATAN2 // (y='y')? 
         y_expr=expr_block // (x='x')? 
         x_expr=expr_block RPAREN 
  ;
 */

str_expr: str_join 
  | str_length  
  | str_reverse  
  | str_downcase
  | str_split_at_spaces 
  // | str_segment // added by Qianqian
  | str_replace_all
  ;

str_length: LENGTH expr_block ;

str_join:JOIN expr_block* ;

str_reverse: REVERSE expr_block ; 

str_downcase: DOWNCASE expr_block ; 

str_split_at_spaces: SPLIT_AT_SPACES expr_block ; 

// 06-25-2020 added by Qianqian based on material update
// [2020-06/26, lyn] Commented out because uses SEGMENT operator as socket label
//   and SEGMENT itself is a string operator
// str_segment: SEGMENT label? expr_block label? expr_block label? expr_block;

// [2020-06/26, lyn] added for Round 2
str_replace_all: 
    REPLACE_ALL TEXT? expr_block 
                SEGMENT? expr_block 
                REPLACEMENT? expr_block ;

// [2020-06/26, lyn] added for Round 2
list_expr: index_in_list; 

// [2020-06/26, lyn] added for Round 2
// Warning: LIST socket label could also be shortened keyword
// for MAKE_A_LIST and EMPTY_LIST
index_in_list: INDEX_IN_LIST THING? expr_block LIST? expr_block ; 


getter: GLOBAL? ID      #getterAbbrev
  | GET GLOBAL? ID      #getterVerbose
  | getter_inner_braces #getterInnerBraces
  ;

getter_inner_braces:   // Allow get(num) for (get num)
                       // Note; unary operations like sin(num) already work 
                       // because unary operand is an expr_block
                       // and both num and (num) are expr_blocks.
                       // But get is *not* like a unary operator, so we need
                       // these special cases. 
    GET LPAREN GLOBAL? ID RPAREN 
  | GET LCURLY GLOBAL? ID RCURLY
  | GET LSQR GLOBAL? ID RSQR
  | GET GLOBAL? LPAREN ID RPAREN 
  | GET GLOBAL? LCURLY ID RCURLY
  | GET GLOBAL? LSQR ID RSQR
  ;

call_procedure_expr:
  // CALL required for Round 2
  CALL (ID | component=ID DOT method=ID) (label? arg=expr_block)* 
  ;

// [2020/06/15] Added by Lyn for testing (not used in Round 2)
local_var_decl_expr:
   (INITIALIZE LOCAL ID TO? init=expr_block)+ IN? body=expr_block 
   ;

atom: 
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
// TEXT: 'text';
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
// SEGMENT: 'segment';
// START: 'start';
REPLACE_ALL: 'replace all';
TEXT: 'text';
SEGMENT: 'segment';
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
INDEX_IN_LIST: 'index in list';
THING: 'thing';
LIST: 'list';

// CREATE_EMPTY_LIST: ('create empty ')? 'list';
// MAKE_LIST: 'make a list';
// // LIST: 'list';
// ADD_ITEMS_TO_LIST: 'add items to list';
// // ITEM: 'item';
// IS_IN_LIST: 'is in list?';
// LENGTH_OF_LIST: 'length of list';
// IS_LIST_EMPTY: 'is list empty?';
// PICK_A_RANDOM_ITEM: 'pick a random item';
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

