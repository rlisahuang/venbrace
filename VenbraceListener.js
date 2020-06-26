// Generated from Venbrace.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('./antlr4/index');

// This class defines a complete listener for a parse tree produced by VenbraceParser.
function VenbraceListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

VenbraceListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
VenbraceListener.prototype.constructor = VenbraceListener;

// Enter a parse tree produced by VenbraceParser#program.
VenbraceListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#program.
VenbraceListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#test_program.
VenbraceListener.prototype.enterTest_program = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#test_program.
VenbraceListener.prototype.exitTest_program = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#decl_block.
VenbraceListener.prototype.enterDecl_block = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#decl_block.
VenbraceListener.prototype.exitDecl_block = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#decl.
VenbraceListener.prototype.enterDecl = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#decl.
VenbraceListener.prototype.exitDecl = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#global_decl.
VenbraceListener.prototype.enterGlobal_decl = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#global_decl.
VenbraceListener.prototype.exitGlobal_decl = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#procedure_do.
VenbraceListener.prototype.enterProcedure_do = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#procedure_do.
VenbraceListener.prototype.exitProcedure_do = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#procedure_result.
VenbraceListener.prototype.enterProcedure_result = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#procedure_result.
VenbraceListener.prototype.exitProcedure_result = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#event_handler.
VenbraceListener.prototype.enterEvent_handler = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#event_handler.
VenbraceListener.prototype.exitEvent_handler = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#suite.
VenbraceListener.prototype.enterSuite = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#suite.
VenbraceListener.prototype.exitSuite = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#stat_block.
VenbraceListener.prototype.enterStat_block = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#stat_block.
VenbraceListener.prototype.exitStat_block = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#stat.
VenbraceListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#stat.
VenbraceListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#control_stat.
VenbraceListener.prototype.enterControl_stat = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#control_stat.
VenbraceListener.prototype.exitControl_stat = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#if_stat.
VenbraceListener.prototype.enterIf_stat = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#if_stat.
VenbraceListener.prototype.exitIf_stat = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#for_each_from_to.
VenbraceListener.prototype.enterFor_each_from_to = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#for_each_from_to.
VenbraceListener.prototype.exitFor_each_from_to = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#while_stat.
VenbraceListener.prototype.enterWhile_stat = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#while_stat.
VenbraceListener.prototype.exitWhile_stat = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#call_procedure_stat.
VenbraceListener.prototype.enterCall_procedure_stat = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#call_procedure_stat.
VenbraceListener.prototype.exitCall_procedure_stat = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#var_stat.
VenbraceListener.prototype.enterVar_stat = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#var_stat.
VenbraceListener.prototype.exitVar_stat = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#setter.
VenbraceListener.prototype.enterSetter = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#setter.
VenbraceListener.prototype.exitSetter = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#expr_block.
VenbraceListener.prototype.enterExpr_block = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#expr_block.
VenbraceListener.prototype.exitExpr_block = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#expr.
VenbraceListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#expr.
VenbraceListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#control_expr.
VenbraceListener.prototype.enterControl_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#control_expr.
VenbraceListener.prototype.exitControl_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#if_expr.
VenbraceListener.prototype.enterIf_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#if_expr.
VenbraceListener.prototype.exitIf_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#do_expr.
VenbraceListener.prototype.enterDo_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#do_expr.
VenbraceListener.prototype.exitDo_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#logic_expr.
VenbraceListener.prototype.enterLogic_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#logic_expr.
VenbraceListener.prototype.exitLogic_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#not_expr.
VenbraceListener.prototype.enterNot_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#not_expr.
VenbraceListener.prototype.exitNot_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#compare_eq_expr.
VenbraceListener.prototype.enterCompare_eq_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#compare_eq_expr.
VenbraceListener.prototype.exitCompare_eq_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#compare_math_expr.
VenbraceListener.prototype.enterCompare_math_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#compare_math_expr.
VenbraceListener.prototype.exitCompare_math_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#math_expr.
VenbraceListener.prototype.enterMath_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#math_expr.
VenbraceListener.prototype.exitMath_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#mutable_op.
VenbraceListener.prototype.enterMutable_op = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#mutable_op.
VenbraceListener.prototype.exitMutable_op = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#immutable_op.
VenbraceListener.prototype.enterImmutable_op = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#immutable_op.
VenbraceListener.prototype.exitImmutable_op = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#min_max.
VenbraceListener.prototype.enterMin_max = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#min_max.
VenbraceListener.prototype.exitMin_max = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#unary_op.
VenbraceListener.prototype.enterUnary_op = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#unary_op.
VenbraceListener.prototype.exitUnary_op = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#mod.
VenbraceListener.prototype.enterMod = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#mod.
VenbraceListener.prototype.exitMod = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#remainder.
VenbraceListener.prototype.enterRemainder = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#remainder.
VenbraceListener.prototype.exitRemainder = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#quotient.
VenbraceListener.prototype.enterQuotient = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#quotient.
VenbraceListener.prototype.exitQuotient = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#trig.
VenbraceListener.prototype.enterTrig = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#trig.
VenbraceListener.prototype.exitTrig = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#atan2.
VenbraceListener.prototype.enterAtan2 = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#atan2.
VenbraceListener.prototype.exitAtan2 = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#str_expr.
VenbraceListener.prototype.enterStr_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#str_expr.
VenbraceListener.prototype.exitStr_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#str_length.
VenbraceListener.prototype.enterStr_length = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#str_length.
VenbraceListener.prototype.exitStr_length = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#str_join.
VenbraceListener.prototype.enterStr_join = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#str_join.
VenbraceListener.prototype.exitStr_join = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#str_reverse.
VenbraceListener.prototype.enterStr_reverse = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#str_reverse.
VenbraceListener.prototype.exitStr_reverse = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#str_split_at_spaces.
VenbraceListener.prototype.enterStr_split_at_spaces = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#str_split_at_spaces.
VenbraceListener.prototype.exitStr_split_at_spaces = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#getter.
VenbraceListener.prototype.enterGetter = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#getter.
VenbraceListener.prototype.exitGetter = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#call_procedure_expr.
VenbraceListener.prototype.enterCall_procedure_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#call_procedure_expr.
VenbraceListener.prototype.exitCall_procedure_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#atom.
VenbraceListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#atom.
VenbraceListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#atom_elements.
VenbraceListener.prototype.enterAtom_elements = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#atom_elements.
VenbraceListener.prototype.exitAtom_elements = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#label.
VenbraceListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#label.
VenbraceListener.prototype.exitLabel = function(ctx) {
};



exports.VenbraceListener = VenbraceListener;
