// Generated from Venbrace.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by VenbraceParser.

function VenbraceVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

VenbraceVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
VenbraceVisitor.prototype.constructor = VenbraceVisitor;

// Visit a parse tree produced by VenbraceParser#program.
VenbraceVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#test_block.
VenbraceVisitor.prototype.visitTest_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#decl_block.
VenbraceVisitor.prototype.visitDecl_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#decl.
VenbraceVisitor.prototype.visitDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#global_decl.
VenbraceVisitor.prototype.visitGlobal_decl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#procedure_do.
VenbraceVisitor.prototype.visitProcedure_do = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#procedure_result.
VenbraceVisitor.prototype.visitProcedure_result = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#expr_block.
VenbraceVisitor.prototype.visitExpr_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#suite.
VenbraceVisitor.prototype.visitSuite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#stat_block.
VenbraceVisitor.prototype.visitStat_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#stat.
VenbraceVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#control_stat.
VenbraceVisitor.prototype.visitControl_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#if_stat.
VenbraceVisitor.prototype.visitIf_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#while_stat.
VenbraceVisitor.prototype.visitWhile_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#evaluate_but_ignore.
VenbraceVisitor.prototype.visitEvaluate_but_ignore = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#open_screen.
VenbraceVisitor.prototype.visitOpen_screen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#close_screen.
VenbraceVisitor.prototype.visitClose_screen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#close_application.
VenbraceVisitor.prototype.visitClose_application = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#call_procedure_stat.
VenbraceVisitor.prototype.visitCall_procedure_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#var_stat.
VenbraceVisitor.prototype.visitVar_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#setter.
VenbraceVisitor.prototype.visitSetter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#local_init_stat.
VenbraceVisitor.prototype.visitLocal_init_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#expr.
VenbraceVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#control_expr.
VenbraceVisitor.prototype.visitControl_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#if_expr.
VenbraceVisitor.prototype.visitIf_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#do_expr.
VenbraceVisitor.prototype.visitDo_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#get_screen_val.
VenbraceVisitor.prototype.visitGet_screen_val = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#get_screen_text.
VenbraceVisitor.prototype.visitGet_screen_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#logic_expr.
VenbraceVisitor.prototype.visitLogic_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#not_expr.
VenbraceVisitor.prototype.visitNot_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#compare_eq_expr.
VenbraceVisitor.prototype.visitCompare_eq_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#compare_math_expr.
VenbraceVisitor.prototype.visitCompare_math_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#math_expr.
VenbraceVisitor.prototype.visitMath_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#mutable_op.
VenbraceVisitor.prototype.visitMutable_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#immutable_op.
VenbraceVisitor.prototype.visitImmutable_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#min_max.
VenbraceVisitor.prototype.visitMin_max = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#unary_op.
VenbraceVisitor.prototype.visitUnary_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#mod.
VenbraceVisitor.prototype.visitMod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#remainder.
VenbraceVisitor.prototype.visitRemainder = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#quotient.
VenbraceVisitor.prototype.visitQuotient = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#trig.
VenbraceVisitor.prototype.visitTrig = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#is_num.
VenbraceVisitor.prototype.visitIs_num = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#var_expr.
VenbraceVisitor.prototype.visitVar_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#getter.
VenbraceVisitor.prototype.visitGetter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#local_init_expr.
VenbraceVisitor.prototype.visitLocal_init_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#color_block.
VenbraceVisitor.prototype.visitColor_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#color.
VenbraceVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#make_color.
VenbraceVisitor.prototype.visitMake_color = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#list_expr.
VenbraceVisitor.prototype.visitList_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#call_procedure_expr.
VenbraceVisitor.prototype.visitCall_procedure_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceParser#atom.
VenbraceVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};



exports.VenbraceVisitor = VenbraceVisitor;