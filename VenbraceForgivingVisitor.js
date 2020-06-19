// Generated from VenbraceForgiving.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by VenbraceForgivingParser.

function VenbraceForgivingVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

VenbraceForgivingVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
VenbraceForgivingVisitor.prototype.constructor = VenbraceForgivingVisitor;

// Visit a parse tree produced by VenbraceForgivingParser#program.
VenbraceForgivingVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#test_program.
VenbraceForgivingVisitor.prototype.visitTest_program = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#test_blocks.
VenbraceForgivingVisitor.prototype.visitTest_blocks = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#decl_block.
VenbraceForgivingVisitor.prototype.visitDecl_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#decl.
VenbraceForgivingVisitor.prototype.visitDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#global_decl.
VenbraceForgivingVisitor.prototype.visitGlobal_decl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#global_decl_keyword.
VenbraceForgivingVisitor.prototype.visitGlobal_decl_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#procedure_do.
VenbraceForgivingVisitor.prototype.visitProcedure_do = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#procedure_result.
VenbraceForgivingVisitor.prototype.visitProcedure_result = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#event_handler.
VenbraceForgivingVisitor.prototype.visitEvent_handler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#suite.
VenbraceForgivingVisitor.prototype.visitSuite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#stat_block.
VenbraceForgivingVisitor.prototype.visitStat_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#stat.
VenbraceForgivingVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#control_stat.
VenbraceForgivingVisitor.prototype.visitControl_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#if_stat.
VenbraceForgivingVisitor.prototype.visitIf_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#for_each_from_to.
VenbraceForgivingVisitor.prototype.visitFor_each_from_to = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#while_stat.
VenbraceForgivingVisitor.prototype.visitWhile_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#call_procedure_stat.
VenbraceForgivingVisitor.prototype.visitCall_procedure_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#var_stat.
VenbraceForgivingVisitor.prototype.visitVar_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#local_var_decl_stat.
VenbraceForgivingVisitor.prototype.visitLocal_var_decl_stat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#local_decl_keyword.
VenbraceForgivingVisitor.prototype.visitLocal_decl_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#setter.
VenbraceForgivingVisitor.prototype.visitSetter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#expr_block.
VenbraceForgivingVisitor.prototype.visitExpr_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#expr.
VenbraceForgivingVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#control_expr.
VenbraceForgivingVisitor.prototype.visitControl_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#if_expr.
VenbraceForgivingVisitor.prototype.visitIf_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#do_expr.
VenbraceForgivingVisitor.prototype.visitDo_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#logic_expr.
VenbraceForgivingVisitor.prototype.visitLogic_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#not_expr.
VenbraceForgivingVisitor.prototype.visitNot_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#compare_eq_expr.
VenbraceForgivingVisitor.prototype.visitCompare_eq_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#compare_math_expr.
VenbraceForgivingVisitor.prototype.visitCompare_math_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#math_expr.
VenbraceForgivingVisitor.prototype.visitMath_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#mutable_op.
VenbraceForgivingVisitor.prototype.visitMutable_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#immutable_regular_case.
VenbraceForgivingVisitor.prototype.visitImmutable_regular_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#immutable_neg_num_special_case.
VenbraceForgivingVisitor.prototype.visitImmutable_neg_num_special_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#min_max.
VenbraceForgivingVisitor.prototype.visitMin_max = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#unary_op.
VenbraceForgivingVisitor.prototype.visitUnary_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#mod.
VenbraceForgivingVisitor.prototype.visitMod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#trig.
VenbraceForgivingVisitor.prototype.visitTrig = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#str_expr.
VenbraceForgivingVisitor.prototype.visitStr_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#str_length.
VenbraceForgivingVisitor.prototype.visitStr_length = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#str_join.
VenbraceForgivingVisitor.prototype.visitStr_join = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#str_reverse.
VenbraceForgivingVisitor.prototype.visitStr_reverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#str_split_at_spaces.
VenbraceForgivingVisitor.prototype.visitStr_split_at_spaces = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#getter.
VenbraceForgivingVisitor.prototype.visitGetter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#call_procedure_expr.
VenbraceForgivingVisitor.prototype.visitCall_procedure_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#local_var_decl_expr.
VenbraceForgivingVisitor.prototype.visitLocal_var_decl_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#atom.
VenbraceForgivingVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#atom_elements.
VenbraceForgivingVisitor.prototype.visitAtom_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#label.
VenbraceForgivingVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};



exports.VenbraceForgivingVisitor = VenbraceForgivingVisitor;