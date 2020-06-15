// Generated from VenbraceNoCode.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by VenbraceNoCodeParser.

function VenbraceNoCodeVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

VenbraceNoCodeVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
VenbraceNoCodeVisitor.prototype.constructor = VenbraceNoCodeVisitor;

// Visit a parse tree produced by VenbraceNoCodeParser#program.
VenbraceNoCodeVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#test_program.
VenbraceNoCodeVisitor.prototype.visitTest_program = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#decl_block.
VenbraceNoCodeVisitor.prototype.visitDecl_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#decl.
VenbraceNoCodeVisitor.prototype.visitDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#global_decl.
VenbraceNoCodeVisitor.prototype.visitGlobal_decl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#procedure_do.
VenbraceNoCodeVisitor.prototype.visitProcedure_do = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#procedure_result.
VenbraceNoCodeVisitor.prototype.visitProcedure_result = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#event_handler.
VenbraceNoCodeVisitor.prototype.visitEvent_handler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#suite.
VenbraceNoCodeVisitor.prototype.visitSuite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#stat_block.
VenbraceNoCodeVisitor.prototype.visitStat_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#stat.
VenbraceNoCodeVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#control_stat.
VenbraceNoCodeVisitor.prototype.visitControl_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#if_stat.
VenbraceNoCodeVisitor.prototype.visitIf_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#for_each_from_to.
VenbraceNoCodeVisitor.prototype.visitFor_each_from_to = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#while_stat.
VenbraceNoCodeVisitor.prototype.visitWhile_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#call_procedure_stat.
VenbraceNoCodeVisitor.prototype.visitCall_procedure_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#var_stat.
VenbraceNoCodeVisitor.prototype.visitVar_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#local_var_decl_stat.
VenbraceNoCodeVisitor.prototype.visitLocal_var_decl_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#setter.
VenbraceNoCodeVisitor.prototype.visitSetter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#expr_block.
VenbraceNoCodeVisitor.prototype.visitExpr_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#expr.
VenbraceNoCodeVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#control_expr.
VenbraceNoCodeVisitor.prototype.visitControl_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#if_expr.
VenbraceNoCodeVisitor.prototype.visitIf_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#do_expr.
VenbraceNoCodeVisitor.prototype.visitDo_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#logic_expr.
VenbraceNoCodeVisitor.prototype.visitLogic_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#not_expr.
VenbraceNoCodeVisitor.prototype.visitNot_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#compare_eq_expr.
VenbraceNoCodeVisitor.prototype.visitCompare_eq_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#compare_math_expr.
VenbraceNoCodeVisitor.prototype.visitCompare_math_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#math_expr.
VenbraceNoCodeVisitor.prototype.visitMath_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#mutable_op.
VenbraceNoCodeVisitor.prototype.visitMutable_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#immutable_op.
VenbraceNoCodeVisitor.prototype.visitImmutable_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#min_max.
VenbraceNoCodeVisitor.prototype.visitMin_max = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#unary_op.
VenbraceNoCodeVisitor.prototype.visitUnary_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#mod.
VenbraceNoCodeVisitor.prototype.visitMod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#remainder.
VenbraceNoCodeVisitor.prototype.visitRemainder = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#quotient.
VenbraceNoCodeVisitor.prototype.visitQuotient = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#trig.
VenbraceNoCodeVisitor.prototype.visitTrig = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#atan2.
VenbraceNoCodeVisitor.prototype.visitAtan2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#str_expr.
VenbraceNoCodeVisitor.prototype.visitStr_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#str_length.
VenbraceNoCodeVisitor.prototype.visitStr_length = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#str_join.
VenbraceNoCodeVisitor.prototype.visitStr_join = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#str_reverse.
VenbraceNoCodeVisitor.prototype.visitStr_reverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#str_split_at_spaces.
VenbraceNoCodeVisitor.prototype.visitStr_split_at_spaces = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#getter.
VenbraceNoCodeVisitor.prototype.visitGetter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#call_procedure_expr.
VenbraceNoCodeVisitor.prototype.visitCall_procedure_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#local_var_decl_expr.
VenbraceNoCodeVisitor.prototype.visitLocal_var_decl_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#atom.
VenbraceNoCodeVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#atom_elements.
VenbraceNoCodeVisitor.prototype.visitAtom_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceNoCodeParser#label.
VenbraceNoCodeVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};



exports.VenbraceNoCodeVisitor = VenbraceNoCodeVisitor;