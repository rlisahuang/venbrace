// Generated from /Users/lisa/Desktop/app_inventor/venbrace/VenbraceForgiving.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class VenbraceForgivingParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, WS=4, LCURLY=5, RCURLY=6, LPAREN=7, RPAREN=8, 
		LSQR=9, RSQR=10, COMMA=11, DIVIDER=12, DOT=13, ASSIGN=14, COLON=15, TRUE=16, 
		FALSE=17, WHEN=18, IF=19, THEN=20, ELSE=21, ELSE_IF=22, FOREACH=23, DO=24, 
		RESULT=25, TO=26, CALL=27, GET=28, SET=29, GLOBAL=30, INITIALIZE=31, INIT=32, 
		LOCAL=33, IN=34, BY=35, FROM=36, WHILE=37, TEST=38, EVAL_BUT_IGNORE_RESULT=39, 
		OPEN_ANOTHER_SCREEN=40, OPEN_ANOTHER_SCREEN_WITH_START_VALUE=41, CLOSE_SCREEN=42, 
		CLOSE_SCREEN_WITH_VALUE=43, CLOSE_SCREEN_WITH_PLAIN_TEXT=44, CLOSE_APPLICATION=45, 
		SCREEN_NAME=46, START_VALUE=47, BREAK=48, GET_START_VALUE=49, GET_PLAIN_START_TEXT=50, 
		NOT=51, AND=52, OR=53, XOR=54, LT=55, GT=56, LE=57, GE=58, EQ=59, NEQ=60, 
		LOGIC_EQ=61, LOGIC_NOT_EQ=62, PLUS=63, MINUS=64, MUL=65, DIV=66, POW=67, 
		DECIMAL=68, BINARY=69, OCTAL=70, HEXADECIMAL=71, BITWISE=72, SQRT=73, 
		ABS=74, NEG=75, LOG=76, EULER=77, ROUND=78, CEILING=79, FLOOR=80, RANDOM_INTEGER=81, 
		RANDOM_FRACTION=82, MIN=83, MAX=84, MODULO=85, REMAINDER=86, QUOTIENT=87, 
		OF=88, CONVERT=89, SIN=90, COS=91, TAN=92, ASIN=93, ACOS=94, ATAN=95, 
		ATAN2=96, JOIN=97, LENGTH=98, IS_EMPTY=99, COMPARE_TEXTS=100, TRIM=101, 
		UPCASE=102, DOWNCASE=103, STARTS_AT=104, CONTAINS=105, SPLIT=106, SPLIT_AT_FIRST=107, 
		SPLIT_AT_ANY=108, SPLIT_AT_FIRST_OF_ANY=109, SPLIT_AT_SPACES=110, SEGMENT=111, 
		REPLACE_ALL=112, REPLACEMENT=113, OBFUSCATED_TEXT=114, IS_A_STR=115, REVERSE=116, 
		MAPPINGS=117, IN_TEXT=118, PREFERRING=119, LONGEST_STRING_FIRST=120, DICTIONARY=121, 
		NUMBER=122, NEG_NUM=123, COMPONENT_PROPERTY=124, ID=125, LINECOMMENT=126, 
		BLOCKCOMMENT=127, STRING=128;
	public static final int
		RULE_program = 0, RULE_test_program = 1, RULE_test_top_blocks = 2, RULE_top_block = 3, 
		RULE_test_blocks = 4, RULE_block = 5, RULE_decl_block = 6, RULE_decl = 7, 
		RULE_global_decl = 8, RULE_init_keyword = 9, RULE_global_decl_keyword = 10, 
		RULE_procedure_do = 11, RULE_procedure_result = 12, RULE_event_handler = 13, 
		RULE_suite = 14, RULE_stat_block = 15, RULE_stat = 16, RULE_control_stat = 17, 
		RULE_if_stat = 18, RULE_for_each_from_to = 19, RULE_while_stat = 20, RULE_call_procedure_stat = 21, 
		RULE_var_stat = 22, RULE_local_var_decl_stat = 23, RULE_local_decl_keyword = 24, 
		RULE_setter = 25, RULE_expr_block = 26, RULE_and_expr = 27, RULE_or_expr = 28, 
		RULE_math_compare_expr = 29, RULE_math_compare_op = 30, RULE_add_sub_expr = 31, 
		RULE_mul_div_expr = 32, RULE_pow_expr = 33, RULE_core_expr = 34, RULE_control_expr = 35, 
		RULE_if_expr = 36, RULE_do_expr = 37, RULE_not_expr = 38, RULE_math_expr = 39, 
		RULE_min_max = 40, RULE_unary_operation = 41, RULE_unary_op = 42, RULE_mod = 43, 
		RULE_trig = 44, RULE_trig_op = 45, RULE_str_expr = 46, RULE_str_length = 47, 
		RULE_str_join = 48, RULE_str_reverse = 49, RULE_str_split_at_spaces = 50, 
		RULE_str_segment = 51, RULE_getter = 52, RULE_getter_inner_braces = 53, 
		RULE_call_procedure_expr = 54, RULE_local_var_decl_expr = 55, RULE_atom = 56, 
		RULE_label = 57;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "test_program", "test_top_blocks", "top_block", "test_blocks", 
			"block", "decl_block", "decl", "global_decl", "init_keyword", "global_decl_keyword", 
			"procedure_do", "procedure_result", "event_handler", "suite", "stat_block", 
			"stat", "control_stat", "if_stat", "for_each_from_to", "while_stat", 
			"call_procedure_stat", "var_stat", "local_var_decl_stat", "local_decl_keyword", 
			"setter", "expr_block", "and_expr", "or_expr", "math_compare_expr", "math_compare_op", 
			"add_sub_expr", "mul_div_expr", "pow_expr", "core_expr", "control_expr", 
			"if_expr", "do_expr", "not_expr", "math_expr", "min_max", "unary_operation", 
			"unary_op", "mod", "trig", "trig_op", "str_expr", "str_length", "str_join", 
			"str_reverse", "str_split_at_spaces", "str_segment", "getter", "getter_inner_braces", 
			"call_procedure_expr", "local_var_decl_expr", "atom", "label"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'decl'", "'stat'", "'expr'", null, "'{'", "'}'", "'('", "')'", 
			"'['", "']'", "','", "'==='", "'.'", "'<-'", "':'", "'true'", "'false'", 
			"'when'", "'if'", "'then'", "'else'", "'else if'", "'for each'", "'do'", 
			"'result'", "'to'", "'call'", "'get'", "'set'", "'global'", "'initialize'", 
			"'init'", "'local'", "'in'", "'by'", "'from'", "'while'", "'test'", "'evaluate but ignore'", 
			"'open another screen'", "'open another screen with start value'", "'close screen'", 
			"'close screen with value'", "'close screen with plain text'", "'close application'", 
			"'screenName'", "'startValue'", "'break'", "'get start value'", "'get plain start text'", 
			"'not'", "'and'", "'or'", "'xor'", "'<'", "'>'", "'<='", "'>='", "'='", 
			"'!='", null, null, "'+'", "'-'", "'*'", "'/'", "'^'", "'decimal'", "'binary'", 
			"'octal'", "'hexadecimal'", "'bitwise'", "'square root'", "'absolute'", 
			"'neg'", "'log'", "'e^'", "'round'", "'ceiling'", "'floor'", "'random integer'", 
			"'random fraction'", "'min'", "'max'", "'modulo'", "'remainder'", "'quotient'", 
			"'of'", "'convert'", "'sin'", "'cos'", "'tan'", "'asin'", "'acos'", "'atan'", 
			"'atan2'", "'join'", "'length'", "'is empty'", "'compare texts'", "'trim'", 
			"'upcase'", "'downcase'", "'starts at'", "'contains'", "'split'", "'split at first'", 
			"'split at any'", "'split at first of any'", "'split at spaces'", "'segment'", 
			"'replace all'", "'replacement'", "'Obfuscated Text'", "'is a string?'", 
			"'reverse'", "'mappings'", "'in text'", "'preferring'", "'longest string first'", 
			"'dictionary'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "WS", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LSQR", "RSQR", "COMMA", "DIVIDER", "DOT", "ASSIGN", "COLON", "TRUE", 
			"FALSE", "WHEN", "IF", "THEN", "ELSE", "ELSE_IF", "FOREACH", "DO", "RESULT", 
			"TO", "CALL", "GET", "SET", "GLOBAL", "INITIALIZE", "INIT", "LOCAL", 
			"IN", "BY", "FROM", "WHILE", "TEST", "EVAL_BUT_IGNORE_RESULT", "OPEN_ANOTHER_SCREEN", 
			"OPEN_ANOTHER_SCREEN_WITH_START_VALUE", "CLOSE_SCREEN", "CLOSE_SCREEN_WITH_VALUE", 
			"CLOSE_SCREEN_WITH_PLAIN_TEXT", "CLOSE_APPLICATION", "SCREEN_NAME", "START_VALUE", 
			"BREAK", "GET_START_VALUE", "GET_PLAIN_START_TEXT", "NOT", "AND", "OR", 
			"XOR", "LT", "GT", "LE", "GE", "EQ", "NEQ", "LOGIC_EQ", "LOGIC_NOT_EQ", 
			"PLUS", "MINUS", "MUL", "DIV", "POW", "DECIMAL", "BINARY", "OCTAL", "HEXADECIMAL", 
			"BITWISE", "SQRT", "ABS", "NEG", "LOG", "EULER", "ROUND", "CEILING", 
			"FLOOR", "RANDOM_INTEGER", "RANDOM_FRACTION", "MIN", "MAX", "MODULO", 
			"REMAINDER", "QUOTIENT", "OF", "CONVERT", "SIN", "COS", "TAN", "ASIN", 
			"ACOS", "ATAN", "ATAN2", "JOIN", "LENGTH", "IS_EMPTY", "COMPARE_TEXTS", 
			"TRIM", "UPCASE", "DOWNCASE", "STARTS_AT", "CONTAINS", "SPLIT", "SPLIT_AT_FIRST", 
			"SPLIT_AT_ANY", "SPLIT_AT_FIRST_OF_ANY", "SPLIT_AT_SPACES", "SEGMENT", 
			"REPLACE_ALL", "REPLACEMENT", "OBFUSCATED_TEXT", "IS_A_STR", "REVERSE", 
			"MAPPINGS", "IN_TEXT", "PREFERRING", "LONGEST_STRING_FIRST", "DICTIONARY", 
			"NUMBER", "NEG_NUM", "COMPONENT_PROPERTY", "ID", "LINECOMMENT", "BLOCKCOMMENT", 
			"STRING"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "VenbraceForgiving.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }



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

	public VenbraceForgivingParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(VenbraceForgivingParser.EOF, 0); }
		public List<Decl_blockContext> decl_block() {
			return getRuleContexts(Decl_blockContext.class);
		}
		public Decl_blockContext decl_block(int i) {
			return getRuleContext(Decl_blockContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << WHEN) | (1L << TO) | (1L << INITIALIZE) | (1L << INIT))) != 0)) {
				{
				{
				setState(116);
				decl_block();
				}
				}
				setState(121);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(122);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Test_programContext extends ParserRuleContext {
		public Decl_blockContext decl_block() {
			return getRuleContext(Decl_blockContext.class,0);
		}
		public Stat_blockContext stat_block() {
			return getRuleContext(Stat_blockContext.class,0);
		}
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public Test_programContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test_program; }
	}

	public final Test_programContext test_program() throws RecognitionException {
		Test_programContext _localctx = new Test_programContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_test_program);
		try {
			setState(127);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(124);
				decl_block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(125);
				stat_block();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(126);
				expr_block();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Test_top_blocksContext extends ParserRuleContext {
		public List<Top_blockContext> top_block() {
			return getRuleContexts(Top_blockContext.class);
		}
		public Top_blockContext top_block(int i) {
			return getRuleContext(Top_blockContext.class,i);
		}
		public Test_top_blocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test_top_blocks; }
	}

	public final Test_top_blocksContext test_top_blocks() throws RecognitionException {
		Test_top_blocksContext _localctx = new Test_top_blocksContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_test_top_blocks);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(129);
				top_block();
				}
				}
				setState(132); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Top_blockContext extends ParserRuleContext {
		public Decl_blockContext decl_block() {
			return getRuleContext(Decl_blockContext.class,0);
		}
		public Stat_blockContext stat_block() {
			return getRuleContext(Stat_blockContext.class,0);
		}
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public Top_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_top_block; }
	}

	public final Top_blockContext top_block() throws RecognitionException {
		Top_blockContext _localctx = new Top_blockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_top_block);
		try {
			setState(140);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(134);
				match(T__0);
				setState(135);
				decl_block();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(136);
				match(T__1);
				setState(137);
				stat_block();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 3);
				{
				setState(138);
				match(T__2);
				setState(139);
				expr_block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Test_blocksContext extends ParserRuleContext {
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public Test_blocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test_blocks; }
	}

	public final Test_blocksContext test_blocks() throws RecognitionException {
		Test_blocksContext _localctx = new Test_blocksContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_test_blocks);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(142);
				block();
				}
				}
				setState(145); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << TRUE) | (1L << FALSE) | (1L << WHEN) | (1L << IF) | (1L << FOREACH) | (1L << DO) | (1L << TO) | (1L << CALL) | (1L << GET) | (1L << SET) | (1L << GLOBAL) | (1L << INITIALIZE) | (1L << INIT) | (1L << WHILE) | (1L << NOT))) != 0) || ((((_la - 73)) & ~0x3f) == 0 && ((1L << (_la - 73)) & ((1L << (SQRT - 73)) | (1L << (ABS - 73)) | (1L << (NEG - 73)) | (1L << (LOG - 73)) | (1L << (EULER - 73)) | (1L << (ROUND - 73)) | (1L << (CEILING - 73)) | (1L << (FLOOR - 73)) | (1L << (MIN - 73)) | (1L << (MAX - 73)) | (1L << (MODULO - 73)) | (1L << (SIN - 73)) | (1L << (COS - 73)) | (1L << (TAN - 73)) | (1L << (ASIN - 73)) | (1L << (ACOS - 73)) | (1L << (ATAN - 73)) | (1L << (JOIN - 73)) | (1L << (LENGTH - 73)) | (1L << (SPLIT_AT_SPACES - 73)) | (1L << (SEGMENT - 73)) | (1L << (REVERSE - 73)) | (1L << (NUMBER - 73)) | (1L << (NEG_NUM - 73)) | (1L << (COMPONENT_PROPERTY - 73)) | (1L << (ID - 73)) | (1L << (STRING - 73)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public Decl_blockContext decl_block() {
			return getRuleContext(Decl_blockContext.class,0);
		}
		public Stat_blockContext stat_block() {
			return getRuleContext(Stat_blockContext.class,0);
		}
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_block);
		int _la;
		try {
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(147);
					match(T__0);
					}
				}

				setState(150);
				decl_block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__1) {
					{
					setState(151);
					match(T__1);
					}
				}

				setState(154);
				stat_block();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__2) {
					{
					setState(155);
					match(T__2);
					}
				}

				setState(158);
				expr_block();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Decl_blockContext extends ParserRuleContext {
		public Token declLbrace;
		public Token declRbrace;
		public DeclContext decl() {
			return getRuleContext(DeclContext.class,0);
		}
		public TerminalNode LSQR() { return getToken(VenbraceForgivingParser.LSQR, 0); }
		public TerminalNode RSQR() { return getToken(VenbraceForgivingParser.RSQR, 0); }
		public TerminalNode LCURLY() { return getToken(VenbraceForgivingParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(VenbraceForgivingParser.RCURLY, 0); }
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public Decl_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decl_block; }
	}

	public final Decl_blockContext decl_block() throws RecognitionException {
		Decl_blockContext _localctx = new Decl_blockContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_decl_block);
		try {
			setState(174);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LSQR:
				enterOuterAlt(_localctx, 1);
				{
				setState(161);
				((Decl_blockContext)_localctx).declLbrace = match(LSQR);
				setState(162);
				decl();
				setState(163);
				((Decl_blockContext)_localctx).declRbrace = match(RSQR);
				}
				break;
			case LCURLY:
				enterOuterAlt(_localctx, 2);
				{
				setState(165);
				((Decl_blockContext)_localctx).declLbrace = match(LCURLY);
				setState(166);
				decl();
				setState(167);
				((Decl_blockContext)_localctx).declRbrace = match(RCURLY);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(169);
				((Decl_blockContext)_localctx).declLbrace = match(LPAREN);
				setState(170);
				decl();
				setState(171);
				((Decl_blockContext)_localctx).declRbrace = match(RPAREN);
				}
				break;
			case WHEN:
			case TO:
			case INITIALIZE:
			case INIT:
				enterOuterAlt(_localctx, 4);
				{
				setState(173);
				decl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclContext extends ParserRuleContext {
		public Global_declContext global_decl() {
			return getRuleContext(Global_declContext.class,0);
		}
		public Procedure_doContext procedure_do() {
			return getRuleContext(Procedure_doContext.class,0);
		}
		public Procedure_resultContext procedure_result() {
			return getRuleContext(Procedure_resultContext.class,0);
		}
		public Event_handlerContext event_handler() {
			return getRuleContext(Event_handlerContext.class,0);
		}
		public DeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decl; }
	}

	public final DeclContext decl() throws RecognitionException {
		DeclContext _localctx = new DeclContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_decl);
		try {
			setState(180);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(176);
				global_decl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(177);
				procedure_do();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(178);
				procedure_result();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(179);
				event_handler();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Global_declContext extends ParserRuleContext {
		public Init_keywordContext init_keyword() {
			return getRuleContext(Init_keywordContext.class,0);
		}
		public Global_decl_keywordContext global_decl_keyword() {
			return getRuleContext(Global_decl_keywordContext.class,0);
		}
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode TO() { return getToken(VenbraceForgivingParser.TO, 0); }
		public Global_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_decl; }
	}

	public final Global_declContext global_decl() throws RecognitionException {
		Global_declContext _localctx = new Global_declContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_global_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			init_keyword();
			setState(183);
			global_decl_keyword();
			setState(184);
			match(ID);
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TO) {
				{
				setState(185);
				match(TO);
				}
			}

			setState(188);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Init_keywordContext extends ParserRuleContext {
		public TerminalNode INITIALIZE() { return getToken(VenbraceForgivingParser.INITIALIZE, 0); }
		public TerminalNode INIT() { return getToken(VenbraceForgivingParser.INIT, 0); }
		public Init_keywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init_keyword; }
	}

	public final Init_keywordContext init_keyword() throws RecognitionException {
		Init_keywordContext _localctx = new Init_keywordContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_init_keyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			_la = _input.LA(1);
			if ( !(_la==INITIALIZE || _la==INIT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Global_decl_keywordContext extends ParserRuleContext {
		public TerminalNode GLOBAL() { return getToken(VenbraceForgivingParser.GLOBAL, 0); }
		public Global_decl_keywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_decl_keyword; }
	}

	public final Global_decl_keywordContext global_decl_keyword() throws RecognitionException {
		Global_decl_keywordContext _localctx = new Global_decl_keywordContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_global_decl_keyword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(GLOBAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Procedure_doContext extends ParserRuleContext {
		public Token proc_name;
		public Token arg_name;
		public TerminalNode TO() { return getToken(VenbraceForgivingParser.TO, 0); }
		public SuiteContext suite() {
			return getRuleContext(SuiteContext.class,0);
		}
		public List<TerminalNode> ID() { return getTokens(VenbraceForgivingParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(VenbraceForgivingParser.ID, i);
		}
		public TerminalNode DO() { return getToken(VenbraceForgivingParser.DO, 0); }
		public Procedure_doContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedure_do; }
	}

	public final Procedure_doContext procedure_do() throws RecognitionException {
		Procedure_doContext _localctx = new Procedure_doContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_procedure_do);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(TO);
			setState(195);
			((Procedure_doContext)_localctx).proc_name = match(ID);
			setState(199);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(196);
					((Procedure_doContext)_localctx).arg_name = match(ID);
					}
					} 
				}
				setState(201);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			setState(203);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(202);
				match(DO);
				}
				break;
			}
			setState(205);
			suite();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Procedure_resultContext extends ParserRuleContext {
		public Token proc_name;
		public Token arg_name;
		public TerminalNode TO() { return getToken(VenbraceForgivingParser.TO, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public List<TerminalNode> ID() { return getTokens(VenbraceForgivingParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(VenbraceForgivingParser.ID, i);
		}
		public TerminalNode RESULT() { return getToken(VenbraceForgivingParser.RESULT, 0); }
		public Procedure_resultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedure_result; }
	}

	public final Procedure_resultContext procedure_result() throws RecognitionException {
		Procedure_resultContext _localctx = new Procedure_resultContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_procedure_result);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			match(TO);
			setState(208);
			((Procedure_resultContext)_localctx).proc_name = match(ID);
			setState(212);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(209);
					((Procedure_resultContext)_localctx).arg_name = match(ID);
					}
					} 
				}
				setState(214);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			setState(216);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RESULT) {
				{
				setState(215);
				match(RESULT);
				}
			}

			setState(218);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Event_handlerContext extends ParserRuleContext {
		public Token param_name;
		public TerminalNode WHEN() { return getToken(VenbraceForgivingParser.WHEN, 0); }
		public TerminalNode COMPONENT_PROPERTY() { return getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0); }
		public SuiteContext suite() {
			return getRuleContext(SuiteContext.class,0);
		}
		public TerminalNode DO() { return getToken(VenbraceForgivingParser.DO, 0); }
		public List<TerminalNode> ID() { return getTokens(VenbraceForgivingParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(VenbraceForgivingParser.ID, i);
		}
		public Event_handlerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_event_handler; }
	}

	public final Event_handlerContext event_handler() throws RecognitionException {
		Event_handlerContext _localctx = new Event_handlerContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_event_handler);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			match(WHEN);
			setState(221);
			match(COMPONENT_PROPERTY);
			setState(225);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(222);
					((Event_handlerContext)_localctx).param_name = match(ID);
					}
					} 
				}
				setState(227);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			setState(229);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(228);
				match(DO);
				}
				break;
			}
			setState(231);
			suite();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SuiteContext extends ParserRuleContext {
		public Token suiteLbrace;
		public Token suiteRbrace;
		public List<Stat_blockContext> stat_block() {
			return getRuleContexts(Stat_blockContext.class);
		}
		public Stat_blockContext stat_block(int i) {
			return getRuleContext(Stat_blockContext.class,i);
		}
		public TerminalNode LCURLY() { return getToken(VenbraceForgivingParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(VenbraceForgivingParser.RCURLY, 0); }
		public TerminalNode LSQR() { return getToken(VenbraceForgivingParser.LSQR, 0); }
		public TerminalNode RSQR() { return getToken(VenbraceForgivingParser.RSQR, 0); }
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public SuiteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_suite; }
	}

	public final SuiteContext suite() throws RecognitionException {
		SuiteContext _localctx = new SuiteContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_suite);
		int _la;
		try {
			int _alt;
			setState(263);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(236);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(233);
						stat_block();
						}
						} 
					}
					setState(238);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(239);
				((SuiteContext)_localctx).suiteLbrace = match(LCURLY);
				setState(243);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << IF) | (1L << FOREACH) | (1L << CALL) | (1L << SET) | (1L << INITIALIZE) | (1L << INIT) | (1L << WHILE))) != 0)) {
					{
					{
					setState(240);
					stat_block();
					}
					}
					setState(245);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(246);
				((SuiteContext)_localctx).suiteRbrace = match(RCURLY);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(247);
				((SuiteContext)_localctx).suiteLbrace = match(LSQR);
				setState(251);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << IF) | (1L << FOREACH) | (1L << CALL) | (1L << SET) | (1L << INITIALIZE) | (1L << INIT) | (1L << WHILE))) != 0)) {
					{
					{
					setState(248);
					stat_block();
					}
					}
					setState(253);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(254);
				((SuiteContext)_localctx).suiteRbrace = match(RSQR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(255);
				((SuiteContext)_localctx).suiteLbrace = match(LPAREN);
				setState(259);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << IF) | (1L << FOREACH) | (1L << CALL) | (1L << SET) | (1L << INITIALIZE) | (1L << INIT) | (1L << WHILE))) != 0)) {
					{
					{
					setState(256);
					stat_block();
					}
					}
					setState(261);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(262);
				((SuiteContext)_localctx).suiteRbrace = match(RPAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stat_blockContext extends ParserRuleContext {
		public Token statLbrace;
		public Token statRbrace;
		public StatContext stat() {
			return getRuleContext(StatContext.class,0);
		}
		public TerminalNode LCURLY() { return getToken(VenbraceForgivingParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(VenbraceForgivingParser.RCURLY, 0); }
		public TerminalNode LSQR() { return getToken(VenbraceForgivingParser.LSQR, 0); }
		public TerminalNode RSQR() { return getToken(VenbraceForgivingParser.RSQR, 0); }
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public Stat_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat_block; }
	}

	public final Stat_blockContext stat_block() throws RecognitionException {
		Stat_blockContext _localctx = new Stat_blockContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_stat_block);
		try {
			setState(278);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LCURLY:
				enterOuterAlt(_localctx, 1);
				{
				setState(265);
				((Stat_blockContext)_localctx).statLbrace = match(LCURLY);
				setState(266);
				stat();
				setState(267);
				((Stat_blockContext)_localctx).statRbrace = match(RCURLY);
				}
				break;
			case LSQR:
				enterOuterAlt(_localctx, 2);
				{
				setState(269);
				((Stat_blockContext)_localctx).statLbrace = match(LSQR);
				setState(270);
				stat();
				setState(271);
				((Stat_blockContext)_localctx).statRbrace = match(RSQR);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(273);
				((Stat_blockContext)_localctx).statLbrace = match(LPAREN);
				setState(274);
				stat();
				setState(275);
				((Stat_blockContext)_localctx).statRbrace = match(RPAREN);
				}
				break;
			case IF:
			case FOREACH:
			case CALL:
			case SET:
			case INITIALIZE:
			case INIT:
			case WHILE:
				enterOuterAlt(_localctx, 4);
				{
				setState(277);
				stat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatContext extends ParserRuleContext {
		public Control_statContext control_stat() {
			return getRuleContext(Control_statContext.class,0);
		}
		public Call_procedure_statContext call_procedure_stat() {
			return getRuleContext(Call_procedure_statContext.class,0);
		}
		public Var_statContext var_stat() {
			return getRuleContext(Var_statContext.class,0);
		}
		public Local_var_decl_statContext local_var_decl_stat() {
			return getRuleContext(Local_var_decl_statContext.class,0);
		}
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_stat);
		try {
			setState(284);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
			case FOREACH:
			case WHILE:
				enterOuterAlt(_localctx, 1);
				{
				setState(280);
				control_stat();
				}
				break;
			case CALL:
				enterOuterAlt(_localctx, 2);
				{
				setState(281);
				call_procedure_stat();
				}
				break;
			case SET:
				enterOuterAlt(_localctx, 3);
				{
				setState(282);
				var_stat();
				}
				break;
			case INITIALIZE:
			case INIT:
				enterOuterAlt(_localctx, 4);
				{
				setState(283);
				local_var_decl_stat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Control_statContext extends ParserRuleContext {
		public If_statContext if_stat() {
			return getRuleContext(If_statContext.class,0);
		}
		public For_each_from_toContext for_each_from_to() {
			return getRuleContext(For_each_from_toContext.class,0);
		}
		public While_statContext while_stat() {
			return getRuleContext(While_statContext.class,0);
		}
		public Control_statContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_control_stat; }
	}

	public final Control_statContext control_stat() throws RecognitionException {
		Control_statContext _localctx = new Control_statContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_control_stat);
		try {
			setState(289);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(286);
				if_stat();
				}
				break;
			case FOREACH:
				enterOuterAlt(_localctx, 2);
				{
				setState(287);
				for_each_from_to();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 3);
				{
				setState(288);
				while_stat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class If_statContext extends ParserRuleContext {
		public Expr_blockContext e1;
		public SuiteContext s1;
		public Expr_blockContext e2;
		public SuiteContext s2;
		public SuiteContext s3;
		public TerminalNode IF() { return getToken(VenbraceForgivingParser.IF, 0); }
		public List<TerminalNode> THEN() { return getTokens(VenbraceForgivingParser.THEN); }
		public TerminalNode THEN(int i) {
			return getToken(VenbraceForgivingParser.THEN, i);
		}
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public List<SuiteContext> suite() {
			return getRuleContexts(SuiteContext.class);
		}
		public SuiteContext suite(int i) {
			return getRuleContext(SuiteContext.class,i);
		}
		public List<TerminalNode> ELSE_IF() { return getTokens(VenbraceForgivingParser.ELSE_IF); }
		public TerminalNode ELSE_IF(int i) {
			return getToken(VenbraceForgivingParser.ELSE_IF, i);
		}
		public TerminalNode ELSE() { return getToken(VenbraceForgivingParser.ELSE, 0); }
		public If_statContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_stat; }
	}

	public final If_statContext if_stat() throws RecognitionException {
		If_statContext _localctx = new If_statContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_if_stat);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			match(IF);
			setState(292);
			((If_statContext)_localctx).e1 = expr_block();
			setState(293);
			match(THEN);
			setState(294);
			((If_statContext)_localctx).s1 = suite();
			setState(302);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(295);
					match(ELSE_IF);
					setState(296);
					((If_statContext)_localctx).e2 = expr_block();
					setState(297);
					match(THEN);
					setState(298);
					((If_statContext)_localctx).s2 = suite();
					}
					} 
				}
				setState(304);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			}
			setState(307);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				{
				setState(305);
				match(ELSE);
				setState(306);
				((If_statContext)_localctx).s3 = suite();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_each_from_toContext extends ParserRuleContext {
		public Expr_blockContext from;
		public Expr_blockContext to;
		public Expr_blockContext by;
		public TerminalNode FOREACH() { return getToken(VenbraceForgivingParser.FOREACH, 0); }
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public SuiteContext suite() {
			return getRuleContext(SuiteContext.class,0);
		}
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public TerminalNode FROM() { return getToken(VenbraceForgivingParser.FROM, 0); }
		public TerminalNode TO() { return getToken(VenbraceForgivingParser.TO, 0); }
		public TerminalNode BY() { return getToken(VenbraceForgivingParser.BY, 0); }
		public TerminalNode DO() { return getToken(VenbraceForgivingParser.DO, 0); }
		public For_each_from_toContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_each_from_to; }
	}

	public final For_each_from_toContext for_each_from_to() throws RecognitionException {
		For_each_from_toContext _localctx = new For_each_from_toContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_for_each_from_to);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(309);
			match(FOREACH);
			setState(310);
			match(ID);
			setState(312);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM) {
				{
				setState(311);
				match(FROM);
				}
			}

			setState(314);
			((For_each_from_toContext)_localctx).from = expr_block();
			setState(316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TO) {
				{
				setState(315);
				match(TO);
				}
			}

			setState(318);
			((For_each_from_toContext)_localctx).to = expr_block();
			setState(320);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BY) {
				{
				setState(319);
				match(BY);
				}
			}

			setState(322);
			((For_each_from_toContext)_localctx).by = expr_block();
			setState(324);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				{
				setState(323);
				match(DO);
				}
				break;
			}
			setState(326);
			suite();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class While_statContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(VenbraceForgivingParser.WHILE, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public SuiteContext suite() {
			return getRuleContext(SuiteContext.class,0);
		}
		public TerminalNode TEST() { return getToken(VenbraceForgivingParser.TEST, 0); }
		public TerminalNode DO() { return getToken(VenbraceForgivingParser.DO, 0); }
		public While_statContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_stat; }
	}

	public final While_statContext while_stat() throws RecognitionException {
		While_statContext _localctx = new While_statContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_while_stat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			match(WHILE);
			setState(330);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TEST) {
				{
				setState(329);
				match(TEST);
				}
			}

			setState(332);
			expr_block();
			setState(334);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				setState(333);
				match(DO);
				}
				break;
			}
			setState(336);
			suite();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Call_procedure_statContext extends ParserRuleContext {
		public Expr_blockContext arg;
		public TerminalNode CALL() { return getToken(VenbraceForgivingParser.CALL, 0); }
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public List<LabelContext> label() {
			return getRuleContexts(LabelContext.class);
		}
		public LabelContext label(int i) {
			return getRuleContext(LabelContext.class,i);
		}
		public Call_procedure_statContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_call_procedure_stat; }
	}

	public final Call_procedure_statContext call_procedure_stat() throws RecognitionException {
		Call_procedure_statContext _localctx = new Call_procedure_statContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_call_procedure_stat);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			match(CALL);
			setState(339);
			match(ID);
			setState(346);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(341);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
					case 1:
						{
						setState(340);
						label();
						}
						break;
					}
					setState(343);
					((Call_procedure_statContext)_localctx).arg = expr_block();
					}
					} 
				}
				setState(348);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_statContext extends ParserRuleContext {
		public SetterContext setter() {
			return getRuleContext(SetterContext.class,0);
		}
		public Var_statContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_stat; }
	}

	public final Var_statContext var_stat() throws RecognitionException {
		Var_statContext _localctx = new Var_statContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_var_stat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(349);
			setter();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Local_var_decl_statContext extends ParserRuleContext {
		public SuiteContext suite() {
			return getRuleContext(SuiteContext.class,0);
		}
		public List<Init_keywordContext> init_keyword() {
			return getRuleContexts(Init_keywordContext.class);
		}
		public Init_keywordContext init_keyword(int i) {
			return getRuleContext(Init_keywordContext.class,i);
		}
		public List<Local_decl_keywordContext> local_decl_keyword() {
			return getRuleContexts(Local_decl_keywordContext.class);
		}
		public Local_decl_keywordContext local_decl_keyword(int i) {
			return getRuleContext(Local_decl_keywordContext.class,i);
		}
		public List<TerminalNode> ID() { return getTokens(VenbraceForgivingParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(VenbraceForgivingParser.ID, i);
		}
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public TerminalNode IN() { return getToken(VenbraceForgivingParser.IN, 0); }
		public List<TerminalNode> TO() { return getTokens(VenbraceForgivingParser.TO); }
		public TerminalNode TO(int i) {
			return getToken(VenbraceForgivingParser.TO, i);
		}
		public Local_var_decl_statContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_local_var_decl_stat; }
	}

	public final Local_var_decl_statContext local_var_decl_stat() throws RecognitionException {
		Local_var_decl_statContext _localctx = new Local_var_decl_statContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_local_var_decl_stat);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(359); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(351);
					init_keyword();
					setState(352);
					local_decl_keyword();
					setState(353);
					match(ID);
					setState(355);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==TO) {
						{
						setState(354);
						match(TO);
						}
					}

					setState(357);
					expr_block();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(361); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(364);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IN) {
				{
				setState(363);
				match(IN);
				}
			}

			setState(366);
			suite();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Local_decl_keywordContext extends ParserRuleContext {
		public TerminalNode LOCAL() { return getToken(VenbraceForgivingParser.LOCAL, 0); }
		public Local_decl_keywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_local_decl_keyword; }
	}

	public final Local_decl_keywordContext local_decl_keyword() throws RecognitionException {
		Local_decl_keywordContext _localctx = new Local_decl_keywordContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_local_decl_keyword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			match(LOCAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetterContext extends ParserRuleContext {
		public TerminalNode SET() { return getToken(VenbraceForgivingParser.SET, 0); }
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode GLOBAL() { return getToken(VenbraceForgivingParser.GLOBAL, 0); }
		public TerminalNode TO() { return getToken(VenbraceForgivingParser.TO, 0); }
		public TerminalNode COMPONENT_PROPERTY() { return getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0); }
		public SetterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setter; }
	}

	public final SetterContext setter() throws RecognitionException {
		SetterContext _localctx = new SetterContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_setter);
		int _la;
		try {
			setState(385);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(370);
				match(SET);
				setState(372);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(371);
					match(GLOBAL);
					}
				}

				setState(374);
				match(ID);
				setState(376);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TO) {
					{
					setState(375);
					match(TO);
					}
				}

				setState(378);
				expr_block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(379);
				match(SET);
				setState(380);
				match(COMPONENT_PROPERTY);
				setState(382);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TO) {
					{
					setState(381);
					match(TO);
					}
				}

				setState(384);
				expr_block();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expr_blockContext extends ParserRuleContext {
		public And_exprContext and_expr() {
			return getRuleContext(And_exprContext.class,0);
		}
		public Expr_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_block; }
	}

	public final Expr_blockContext expr_block() throws RecognitionException {
		Expr_blockContext _localctx = new Expr_blockContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_expr_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(387);
			and_expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class And_exprContext extends ParserRuleContext {
		public And_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_and_expr; }
	 
		public And_exprContext() { }
		public void copyFrom(And_exprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class OrExprBogusContext extends And_exprContext {
		public Or_exprContext or_expr() {
			return getRuleContext(Or_exprContext.class,0);
		}
		public OrExprBogusContext(And_exprContext ctx) { copyFrom(ctx); }
	}
	public static class AndExprContext extends And_exprContext {
		public List<And_exprContext> and_expr() {
			return getRuleContexts(And_exprContext.class);
		}
		public And_exprContext and_expr(int i) {
			return getRuleContext(And_exprContext.class,i);
		}
		public TerminalNode AND() { return getToken(VenbraceForgivingParser.AND, 0); }
		public AndExprContext(And_exprContext ctx) { copyFrom(ctx); }
	}

	public final And_exprContext and_expr() throws RecognitionException {
		return and_expr(0);
	}

	private And_exprContext and_expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		And_exprContext _localctx = new And_exprContext(_ctx, _parentState);
		And_exprContext _prevctx = _localctx;
		int _startState = 54;
		enterRecursionRule(_localctx, 54, RULE_and_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new OrExprBogusContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(390);
			or_expr(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(397);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExprContext(new And_exprContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_and_expr);
					setState(392);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(393);
					match(AND);
					setState(394);
					and_expr(1);
					}
					} 
				}
				setState(399);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Or_exprContext extends ParserRuleContext {
		public Or_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_or_expr; }
	 
		public Or_exprContext() { }
		public void copyFrom(Or_exprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MathCompareExprBogusContext extends Or_exprContext {
		public Math_compare_exprContext math_compare_expr() {
			return getRuleContext(Math_compare_exprContext.class,0);
		}
		public MathCompareExprBogusContext(Or_exprContext ctx) { copyFrom(ctx); }
	}
	public static class OrExprContext extends Or_exprContext {
		public List<Or_exprContext> or_expr() {
			return getRuleContexts(Or_exprContext.class);
		}
		public Or_exprContext or_expr(int i) {
			return getRuleContext(Or_exprContext.class,i);
		}
		public TerminalNode OR() { return getToken(VenbraceForgivingParser.OR, 0); }
		public OrExprContext(Or_exprContext ctx) { copyFrom(ctx); }
	}

	public final Or_exprContext or_expr() throws RecognitionException {
		return or_expr(0);
	}

	private Or_exprContext or_expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Or_exprContext _localctx = new Or_exprContext(_ctx, _parentState);
		Or_exprContext _prevctx = _localctx;
		int _startState = 56;
		enterRecursionRule(_localctx, 56, RULE_or_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new MathCompareExprBogusContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(401);
			math_compare_expr();
			}
			_ctx.stop = _input.LT(-1);
			setState(408);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new OrExprContext(new Or_exprContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_or_expr);
					setState(403);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(404);
					match(OR);
					setState(405);
					or_expr(1);
					}
					} 
				}
				setState(410);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Math_compare_exprContext extends ParserRuleContext {
		public Math_compare_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math_compare_expr; }
	 
		public Math_compare_exprContext() { }
		public void copyFrom(Math_compare_exprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AddSubExprBogusContext extends Math_compare_exprContext {
		public Add_sub_exprContext add_sub_expr() {
			return getRuleContext(Add_sub_exprContext.class,0);
		}
		public AddSubExprBogusContext(Math_compare_exprContext ctx) { copyFrom(ctx); }
	}
	public static class MathCompareExprContext extends Math_compare_exprContext {
		public List<Add_sub_exprContext> add_sub_expr() {
			return getRuleContexts(Add_sub_exprContext.class);
		}
		public Add_sub_exprContext add_sub_expr(int i) {
			return getRuleContext(Add_sub_exprContext.class,i);
		}
		public Math_compare_opContext math_compare_op() {
			return getRuleContext(Math_compare_opContext.class,0);
		}
		public MathCompareExprContext(Math_compare_exprContext ctx) { copyFrom(ctx); }
	}

	public final Math_compare_exprContext math_compare_expr() throws RecognitionException {
		Math_compare_exprContext _localctx = new Math_compare_exprContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_math_compare_expr);
		try {
			setState(416);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				_localctx = new AddSubExprBogusContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(411);
				add_sub_expr(0);
				}
				break;
			case 2:
				_localctx = new MathCompareExprContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(412);
				add_sub_expr(0);
				setState(413);
				math_compare_op();
				setState(414);
				add_sub_expr(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Math_compare_opContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(VenbraceForgivingParser.LT, 0); }
		public TerminalNode LE() { return getToken(VenbraceForgivingParser.LE, 0); }
		public TerminalNode EQ() { return getToken(VenbraceForgivingParser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(VenbraceForgivingParser.NEQ, 0); }
		public TerminalNode GE() { return getToken(VenbraceForgivingParser.GE, 0); }
		public TerminalNode GT() { return getToken(VenbraceForgivingParser.GT, 0); }
		public Math_compare_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math_compare_op; }
	}

	public final Math_compare_opContext math_compare_op() throws RecognitionException {
		Math_compare_opContext _localctx = new Math_compare_opContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_math_compare_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(418);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LT) | (1L << GT) | (1L << LE) | (1L << GE) | (1L << EQ) | (1L << NEQ))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Add_sub_exprContext extends ParserRuleContext {
		public Add_sub_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_add_sub_expr; }
	 
		public Add_sub_exprContext() { }
		public void copyFrom(Add_sub_exprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MutableAddExprContext extends Add_sub_exprContext {
		public Mul_div_exprContext mul_div_expr() {
			return getRuleContext(Mul_div_exprContext.class,0);
		}
		public List<TerminalNode> PLUS() { return getTokens(VenbraceForgivingParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(VenbraceForgivingParser.PLUS, i);
		}
		public List<Add_sub_exprContext> add_sub_expr() {
			return getRuleContexts(Add_sub_exprContext.class);
		}
		public Add_sub_exprContext add_sub_expr(int i) {
			return getRuleContext(Add_sub_exprContext.class,i);
		}
		public MutableAddExprContext(Add_sub_exprContext ctx) { copyFrom(ctx); }
	}
	public static class MulDivExprBogusContext extends Add_sub_exprContext {
		public Mul_div_exprContext mul_div_expr() {
			return getRuleContext(Mul_div_exprContext.class,0);
		}
		public MulDivExprBogusContext(Add_sub_exprContext ctx) { copyFrom(ctx); }
	}
	public static class SubNegNumExprContext extends Add_sub_exprContext {
		public Add_sub_exprContext add_sub_expr() {
			return getRuleContext(Add_sub_exprContext.class,0);
		}
		public TerminalNode NEG_NUM() { return getToken(VenbraceForgivingParser.NEG_NUM, 0); }
		public SubNegNumExprContext(Add_sub_exprContext ctx) { copyFrom(ctx); }
	}
	public static class SubExprContext extends Add_sub_exprContext {
		public List<Add_sub_exprContext> add_sub_expr() {
			return getRuleContexts(Add_sub_exprContext.class);
		}
		public Add_sub_exprContext add_sub_expr(int i) {
			return getRuleContext(Add_sub_exprContext.class,i);
		}
		public TerminalNode MINUS() { return getToken(VenbraceForgivingParser.MINUS, 0); }
		public SubExprContext(Add_sub_exprContext ctx) { copyFrom(ctx); }
	}

	public final Add_sub_exprContext add_sub_expr() throws RecognitionException {
		return add_sub_expr(0);
	}

	private Add_sub_exprContext add_sub_expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Add_sub_exprContext _localctx = new Add_sub_exprContext(_ctx, _parentState);
		Add_sub_exprContext _prevctx = _localctx;
		int _startState = 62;
		enterRecursionRule(_localctx, 62, RULE_add_sub_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(429);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				{
				_localctx = new MulDivExprBogusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(421);
				mul_div_expr(0);
				}
				break;
			case 2:
				{
				_localctx = new MutableAddExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(422);
				mul_div_expr(0);
				setState(425); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(423);
						match(PLUS);
						setState(424);
						add_sub_expr(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(427); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(438);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(436);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
					case 1:
						{
						_localctx = new SubExprContext(new Add_sub_exprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_add_sub_expr);
						setState(431);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(432);
						match(MINUS);
						setState(433);
						add_sub_expr(1);
						}
						break;
					case 2:
						{
						_localctx = new SubNegNumExprContext(new Add_sub_exprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_add_sub_expr);
						setState(434);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(435);
						match(NEG_NUM);
						}
						break;
					}
					} 
				}
				setState(440);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Mul_div_exprContext extends ParserRuleContext {
		public Mul_div_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mul_div_expr; }
	 
		public Mul_div_exprContext() { }
		public void copyFrom(Mul_div_exprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class PowExprBogusContext extends Mul_div_exprContext {
		public Pow_exprContext pow_expr() {
			return getRuleContext(Pow_exprContext.class,0);
		}
		public PowExprBogusContext(Mul_div_exprContext ctx) { copyFrom(ctx); }
	}
	public static class MutableMulExprContext extends Mul_div_exprContext {
		public Pow_exprContext pow_expr() {
			return getRuleContext(Pow_exprContext.class,0);
		}
		public List<TerminalNode> MUL() { return getTokens(VenbraceForgivingParser.MUL); }
		public TerminalNode MUL(int i) {
			return getToken(VenbraceForgivingParser.MUL, i);
		}
		public List<Mul_div_exprContext> mul_div_expr() {
			return getRuleContexts(Mul_div_exprContext.class);
		}
		public Mul_div_exprContext mul_div_expr(int i) {
			return getRuleContext(Mul_div_exprContext.class,i);
		}
		public MutableMulExprContext(Mul_div_exprContext ctx) { copyFrom(ctx); }
	}
	public static class DivExprContext extends Mul_div_exprContext {
		public List<Mul_div_exprContext> mul_div_expr() {
			return getRuleContexts(Mul_div_exprContext.class);
		}
		public Mul_div_exprContext mul_div_expr(int i) {
			return getRuleContext(Mul_div_exprContext.class,i);
		}
		public TerminalNode DIV() { return getToken(VenbraceForgivingParser.DIV, 0); }
		public DivExprContext(Mul_div_exprContext ctx) { copyFrom(ctx); }
	}

	public final Mul_div_exprContext mul_div_expr() throws RecognitionException {
		return mul_div_expr(0);
	}

	private Mul_div_exprContext mul_div_expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Mul_div_exprContext _localctx = new Mul_div_exprContext(_ctx, _parentState);
		Mul_div_exprContext _prevctx = _localctx;
		int _startState = 64;
		enterRecursionRule(_localctx, 64, RULE_mul_div_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				{
				_localctx = new PowExprBogusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(442);
				pow_expr(0);
				}
				break;
			case 2:
				{
				_localctx = new MutableMulExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(443);
				pow_expr(0);
				setState(446); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(444);
						match(MUL);
						setState(445);
						mul_div_expr(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(448); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(457);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DivExprContext(new Mul_div_exprContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_mul_div_expr);
					setState(452);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(453);
					match(DIV);
					setState(454);
					mul_div_expr(1);
					}
					} 
				}
				setState(459);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Pow_exprContext extends ParserRuleContext {
		public Pow_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pow_expr; }
	 
		public Pow_exprContext() { }
		public void copyFrom(Pow_exprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class PowExprContext extends Pow_exprContext {
		public List<Pow_exprContext> pow_expr() {
			return getRuleContexts(Pow_exprContext.class);
		}
		public Pow_exprContext pow_expr(int i) {
			return getRuleContext(Pow_exprContext.class,i);
		}
		public TerminalNode POW() { return getToken(VenbraceForgivingParser.POW, 0); }
		public PowExprContext(Pow_exprContext ctx) { copyFrom(ctx); }
	}
	public static class CoreExprBogusContext extends Pow_exprContext {
		public Core_exprContext core_expr() {
			return getRuleContext(Core_exprContext.class,0);
		}
		public CoreExprBogusContext(Pow_exprContext ctx) { copyFrom(ctx); }
	}

	public final Pow_exprContext pow_expr() throws RecognitionException {
		return pow_expr(0);
	}

	private Pow_exprContext pow_expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Pow_exprContext _localctx = new Pow_exprContext(_ctx, _parentState);
		Pow_exprContext _prevctx = _localctx;
		int _startState = 66;
		enterRecursionRule(_localctx, 66, RULE_pow_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new CoreExprBogusContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(461);
			core_expr();
			}
			_ctx.stop = _input.LT(-1);
			setState(468);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new PowExprContext(new Pow_exprContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_pow_expr);
					setState(463);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(464);
					match(POW);
					setState(465);
					pow_expr(1);
					}
					} 
				}
				setState(470);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Core_exprContext extends ParserRuleContext {
		public Core_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_core_expr; }
	 
		public Core_exprContext() { }
		public void copyFrom(Core_exprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StrExprContext extends Core_exprContext {
		public Str_exprContext str_expr() {
			return getRuleContext(Str_exprContext.class,0);
		}
		public StrExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class NotExprContext extends Core_exprContext {
		public Not_exprContext not_expr() {
			return getRuleContext(Not_exprContext.class,0);
		}
		public NotExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class MathExprContext extends Core_exprContext {
		public Math_exprContext math_expr() {
			return getRuleContext(Math_exprContext.class,0);
		}
		public MathExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class EmptyExprContext extends Core_exprContext {
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public TerminalNode LCURLY() { return getToken(VenbraceForgivingParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(VenbraceForgivingParser.RCURLY, 0); }
		public TerminalNode LSQR() { return getToken(VenbraceForgivingParser.LSQR, 0); }
		public TerminalNode RSQR() { return getToken(VenbraceForgivingParser.RSQR, 0); }
		public EmptyExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class CallProcedureExprContext extends Core_exprContext {
		public Call_procedure_exprContext call_procedure_expr() {
			return getRuleContext(Call_procedure_exprContext.class,0);
		}
		public CallProcedureExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class CurliesExprContext extends Core_exprContext {
		public TerminalNode LCURLY() { return getToken(VenbraceForgivingParser.LCURLY, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RCURLY() { return getToken(VenbraceForgivingParser.RCURLY, 0); }
		public CurliesExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class GetterExprContext extends Core_exprContext {
		public GetterContext getter() {
			return getRuleContext(GetterContext.class,0);
		}
		public GetterExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class AtomExprContext extends Core_exprContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public AtomExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class LocaVarDeclExprContext extends Core_exprContext {
		public Local_var_decl_exprContext local_var_decl_expr() {
			return getRuleContext(Local_var_decl_exprContext.class,0);
		}
		public LocaVarDeclExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class ParensExprContext extends Core_exprContext {
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public ParensExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class ControlExprContext extends Core_exprContext {
		public Control_exprContext control_expr() {
			return getRuleContext(Control_exprContext.class,0);
		}
		public ControlExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}
	public static class SquaresExprContext extends Core_exprContext {
		public TerminalNode LSQR() { return getToken(VenbraceForgivingParser.LSQR, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RSQR() { return getToken(VenbraceForgivingParser.RSQR, 0); }
		public SquaresExprContext(Core_exprContext ctx) { copyFrom(ctx); }
	}

	public final Core_exprContext core_expr() throws RecognitionException {
		Core_exprContext _localctx = new Core_exprContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_core_expr);
		try {
			setState(499);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				_localctx = new GetterExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(471);
				getter();
				}
				break;
			case 2:
				_localctx = new ControlExprContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(472);
				control_expr();
				}
				break;
			case 3:
				_localctx = new NotExprContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(473);
				not_expr();
				}
				break;
			case 4:
				_localctx = new MathExprContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(474);
				math_expr();
				}
				break;
			case 5:
				_localctx = new StrExprContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(475);
				str_expr();
				}
				break;
			case 6:
				_localctx = new CallProcedureExprContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(476);
				call_procedure_expr();
				}
				break;
			case 7:
				_localctx = new LocaVarDeclExprContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(477);
				local_var_decl_expr();
				}
				break;
			case 8:
				_localctx = new AtomExprContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(478);
				atom();
				}
				break;
			case 9:
				_localctx = new EmptyExprContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(485);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LPAREN:
					{
					{
					setState(479);
					match(LPAREN);
					setState(480);
					match(RPAREN);
					}
					}
					break;
				case LCURLY:
					{
					{
					setState(481);
					match(LCURLY);
					setState(482);
					match(RCURLY);
					}
					}
					break;
				case LSQR:
					{
					{
					setState(483);
					match(LSQR);
					setState(484);
					match(RSQR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 10:
				_localctx = new ParensExprContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(487);
				match(LPAREN);
				setState(488);
				expr_block();
				setState(489);
				match(RPAREN);
				}
				break;
			case 11:
				_localctx = new CurliesExprContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(491);
				match(LCURLY);
				setState(492);
				expr_block();
				setState(493);
				match(RCURLY);
				}
				break;
			case 12:
				_localctx = new SquaresExprContext(_localctx);
				enterOuterAlt(_localctx, 12);
				{
				setState(495);
				match(LSQR);
				setState(496);
				expr_block();
				setState(497);
				match(RSQR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Control_exprContext extends ParserRuleContext {
		public If_exprContext if_expr() {
			return getRuleContext(If_exprContext.class,0);
		}
		public Do_exprContext do_expr() {
			return getRuleContext(Do_exprContext.class,0);
		}
		public Control_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_control_expr; }
	}

	public final Control_exprContext control_expr() throws RecognitionException {
		Control_exprContext _localctx = new Control_exprContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_control_expr);
		try {
			setState(503);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(501);
				if_expr();
				}
				break;
			case DO:
				enterOuterAlt(_localctx, 2);
				{
				setState(502);
				do_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class If_exprContext extends ParserRuleContext {
		public Expr_blockContext c;
		public Expr_blockContext e1;
		public Expr_blockContext e2;
		public TerminalNode IF() { return getToken(VenbraceForgivingParser.IF, 0); }
		public TerminalNode THEN() { return getToken(VenbraceForgivingParser.THEN, 0); }
		public TerminalNode ELSE() { return getToken(VenbraceForgivingParser.ELSE, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public If_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_expr; }
	}

	public final If_exprContext if_expr() throws RecognitionException {
		If_exprContext _localctx = new If_exprContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_if_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(505);
			match(IF);
			setState(506);
			((If_exprContext)_localctx).c = expr_block();
			setState(507);
			match(THEN);
			setState(508);
			((If_exprContext)_localctx).e1 = expr_block();
			setState(509);
			match(ELSE);
			setState(510);
			((If_exprContext)_localctx).e2 = expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Do_exprContext extends ParserRuleContext {
		public TerminalNode DO() { return getToken(VenbraceForgivingParser.DO, 0); }
		public SuiteContext suite() {
			return getRuleContext(SuiteContext.class,0);
		}
		public TerminalNode RESULT() { return getToken(VenbraceForgivingParser.RESULT, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public Do_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_do_expr; }
	}

	public final Do_exprContext do_expr() throws RecognitionException {
		Do_exprContext _localctx = new Do_exprContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_do_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(512);
			match(DO);
			setState(513);
			suite();
			setState(514);
			match(RESULT);
			setState(515);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Not_exprContext extends ParserRuleContext {
		public TerminalNode NOT() { return getToken(VenbraceForgivingParser.NOT, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public Not_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_not_expr; }
	}

	public final Not_exprContext not_expr() throws RecognitionException {
		Not_exprContext _localctx = new Not_exprContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_not_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(517);
			match(NOT);
			setState(518);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Math_exprContext extends ParserRuleContext {
		public Min_maxContext min_max() {
			return getRuleContext(Min_maxContext.class,0);
		}
		public Unary_operationContext unary_operation() {
			return getRuleContext(Unary_operationContext.class,0);
		}
		public ModContext mod() {
			return getRuleContext(ModContext.class,0);
		}
		public TrigContext trig() {
			return getRuleContext(TrigContext.class,0);
		}
		public Math_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math_expr; }
	}

	public final Math_exprContext math_expr() throws RecognitionException {
		Math_exprContext _localctx = new Math_exprContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_math_expr);
		try {
			setState(524);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MIN:
			case MAX:
				enterOuterAlt(_localctx, 1);
				{
				setState(520);
				min_max();
				}
				break;
			case SQRT:
			case ABS:
			case NEG:
			case LOG:
			case EULER:
			case ROUND:
			case CEILING:
			case FLOOR:
				enterOuterAlt(_localctx, 2);
				{
				setState(521);
				unary_operation();
				}
				break;
			case MODULO:
				enterOuterAlt(_localctx, 3);
				{
				setState(522);
				mod();
				}
				break;
			case SIN:
			case COS:
			case TAN:
			case ASIN:
			case ACOS:
			case ATAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(523);
				trig();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Min_maxContext extends ParserRuleContext {
		public TerminalNode MIN() { return getToken(VenbraceForgivingParser.MIN, 0); }
		public TerminalNode MAX() { return getToken(VenbraceForgivingParser.MAX, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public Min_maxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_min_max; }
	}

	public final Min_maxContext min_max() throws RecognitionException {
		Min_maxContext _localctx = new Min_maxContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_min_max);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(526);
			_la = _input.LA(1);
			if ( !(_la==MIN || _la==MAX) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(530);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,58,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(527);
					expr_block();
					}
					} 
				}
				setState(532);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,58,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unary_operationContext extends ParserRuleContext {
		public Unary_opContext unary_op() {
			return getRuleContext(Unary_opContext.class,0);
		}
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public Unary_operationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary_operation; }
	}

	public final Unary_operationContext unary_operation() throws RecognitionException {
		Unary_operationContext _localctx = new Unary_operationContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_unary_operation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(533);
			unary_op();
			setState(534);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unary_opContext extends ParserRuleContext {
		public TerminalNode SQRT() { return getToken(VenbraceForgivingParser.SQRT, 0); }
		public TerminalNode ABS() { return getToken(VenbraceForgivingParser.ABS, 0); }
		public TerminalNode NEG() { return getToken(VenbraceForgivingParser.NEG, 0); }
		public TerminalNode LOG() { return getToken(VenbraceForgivingParser.LOG, 0); }
		public TerminalNode EULER() { return getToken(VenbraceForgivingParser.EULER, 0); }
		public TerminalNode ROUND() { return getToken(VenbraceForgivingParser.ROUND, 0); }
		public TerminalNode CEILING() { return getToken(VenbraceForgivingParser.CEILING, 0); }
		public TerminalNode FLOOR() { return getToken(VenbraceForgivingParser.FLOOR, 0); }
		public Unary_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary_op; }
	}

	public final Unary_opContext unary_op() throws RecognitionException {
		Unary_opContext _localctx = new Unary_opContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_unary_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(536);
			_la = _input.LA(1);
			if ( !(((((_la - 73)) & ~0x3f) == 0 && ((1L << (_la - 73)) & ((1L << (SQRT - 73)) | (1L << (ABS - 73)) | (1L << (NEG - 73)) | (1L << (LOG - 73)) | (1L << (EULER - 73)) | (1L << (ROUND - 73)) | (1L << (CEILING - 73)) | (1L << (FLOOR - 73)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModContext extends ParserRuleContext {
		public TerminalNode MODULO() { return getToken(VenbraceForgivingParser.MODULO, 0); }
		public TerminalNode OF() { return getToken(VenbraceForgivingParser.OF, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public TerminalNode DIV() { return getToken(VenbraceForgivingParser.DIV, 0); }
		public ModContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mod; }
	}

	public final ModContext mod() throws RecognitionException {
		ModContext _localctx = new ModContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_mod);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(538);
			match(MODULO);
			setState(539);
			match(OF);
			setState(540);
			expr_block();
			setState(541);
			match(DIV);
			setState(542);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrigContext extends ParserRuleContext {
		public Trig_opContext trig_op() {
			return getRuleContext(Trig_opContext.class,0);
		}
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TrigContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trig; }
	}

	public final TrigContext trig() throws RecognitionException {
		TrigContext _localctx = new TrigContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_trig);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(544);
			trig_op();
			setState(545);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Trig_opContext extends ParserRuleContext {
		public TerminalNode SIN() { return getToken(VenbraceForgivingParser.SIN, 0); }
		public TerminalNode COS() { return getToken(VenbraceForgivingParser.COS, 0); }
		public TerminalNode TAN() { return getToken(VenbraceForgivingParser.TAN, 0); }
		public TerminalNode ASIN() { return getToken(VenbraceForgivingParser.ASIN, 0); }
		public TerminalNode ACOS() { return getToken(VenbraceForgivingParser.ACOS, 0); }
		public TerminalNode ATAN() { return getToken(VenbraceForgivingParser.ATAN, 0); }
		public Trig_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trig_op; }
	}

	public final Trig_opContext trig_op() throws RecognitionException {
		Trig_opContext _localctx = new Trig_opContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_trig_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(547);
			_la = _input.LA(1);
			if ( !(((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (SIN - 90)) | (1L << (COS - 90)) | (1L << (TAN - 90)) | (1L << (ASIN - 90)) | (1L << (ACOS - 90)) | (1L << (ATAN - 90)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Str_exprContext extends ParserRuleContext {
		public Str_joinContext str_join() {
			return getRuleContext(Str_joinContext.class,0);
		}
		public Str_lengthContext str_length() {
			return getRuleContext(Str_lengthContext.class,0);
		}
		public Str_reverseContext str_reverse() {
			return getRuleContext(Str_reverseContext.class,0);
		}
		public Str_split_at_spacesContext str_split_at_spaces() {
			return getRuleContext(Str_split_at_spacesContext.class,0);
		}
		public Str_segmentContext str_segment() {
			return getRuleContext(Str_segmentContext.class,0);
		}
		public Str_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_expr; }
	}

	public final Str_exprContext str_expr() throws RecognitionException {
		Str_exprContext _localctx = new Str_exprContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_str_expr);
		try {
			setState(554);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case JOIN:
				enterOuterAlt(_localctx, 1);
				{
				setState(549);
				str_join();
				}
				break;
			case LENGTH:
				enterOuterAlt(_localctx, 2);
				{
				setState(550);
				str_length();
				}
				break;
			case REVERSE:
				enterOuterAlt(_localctx, 3);
				{
				setState(551);
				str_reverse();
				}
				break;
			case SPLIT_AT_SPACES:
				enterOuterAlt(_localctx, 4);
				{
				setState(552);
				str_split_at_spaces();
				}
				break;
			case SEGMENT:
				enterOuterAlt(_localctx, 5);
				{
				setState(553);
				str_segment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Str_lengthContext extends ParserRuleContext {
		public TerminalNode LENGTH() { return getToken(VenbraceForgivingParser.LENGTH, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public Str_lengthContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_length; }
	}

	public final Str_lengthContext str_length() throws RecognitionException {
		Str_lengthContext _localctx = new Str_lengthContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_str_length);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(556);
			match(LENGTH);
			setState(557);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Str_joinContext extends ParserRuleContext {
		public TerminalNode JOIN() { return getToken(VenbraceForgivingParser.JOIN, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public Str_joinContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_join; }
	}

	public final Str_joinContext str_join() throws RecognitionException {
		Str_joinContext _localctx = new Str_joinContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_str_join);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(559);
			match(JOIN);
			setState(563);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,60,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(560);
					expr_block();
					}
					} 
				}
				setState(565);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,60,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Str_reverseContext extends ParserRuleContext {
		public TerminalNode REVERSE() { return getToken(VenbraceForgivingParser.REVERSE, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public Str_reverseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_reverse; }
	}

	public final Str_reverseContext str_reverse() throws RecognitionException {
		Str_reverseContext _localctx = new Str_reverseContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_str_reverse);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(566);
			match(REVERSE);
			setState(567);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Str_split_at_spacesContext extends ParserRuleContext {
		public TerminalNode SPLIT_AT_SPACES() { return getToken(VenbraceForgivingParser.SPLIT_AT_SPACES, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public Str_split_at_spacesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_split_at_spaces; }
	}

	public final Str_split_at_spacesContext str_split_at_spaces() throws RecognitionException {
		Str_split_at_spacesContext _localctx = new Str_split_at_spacesContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_str_split_at_spaces);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(569);
			match(SPLIT_AT_SPACES);
			setState(570);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Str_segmentContext extends ParserRuleContext {
		public TerminalNode SEGMENT() { return getToken(VenbraceForgivingParser.SEGMENT, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public List<LabelContext> label() {
			return getRuleContexts(LabelContext.class);
		}
		public LabelContext label(int i) {
			return getRuleContext(LabelContext.class,i);
		}
		public Str_segmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_segment; }
	}

	public final Str_segmentContext str_segment() throws RecognitionException {
		Str_segmentContext _localctx = new Str_segmentContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_str_segment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(572);
			match(SEGMENT);
			setState(574);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
			case 1:
				{
				setState(573);
				label();
				}
				break;
			}
			setState(576);
			expr_block();
			setState(578);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				{
				setState(577);
				label();
				}
				break;
			}
			setState(580);
			expr_block();
			setState(582);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				{
				setState(581);
				label();
				}
				break;
			}
			setState(584);
			expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetterContext extends ParserRuleContext {
		public GetterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getter; }
	 
		public GetterContext() { }
		public void copyFrom(GetterContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class GetterInnerBracesContext extends GetterContext {
		public Getter_inner_bracesContext getter_inner_braces() {
			return getRuleContext(Getter_inner_bracesContext.class,0);
		}
		public GetterInnerBracesContext(GetterContext ctx) { copyFrom(ctx); }
	}
	public static class GetterAbbrevContext extends GetterContext {
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public TerminalNode GLOBAL() { return getToken(VenbraceForgivingParser.GLOBAL, 0); }
		public GetterAbbrevContext(GetterContext ctx) { copyFrom(ctx); }
	}
	public static class GetterVerboseContext extends GetterContext {
		public TerminalNode GET() { return getToken(VenbraceForgivingParser.GET, 0); }
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public TerminalNode GLOBAL() { return getToken(VenbraceForgivingParser.GLOBAL, 0); }
		public GetterVerboseContext(GetterContext ctx) { copyFrom(ctx); }
	}

	public final GetterContext getter() throws RecognitionException {
		GetterContext _localctx = new GetterContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_getter);
		int _la;
		try {
			setState(596);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				_localctx = new GetterAbbrevContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(587);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(586);
					match(GLOBAL);
					}
				}

				setState(589);
				match(ID);
				}
				break;
			case 2:
				_localctx = new GetterVerboseContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(590);
				match(GET);
				setState(592);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(591);
					match(GLOBAL);
					}
				}

				setState(594);
				match(ID);
				}
				break;
			case 3:
				_localctx = new GetterInnerBracesContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(595);
				getter_inner_braces();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Getter_inner_bracesContext extends ParserRuleContext {
		public TerminalNode GET() { return getToken(VenbraceForgivingParser.GET, 0); }
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public TerminalNode GLOBAL() { return getToken(VenbraceForgivingParser.GLOBAL, 0); }
		public TerminalNode LCURLY() { return getToken(VenbraceForgivingParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(VenbraceForgivingParser.RCURLY, 0); }
		public TerminalNode LSQR() { return getToken(VenbraceForgivingParser.LSQR, 0); }
		public TerminalNode RSQR() { return getToken(VenbraceForgivingParser.RSQR, 0); }
		public Getter_inner_bracesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getter_inner_braces; }
	}

	public final Getter_inner_bracesContext getter_inner_braces() throws RecognitionException {
		Getter_inner_bracesContext _localctx = new Getter_inner_bracesContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_getter_inner_braces);
		int _la;
		try {
			setState(640);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,73,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(598);
				match(GET);
				setState(599);
				match(LPAREN);
				setState(601);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(600);
					match(GLOBAL);
					}
				}

				setState(603);
				match(ID);
				setState(604);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(605);
				match(GET);
				setState(606);
				match(LCURLY);
				setState(608);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(607);
					match(GLOBAL);
					}
				}

				setState(610);
				match(ID);
				setState(611);
				match(RCURLY);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(612);
				match(GET);
				setState(613);
				match(LSQR);
				setState(615);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(614);
					match(GLOBAL);
					}
				}

				setState(617);
				match(ID);
				setState(618);
				match(RSQR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(619);
				match(GET);
				setState(621);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(620);
					match(GLOBAL);
					}
				}

				setState(623);
				match(LPAREN);
				setState(624);
				match(ID);
				setState(625);
				match(RPAREN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(626);
				match(GET);
				setState(628);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(627);
					match(GLOBAL);
					}
				}

				setState(630);
				match(LCURLY);
				setState(631);
				match(ID);
				setState(632);
				match(RCURLY);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(633);
				match(GET);
				setState(635);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(634);
					match(GLOBAL);
					}
				}

				setState(637);
				match(LSQR);
				setState(638);
				match(ID);
				setState(639);
				match(RSQR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Call_procedure_exprContext extends ParserRuleContext {
		public Token component;
		public Token method;
		public Expr_blockContext arg;
		public TerminalNode CALL() { return getToken(VenbraceForgivingParser.CALL, 0); }
		public List<TerminalNode> ID() { return getTokens(VenbraceForgivingParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(VenbraceForgivingParser.ID, i);
		}
		public TerminalNode DOT() { return getToken(VenbraceForgivingParser.DOT, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public List<LabelContext> label() {
			return getRuleContexts(LabelContext.class);
		}
		public LabelContext label(int i) {
			return getRuleContext(LabelContext.class,i);
		}
		public Call_procedure_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_call_procedure_expr; }
	}

	public final Call_procedure_exprContext call_procedure_expr() throws RecognitionException {
		Call_procedure_exprContext _localctx = new Call_procedure_exprContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_call_procedure_expr);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(642);
			match(CALL);
			setState(647);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				{
				setState(643);
				match(ID);
				}
				break;
			case 2:
				{
				setState(644);
				((Call_procedure_exprContext)_localctx).component = match(ID);
				setState(645);
				match(DOT);
				setState(646);
				((Call_procedure_exprContext)_localctx).method = match(ID);
				}
				break;
			}
			setState(655);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(650);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
					case 1:
						{
						setState(649);
						label();
						}
						break;
					}
					setState(652);
					((Call_procedure_exprContext)_localctx).arg = expr_block();
					}
					} 
				}
				setState(657);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Local_var_decl_exprContext extends ParserRuleContext {
		public Expr_blockContext init;
		public Expr_blockContext body;
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public List<TerminalNode> INITIALIZE() { return getTokens(VenbraceForgivingParser.INITIALIZE); }
		public TerminalNode INITIALIZE(int i) {
			return getToken(VenbraceForgivingParser.INITIALIZE, i);
		}
		public List<TerminalNode> LOCAL() { return getTokens(VenbraceForgivingParser.LOCAL); }
		public TerminalNode LOCAL(int i) {
			return getToken(VenbraceForgivingParser.LOCAL, i);
		}
		public List<TerminalNode> ID() { return getTokens(VenbraceForgivingParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(VenbraceForgivingParser.ID, i);
		}
		public TerminalNode IN() { return getToken(VenbraceForgivingParser.IN, 0); }
		public List<TerminalNode> TO() { return getTokens(VenbraceForgivingParser.TO); }
		public TerminalNode TO(int i) {
			return getToken(VenbraceForgivingParser.TO, i);
		}
		public Local_var_decl_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_local_var_decl_expr; }
	}

	public final Local_var_decl_exprContext local_var_decl_expr() throws RecognitionException {
		Local_var_decl_exprContext _localctx = new Local_var_decl_exprContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_local_var_decl_expr);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(665); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(658);
					match(INITIALIZE);
					setState(659);
					match(LOCAL);
					setState(660);
					match(ID);
					setState(662);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==TO) {
						{
						setState(661);
						match(TO);
						}
					}

					setState(664);
					((Local_var_decl_exprContext)_localctx).init = expr_block();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(667); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,78,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(670);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IN) {
				{
				setState(669);
				match(IN);
				}
			}

			setState(672);
			((Local_var_decl_exprContext)_localctx).body = expr_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtomContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(VenbraceForgivingParser.NUMBER, 0); }
		public TerminalNode NEG_NUM() { return getToken(VenbraceForgivingParser.NEG_NUM, 0); }
		public TerminalNode STRING() { return getToken(VenbraceForgivingParser.STRING, 0); }
		public TerminalNode TRUE() { return getToken(VenbraceForgivingParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(VenbraceForgivingParser.FALSE, 0); }
		public TerminalNode COMPONENT_PROPERTY() { return getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0); }
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_atom);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(674);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE || ((((_la - 122)) & ~0x3f) == 0 && ((1L << (_la - 122)) & ((1L << (NUMBER - 122)) | (1L << (NEG_NUM - 122)) | (1L << (COMPONENT_PROPERTY - 122)) | (1L << (STRING - 122)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabelContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public LabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label; }
	}

	public final LabelContext label() throws RecognitionException {
		LabelContext _localctx = new LabelContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(676);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 27:
			return and_expr_sempred((And_exprContext)_localctx, predIndex);
		case 28:
			return or_expr_sempred((Or_exprContext)_localctx, predIndex);
		case 31:
			return add_sub_expr_sempred((Add_sub_exprContext)_localctx, predIndex);
		case 32:
			return mul_div_expr_sempred((Mul_div_exprContext)_localctx, predIndex);
		case 33:
			return pow_expr_sempred((Pow_exprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean and_expr_sempred(And_exprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean or_expr_sempred(Or_exprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean add_sub_expr_sempred(Add_sub_exprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 1);
		case 3:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean mul_div_expr_sempred(Mul_div_exprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean pow_expr_sempred(Pow_exprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0082\u02a9\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\3\2\7\2x\n\2"+
		"\f\2\16\2{\13\2\3\2\3\2\3\3\3\3\3\3\5\3\u0082\n\3\3\4\6\4\u0085\n\4\r"+
		"\4\16\4\u0086\3\5\3\5\3\5\3\5\3\5\3\5\5\5\u008f\n\5\3\6\6\6\u0092\n\6"+
		"\r\6\16\6\u0093\3\7\5\7\u0097\n\7\3\7\3\7\5\7\u009b\n\7\3\7\3\7\5\7\u009f"+
		"\n\7\3\7\5\7\u00a2\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\5\b\u00b1\n\b\3\t\3\t\3\t\3\t\5\t\u00b7\n\t\3\n\3\n\3\n\3\n\5\n\u00bd"+
		"\n\n\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\r\7\r\u00c8\n\r\f\r\16\r\u00cb"+
		"\13\r\3\r\5\r\u00ce\n\r\3\r\3\r\3\16\3\16\3\16\7\16\u00d5\n\16\f\16\16"+
		"\16\u00d8\13\16\3\16\5\16\u00db\n\16\3\16\3\16\3\17\3\17\3\17\7\17\u00e2"+
		"\n\17\f\17\16\17\u00e5\13\17\3\17\5\17\u00e8\n\17\3\17\3\17\3\20\7\20"+
		"\u00ed\n\20\f\20\16\20\u00f0\13\20\3\20\3\20\7\20\u00f4\n\20\f\20\16\20"+
		"\u00f7\13\20\3\20\3\20\3\20\7\20\u00fc\n\20\f\20\16\20\u00ff\13\20\3\20"+
		"\3\20\3\20\7\20\u0104\n\20\f\20\16\20\u0107\13\20\3\20\5\20\u010a\n\20"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21"+
		"\u0119\n\21\3\22\3\22\3\22\3\22\5\22\u011f\n\22\3\23\3\23\3\23\5\23\u0124"+
		"\n\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\7\24\u012f\n\24\f\24"+
		"\16\24\u0132\13\24\3\24\3\24\5\24\u0136\n\24\3\25\3\25\3\25\5\25\u013b"+
		"\n\25\3\25\3\25\5\25\u013f\n\25\3\25\3\25\5\25\u0143\n\25\3\25\3\25\5"+
		"\25\u0147\n\25\3\25\3\25\3\26\3\26\5\26\u014d\n\26\3\26\3\26\5\26\u0151"+
		"\n\26\3\26\3\26\3\27\3\27\3\27\5\27\u0158\n\27\3\27\7\27\u015b\n\27\f"+
		"\27\16\27\u015e\13\27\3\30\3\30\3\31\3\31\3\31\3\31\5\31\u0166\n\31\3"+
		"\31\3\31\6\31\u016a\n\31\r\31\16\31\u016b\3\31\5\31\u016f\n\31\3\31\3"+
		"\31\3\32\3\32\3\33\3\33\5\33\u0177\n\33\3\33\3\33\5\33\u017b\n\33\3\33"+
		"\3\33\3\33\3\33\5\33\u0181\n\33\3\33\5\33\u0184\n\33\3\34\3\34\3\35\3"+
		"\35\3\35\3\35\3\35\3\35\7\35\u018e\n\35\f\35\16\35\u0191\13\35\3\36\3"+
		"\36\3\36\3\36\3\36\3\36\7\36\u0199\n\36\f\36\16\36\u019c\13\36\3\37\3"+
		"\37\3\37\3\37\3\37\5\37\u01a3\n\37\3 \3 \3!\3!\3!\3!\3!\6!\u01ac\n!\r"+
		"!\16!\u01ad\5!\u01b0\n!\3!\3!\3!\3!\3!\7!\u01b7\n!\f!\16!\u01ba\13!\3"+
		"\"\3\"\3\"\3\"\3\"\6\"\u01c1\n\"\r\"\16\"\u01c2\5\"\u01c5\n\"\3\"\3\""+
		"\3\"\7\"\u01ca\n\"\f\"\16\"\u01cd\13\"\3#\3#\3#\3#\3#\3#\7#\u01d5\n#\f"+
		"#\16#\u01d8\13#\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\5$\u01e8\n$"+
		"\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\5$\u01f6\n$\3%\3%\5%\u01fa\n%\3&"+
		"\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3)\5)\u020f\n"+
		")\3*\3*\7*\u0213\n*\f*\16*\u0216\13*\3+\3+\3+\3,\3,\3-\3-\3-\3-\3-\3-"+
		"\3.\3.\3.\3/\3/\3\60\3\60\3\60\3\60\3\60\5\60\u022d\n\60\3\61\3\61\3\61"+
		"\3\62\3\62\7\62\u0234\n\62\f\62\16\62\u0237\13\62\3\63\3\63\3\63\3\64"+
		"\3\64\3\64\3\65\3\65\5\65\u0241\n\65\3\65\3\65\5\65\u0245\n\65\3\65\3"+
		"\65\5\65\u0249\n\65\3\65\3\65\3\66\5\66\u024e\n\66\3\66\3\66\3\66\5\66"+
		"\u0253\n\66\3\66\3\66\5\66\u0257\n\66\3\67\3\67\3\67\5\67\u025c\n\67\3"+
		"\67\3\67\3\67\3\67\3\67\5\67\u0263\n\67\3\67\3\67\3\67\3\67\3\67\5\67"+
		"\u026a\n\67\3\67\3\67\3\67\3\67\5\67\u0270\n\67\3\67\3\67\3\67\3\67\3"+
		"\67\5\67\u0277\n\67\3\67\3\67\3\67\3\67\3\67\5\67\u027e\n\67\3\67\3\67"+
		"\3\67\5\67\u0283\n\67\38\38\38\38\38\58\u028a\n8\38\58\u028d\n8\38\78"+
		"\u0290\n8\f8\168\u0293\138\39\39\39\39\59\u0299\n9\39\69\u029c\n9\r9\16"+
		"9\u029d\39\59\u02a1\n9\39\39\3:\3:\3;\3;\3;\2\78:@BD<\2\4\6\b\n\f\16\20"+
		"\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhj"+
		"lnprt\2\b\3\2!\"\3\29>\3\2UV\3\2KR\3\2\\a\5\2\22\23|~\u0082\u0082\2\u02e1"+
		"\2y\3\2\2\2\4\u0081\3\2\2\2\6\u0084\3\2\2\2\b\u008e\3\2\2\2\n\u0091\3"+
		"\2\2\2\f\u00a1\3\2\2\2\16\u00b0\3\2\2\2\20\u00b6\3\2\2\2\22\u00b8\3\2"+
		"\2\2\24\u00c0\3\2\2\2\26\u00c2\3\2\2\2\30\u00c4\3\2\2\2\32\u00d1\3\2\2"+
		"\2\34\u00de\3\2\2\2\36\u0109\3\2\2\2 \u0118\3\2\2\2\"\u011e\3\2\2\2$\u0123"+
		"\3\2\2\2&\u0125\3\2\2\2(\u0137\3\2\2\2*\u014a\3\2\2\2,\u0154\3\2\2\2."+
		"\u015f\3\2\2\2\60\u0169\3\2\2\2\62\u0172\3\2\2\2\64\u0183\3\2\2\2\66\u0185"+
		"\3\2\2\28\u0187\3\2\2\2:\u0192\3\2\2\2<\u01a2\3\2\2\2>\u01a4\3\2\2\2@"+
		"\u01af\3\2\2\2B\u01c4\3\2\2\2D\u01ce\3\2\2\2F\u01f5\3\2\2\2H\u01f9\3\2"+
		"\2\2J\u01fb\3\2\2\2L\u0202\3\2\2\2N\u0207\3\2\2\2P\u020e\3\2\2\2R\u0210"+
		"\3\2\2\2T\u0217\3\2\2\2V\u021a\3\2\2\2X\u021c\3\2\2\2Z\u0222\3\2\2\2\\"+
		"\u0225\3\2\2\2^\u022c\3\2\2\2`\u022e\3\2\2\2b\u0231\3\2\2\2d\u0238\3\2"+
		"\2\2f\u023b\3\2\2\2h\u023e\3\2\2\2j\u0256\3\2\2\2l\u0282\3\2\2\2n\u0284"+
		"\3\2\2\2p\u029b\3\2\2\2r\u02a4\3\2\2\2t\u02a6\3\2\2\2vx\5\16\b\2wv\3\2"+
		"\2\2x{\3\2\2\2yw\3\2\2\2yz\3\2\2\2z|\3\2\2\2{y\3\2\2\2|}\7\2\2\3}\3\3"+
		"\2\2\2~\u0082\5\16\b\2\177\u0082\5 \21\2\u0080\u0082\5\66\34\2\u0081~"+
		"\3\2\2\2\u0081\177\3\2\2\2\u0081\u0080\3\2\2\2\u0082\5\3\2\2\2\u0083\u0085"+
		"\5\b\5\2\u0084\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086\u0084\3\2\2\2\u0086"+
		"\u0087\3\2\2\2\u0087\7\3\2\2\2\u0088\u0089\7\3\2\2\u0089\u008f\5\16\b"+
		"\2\u008a\u008b\7\4\2\2\u008b\u008f\5 \21\2\u008c\u008d\7\5\2\2\u008d\u008f"+
		"\5\66\34\2\u008e\u0088\3\2\2\2\u008e\u008a\3\2\2\2\u008e\u008c\3\2\2\2"+
		"\u008f\t\3\2\2\2\u0090\u0092\5\f\7\2\u0091\u0090\3\2\2\2\u0092\u0093\3"+
		"\2\2\2\u0093\u0091\3\2\2\2\u0093\u0094\3\2\2\2\u0094\13\3\2\2\2\u0095"+
		"\u0097\7\3\2\2\u0096\u0095\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u0098\3\2"+
		"\2\2\u0098\u00a2\5\16\b\2\u0099\u009b\7\4\2\2\u009a\u0099\3\2\2\2\u009a"+
		"\u009b\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u00a2\5 \21\2\u009d\u009f\7\5"+
		"\2\2\u009e\u009d\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0"+
		"\u00a2\5\66\34\2\u00a1\u0096\3\2\2\2\u00a1\u009a\3\2\2\2\u00a1\u009e\3"+
		"\2\2\2\u00a2\r\3\2\2\2\u00a3\u00a4\7\13\2\2\u00a4\u00a5\5\20\t\2\u00a5"+
		"\u00a6\7\f\2\2\u00a6\u00b1\3\2\2\2\u00a7\u00a8\7\7\2\2\u00a8\u00a9\5\20"+
		"\t\2\u00a9\u00aa\7\b\2\2\u00aa\u00b1\3\2\2\2\u00ab\u00ac\7\t\2\2\u00ac"+
		"\u00ad\5\20\t\2\u00ad\u00ae\7\n\2\2\u00ae\u00b1\3\2\2\2\u00af\u00b1\5"+
		"\20\t\2\u00b0\u00a3\3\2\2\2\u00b0\u00a7\3\2\2\2\u00b0\u00ab\3\2\2\2\u00b0"+
		"\u00af\3\2\2\2\u00b1\17\3\2\2\2\u00b2\u00b7\5\22\n\2\u00b3\u00b7\5\30"+
		"\r\2\u00b4\u00b7\5\32\16\2\u00b5\u00b7\5\34\17\2\u00b6\u00b2\3\2\2\2\u00b6"+
		"\u00b3\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b6\u00b5\3\2\2\2\u00b7\21\3\2\2"+
		"\2\u00b8\u00b9\5\24\13\2\u00b9\u00ba\5\26\f\2\u00ba\u00bc\7\177\2\2\u00bb"+
		"\u00bd\7\34\2\2\u00bc\u00bb\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00be\3"+
		"\2\2\2\u00be\u00bf\5\66\34\2\u00bf\23\3\2\2\2\u00c0\u00c1\t\2\2\2\u00c1"+
		"\25\3\2\2\2\u00c2\u00c3\7 \2\2\u00c3\27\3\2\2\2\u00c4\u00c5\7\34\2\2\u00c5"+
		"\u00c9\7\177\2\2\u00c6\u00c8\7\177\2\2\u00c7\u00c6\3\2\2\2\u00c8\u00cb"+
		"\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cd\3\2\2\2\u00cb"+
		"\u00c9\3\2\2\2\u00cc\u00ce\7\32\2\2\u00cd\u00cc\3\2\2\2\u00cd\u00ce\3"+
		"\2\2\2\u00ce\u00cf\3\2\2\2\u00cf\u00d0\5\36\20\2\u00d0\31\3\2\2\2\u00d1"+
		"\u00d2\7\34\2\2\u00d2\u00d6\7\177\2\2\u00d3\u00d5\7\177\2\2\u00d4\u00d3"+
		"\3\2\2\2\u00d5\u00d8\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7"+
		"\u00da\3\2\2\2\u00d8\u00d6\3\2\2\2\u00d9\u00db\7\33\2\2\u00da\u00d9\3"+
		"\2\2\2\u00da\u00db\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc\u00dd\5\66\34\2\u00dd"+
		"\33\3\2\2\2\u00de\u00df\7\24\2\2\u00df\u00e3\7~\2\2\u00e0\u00e2\7\177"+
		"\2\2\u00e1\u00e0\3\2\2\2\u00e2\u00e5\3\2\2\2\u00e3\u00e1\3\2\2\2\u00e3"+
		"\u00e4\3\2\2\2\u00e4\u00e7\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e6\u00e8\7\32"+
		"\2\2\u00e7\u00e6\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9"+
		"\u00ea\5\36\20\2\u00ea\35\3\2\2\2\u00eb\u00ed\5 \21\2\u00ec\u00eb\3\2"+
		"\2\2\u00ed\u00f0\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef"+
		"\u010a\3\2\2\2\u00f0\u00ee\3\2\2\2\u00f1\u00f5\7\7\2\2\u00f2\u00f4\5 "+
		"\21\2\u00f3\u00f2\3\2\2\2\u00f4\u00f7\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f5"+
		"\u00f6\3\2\2\2\u00f6\u00f8\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f8\u010a\7\b"+
		"\2\2\u00f9\u00fd\7\13\2\2\u00fa\u00fc\5 \21\2\u00fb\u00fa\3\2\2\2\u00fc"+
		"\u00ff\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd\u00fe\3\2\2\2\u00fe\u0100\3\2"+
		"\2\2\u00ff\u00fd\3\2\2\2\u0100\u010a\7\f\2\2\u0101\u0105\7\t\2\2\u0102"+
		"\u0104\5 \21\2\u0103\u0102\3\2\2\2\u0104\u0107\3\2\2\2\u0105\u0103\3\2"+
		"\2\2\u0105\u0106\3\2\2\2\u0106\u0108\3\2\2\2\u0107\u0105\3\2\2\2\u0108"+
		"\u010a\7\n\2\2\u0109\u00ee\3\2\2\2\u0109\u00f1\3\2\2\2\u0109\u00f9\3\2"+
		"\2\2\u0109\u0101\3\2\2\2\u010a\37\3\2\2\2\u010b\u010c\7\7\2\2\u010c\u010d"+
		"\5\"\22\2\u010d\u010e\7\b\2\2\u010e\u0119\3\2\2\2\u010f\u0110\7\13\2\2"+
		"\u0110\u0111\5\"\22\2\u0111\u0112\7\f\2\2\u0112\u0119\3\2\2\2\u0113\u0114"+
		"\7\t\2\2\u0114\u0115\5\"\22\2\u0115\u0116\7\n\2\2\u0116\u0119\3\2\2\2"+
		"\u0117\u0119\5\"\22\2\u0118\u010b\3\2\2\2\u0118\u010f\3\2\2\2\u0118\u0113"+
		"\3\2\2\2\u0118\u0117\3\2\2\2\u0119!\3\2\2\2\u011a\u011f\5$\23\2\u011b"+
		"\u011f\5,\27\2\u011c\u011f\5.\30\2\u011d\u011f\5\60\31\2\u011e\u011a\3"+
		"\2\2\2\u011e\u011b\3\2\2\2\u011e\u011c\3\2\2\2\u011e\u011d\3\2\2\2\u011f"+
		"#\3\2\2\2\u0120\u0124\5&\24\2\u0121\u0124\5(\25\2\u0122\u0124\5*\26\2"+
		"\u0123\u0120\3\2\2\2\u0123\u0121\3\2\2\2\u0123\u0122\3\2\2\2\u0124%\3"+
		"\2\2\2\u0125\u0126\7\25\2\2\u0126\u0127\5\66\34\2\u0127\u0128\7\26\2\2"+
		"\u0128\u0130\5\36\20\2\u0129\u012a\7\30\2\2\u012a\u012b\5\66\34\2\u012b"+
		"\u012c\7\26\2\2\u012c\u012d\5\36\20\2\u012d\u012f\3\2\2\2\u012e\u0129"+
		"\3\2\2\2\u012f\u0132\3\2\2\2\u0130\u012e\3\2\2\2\u0130\u0131\3\2\2\2\u0131"+
		"\u0135\3\2\2\2\u0132\u0130\3\2\2\2\u0133\u0134\7\27\2\2\u0134\u0136\5"+
		"\36\20\2\u0135\u0133\3\2\2\2\u0135\u0136\3\2\2\2\u0136\'\3\2\2\2\u0137"+
		"\u0138\7\31\2\2\u0138\u013a\7\177\2\2\u0139\u013b\7&\2\2\u013a\u0139\3"+
		"\2\2\2\u013a\u013b\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013e\5\66\34\2\u013d"+
		"\u013f\7\34\2\2\u013e\u013d\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u0140\3"+
		"\2\2\2\u0140\u0142\5\66\34\2\u0141\u0143\7%\2\2\u0142\u0141\3\2\2\2\u0142"+
		"\u0143\3\2\2\2\u0143\u0144\3\2\2\2\u0144\u0146\5\66\34\2\u0145\u0147\7"+
		"\32\2\2\u0146\u0145\3\2\2\2\u0146\u0147\3\2\2\2\u0147\u0148\3\2\2\2\u0148"+
		"\u0149\5\36\20\2\u0149)\3\2\2\2\u014a\u014c\7\'\2\2\u014b\u014d\7(\2\2"+
		"\u014c\u014b\3\2\2\2\u014c\u014d\3\2\2\2\u014d\u014e\3\2\2\2\u014e\u0150"+
		"\5\66\34\2\u014f\u0151\7\32\2\2\u0150\u014f\3\2\2\2\u0150\u0151\3\2\2"+
		"\2\u0151\u0152\3\2\2\2\u0152\u0153\5\36\20\2\u0153+\3\2\2\2\u0154\u0155"+
		"\7\35\2\2\u0155\u015c\7\177\2\2\u0156\u0158\5t;\2\u0157\u0156\3\2\2\2"+
		"\u0157\u0158\3\2\2\2\u0158\u0159\3\2\2\2\u0159\u015b\5\66\34\2\u015a\u0157"+
		"\3\2\2\2\u015b\u015e\3\2\2\2\u015c\u015a\3\2\2\2\u015c\u015d\3\2\2\2\u015d"+
		"-\3\2\2\2\u015e\u015c\3\2\2\2\u015f\u0160\5\64\33\2\u0160/\3\2\2\2\u0161"+
		"\u0162\5\24\13\2\u0162\u0163\5\62\32\2\u0163\u0165\7\177\2\2\u0164\u0166"+
		"\7\34\2\2\u0165\u0164\3\2\2\2\u0165\u0166\3\2\2\2\u0166\u0167\3\2\2\2"+
		"\u0167\u0168\5\66\34\2\u0168\u016a\3\2\2\2\u0169\u0161\3\2\2\2\u016a\u016b"+
		"\3\2\2\2\u016b\u0169\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016e\3\2\2\2\u016d"+
		"\u016f\7$\2\2\u016e\u016d\3\2\2\2\u016e\u016f\3\2\2\2\u016f\u0170\3\2"+
		"\2\2\u0170\u0171\5\36\20\2\u0171\61\3\2\2\2\u0172\u0173\7#\2\2\u0173\63"+
		"\3\2\2\2\u0174\u0176\7\37\2\2\u0175\u0177\7 \2\2\u0176\u0175\3\2\2\2\u0176"+
		"\u0177\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u017a\7\177\2\2\u0179\u017b\7"+
		"\34\2\2\u017a\u0179\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u017c\3\2\2\2\u017c"+
		"\u0184\5\66\34\2\u017d\u017e\7\37\2\2\u017e\u0180\7~\2\2\u017f\u0181\7"+
		"\34\2\2\u0180\u017f\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u0182\3\2\2\2\u0182"+
		"\u0184\5\66\34\2\u0183\u0174\3\2\2\2\u0183\u017d\3\2\2\2\u0184\65\3\2"+
		"\2\2\u0185\u0186\58\35\2\u0186\67\3\2\2\2\u0187\u0188\b\35\1\2\u0188\u0189"+
		"\5:\36\2\u0189\u018f\3\2\2\2\u018a\u018b\f\3\2\2\u018b\u018c\7\66\2\2"+
		"\u018c\u018e\58\35\3\u018d\u018a\3\2\2\2\u018e\u0191\3\2\2\2\u018f\u018d"+
		"\3\2\2\2\u018f\u0190\3\2\2\2\u01909\3\2\2\2\u0191\u018f\3\2\2\2\u0192"+
		"\u0193\b\36\1\2\u0193\u0194\5<\37\2\u0194\u019a\3\2\2\2\u0195\u0196\f"+
		"\3\2\2\u0196\u0197\7\67\2\2\u0197\u0199\5:\36\3\u0198\u0195\3\2\2\2\u0199"+
		"\u019c\3\2\2\2\u019a\u0198\3\2\2\2\u019a\u019b\3\2\2\2\u019b;\3\2\2\2"+
		"\u019c\u019a\3\2\2\2\u019d\u01a3\5@!\2\u019e\u019f\5@!\2\u019f\u01a0\5"+
		"> \2\u01a0\u01a1\5@!\2\u01a1\u01a3\3\2\2\2\u01a2\u019d\3\2\2\2\u01a2\u019e"+
		"\3\2\2\2\u01a3=\3\2\2\2\u01a4\u01a5\t\3\2\2\u01a5?\3\2\2\2\u01a6\u01a7"+
		"\b!\1\2\u01a7\u01b0\5B\"\2\u01a8\u01ab\5B\"\2\u01a9\u01aa\7A\2\2\u01aa"+
		"\u01ac\5@!\2\u01ab\u01a9\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01ab\3\2\2"+
		"\2\u01ad\u01ae\3\2\2\2\u01ae\u01b0\3\2\2\2\u01af\u01a6\3\2\2\2\u01af\u01a8"+
		"\3\2\2\2\u01b0\u01b8\3\2\2\2\u01b1\u01b2\f\3\2\2\u01b2\u01b3\7B\2\2\u01b3"+
		"\u01b7\5@!\3\u01b4\u01b5\f\4\2\2\u01b5\u01b7\7}\2\2\u01b6\u01b1\3\2\2"+
		"\2\u01b6\u01b4\3\2\2\2\u01b7\u01ba\3\2\2\2\u01b8\u01b6\3\2\2\2\u01b8\u01b9"+
		"\3\2\2\2\u01b9A\3\2\2\2\u01ba\u01b8\3\2\2\2\u01bb\u01bc\b\"\1\2\u01bc"+
		"\u01c5\5D#\2\u01bd\u01c0\5D#\2\u01be\u01bf\7C\2\2\u01bf\u01c1\5B\"\2\u01c0"+
		"\u01be\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2\u01c0\3\2\2\2\u01c2\u01c3\3\2"+
		"\2\2\u01c3\u01c5\3\2\2\2\u01c4\u01bb\3\2\2\2\u01c4\u01bd\3\2\2\2\u01c5"+
		"\u01cb\3\2\2\2\u01c6\u01c7\f\3\2\2\u01c7\u01c8\7D\2\2\u01c8\u01ca\5B\""+
		"\3\u01c9\u01c6\3\2\2\2\u01ca\u01cd\3\2\2\2\u01cb\u01c9\3\2\2\2\u01cb\u01cc"+
		"\3\2\2\2\u01ccC\3\2\2\2\u01cd\u01cb\3\2\2\2\u01ce\u01cf\b#\1\2\u01cf\u01d0"+
		"\5F$\2\u01d0\u01d6\3\2\2\2\u01d1\u01d2\f\3\2\2\u01d2\u01d3\7E\2\2\u01d3"+
		"\u01d5\5D#\3\u01d4\u01d1\3\2\2\2\u01d5\u01d8\3\2\2\2\u01d6\u01d4\3\2\2"+
		"\2\u01d6\u01d7\3\2\2\2\u01d7E\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d9\u01f6"+
		"\5j\66\2\u01da\u01f6\5H%\2\u01db\u01f6\5N(\2\u01dc\u01f6\5P)\2\u01dd\u01f6"+
		"\5^\60\2\u01de\u01f6\5n8\2\u01df\u01f6\5p9\2\u01e0\u01f6\5r:\2\u01e1\u01e2"+
		"\7\t\2\2\u01e2\u01e8\7\n\2\2\u01e3\u01e4\7\7\2\2\u01e4\u01e8\7\b\2\2\u01e5"+
		"\u01e6\7\13\2\2\u01e6\u01e8\7\f\2\2\u01e7\u01e1\3\2\2\2\u01e7\u01e3\3"+
		"\2\2\2\u01e7\u01e5\3\2\2\2\u01e8\u01f6\3\2\2\2\u01e9\u01ea\7\t\2\2\u01ea"+
		"\u01eb\5\66\34\2\u01eb\u01ec\7\n\2\2\u01ec\u01f6\3\2\2\2\u01ed\u01ee\7"+
		"\7\2\2\u01ee\u01ef\5\66\34\2\u01ef\u01f0\7\b\2\2\u01f0\u01f6\3\2\2\2\u01f1"+
		"\u01f2\7\13\2\2\u01f2\u01f3\5\66\34\2\u01f3\u01f4\7\f\2\2\u01f4\u01f6"+
		"\3\2\2\2\u01f5\u01d9\3\2\2\2\u01f5\u01da\3\2\2\2\u01f5\u01db\3\2\2\2\u01f5"+
		"\u01dc\3\2\2\2\u01f5\u01dd\3\2\2\2\u01f5\u01de\3\2\2\2\u01f5\u01df\3\2"+
		"\2\2\u01f5\u01e0\3\2\2\2\u01f5\u01e7\3\2\2\2\u01f5\u01e9\3\2\2\2\u01f5"+
		"\u01ed\3\2\2\2\u01f5\u01f1\3\2\2\2\u01f6G\3\2\2\2\u01f7\u01fa\5J&\2\u01f8"+
		"\u01fa\5L\'\2\u01f9\u01f7\3\2\2\2\u01f9\u01f8\3\2\2\2\u01faI\3\2\2\2\u01fb"+
		"\u01fc\7\25\2\2\u01fc\u01fd\5\66\34\2\u01fd\u01fe\7\26\2\2\u01fe\u01ff"+
		"\5\66\34\2\u01ff\u0200\7\27\2\2\u0200\u0201\5\66\34\2\u0201K\3\2\2\2\u0202"+
		"\u0203\7\32\2\2\u0203\u0204\5\36\20\2\u0204\u0205\7\33\2\2\u0205\u0206"+
		"\5\66\34\2\u0206M\3\2\2\2\u0207\u0208\7\65\2\2\u0208\u0209\5\66\34\2\u0209"+
		"O\3\2\2\2\u020a\u020f\5R*\2\u020b\u020f\5T+\2\u020c\u020f\5X-\2\u020d"+
		"\u020f\5Z.\2\u020e\u020a\3\2\2\2\u020e\u020b\3\2\2\2\u020e\u020c\3\2\2"+
		"\2\u020e\u020d\3\2\2\2\u020fQ\3\2\2\2\u0210\u0214\t\4\2\2\u0211\u0213"+
		"\5\66\34\2\u0212\u0211\3\2\2\2\u0213\u0216\3\2\2\2\u0214\u0212\3\2\2\2"+
		"\u0214\u0215\3\2\2\2\u0215S\3\2\2\2\u0216\u0214\3\2\2\2\u0217\u0218\5"+
		"V,\2\u0218\u0219\5\66\34\2\u0219U\3\2\2\2\u021a\u021b\t\5\2\2\u021bW\3"+
		"\2\2\2\u021c\u021d\7W\2\2\u021d\u021e\7Z\2\2\u021e\u021f\5\66\34\2\u021f"+
		"\u0220\7D\2\2\u0220\u0221\5\66\34\2\u0221Y\3\2\2\2\u0222\u0223\5\\/\2"+
		"\u0223\u0224\5\66\34\2\u0224[\3\2\2\2\u0225\u0226\t\6\2\2\u0226]\3\2\2"+
		"\2\u0227\u022d\5b\62\2\u0228\u022d\5`\61\2\u0229\u022d\5d\63\2\u022a\u022d"+
		"\5f\64\2\u022b\u022d\5h\65\2\u022c\u0227\3\2\2\2\u022c\u0228\3\2\2\2\u022c"+
		"\u0229\3\2\2\2\u022c\u022a\3\2\2\2\u022c\u022b\3\2\2\2\u022d_\3\2\2\2"+
		"\u022e\u022f\7d\2\2\u022f\u0230\5\66\34\2\u0230a\3\2\2\2\u0231\u0235\7"+
		"c\2\2\u0232\u0234\5\66\34\2\u0233\u0232\3\2\2\2\u0234\u0237\3\2\2\2\u0235"+
		"\u0233\3\2\2\2\u0235\u0236\3\2\2\2\u0236c\3\2\2\2\u0237\u0235\3\2\2\2"+
		"\u0238\u0239\7v\2\2\u0239\u023a\5\66\34\2\u023ae\3\2\2\2\u023b\u023c\7"+
		"p\2\2\u023c\u023d\5\66\34\2\u023dg\3\2\2\2\u023e\u0240\7q\2\2\u023f\u0241"+
		"\5t;\2\u0240\u023f\3\2\2\2\u0240\u0241\3\2\2\2\u0241\u0242\3\2\2\2\u0242"+
		"\u0244\5\66\34\2\u0243\u0245\5t;\2\u0244\u0243\3\2\2\2\u0244\u0245\3\2"+
		"\2\2\u0245\u0246\3\2\2\2\u0246\u0248\5\66\34\2\u0247\u0249\5t;\2\u0248"+
		"\u0247\3\2\2\2\u0248\u0249\3\2\2\2\u0249\u024a\3\2\2\2\u024a\u024b\5\66"+
		"\34\2\u024bi\3\2\2\2\u024c\u024e\7 \2\2\u024d\u024c\3\2\2\2\u024d\u024e"+
		"\3\2\2\2\u024e\u024f\3\2\2\2\u024f\u0257\7\177\2\2\u0250\u0252\7\36\2"+
		"\2\u0251\u0253\7 \2\2\u0252\u0251\3\2\2\2\u0252\u0253\3\2\2\2\u0253\u0254"+
		"\3\2\2\2\u0254\u0257\7\177\2\2\u0255\u0257\5l\67\2\u0256\u024d\3\2\2\2"+
		"\u0256\u0250\3\2\2\2\u0256\u0255\3\2\2\2\u0257k\3\2\2\2\u0258\u0259\7"+
		"\36\2\2\u0259\u025b\7\t\2\2\u025a\u025c\7 \2\2\u025b\u025a\3\2\2\2\u025b"+
		"\u025c\3\2\2\2\u025c\u025d\3\2\2\2\u025d\u025e\7\177\2\2\u025e\u0283\7"+
		"\n\2\2\u025f\u0260\7\36\2\2\u0260\u0262\7\7\2\2\u0261\u0263\7 \2\2\u0262"+
		"\u0261\3\2\2\2\u0262\u0263\3\2\2\2\u0263\u0264\3\2\2\2\u0264\u0265\7\177"+
		"\2\2\u0265\u0283\7\b\2\2\u0266\u0267\7\36\2\2\u0267\u0269\7\13\2\2\u0268"+
		"\u026a\7 \2\2\u0269\u0268\3\2\2\2\u0269\u026a\3\2\2\2\u026a\u026b\3\2"+
		"\2\2\u026b\u026c\7\177\2\2\u026c\u0283\7\f\2\2\u026d\u026f\7\36\2\2\u026e"+
		"\u0270\7 \2\2\u026f\u026e\3\2\2\2\u026f\u0270\3\2\2\2\u0270\u0271\3\2"+
		"\2\2\u0271\u0272\7\t\2\2\u0272\u0273\7\177\2\2\u0273\u0283\7\n\2\2\u0274"+
		"\u0276\7\36\2\2\u0275\u0277\7 \2\2\u0276\u0275\3\2\2\2\u0276\u0277\3\2"+
		"\2\2\u0277\u0278\3\2\2\2\u0278\u0279\7\7\2\2\u0279\u027a\7\177\2\2\u027a"+
		"\u0283\7\b\2\2\u027b\u027d\7\36\2\2\u027c\u027e\7 \2\2\u027d\u027c\3\2"+
		"\2\2\u027d\u027e\3\2\2\2\u027e\u027f\3\2\2\2\u027f\u0280\7\13\2\2\u0280"+
		"\u0281\7\177\2\2\u0281\u0283\7\f\2\2\u0282\u0258\3\2\2\2\u0282\u025f\3"+
		"\2\2\2\u0282\u0266\3\2\2\2\u0282\u026d\3\2\2\2\u0282\u0274\3\2\2\2\u0282"+
		"\u027b\3\2\2\2\u0283m\3\2\2\2\u0284\u0289\7\35\2\2\u0285\u028a\7\177\2"+
		"\2\u0286\u0287\7\177\2\2\u0287\u0288\7\17\2\2\u0288\u028a\7\177\2\2\u0289"+
		"\u0285\3\2\2\2\u0289\u0286\3\2\2\2\u028a\u0291\3\2\2\2\u028b\u028d\5t"+
		";\2\u028c\u028b\3\2\2\2\u028c\u028d\3\2\2\2\u028d\u028e\3\2\2\2\u028e"+
		"\u0290\5\66\34\2\u028f\u028c\3\2\2\2\u0290\u0293\3\2\2\2\u0291\u028f\3"+
		"\2\2\2\u0291\u0292\3\2\2\2\u0292o\3\2\2\2\u0293\u0291\3\2\2\2\u0294\u0295"+
		"\7!\2\2\u0295\u0296\7#\2\2\u0296\u0298\7\177\2\2\u0297\u0299\7\34\2\2"+
		"\u0298\u0297\3\2\2\2\u0298\u0299\3\2\2\2\u0299\u029a\3\2\2\2\u029a\u029c"+
		"\5\66\34\2\u029b\u0294\3\2\2\2\u029c\u029d\3\2\2\2\u029d\u029b\3\2\2\2"+
		"\u029d\u029e\3\2\2\2\u029e\u02a0\3\2\2\2\u029f\u02a1\7$\2\2\u02a0\u029f"+
		"\3\2\2\2\u02a0\u02a1\3\2\2\2\u02a1\u02a2\3\2\2\2\u02a2\u02a3\5\66\34\2"+
		"\u02a3q\3\2\2\2\u02a4\u02a5\t\7\2\2\u02a5s\3\2\2\2\u02a6\u02a7\7\177\2"+
		"\2\u02a7u\3\2\2\2Ry\u0081\u0086\u008e\u0093\u0096\u009a\u009e\u00a1\u00b0"+
		"\u00b6\u00bc\u00c9\u00cd\u00d6\u00da\u00e3\u00e7\u00ee\u00f5\u00fd\u0105"+
		"\u0109\u0118\u011e\u0123\u0130\u0135\u013a\u013e\u0142\u0146\u014c\u0150"+
		"\u0157\u015c\u0165\u016b\u016e\u0176\u017a\u0180\u0183\u018f\u019a\u01a2"+
		"\u01ad\u01af\u01b6\u01b8\u01c2\u01c4\u01cb\u01d6\u01e7\u01f5\u01f9\u020e"+
		"\u0214\u022c\u0235\u0240\u0244\u0248\u024d\u0252\u0256\u025b\u0262\u0269"+
		"\u026f\u0276\u027d\u0282\u0289\u028c\u0291\u0298\u029d\u02a0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}