// Generated from /Users/lisa/Desktop/app_inventor/venbrace/VenbraceForgiving.g4 by ANTLR 4.7.1
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
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, LCURLY=2, RCURLY=3, LPAREN=4, RPAREN=5, LSQR=6, RSQR=7, COMMA=8, 
		DIVIDER=9, DOT=10, ASSIGN=11, COLON=12, TRUE=13, FALSE=14, WHEN=15, IF=16, 
		THEN=17, ELSE=18, ELSE_IF=19, FOREACH=20, DO=21, RESULT=22, TO=23, CALL=24, 
		GET=25, SET=26, GLOBAL=27, INITIALIZE=28, INIT=29, LOCAL=30, IN=31, BY=32, 
		FROM=33, WHILE=34, TEST=35, EVAL_BUT_IGNORE_RESULT=36, OPEN_ANOTHER_SCREEN=37, 
		OPEN_ANOTHER_SCREEN_WITH_START_VALUE=38, CLOSE_SCREEN=39, CLOSE_SCREEN_WITH_VALUE=40, 
		CLOSE_SCREEN_WITH_PLAIN_TEXT=41, CLOSE_APPLICATION=42, SCREEN_NAME=43, 
		START_VALUE=44, TEXT=45, BREAK=46, GET_START_VALUE=47, GET_PLAIN_START_TEXT=48, 
		NOT=49, AND=50, OR=51, XOR=52, LT=53, GT=54, LE=55, GE=56, EQ=57, NEQ=58, 
		LOGIC_EQ=59, LOGIC_NOT_EQ=60, PLUS=61, MINUS=62, MUL=63, DIV=64, POW=65, 
		DECIMAL=66, BINARY=67, OCTAL=68, HEXADECIMAL=69, BITWISE=70, SQRT=71, 
		ABS=72, NEG=73, LOG=74, EULER=75, ROUND=76, CEILING=77, FLOOR=78, RANDOM_INTEGER=79, 
		RANDOM_FRACTION=80, MIN=81, MAX=82, MODULO=83, REMAINDER=84, QUOTIENT=85, 
		OF=86, CONVERT=87, SIN=88, COS=89, TAN=90, ASIN=91, ACOS=92, ATAN=93, 
		ATAN2=94, JOIN=95, LENGTH=96, IS_EMPTY=97, COMPARE_TEXTS=98, TRIM=99, 
		UPCASE=100, DOWNCASE=101, STARTS_AT=102, CONTAINS=103, SPLIT=104, SPLIT_AT_FIRST=105, 
		SPLIT_AT_ANY=106, SPLIT_AT_FIRST_OF_ANY=107, SPLIT_AT_SPACES=108, SEGMENT=109, 
		REPLACE_ALL=110, REPLACEMENT=111, OBFUSCATED_TEXT=112, IS_A_STR=113, REVERSE=114, 
		MAPPINGS=115, IN_TEXT=116, PREFERRING=117, LONGEST_STRING_FIRST=118, DICTIONARY=119, 
		NUMBER=120, NEG_NUM=121, COMPONENT_PROPERTY=122, ID=123, LINECOMMENT=124, 
		BLOCKCOMMENT=125, STRING=126;
	public static final int
		RULE_program = 0, RULE_test_program = 1, RULE_test_blocks = 2, RULE_decl_block = 3, 
		RULE_decl = 4, RULE_global_decl = 5, RULE_global_decl_keyword = 6, RULE_procedure_do = 7, 
		RULE_procedure_result = 8, RULE_event_handler = 9, RULE_suite = 10, RULE_stat_block = 11, 
		RULE_stat = 12, RULE_control_stat = 13, RULE_if_stat = 14, RULE_for_each_from_to = 15, 
		RULE_while_stat = 16, RULE_call_procedure_stat = 17, RULE_var_stat = 18, 
		RULE_local_var_decl_stat = 19, RULE_local_decl_keyword = 20, RULE_setter = 21, 
		RULE_expr_block = 22, RULE_expr = 23, RULE_control_expr = 24, RULE_if_expr = 25, 
		RULE_do_expr = 26, RULE_logic_expr = 27, RULE_not_expr = 28, RULE_compare_eq_expr = 29, 
		RULE_compare_math_expr = 30, RULE_math_expr = 31, RULE_mutable_op = 32, 
		RULE_immutable_op = 33, RULE_min_max = 34, RULE_unary_op = 35, RULE_mod = 36, 
		RULE_trig = 37, RULE_str_expr = 38, RULE_str_length = 39, RULE_str_join = 40, 
		RULE_str_reverse = 41, RULE_str_split_at_spaces = 42, RULE_getter = 43, 
		RULE_call_procedure_expr = 44, RULE_local_var_decl_expr = 45, RULE_atom = 46, 
		RULE_atom_elements = 47, RULE_label = 48;
	public static final String[] ruleNames = {
		"program", "test_program", "test_blocks", "decl_block", "decl", "global_decl", 
		"global_decl_keyword", "procedure_do", "procedure_result", "event_handler", 
		"suite", "stat_block", "stat", "control_stat", "if_stat", "for_each_from_to", 
		"while_stat", "call_procedure_stat", "var_stat", "local_var_decl_stat", 
		"local_decl_keyword", "setter", "expr_block", "expr", "control_expr", 
		"if_expr", "do_expr", "logic_expr", "not_expr", "compare_eq_expr", "compare_math_expr", 
		"math_expr", "mutable_op", "immutable_op", "min_max", "unary_op", "mod", 
		"trig", "str_expr", "str_length", "str_join", "str_reverse", "str_split_at_spaces", 
		"getter", "call_procedure_expr", "local_var_decl_expr", "atom", "atom_elements", 
		"label"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, "'{'", "'}'", "'('", "')'", "'['", "']'", "','", "'==='", 
		"'.'", "'<-'", "':'", "'true'", "'false'", "'when'", "'if'", "'then'", 
		"'else'", "'else if'", "'for each'", "'do'", "'result'", "'to'", "'call'", 
		"'get'", "'set'", "'global'", "'initialize'", "'init'", "'local'", "'in'", 
		"'by'", "'from'", "'while'", "'test'", "'evaluate but ignore'", "'open another screen'", 
		"'open another screen with start value'", "'close screen'", "'close screen with value'", 
		"'close screen with plain text'", "'close application'", "'screenName'", 
		"'startValue'", "'text'", "'break'", "'get start value'", "'get plain start text'", 
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
	private static final String[] _SYMBOLIC_NAMES = {
		null, "WS", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LSQR", "RSQR", "COMMA", 
		"DIVIDER", "DOT", "ASSIGN", "COLON", "TRUE", "FALSE", "WHEN", "IF", "THEN", 
		"ELSE", "ELSE_IF", "FOREACH", "DO", "RESULT", "TO", "CALL", "GET", "SET", 
		"GLOBAL", "INITIALIZE", "INIT", "LOCAL", "IN", "BY", "FROM", "WHILE", 
		"TEST", "EVAL_BUT_IGNORE_RESULT", "OPEN_ANOTHER_SCREEN", "OPEN_ANOTHER_SCREEN_WITH_START_VALUE", 
		"CLOSE_SCREEN", "CLOSE_SCREEN_WITH_VALUE", "CLOSE_SCREEN_WITH_PLAIN_TEXT", 
		"CLOSE_APPLICATION", "SCREEN_NAME", "START_VALUE", "TEXT", "BREAK", "GET_START_VALUE", 
		"GET_PLAIN_START_TEXT", "NOT", "AND", "OR", "XOR", "LT", "GT", "LE", "GE", 
		"EQ", "NEQ", "LOGIC_EQ", "LOGIC_NOT_EQ", "PLUS", "MINUS", "MUL", "DIV", 
		"POW", "DECIMAL", "BINARY", "OCTAL", "HEXADECIMAL", "BITWISE", "SQRT", 
		"ABS", "NEG", "LOG", "EULER", "ROUND", "CEILING", "FLOOR", "RANDOM_INTEGER", 
		"RANDOM_FRACTION", "MIN", "MAX", "MODULO", "REMAINDER", "QUOTIENT", "OF", 
		"CONVERT", "SIN", "COS", "TAN", "ASIN", "ACOS", "ATAN", "ATAN2", "JOIN", 
		"LENGTH", "IS_EMPTY", "COMPARE_TEXTS", "TRIM", "UPCASE", "DOWNCASE", "STARTS_AT", 
		"CONTAINS", "SPLIT", "SPLIT_AT_FIRST", "SPLIT_AT_ANY", "SPLIT_AT_FIRST_OF_ANY", 
		"SPLIT_AT_SPACES", "SEGMENT", "REPLACE_ALL", "REPLACEMENT", "OBFUSCATED_TEXT", 
		"IS_A_STR", "REVERSE", "MAPPINGS", "IN_TEXT", "PREFERRING", "LONGEST_STRING_FIRST", 
		"DICTIONARY", "NUMBER", "NEG_NUM", "COMPONENT_PROPERTY", "ID", "LINECOMMENT", 
		"BLOCKCOMMENT", "STRING"
	};
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
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << WHEN) | (1L << TO) | (1L << INITIALIZE) | (1L << INIT))) != 0)) {
				{
				{
				setState(98);
				decl_block();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(104);
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
			setState(109);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(106);
				decl_block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(107);
				stat_block();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(108);
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

	public static class Test_blocksContext extends ParserRuleContext {
		public List<Decl_blockContext> decl_block() {
			return getRuleContexts(Decl_blockContext.class);
		}
		public Decl_blockContext decl_block(int i) {
			return getRuleContext(Decl_blockContext.class,i);
		}
		public List<Stat_blockContext> stat_block() {
			return getRuleContexts(Stat_blockContext.class);
		}
		public Stat_blockContext stat_block(int i) {
			return getRuleContext(Stat_blockContext.class,i);
		}
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public Test_blocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_test_blocks; }
	}

	public final Test_blocksContext test_blocks() throws RecognitionException {
		Test_blocksContext _localctx = new Test_blocksContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_test_blocks);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(114);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(111);
					decl_block();
					}
					break;
				case 2:
					{
					setState(112);
					stat_block();
					}
					break;
				case 3:
					{
					setState(113);
					expr_block();
					}
					break;
				}
				}
				setState(116); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << TRUE) | (1L << FALSE) | (1L << WHEN) | (1L << IF) | (1L << FOREACH) | (1L << TO) | (1L << CALL) | (1L << SET) | (1L << INITIALIZE) | (1L << INIT) | (1L << WHILE))) != 0) || ((((_la - 120)) & ~0x3f) == 0 && ((1L << (_la - 120)) & ((1L << (NUMBER - 120)) | (1L << (NEG_NUM - 120)) | (1L << (COMPONENT_PROPERTY - 120)) | (1L << (ID - 120)) | (1L << (STRING - 120)))) != 0) );
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
		enterRule(_localctx, 6, RULE_decl_block);
		try {
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LSQR:
				enterOuterAlt(_localctx, 1);
				{
				setState(118);
				((Decl_blockContext)_localctx).declLbrace = match(LSQR);
				setState(119);
				decl();
				setState(120);
				((Decl_blockContext)_localctx).declRbrace = match(RSQR);
				}
				break;
			case LCURLY:
				enterOuterAlt(_localctx, 2);
				{
				setState(122);
				((Decl_blockContext)_localctx).declLbrace = match(LCURLY);
				setState(123);
				decl();
				setState(124);
				((Decl_blockContext)_localctx).declRbrace = match(RCURLY);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(126);
				((Decl_blockContext)_localctx).declLbrace = match(LPAREN);
				setState(127);
				decl();
				setState(128);
				((Decl_blockContext)_localctx).declRbrace = match(RPAREN);
				}
				break;
			case WHEN:
			case TO:
			case INITIALIZE:
			case INIT:
				enterOuterAlt(_localctx, 4);
				{
				setState(130);
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
		enterRule(_localctx, 8, RULE_decl);
		try {
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(133);
				global_decl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(134);
				procedure_do();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(135);
				procedure_result();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(136);
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
		public Global_decl_keywordContext global_decl_keyword() {
			return getRuleContext(Global_decl_keywordContext.class,0);
		}
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode INIT() { return getToken(VenbraceForgivingParser.INIT, 0); }
		public TerminalNode INITIALIZE() { return getToken(VenbraceForgivingParser.INITIALIZE, 0); }
		public TerminalNode TO() { return getToken(VenbraceForgivingParser.TO, 0); }
		public Global_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_decl; }
	}

	public final Global_declContext global_decl() throws RecognitionException {
		Global_declContext _localctx = new Global_declContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_global_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			_la = _input.LA(1);
			if ( !(_la==INITIALIZE || _la==INIT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(140);
			global_decl_keyword();
			setState(141);
			match(ID);
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TO) {
				{
				setState(142);
				match(TO);
				}
			}

			setState(145);
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

	public static class Global_decl_keywordContext extends ParserRuleContext {
		public TerminalNode GLOBAL() { return getToken(VenbraceForgivingParser.GLOBAL, 0); }
		public Global_decl_keywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_decl_keyword; }
	}

	public final Global_decl_keywordContext global_decl_keyword() throws RecognitionException {
		Global_decl_keywordContext _localctx = new Global_decl_keywordContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_global_decl_keyword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
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
		enterRule(_localctx, 14, RULE_procedure_do);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(TO);
			setState(150);
			((Procedure_doContext)_localctx).proc_name = match(ID);
			setState(154);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(151);
					((Procedure_doContext)_localctx).arg_name = match(ID);
					}
					} 
				}
				setState(156);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DO) {
				{
				setState(157);
				match(DO);
				}
			}

			setState(160);
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
		enterRule(_localctx, 16, RULE_procedure_result);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			match(TO);
			setState(163);
			((Procedure_resultContext)_localctx).proc_name = match(ID);
			setState(167);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(164);
					((Procedure_resultContext)_localctx).arg_name = match(ID);
					}
					} 
				}
				setState(169);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RESULT) {
				{
				setState(170);
				match(RESULT);
				}
			}

			setState(173);
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
		enterRule(_localctx, 18, RULE_event_handler);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			match(WHEN);
			setState(176);
			match(COMPONENT_PROPERTY);
			setState(180);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(177);
					((Event_handlerContext)_localctx).param_name = match(ID);
					}
					} 
				}
				setState(182);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			setState(184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DO) {
				{
				setState(183);
				match(DO);
				}
			}

			setState(186);
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
		enterRule(_localctx, 20, RULE_suite);
		int _la;
		try {
			int _alt;
			setState(218);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(191);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(188);
						stat_block();
						}
						} 
					}
					setState(193);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(194);
				((SuiteContext)_localctx).suiteLbrace = match(LCURLY);
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << IF) | (1L << FOREACH) | (1L << CALL) | (1L << SET) | (1L << INITIALIZE) | (1L << WHILE))) != 0)) {
					{
					{
					setState(195);
					stat_block();
					}
					}
					setState(200);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(201);
				((SuiteContext)_localctx).suiteRbrace = match(RCURLY);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(202);
				((SuiteContext)_localctx).suiteLbrace = match(LSQR);
				setState(206);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << IF) | (1L << FOREACH) | (1L << CALL) | (1L << SET) | (1L << INITIALIZE) | (1L << WHILE))) != 0)) {
					{
					{
					setState(203);
					stat_block();
					}
					}
					setState(208);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(209);
				((SuiteContext)_localctx).suiteRbrace = match(RSQR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(210);
				((SuiteContext)_localctx).suiteLbrace = match(LPAREN);
				setState(214);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LCURLY) | (1L << LPAREN) | (1L << LSQR) | (1L << IF) | (1L << FOREACH) | (1L << CALL) | (1L << SET) | (1L << INITIALIZE) | (1L << WHILE))) != 0)) {
					{
					{
					setState(211);
					stat_block();
					}
					}
					setState(216);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(217);
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
		enterRule(_localctx, 22, RULE_stat_block);
		try {
			setState(233);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LCURLY:
				enterOuterAlt(_localctx, 1);
				{
				setState(220);
				((Stat_blockContext)_localctx).statLbrace = match(LCURLY);
				setState(221);
				stat();
				setState(222);
				((Stat_blockContext)_localctx).statRbrace = match(RCURLY);
				}
				break;
			case LSQR:
				enterOuterAlt(_localctx, 2);
				{
				setState(224);
				((Stat_blockContext)_localctx).statLbrace = match(LSQR);
				setState(225);
				stat();
				setState(226);
				((Stat_blockContext)_localctx).statRbrace = match(RSQR);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(228);
				((Stat_blockContext)_localctx).statLbrace = match(LPAREN);
				setState(229);
				stat();
				setState(230);
				((Stat_blockContext)_localctx).statRbrace = match(RPAREN);
				}
				break;
			case IF:
			case FOREACH:
			case CALL:
			case SET:
			case INITIALIZE:
			case WHILE:
				enterOuterAlt(_localctx, 4);
				{
				setState(232);
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
		enterRule(_localctx, 24, RULE_stat);
		try {
			setState(239);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
			case FOREACH:
			case WHILE:
				enterOuterAlt(_localctx, 1);
				{
				setState(235);
				control_stat();
				}
				break;
			case CALL:
				enterOuterAlt(_localctx, 2);
				{
				setState(236);
				call_procedure_stat();
				}
				break;
			case SET:
				enterOuterAlt(_localctx, 3);
				{
				setState(237);
				var_stat();
				}
				break;
			case INITIALIZE:
				enterOuterAlt(_localctx, 4);
				{
				setState(238);
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
		enterRule(_localctx, 26, RULE_control_stat);
		try {
			setState(244);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(241);
				if_stat();
				}
				break;
			case FOREACH:
				enterOuterAlt(_localctx, 2);
				{
				setState(242);
				for_each_from_to();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 3);
				{
				setState(243);
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
		enterRule(_localctx, 28, RULE_if_stat);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			match(IF);
			setState(247);
			((If_statContext)_localctx).e1 = expr_block();
			setState(248);
			match(THEN);
			setState(249);
			((If_statContext)_localctx).s1 = suite();
			setState(257);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(250);
					match(ELSE_IF);
					setState(251);
					((If_statContext)_localctx).e2 = expr_block();
					setState(252);
					match(THEN);
					setState(253);
					((If_statContext)_localctx).s2 = suite();
					}
					} 
				}
				setState(259);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			setState(262);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(260);
				match(ELSE);
				setState(261);
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
		enterRule(_localctx, 30, RULE_for_each_from_to);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(FOREACH);
			setState(265);
			match(ID);
			setState(267);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM) {
				{
				setState(266);
				match(FROM);
				}
			}

			setState(269);
			((For_each_from_toContext)_localctx).from = expr_block();
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TO) {
				{
				setState(270);
				match(TO);
				}
			}

			setState(273);
			((For_each_from_toContext)_localctx).to = expr_block();
			setState(275);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BY) {
				{
				setState(274);
				match(BY);
				}
			}

			setState(277);
			((For_each_from_toContext)_localctx).by = expr_block();
			setState(279);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DO) {
				{
				setState(278);
				match(DO);
				}
			}

			setState(281);
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
		enterRule(_localctx, 32, RULE_while_stat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			match(WHILE);
			setState(285);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TEST) {
				{
				setState(284);
				match(TEST);
				}
			}

			setState(287);
			expr_block();
			setState(289);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DO) {
				{
				setState(288);
				match(DO);
				}
			}

			setState(291);
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
		enterRule(_localctx, 34, RULE_call_procedure_stat);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			match(CALL);
			setState(294);
			match(ID);
			setState(301);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(296);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
					case 1:
						{
						setState(295);
						label();
						}
						break;
					}
					setState(298);
					((Call_procedure_statContext)_localctx).arg = expr_block();
					}
					} 
				}
				setState(303);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
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
		enterRule(_localctx, 36, RULE_var_stat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
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
		public List<TerminalNode> INITIALIZE() { return getTokens(VenbraceForgivingParser.INITIALIZE); }
		public TerminalNode INITIALIZE(int i) {
			return getToken(VenbraceForgivingParser.INITIALIZE, i);
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
		enterRule(_localctx, 38, RULE_local_var_decl_stat);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(314); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(306);
					match(INITIALIZE);
					setState(307);
					local_decl_keyword();
					setState(308);
					match(ID);
					setState(310);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==TO) {
						{
						setState(309);
						match(TO);
						}
					}

					setState(312);
					expr_block();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(316); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(319);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IN) {
				{
				setState(318);
				match(IN);
				}
			}

			setState(321);
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
		enterRule(_localctx, 40, RULE_local_decl_keyword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
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
		public Token target;
		public TerminalNode SET() { return getToken(VenbraceForgivingParser.SET, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public TerminalNode COMPONENT_PROPERTY() { return getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0); }
		public TerminalNode GLOBAL() { return getToken(VenbraceForgivingParser.GLOBAL, 0); }
		public TerminalNode TO() { return getToken(VenbraceForgivingParser.TO, 0); }
		public SetterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setter; }
	}

	public final SetterContext setter() throws RecognitionException {
		SetterContext _localctx = new SetterContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_setter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(325);
			match(SET);
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==GLOBAL) {
				{
				setState(326);
				match(GLOBAL);
				}
			}

			setState(329);
			((SetterContext)_localctx).target = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==COMPONENT_PROPERTY || _la==ID) ) {
				((SetterContext)_localctx).target = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(331);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TO) {
				{
				setState(330);
				match(TO);
				}
			}

			setState(333);
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

	public static class Expr_blockContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Expr_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_block; }
	}

	public final Expr_blockContext expr_block() throws RecognitionException {
		Expr_blockContext _localctx = new Expr_blockContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_expr_block);
		try {
			setState(339);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(335);
				match(LPAREN);
				setState(336);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(337);
				atom();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(338);
				expr();
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

	public static class ExprContext extends ParserRuleContext {
		public GetterContext getter() {
			return getRuleContext(GetterContext.class,0);
		}
		public Control_exprContext control_expr() {
			return getRuleContext(Control_exprContext.class,0);
		}
		public Logic_exprContext logic_expr() {
			return getRuleContext(Logic_exprContext.class,0);
		}
		public Not_exprContext not_expr() {
			return getRuleContext(Not_exprContext.class,0);
		}
		public Compare_eq_exprContext compare_eq_expr() {
			return getRuleContext(Compare_eq_exprContext.class,0);
		}
		public Compare_math_exprContext compare_math_expr() {
			return getRuleContext(Compare_math_exprContext.class,0);
		}
		public Math_exprContext math_expr() {
			return getRuleContext(Math_exprContext.class,0);
		}
		public Str_exprContext str_expr() {
			return getRuleContext(Str_exprContext.class,0);
		}
		public Call_procedure_exprContext call_procedure_expr() {
			return getRuleContext(Call_procedure_exprContext.class,0);
		}
		public Local_var_decl_exprContext local_var_decl_expr() {
			return getRuleContext(Local_var_decl_exprContext.class,0);
		}
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_expr);
		try {
			setState(352);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(341);
				getter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(342);
				control_expr();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(343);
				logic_expr();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(344);
				not_expr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(345);
				compare_eq_expr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(346);
				compare_math_expr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(347);
				math_expr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(348);
				str_expr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(349);
				call_procedure_expr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(350);
				local_var_decl_expr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(351);
				atom();
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
		enterRule(_localctx, 48, RULE_control_expr);
		try {
			setState(356);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(354);
				if_expr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(355);
				do_expr();
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

	public static class If_exprContext extends ParserRuleContext {
		public Expr_blockContext c;
		public Expr_blockContext e1;
		public Expr_blockContext e2;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode IF() { return getToken(VenbraceForgivingParser.IF, 0); }
		public TerminalNode THEN() { return getToken(VenbraceForgivingParser.THEN, 0); }
		public TerminalNode ELSE() { return getToken(VenbraceForgivingParser.ELSE, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
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
		enterRule(_localctx, 50, RULE_if_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			match(LPAREN);
			setState(359);
			match(IF);
			setState(360);
			((If_exprContext)_localctx).c = expr_block();
			setState(361);
			match(THEN);
			setState(362);
			((If_exprContext)_localctx).e1 = expr_block();
			setState(363);
			match(ELSE);
			setState(364);
			((If_exprContext)_localctx).e2 = expr_block();
			setState(365);
			match(RPAREN);
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
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode DO() { return getToken(VenbraceForgivingParser.DO, 0); }
		public SuiteContext suite() {
			return getRuleContext(SuiteContext.class,0);
		}
		public TerminalNode RESULT() { return getToken(VenbraceForgivingParser.RESULT, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public Do_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_do_expr; }
	}

	public final Do_exprContext do_expr() throws RecognitionException {
		Do_exprContext _localctx = new Do_exprContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_do_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			match(LPAREN);
			setState(368);
			match(DO);
			setState(369);
			suite();
			setState(370);
			match(RESULT);
			setState(371);
			expr_block();
			setState(372);
			match(RPAREN);
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

	public static class Logic_exprContext extends ParserRuleContext {
		public Expr_blockContext a;
		public Expr_blockContext b;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public TerminalNode AND() { return getToken(VenbraceForgivingParser.AND, 0); }
		public TerminalNode OR() { return getToken(VenbraceForgivingParser.OR, 0); }
		public Logic_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logic_expr; }
	}

	public final Logic_exprContext logic_expr() throws RecognitionException {
		Logic_exprContext _localctx = new Logic_exprContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_logic_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			match(LPAREN);
			setState(375);
			((Logic_exprContext)_localctx).a = expr_block();
			setState(376);
			_la = _input.LA(1);
			if ( !(_la==AND || _la==OR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(377);
			((Logic_exprContext)_localctx).b = expr_block();
			setState(378);
			match(RPAREN);
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
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode NOT() { return getToken(VenbraceForgivingParser.NOT, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public Not_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_not_expr; }
	}

	public final Not_exprContext not_expr() throws RecognitionException {
		Not_exprContext _localctx = new Not_exprContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_not_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(380);
			match(LPAREN);
			setState(381);
			match(NOT);
			setState(382);
			expr_block();
			setState(383);
			match(RPAREN);
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

	public static class Compare_eq_exprContext extends ParserRuleContext {
		public Expr_blockContext a;
		public Expr_blockContext b;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public TerminalNode LOGIC_EQ() { return getToken(VenbraceForgivingParser.LOGIC_EQ, 0); }
		public TerminalNode LOGIC_NOT_EQ() { return getToken(VenbraceForgivingParser.LOGIC_NOT_EQ, 0); }
		public Compare_eq_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compare_eq_expr; }
	}

	public final Compare_eq_exprContext compare_eq_expr() throws RecognitionException {
		Compare_eq_exprContext _localctx = new Compare_eq_exprContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_compare_eq_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(385);
			match(LPAREN);
			setState(386);
			((Compare_eq_exprContext)_localctx).a = expr_block();
			setState(387);
			_la = _input.LA(1);
			if ( !(_la==LOGIC_EQ || _la==LOGIC_NOT_EQ) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(388);
			((Compare_eq_exprContext)_localctx).b = expr_block();
			setState(389);
			match(RPAREN);
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

	public static class Compare_math_exprContext extends ParserRuleContext {
		public Expr_blockContext a;
		public Expr_blockContext b;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public TerminalNode EQ() { return getToken(VenbraceForgivingParser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(VenbraceForgivingParser.NEQ, 0); }
		public TerminalNode GT() { return getToken(VenbraceForgivingParser.GT, 0); }
		public TerminalNode GE() { return getToken(VenbraceForgivingParser.GE, 0); }
		public TerminalNode LT() { return getToken(VenbraceForgivingParser.LT, 0); }
		public TerminalNode LE() { return getToken(VenbraceForgivingParser.LE, 0); }
		public Compare_math_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compare_math_expr; }
	}

	public final Compare_math_exprContext compare_math_expr() throws RecognitionException {
		Compare_math_exprContext _localctx = new Compare_math_exprContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_compare_math_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391);
			match(LPAREN);
			setState(392);
			((Compare_math_exprContext)_localctx).a = expr_block();
			setState(393);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LT) | (1L << GT) | (1L << LE) | (1L << GE) | (1L << EQ) | (1L << NEQ))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(394);
			((Compare_math_exprContext)_localctx).b = expr_block();
			setState(395);
			match(RPAREN);
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
		public Mutable_opContext mutable_op() {
			return getRuleContext(Mutable_opContext.class,0);
		}
		public Immutable_opContext immutable_op() {
			return getRuleContext(Immutable_opContext.class,0);
		}
		public Min_maxContext min_max() {
			return getRuleContext(Min_maxContext.class,0);
		}
		public Unary_opContext unary_op() {
			return getRuleContext(Unary_opContext.class,0);
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
		enterRule(_localctx, 62, RULE_math_expr);
		try {
			setState(403);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(397);
				mutable_op();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(398);
				immutable_op();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(399);
				min_max();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(400);
				unary_op();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(401);
				mod();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(402);
				trig();
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

	public static class Mutable_opContext extends ParserRuleContext {
		public Expr_blockContext a;
		public Expr_blockContext b;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(VenbraceForgivingParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(VenbraceForgivingParser.PLUS, i);
		}
		public List<TerminalNode> MUL() { return getTokens(VenbraceForgivingParser.MUL); }
		public TerminalNode MUL(int i) {
			return getToken(VenbraceForgivingParser.MUL, i);
		}
		public Mutable_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mutable_op; }
	}

	public final Mutable_opContext mutable_op() throws RecognitionException {
		Mutable_opContext _localctx = new Mutable_opContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_mutable_op);
		int _la;
		try {
			setState(425);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(405);
				match(LPAREN);
				setState(406);
				((Mutable_opContext)_localctx).a = expr_block();
				setState(409); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(407);
					match(PLUS);
					setState(408);
					((Mutable_opContext)_localctx).b = expr_block();
					}
					}
					setState(411); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==PLUS );
				setState(413);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(415);
				match(LPAREN);
				setState(416);
				((Mutable_opContext)_localctx).a = expr_block();
				setState(419); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(417);
					match(MUL);
					setState(418);
					((Mutable_opContext)_localctx).b = expr_block();
					}
					}
					setState(421); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==MUL );
				setState(423);
				match(RPAREN);
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

	public static class Immutable_opContext extends ParserRuleContext {
		public Immutable_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_immutable_op; }
	 
		public Immutable_opContext() { }
		public void copyFrom(Immutable_opContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class Immutable_neg_num_special_caseContext extends Immutable_opContext {
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode NEG_NUM() { return getToken(VenbraceForgivingParser.NEG_NUM, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public Immutable_neg_num_special_caseContext(Immutable_opContext ctx) { copyFrom(ctx); }
	}
	public static class Immutable_regular_caseContext extends Immutable_opContext {
		public Expr_blockContext a;
		public Expr_blockContext b;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public TerminalNode MINUS() { return getToken(VenbraceForgivingParser.MINUS, 0); }
		public TerminalNode DIV() { return getToken(VenbraceForgivingParser.DIV, 0); }
		public TerminalNode POW() { return getToken(VenbraceForgivingParser.POW, 0); }
		public Immutable_regular_caseContext(Immutable_opContext ctx) { copyFrom(ctx); }
	}

	public final Immutable_opContext immutable_op() throws RecognitionException {
		Immutable_opContext _localctx = new Immutable_opContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_immutable_op);
		int _la;
		try {
			setState(438);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				_localctx = new Immutable_regular_caseContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(427);
				match(LPAREN);
				setState(428);
				((Immutable_regular_caseContext)_localctx).a = expr_block();
				setState(429);
				_la = _input.LA(1);
				if ( !(((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & ((1L << (MINUS - 62)) | (1L << (DIV - 62)) | (1L << (POW - 62)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(430);
				((Immutable_regular_caseContext)_localctx).b = expr_block();
				setState(431);
				match(RPAREN);
				}
				break;
			case 2:
				_localctx = new Immutable_neg_num_special_caseContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(433);
				match(LPAREN);
				setState(434);
				expr_block();
				setState(435);
				match(NEG_NUM);
				setState(436);
				match(RPAREN);
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

	public static class Min_maxContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
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
		enterRule(_localctx, 68, RULE_min_max);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			match(LPAREN);
			setState(441);
			_la = _input.LA(1);
			if ( !(_la==MIN || _la==MAX) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(445);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << TRUE) | (1L << FALSE))) != 0) || ((((_la - 120)) & ~0x3f) == 0 && ((1L << (_la - 120)) & ((1L << (NUMBER - 120)) | (1L << (NEG_NUM - 120)) | (1L << (COMPONENT_PROPERTY - 120)) | (1L << (ID - 120)) | (1L << (STRING - 120)))) != 0)) {
				{
				{
				setState(442);
				expr_block();
				}
				}
				setState(447);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(448);
			match(RPAREN);
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
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
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
		enterRule(_localctx, 70, RULE_unary_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			match(LPAREN);
			setState(451);
			_la = _input.LA(1);
			if ( !(((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & ((1L << (SQRT - 71)) | (1L << (ABS - 71)) | (1L << (NEG - 71)) | (1L << (LOG - 71)) | (1L << (EULER - 71)) | (1L << (ROUND - 71)) | (1L << (CEILING - 71)) | (1L << (FLOOR - 71)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(452);
			expr_block();
			setState(453);
			match(RPAREN);
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
		public Expr_blockContext a;
		public Expr_blockContext b;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode MODULO() { return getToken(VenbraceForgivingParser.MODULO, 0); }
		public TerminalNode OF() { return getToken(VenbraceForgivingParser.OF, 0); }
		public TerminalNode DIV() { return getToken(VenbraceForgivingParser.DIV, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public List<Expr_blockContext> expr_block() {
			return getRuleContexts(Expr_blockContext.class);
		}
		public Expr_blockContext expr_block(int i) {
			return getRuleContext(Expr_blockContext.class,i);
		}
		public ModContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mod; }
	}

	public final ModContext mod() throws RecognitionException {
		ModContext _localctx = new ModContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_mod);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(455);
			match(LPAREN);
			setState(456);
			match(MODULO);
			setState(457);
			match(OF);
			setState(458);
			((ModContext)_localctx).a = expr_block();
			setState(459);
			match(DIV);
			setState(460);
			((ModContext)_localctx).b = expr_block();
			setState(461);
			match(RPAREN);
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
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public TerminalNode SIN() { return getToken(VenbraceForgivingParser.SIN, 0); }
		public TerminalNode COS() { return getToken(VenbraceForgivingParser.COS, 0); }
		public TerminalNode TAN() { return getToken(VenbraceForgivingParser.TAN, 0); }
		public TerminalNode ASIN() { return getToken(VenbraceForgivingParser.ASIN, 0); }
		public TerminalNode ACOS() { return getToken(VenbraceForgivingParser.ACOS, 0); }
		public TerminalNode ATAN() { return getToken(VenbraceForgivingParser.ATAN, 0); }
		public TrigContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trig; }
	}

	public final TrigContext trig() throws RecognitionException {
		TrigContext _localctx = new TrigContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_trig);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(463);
			match(LPAREN);
			setState(464);
			_la = _input.LA(1);
			if ( !(((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & ((1L << (SIN - 88)) | (1L << (COS - 88)) | (1L << (TAN - 88)) | (1L << (ASIN - 88)) | (1L << (ACOS - 88)) | (1L << (ATAN - 88)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(465);
			expr_block();
			setState(466);
			match(RPAREN);
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
		public Str_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_expr; }
	}

	public final Str_exprContext str_expr() throws RecognitionException {
		Str_exprContext _localctx = new Str_exprContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_str_expr);
		try {
			setState(472);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(468);
				str_join();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(469);
				str_length();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(470);
				str_reverse();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(471);
				str_split_at_spaces();
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

	public static class Str_lengthContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode LENGTH() { return getToken(VenbraceForgivingParser.LENGTH, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public Str_lengthContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_length; }
	}

	public final Str_lengthContext str_length() throws RecognitionException {
		Str_lengthContext _localctx = new Str_lengthContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_str_length);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(474);
			match(LPAREN);
			setState(475);
			match(LENGTH);
			setState(476);
			expr_block();
			setState(477);
			match(RPAREN);
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
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode JOIN() { return getToken(VenbraceForgivingParser.JOIN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
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
		enterRule(_localctx, 80, RULE_str_join);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(479);
			match(LPAREN);
			setState(480);
			match(JOIN);
			setState(484);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << TRUE) | (1L << FALSE))) != 0) || ((((_la - 120)) & ~0x3f) == 0 && ((1L << (_la - 120)) & ((1L << (NUMBER - 120)) | (1L << (NEG_NUM - 120)) | (1L << (COMPONENT_PROPERTY - 120)) | (1L << (ID - 120)) | (1L << (STRING - 120)))) != 0)) {
				{
				{
				setState(481);
				expr_block();
				}
				}
				setState(486);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(487);
			match(RPAREN);
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
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode REVERSE() { return getToken(VenbraceForgivingParser.REVERSE, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public Str_reverseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_reverse; }
	}

	public final Str_reverseContext str_reverse() throws RecognitionException {
		Str_reverseContext _localctx = new Str_reverseContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_str_reverse);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(489);
			match(LPAREN);
			setState(490);
			match(REVERSE);
			setState(491);
			expr_block();
			setState(492);
			match(RPAREN);
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
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode SPLIT_AT_SPACES() { return getToken(VenbraceForgivingParser.SPLIT_AT_SPACES, 0); }
		public Expr_blockContext expr_block() {
			return getRuleContext(Expr_blockContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public Str_split_at_spacesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_split_at_spaces; }
	}

	public final Str_split_at_spacesContext str_split_at_spaces() throws RecognitionException {
		Str_split_at_spacesContext _localctx = new Str_split_at_spacesContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_str_split_at_spaces);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(494);
			match(LPAREN);
			setState(495);
			match(SPLIT_AT_SPACES);
			setState(496);
			expr_block();
			setState(497);
			match(RPAREN);
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
		public TerminalNode ID() { return getToken(VenbraceForgivingParser.ID, 0); }
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode GET() { return getToken(VenbraceForgivingParser.GET, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public TerminalNode GLOBAL() { return getToken(VenbraceForgivingParser.GLOBAL, 0); }
		public GetterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getter; }
	}

	public final GetterContext getter() throws RecognitionException {
		GetterContext _localctx = new GetterContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_getter);
		int _la;
		try {
			setState(507);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(499);
				match(ID);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(500);
				match(LPAREN);
				setState(501);
				match(GET);
				setState(503);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(502);
					match(GLOBAL);
					}
				}

				setState(505);
				match(ID);
				setState(506);
				match(RPAREN);
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

	public static class Call_procedure_exprContext extends ParserRuleContext {
		public Token component;
		public Token method;
		public Expr_blockContext arg;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode CALL() { return getToken(VenbraceForgivingParser.CALL, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
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
		enterRule(_localctx, 88, RULE_call_procedure_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
			match(LPAREN);
			setState(510);
			match(CALL);
			setState(515);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				{
				setState(511);
				match(ID);
				}
				break;
			case 2:
				{
				setState(512);
				((Call_procedure_exprContext)_localctx).component = match(ID);
				setState(513);
				match(DOT);
				setState(514);
				((Call_procedure_exprContext)_localctx).method = match(ID);
				}
				break;
			}
			setState(523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << TRUE) | (1L << FALSE))) != 0) || ((((_la - 120)) & ~0x3f) == 0 && ((1L << (_la - 120)) & ((1L << (NUMBER - 120)) | (1L << (NEG_NUM - 120)) | (1L << (COMPONENT_PROPERTY - 120)) | (1L << (ID - 120)) | (1L << (STRING - 120)))) != 0)) {
				{
				{
				setState(518);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
				case 1:
					{
					setState(517);
					label();
					}
					break;
				}
				setState(520);
				((Call_procedure_exprContext)_localctx).arg = expr_block();
				}
				}
				setState(525);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(526);
			match(RPAREN);
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
		public Expr_blockContext init_val;
		public Expr_blockContext body;
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
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
		public List<TerminalNode> ID() { return getTokens(VenbraceForgivingParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(VenbraceForgivingParser.ID, i);
		}
		public TerminalNode IN() { return getToken(VenbraceForgivingParser.IN, 0); }
		public List<TerminalNode> LOCAL() { return getTokens(VenbraceForgivingParser.LOCAL); }
		public TerminalNode LOCAL(int i) {
			return getToken(VenbraceForgivingParser.LOCAL, i);
		}
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
		enterRule(_localctx, 90, RULE_local_var_decl_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(528);
			match(LPAREN);
			setState(540);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==INITIALIZE) {
				{
				{
				setState(529);
				match(INITIALIZE);
				setState(531);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LOCAL) {
					{
					setState(530);
					match(LOCAL);
					}
				}

				setState(533);
				match(ID);
				setState(535);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TO) {
					{
					setState(534);
					match(TO);
					}
				}

				setState(537);
				((Local_var_decl_exprContext)_localctx).init_val = expr_block();
				}
				}
				setState(542);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(544);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IN) {
				{
				setState(543);
				match(IN);
				}
			}

			setState(546);
			((Local_var_decl_exprContext)_localctx).body = expr_block();
			setState(547);
			match(RPAREN);
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
		public Atom_elementsContext atom_elements() {
			return getRuleContext(Atom_elementsContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(VenbraceForgivingParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(VenbraceForgivingParser.RPAREN, 0); }
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_atom);
		try {
			setState(554);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TRUE:
			case FALSE:
			case NUMBER:
			case NEG_NUM:
			case COMPONENT_PROPERTY:
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(549);
				atom_elements();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(550);
				match(LPAREN);
				setState(551);
				atom_elements();
				setState(552);
				match(RPAREN);
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

	public static class Atom_elementsContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(VenbraceForgivingParser.NUMBER, 0); }
		public TerminalNode NEG_NUM() { return getToken(VenbraceForgivingParser.NEG_NUM, 0); }
		public TerminalNode STRING() { return getToken(VenbraceForgivingParser.STRING, 0); }
		public TerminalNode TRUE() { return getToken(VenbraceForgivingParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(VenbraceForgivingParser.FALSE, 0); }
		public TerminalNode COMPONENT_PROPERTY() { return getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0); }
		public Atom_elementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom_elements; }
	}

	public final Atom_elementsContext atom_elements() throws RecognitionException {
		Atom_elementsContext _localctx = new Atom_elementsContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_atom_elements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(556);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE || ((((_la - 120)) & ~0x3f) == 0 && ((1L << (_la - 120)) & ((1L << (NUMBER - 120)) | (1L << (NEG_NUM - 120)) | (1L << (COMPONENT_PROPERTY - 120)) | (1L << (STRING - 120)))) != 0)) ) {
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
		enterRule(_localctx, 96, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(558);
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0080\u0233\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\3\2\7\2f\n\2\f\2"+
		"\16\2i\13\2\3\2\3\2\3\3\3\3\3\3\5\3p\n\3\3\4\3\4\3\4\6\4u\n\4\r\4\16\4"+
		"v\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5\u0086\n\5\3"+
		"\6\3\6\3\6\3\6\5\6\u008c\n\6\3\7\3\7\3\7\3\7\5\7\u0092\n\7\3\7\3\7\3\b"+
		"\3\b\3\t\3\t\3\t\7\t\u009b\n\t\f\t\16\t\u009e\13\t\3\t\5\t\u00a1\n\t\3"+
		"\t\3\t\3\n\3\n\3\n\7\n\u00a8\n\n\f\n\16\n\u00ab\13\n\3\n\5\n\u00ae\n\n"+
		"\3\n\3\n\3\13\3\13\3\13\7\13\u00b5\n\13\f\13\16\13\u00b8\13\13\3\13\5"+
		"\13\u00bb\n\13\3\13\3\13\3\f\7\f\u00c0\n\f\f\f\16\f\u00c3\13\f\3\f\3\f"+
		"\7\f\u00c7\n\f\f\f\16\f\u00ca\13\f\3\f\3\f\3\f\7\f\u00cf\n\f\f\f\16\f"+
		"\u00d2\13\f\3\f\3\f\3\f\7\f\u00d7\n\f\f\f\16\f\u00da\13\f\3\f\5\f\u00dd"+
		"\n\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u00ec\n\r"+
		"\3\16\3\16\3\16\3\16\5\16\u00f2\n\16\3\17\3\17\3\17\5\17\u00f7\n\17\3"+
		"\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\7\20\u0102\n\20\f\20\16\20"+
		"\u0105\13\20\3\20\3\20\5\20\u0109\n\20\3\21\3\21\3\21\5\21\u010e\n\21"+
		"\3\21\3\21\5\21\u0112\n\21\3\21\3\21\5\21\u0116\n\21\3\21\3\21\5\21\u011a"+
		"\n\21\3\21\3\21\3\22\3\22\5\22\u0120\n\22\3\22\3\22\5\22\u0124\n\22\3"+
		"\22\3\22\3\23\3\23\3\23\5\23\u012b\n\23\3\23\7\23\u012e\n\23\f\23\16\23"+
		"\u0131\13\23\3\24\3\24\3\25\3\25\3\25\3\25\5\25\u0139\n\25\3\25\3\25\6"+
		"\25\u013d\n\25\r\25\16\25\u013e\3\25\5\25\u0142\n\25\3\25\3\25\3\26\3"+
		"\26\3\27\3\27\5\27\u014a\n\27\3\27\3\27\5\27\u014e\n\27\3\27\3\27\3\30"+
		"\3\30\3\30\3\30\5\30\u0156\n\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\5\31\u0163\n\31\3\32\3\32\5\32\u0167\n\32\3\33\3\33\3"+
		"\33\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3"+
		"\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3"+
		"\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\5!\u0196\n!\3\"\3\""+
		"\3\"\3\"\6\"\u019c\n\"\r\"\16\"\u019d\3\"\3\"\3\"\3\"\3\"\3\"\6\"\u01a6"+
		"\n\"\r\"\16\"\u01a7\3\"\3\"\5\"\u01ac\n\"\3#\3#\3#\3#\3#\3#\3#\3#\3#\3"+
		"#\3#\5#\u01b9\n#\3$\3$\3$\7$\u01be\n$\f$\16$\u01c1\13$\3$\3$\3%\3%\3%"+
		"\3%\3%\3&\3&\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\5(\u01db"+
		"\n(\3)\3)\3)\3)\3)\3*\3*\3*\7*\u01e5\n*\f*\16*\u01e8\13*\3*\3*\3+\3+\3"+
		"+\3+\3+\3,\3,\3,\3,\3,\3-\3-\3-\3-\5-\u01fa\n-\3-\3-\5-\u01fe\n-\3.\3"+
		".\3.\3.\3.\3.\5.\u0206\n.\3.\5.\u0209\n.\3.\7.\u020c\n.\f.\16.\u020f\13"+
		".\3.\3.\3/\3/\3/\5/\u0216\n/\3/\3/\5/\u021a\n/\3/\7/\u021d\n/\f/\16/\u0220"+
		"\13/\3/\5/\u0223\n/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\5\60\u022d\n\60"+
		"\3\61\3\61\3\62\3\62\3\62\2\2\63\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`b\2\f\3\2\36\37\3\2|}\3\2\64"+
		"\65\3\2=>\3\2\67<\4\2@@BC\3\2ST\3\2IP\3\2Z_\5\2\17\20z|\u0080\u0080\2"+
		"\u0257\2g\3\2\2\2\4o\3\2\2\2\6t\3\2\2\2\b\u0085\3\2\2\2\n\u008b\3\2\2"+
		"\2\f\u008d\3\2\2\2\16\u0095\3\2\2\2\20\u0097\3\2\2\2\22\u00a4\3\2\2\2"+
		"\24\u00b1\3\2\2\2\26\u00dc\3\2\2\2\30\u00eb\3\2\2\2\32\u00f1\3\2\2\2\34"+
		"\u00f6\3\2\2\2\36\u00f8\3\2\2\2 \u010a\3\2\2\2\"\u011d\3\2\2\2$\u0127"+
		"\3\2\2\2&\u0132\3\2\2\2(\u013c\3\2\2\2*\u0145\3\2\2\2,\u0147\3\2\2\2."+
		"\u0155\3\2\2\2\60\u0162\3\2\2\2\62\u0166\3\2\2\2\64\u0168\3\2\2\2\66\u0171"+
		"\3\2\2\28\u0178\3\2\2\2:\u017e\3\2\2\2<\u0183\3\2\2\2>\u0189\3\2\2\2@"+
		"\u0195\3\2\2\2B\u01ab\3\2\2\2D\u01b8\3\2\2\2F\u01ba\3\2\2\2H\u01c4\3\2"+
		"\2\2J\u01c9\3\2\2\2L\u01d1\3\2\2\2N\u01da\3\2\2\2P\u01dc\3\2\2\2R\u01e1"+
		"\3\2\2\2T\u01eb\3\2\2\2V\u01f0\3\2\2\2X\u01fd\3\2\2\2Z\u01ff\3\2\2\2\\"+
		"\u0212\3\2\2\2^\u022c\3\2\2\2`\u022e\3\2\2\2b\u0230\3\2\2\2df\5\b\5\2"+
		"ed\3\2\2\2fi\3\2\2\2ge\3\2\2\2gh\3\2\2\2hj\3\2\2\2ig\3\2\2\2jk\7\2\2\3"+
		"k\3\3\2\2\2lp\5\b\5\2mp\5\30\r\2np\5.\30\2ol\3\2\2\2om\3\2\2\2on\3\2\2"+
		"\2p\5\3\2\2\2qu\5\b\5\2ru\5\30\r\2su\5.\30\2tq\3\2\2\2tr\3\2\2\2ts\3\2"+
		"\2\2uv\3\2\2\2vt\3\2\2\2vw\3\2\2\2w\7\3\2\2\2xy\7\b\2\2yz\5\n\6\2z{\7"+
		"\t\2\2{\u0086\3\2\2\2|}\7\4\2\2}~\5\n\6\2~\177\7\5\2\2\177\u0086\3\2\2"+
		"\2\u0080\u0081\7\6\2\2\u0081\u0082\5\n\6\2\u0082\u0083\7\7\2\2\u0083\u0086"+
		"\3\2\2\2\u0084\u0086\5\n\6\2\u0085x\3\2\2\2\u0085|\3\2\2\2\u0085\u0080"+
		"\3\2\2\2\u0085\u0084\3\2\2\2\u0086\t\3\2\2\2\u0087\u008c\5\f\7\2\u0088"+
		"\u008c\5\20\t\2\u0089\u008c\5\22\n\2\u008a\u008c\5\24\13\2\u008b\u0087"+
		"\3\2\2\2\u008b\u0088\3\2\2\2\u008b\u0089\3\2\2\2\u008b\u008a\3\2\2\2\u008c"+
		"\13\3\2\2\2\u008d\u008e\t\2\2\2\u008e\u008f\5\16\b\2\u008f\u0091\7}\2"+
		"\2\u0090\u0092\7\31\2\2\u0091\u0090\3\2\2\2\u0091\u0092\3\2\2\2\u0092"+
		"\u0093\3\2\2\2\u0093\u0094\5.\30\2\u0094\r\3\2\2\2\u0095\u0096\7\35\2"+
		"\2\u0096\17\3\2\2\2\u0097\u0098\7\31\2\2\u0098\u009c\7}\2\2\u0099\u009b"+
		"\7}\2\2\u009a\u0099\3\2\2\2\u009b\u009e\3\2\2\2\u009c\u009a\3\2\2\2\u009c"+
		"\u009d\3\2\2\2\u009d\u00a0\3\2\2\2\u009e\u009c\3\2\2\2\u009f\u00a1\7\27"+
		"\2\2\u00a0\u009f\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2"+
		"\u00a3\5\26\f\2\u00a3\21\3\2\2\2\u00a4\u00a5\7\31\2\2\u00a5\u00a9\7}\2"+
		"\2\u00a6\u00a8\7}\2\2\u00a7\u00a6\3\2\2\2\u00a8\u00ab\3\2\2\2\u00a9\u00a7"+
		"\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00ad\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ac"+
		"\u00ae\7\30\2\2\u00ad\u00ac\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00af\3"+
		"\2\2\2\u00af\u00b0\5.\30\2\u00b0\23\3\2\2\2\u00b1\u00b2\7\21\2\2\u00b2"+
		"\u00b6\7|\2\2\u00b3\u00b5\7}\2\2\u00b4\u00b3\3\2\2\2\u00b5\u00b8\3\2\2"+
		"\2\u00b6\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00ba\3\2\2\2\u00b8\u00b6"+
		"\3\2\2\2\u00b9\u00bb\7\27\2\2\u00ba\u00b9\3\2\2\2\u00ba\u00bb\3\2\2\2"+
		"\u00bb\u00bc\3\2\2\2\u00bc\u00bd\5\26\f\2\u00bd\25\3\2\2\2\u00be\u00c0"+
		"\5\30\r\2\u00bf\u00be\3\2\2\2\u00c0\u00c3\3\2\2\2\u00c1\u00bf\3\2\2\2"+
		"\u00c1\u00c2\3\2\2\2\u00c2\u00dd\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c4\u00c8"+
		"\7\4\2\2\u00c5\u00c7\5\30\r\2\u00c6\u00c5\3\2\2\2\u00c7\u00ca\3\2\2\2"+
		"\u00c8\u00c6\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00cb\3\2\2\2\u00ca\u00c8"+
		"\3\2\2\2\u00cb\u00dd\7\5\2\2\u00cc\u00d0\7\b\2\2\u00cd\u00cf\5\30\r\2"+
		"\u00ce\u00cd\3\2\2\2\u00cf\u00d2\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1"+
		"\3\2\2\2\u00d1\u00d3\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d3\u00dd\7\t\2\2\u00d4"+
		"\u00d8\7\6\2\2\u00d5\u00d7\5\30\r\2\u00d6\u00d5\3\2\2\2\u00d7\u00da\3"+
		"\2\2\2\u00d8\u00d6\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00db\3\2\2\2\u00da"+
		"\u00d8\3\2\2\2\u00db\u00dd\7\7\2\2\u00dc\u00c1\3\2\2\2\u00dc\u00c4\3\2"+
		"\2\2\u00dc\u00cc\3\2\2\2\u00dc\u00d4\3\2\2\2\u00dd\27\3\2\2\2\u00de\u00df"+
		"\7\4\2\2\u00df\u00e0\5\32\16\2\u00e0\u00e1\7\5\2\2\u00e1\u00ec\3\2\2\2"+
		"\u00e2\u00e3\7\b\2\2\u00e3\u00e4\5\32\16\2\u00e4\u00e5\7\t\2\2\u00e5\u00ec"+
		"\3\2\2\2\u00e6\u00e7\7\6\2\2\u00e7\u00e8\5\32\16\2\u00e8\u00e9\7\7\2\2"+
		"\u00e9\u00ec\3\2\2\2\u00ea\u00ec\5\32\16\2\u00eb\u00de\3\2\2\2\u00eb\u00e2"+
		"\3\2\2\2\u00eb\u00e6\3\2\2\2\u00eb\u00ea\3\2\2\2\u00ec\31\3\2\2\2\u00ed"+
		"\u00f2\5\34\17\2\u00ee\u00f2\5$\23\2\u00ef\u00f2\5&\24\2\u00f0\u00f2\5"+
		"(\25\2\u00f1\u00ed\3\2\2\2\u00f1\u00ee\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f1"+
		"\u00f0\3\2\2\2\u00f2\33\3\2\2\2\u00f3\u00f7\5\36\20\2\u00f4\u00f7\5 \21"+
		"\2\u00f5\u00f7\5\"\22\2\u00f6\u00f3\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f6"+
		"\u00f5\3\2\2\2\u00f7\35\3\2\2\2\u00f8\u00f9\7\22\2\2\u00f9\u00fa\5.\30"+
		"\2\u00fa\u00fb\7\23\2\2\u00fb\u0103\5\26\f\2\u00fc\u00fd\7\25\2\2\u00fd"+
		"\u00fe\5.\30\2\u00fe\u00ff\7\23\2\2\u00ff\u0100\5\26\f\2\u0100\u0102\3"+
		"\2\2\2\u0101\u00fc\3\2\2\2\u0102\u0105\3\2\2\2\u0103\u0101\3\2\2\2\u0103"+
		"\u0104\3\2\2\2\u0104\u0108\3\2\2\2\u0105\u0103\3\2\2\2\u0106\u0107\7\24"+
		"\2\2\u0107\u0109\5\26\f\2\u0108\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109"+
		"\37\3\2\2\2\u010a\u010b\7\26\2\2\u010b\u010d\7}\2\2\u010c\u010e\7#\2\2"+
		"\u010d\u010c\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0111"+
		"\5.\30\2\u0110\u0112\7\31\2\2\u0111\u0110\3\2\2\2\u0111\u0112\3\2\2\2"+
		"\u0112\u0113\3\2\2\2\u0113\u0115\5.\30\2\u0114\u0116\7\"\2\2\u0115\u0114"+
		"\3\2\2\2\u0115\u0116\3\2\2\2\u0116\u0117\3\2\2\2\u0117\u0119\5.\30\2\u0118"+
		"\u011a\7\27\2\2\u0119\u0118\3\2\2\2\u0119\u011a\3\2\2\2\u011a\u011b\3"+
		"\2\2\2\u011b\u011c\5\26\f\2\u011c!\3\2\2\2\u011d\u011f\7$\2\2\u011e\u0120"+
		"\7%\2\2\u011f\u011e\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u0121\3\2\2\2\u0121"+
		"\u0123\5.\30\2\u0122\u0124\7\27\2\2\u0123\u0122\3\2\2\2\u0123\u0124\3"+
		"\2\2\2\u0124\u0125\3\2\2\2\u0125\u0126\5\26\f\2\u0126#\3\2\2\2\u0127\u0128"+
		"\7\32\2\2\u0128\u012f\7}\2\2\u0129\u012b\5b\62\2\u012a\u0129\3\2\2\2\u012a"+
		"\u012b\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012e\5.\30\2\u012d\u012a\3\2"+
		"\2\2\u012e\u0131\3\2\2\2\u012f\u012d\3\2\2\2\u012f\u0130\3\2\2\2\u0130"+
		"%\3\2\2\2\u0131\u012f\3\2\2\2\u0132\u0133\5,\27\2\u0133\'\3\2\2\2\u0134"+
		"\u0135\7\36\2\2\u0135\u0136\5*\26\2\u0136\u0138\7}\2\2\u0137\u0139\7\31"+
		"\2\2\u0138\u0137\3\2\2\2\u0138\u0139\3\2\2\2\u0139\u013a\3\2\2\2\u013a"+
		"\u013b\5.\30\2\u013b\u013d\3\2\2\2\u013c\u0134\3\2\2\2\u013d\u013e\3\2"+
		"\2\2\u013e\u013c\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u0141\3\2\2\2\u0140"+
		"\u0142\7!\2\2\u0141\u0140\3\2\2\2\u0141\u0142\3\2\2\2\u0142\u0143\3\2"+
		"\2\2\u0143\u0144\5\26\f\2\u0144)\3\2\2\2\u0145\u0146\7 \2\2\u0146+\3\2"+
		"\2\2\u0147\u0149\7\34\2\2\u0148\u014a\7\35\2\2\u0149\u0148\3\2\2\2\u0149"+
		"\u014a\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u014d\t\3\2\2\u014c\u014e\7\31"+
		"\2\2\u014d\u014c\3\2\2\2\u014d\u014e\3\2\2\2\u014e\u014f\3\2\2\2\u014f"+
		"\u0150\5.\30\2\u0150-\3\2\2\2\u0151\u0152\7\6\2\2\u0152\u0156\7\7\2\2"+
		"\u0153\u0156\5^\60\2\u0154\u0156\5\60\31\2\u0155\u0151\3\2\2\2\u0155\u0153"+
		"\3\2\2\2\u0155\u0154\3\2\2\2\u0156/\3\2\2\2\u0157\u0163\5X-\2\u0158\u0163"+
		"\5\62\32\2\u0159\u0163\58\35\2\u015a\u0163\5:\36\2\u015b\u0163\5<\37\2"+
		"\u015c\u0163\5> \2\u015d\u0163\5@!\2\u015e\u0163\5N(\2\u015f\u0163\5Z"+
		".\2\u0160\u0163\5\\/\2\u0161\u0163\5^\60\2\u0162\u0157\3\2\2\2\u0162\u0158"+
		"\3\2\2\2\u0162\u0159\3\2\2\2\u0162\u015a\3\2\2\2\u0162\u015b\3\2\2\2\u0162"+
		"\u015c\3\2\2\2\u0162\u015d\3\2\2\2\u0162\u015e\3\2\2\2\u0162\u015f\3\2"+
		"\2\2\u0162\u0160\3\2\2\2\u0162\u0161\3\2\2\2\u0163\61\3\2\2\2\u0164\u0167"+
		"\5\64\33\2\u0165\u0167\5\66\34\2\u0166\u0164\3\2\2\2\u0166\u0165\3\2\2"+
		"\2\u0167\63\3\2\2\2\u0168\u0169\7\6\2\2\u0169\u016a\7\22\2\2\u016a\u016b"+
		"\5.\30\2\u016b\u016c\7\23\2\2\u016c\u016d\5.\30\2\u016d\u016e\7\24\2\2"+
		"\u016e\u016f\5.\30\2\u016f\u0170\7\7\2\2\u0170\65\3\2\2\2\u0171\u0172"+
		"\7\6\2\2\u0172\u0173\7\27\2\2\u0173\u0174\5\26\f\2\u0174\u0175\7\30\2"+
		"\2\u0175\u0176\5.\30\2\u0176\u0177\7\7\2\2\u0177\67\3\2\2\2\u0178\u0179"+
		"\7\6\2\2\u0179\u017a\5.\30\2\u017a\u017b\t\4\2\2\u017b\u017c\5.\30\2\u017c"+
		"\u017d\7\7\2\2\u017d9\3\2\2\2\u017e\u017f\7\6\2\2\u017f\u0180\7\63\2\2"+
		"\u0180\u0181\5.\30\2\u0181\u0182\7\7\2\2\u0182;\3\2\2\2\u0183\u0184\7"+
		"\6\2\2\u0184\u0185\5.\30\2\u0185\u0186\t\5\2\2\u0186\u0187\5.\30\2\u0187"+
		"\u0188\7\7\2\2\u0188=\3\2\2\2\u0189\u018a\7\6\2\2\u018a\u018b\5.\30\2"+
		"\u018b\u018c\t\6\2\2\u018c\u018d\5.\30\2\u018d\u018e\7\7\2\2\u018e?\3"+
		"\2\2\2\u018f\u0196\5B\"\2\u0190\u0196\5D#\2\u0191\u0196\5F$\2\u0192\u0196"+
		"\5H%\2\u0193\u0196\5J&\2\u0194\u0196\5L\'\2\u0195\u018f\3\2\2\2\u0195"+
		"\u0190\3\2\2\2\u0195\u0191\3\2\2\2\u0195\u0192\3\2\2\2\u0195\u0193\3\2"+
		"\2\2\u0195\u0194\3\2\2\2\u0196A\3\2\2\2\u0197\u0198\7\6\2\2\u0198\u019b"+
		"\5.\30\2\u0199\u019a\7?\2\2\u019a\u019c\5.\30\2\u019b\u0199\3\2\2\2\u019c"+
		"\u019d\3\2\2\2\u019d\u019b\3\2\2\2\u019d\u019e\3\2\2\2\u019e\u019f\3\2"+
		"\2\2\u019f\u01a0\7\7\2\2\u01a0\u01ac\3\2\2\2\u01a1\u01a2\7\6\2\2\u01a2"+
		"\u01a5\5.\30\2\u01a3\u01a4\7A\2\2\u01a4\u01a6\5.\30\2\u01a5\u01a3\3\2"+
		"\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a5\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8"+
		"\u01a9\3\2\2\2\u01a9\u01aa\7\7\2\2\u01aa\u01ac\3\2\2\2\u01ab\u0197\3\2"+
		"\2\2\u01ab\u01a1\3\2\2\2\u01acC\3\2\2\2\u01ad\u01ae\7\6\2\2\u01ae\u01af"+
		"\5.\30\2\u01af\u01b0\t\7\2\2\u01b0\u01b1\5.\30\2\u01b1\u01b2\7\7\2\2\u01b2"+
		"\u01b9\3\2\2\2\u01b3\u01b4\7\6\2\2\u01b4\u01b5\5.\30\2\u01b5\u01b6\7{"+
		"\2\2\u01b6\u01b7\7\7\2\2\u01b7\u01b9\3\2\2\2\u01b8\u01ad\3\2\2\2\u01b8"+
		"\u01b3\3\2\2\2\u01b9E\3\2\2\2\u01ba\u01bb\7\6\2\2\u01bb\u01bf\t\b\2\2"+
		"\u01bc\u01be\5.\30\2\u01bd\u01bc\3\2\2\2\u01be\u01c1\3\2\2\2\u01bf\u01bd"+
		"\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0\u01c2\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c2"+
		"\u01c3\7\7\2\2\u01c3G\3\2\2\2\u01c4\u01c5\7\6\2\2\u01c5\u01c6\t\t\2\2"+
		"\u01c6\u01c7\5.\30\2\u01c7\u01c8\7\7\2\2\u01c8I\3\2\2\2\u01c9\u01ca\7"+
		"\6\2\2\u01ca\u01cb\7U\2\2\u01cb\u01cc\7X\2\2\u01cc\u01cd\5.\30\2\u01cd"+
		"\u01ce\7B\2\2\u01ce\u01cf\5.\30\2\u01cf\u01d0\7\7\2\2\u01d0K\3\2\2\2\u01d1"+
		"\u01d2\7\6\2\2\u01d2\u01d3\t\n\2\2\u01d3\u01d4\5.\30\2\u01d4\u01d5\7\7"+
		"\2\2\u01d5M\3\2\2\2\u01d6\u01db\5R*\2\u01d7\u01db\5P)\2\u01d8\u01db\5"+
		"T+\2\u01d9\u01db\5V,\2\u01da\u01d6\3\2\2\2\u01da\u01d7\3\2\2\2\u01da\u01d8"+
		"\3\2\2\2\u01da\u01d9\3\2\2\2\u01dbO\3\2\2\2\u01dc\u01dd\7\6\2\2\u01dd"+
		"\u01de\7b\2\2\u01de\u01df\5.\30\2\u01df\u01e0\7\7\2\2\u01e0Q\3\2\2\2\u01e1"+
		"\u01e2\7\6\2\2\u01e2\u01e6\7a\2\2\u01e3\u01e5\5.\30\2\u01e4\u01e3\3\2"+
		"\2\2\u01e5\u01e8\3\2\2\2\u01e6\u01e4\3\2\2\2\u01e6\u01e7\3\2\2\2\u01e7"+
		"\u01e9\3\2\2\2\u01e8\u01e6\3\2\2\2\u01e9\u01ea\7\7\2\2\u01eaS\3\2\2\2"+
		"\u01eb\u01ec\7\6\2\2\u01ec\u01ed\7t\2\2\u01ed\u01ee\5.\30\2\u01ee\u01ef"+
		"\7\7\2\2\u01efU\3\2\2\2\u01f0\u01f1\7\6\2\2\u01f1\u01f2\7n\2\2\u01f2\u01f3"+
		"\5.\30\2\u01f3\u01f4\7\7\2\2\u01f4W\3\2\2\2\u01f5\u01fe\7}\2\2\u01f6\u01f7"+
		"\7\6\2\2\u01f7\u01f9\7\33\2\2\u01f8\u01fa\7\35\2\2\u01f9\u01f8\3\2\2\2"+
		"\u01f9\u01fa\3\2\2\2\u01fa\u01fb\3\2\2\2\u01fb\u01fc\7}\2\2\u01fc\u01fe"+
		"\7\7\2\2\u01fd\u01f5\3\2\2\2\u01fd\u01f6\3\2\2\2\u01feY\3\2\2\2\u01ff"+
		"\u0200\7\6\2\2\u0200\u0205\7\32\2\2\u0201\u0206\7}\2\2\u0202\u0203\7}"+
		"\2\2\u0203\u0204\7\f\2\2\u0204\u0206\7}\2\2\u0205\u0201\3\2\2\2\u0205"+
		"\u0202\3\2\2\2\u0206\u020d\3\2\2\2\u0207\u0209\5b\62\2\u0208\u0207\3\2"+
		"\2\2\u0208\u0209\3\2\2\2\u0209\u020a\3\2\2\2\u020a\u020c\5.\30\2\u020b"+
		"\u0208\3\2\2\2\u020c\u020f\3\2\2\2\u020d\u020b\3\2\2\2\u020d\u020e\3\2"+
		"\2\2\u020e\u0210\3\2\2\2\u020f\u020d\3\2\2\2\u0210\u0211\7\7\2\2\u0211"+
		"[\3\2\2\2\u0212\u021e\7\6\2\2\u0213\u0215\7\36\2\2\u0214\u0216\7 \2\2"+
		"\u0215\u0214\3\2\2\2\u0215\u0216\3\2\2\2\u0216\u0217\3\2\2\2\u0217\u0219"+
		"\7}\2\2\u0218\u021a\7\31\2\2\u0219\u0218\3\2\2\2\u0219\u021a\3\2\2\2\u021a"+
		"\u021b\3\2\2\2\u021b\u021d\5.\30\2\u021c\u0213\3\2\2\2\u021d\u0220\3\2"+
		"\2\2\u021e\u021c\3\2\2\2\u021e\u021f\3\2\2\2\u021f\u0222\3\2\2\2\u0220"+
		"\u021e\3\2\2\2\u0221\u0223\7!\2\2\u0222\u0221\3\2\2\2\u0222\u0223\3\2"+
		"\2\2\u0223\u0224\3\2\2\2\u0224\u0225\5.\30\2\u0225\u0226\7\7\2\2\u0226"+
		"]\3\2\2\2\u0227\u022d\5`\61\2\u0228\u0229\7\6\2\2\u0229\u022a\5`\61\2"+
		"\u022a\u022b\7\7\2\2\u022b\u022d\3\2\2\2\u022c\u0227\3\2\2\2\u022c\u0228"+
		"\3\2\2\2\u022d_\3\2\2\2\u022e\u022f\t\13\2\2\u022fa\3\2\2\2\u0230\u0231"+
		"\7}\2\2\u0231c\3\2\2\2;gotv\u0085\u008b\u0091\u009c\u00a0\u00a9\u00ad"+
		"\u00b6\u00ba\u00c1\u00c8\u00d0\u00d8\u00dc\u00eb\u00f1\u00f6\u0103\u0108"+
		"\u010d\u0111\u0115\u0119\u011f\u0123\u012a\u012f\u0138\u013e\u0141\u0149"+
		"\u014d\u0155\u0162\u0166\u0195\u019d\u01a7\u01ab\u01b8\u01bf\u01da\u01e6"+
		"\u01f9\u01fd\u0205\u0208\u020d\u0215\u0219\u021e\u0222\u022c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}