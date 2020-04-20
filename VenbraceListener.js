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


// Enter a parse tree produced by VenbraceParser#expr_block.
VenbraceListener.prototype.enterExpr_block = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#expr_block.
VenbraceListener.prototype.exitExpr_block = function(ctx) {
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


// Enter a parse tree produced by VenbraceParser#while_stat.
VenbraceListener.prototype.enterWhile_stat = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#while_stat.
VenbraceListener.prototype.exitWhile_stat = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#evaluate_but_ignore.
VenbraceListener.prototype.enterEvaluate_but_ignore = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#evaluate_but_ignore.
VenbraceListener.prototype.exitEvaluate_but_ignore = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#open_screen.
VenbraceListener.prototype.enterOpen_screen = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#open_screen.
VenbraceListener.prototype.exitOpen_screen = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#close_screen.
VenbraceListener.prototype.enterClose_screen = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#close_screen.
VenbraceListener.prototype.exitClose_screen = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#close_application.
VenbraceListener.prototype.enterClose_application = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#close_application.
VenbraceListener.prototype.exitClose_application = function(ctx) {
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


// Enter a parse tree produced by VenbraceParser#local_init_stat.
VenbraceListener.prototype.enterLocal_init_stat = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#local_init_stat.
VenbraceListener.prototype.exitLocal_init_stat = function(ctx) {
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


// Enter a parse tree produced by VenbraceParser#get_screen_val.
VenbraceListener.prototype.enterGet_screen_val = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#get_screen_val.
VenbraceListener.prototype.exitGet_screen_val = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#get_screen_text.
VenbraceListener.prototype.enterGet_screen_text = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#get_screen_text.
VenbraceListener.prototype.exitGet_screen_text = function(ctx) {
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


// Enter a parse tree produced by VenbraceParser#is_num.
VenbraceListener.prototype.enterIs_num = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#is_num.
VenbraceListener.prototype.exitIs_num = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#var_expr.
VenbraceListener.prototype.enterVar_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#var_expr.
VenbraceListener.prototype.exitVar_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#getter.
VenbraceListener.prototype.enterGetter = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#getter.
VenbraceListener.prototype.exitGetter = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#local_init_expr.
VenbraceListener.prototype.enterLocal_init_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#local_init_expr.
VenbraceListener.prototype.exitLocal_init_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#color_block.
VenbraceListener.prototype.enterColor_block = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#color_block.
VenbraceListener.prototype.exitColor_block = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#color.
VenbraceListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#color.
VenbraceListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#make_color.
VenbraceListener.prototype.enterMake_color = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#make_color.
VenbraceListener.prototype.exitMake_color = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#list_expr.
VenbraceListener.prototype.enterList_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#list_expr.
VenbraceListener.prototype.exitList_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#call_procedure_expr.
VenbraceListener.prototype.enterCall_procedure_expr = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#call_procedure_expr.
VenbraceListener.prototype.exitCall_procedure_expr = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#variable.
VenbraceListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#variable.
VenbraceListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by VenbraceParser#atom.
VenbraceListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by VenbraceParser#atom.
VenbraceListener.prototype.exitAtom = function(ctx) {
};



exports.VenbraceListener = VenbraceListener;