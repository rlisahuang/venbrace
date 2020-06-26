// Generated from VenbraceForgiving.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('./antlr4/index');

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


// Visit a parse tree produced by VenbraceForgivingParser#test_top_blocks.
VenbraceForgivingVisitor.prototype.visitTest_top_blocks = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#top_block.
VenbraceForgivingVisitor.prototype.visitTop_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#test_blocks.
VenbraceForgivingVisitor.prototype.visitTest_blocks = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#block.
VenbraceForgivingVisitor.prototype.visitBlock = function(ctx) {
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


// Visit a parse tree produced by VenbraceForgivingParser#init_keyword.
VenbraceForgivingVisitor.prototype.visitInit_keyword = function(ctx) {
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


// Visit a parse tree produced by VenbraceForgivingParser#orExprBogus.
VenbraceForgivingVisitor.prototype.visitOrExprBogus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#andExpr.
VenbraceForgivingVisitor.prototype.visitAndExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#mathCompareExprBogus.
VenbraceForgivingVisitor.prototype.visitMathCompareExprBogus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#orExpr.
VenbraceForgivingVisitor.prototype.visitOrExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#addSubExprBogus.
VenbraceForgivingVisitor.prototype.visitAddSubExprBogus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#mathCompareExpr.
VenbraceForgivingVisitor.prototype.visitMathCompareExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#math_compare_op.
VenbraceForgivingVisitor.prototype.visitMath_compare_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#mutableAddExpr.
VenbraceForgivingVisitor.prototype.visitMutableAddExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#mulDivExprBogus.
VenbraceForgivingVisitor.prototype.visitMulDivExprBogus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#subNegNumExpr.
VenbraceForgivingVisitor.prototype.visitSubNegNumExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#subExpr.
VenbraceForgivingVisitor.prototype.visitSubExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#powExprBogus.
VenbraceForgivingVisitor.prototype.visitPowExprBogus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#mutableMulExpr.
VenbraceForgivingVisitor.prototype.visitMutableMulExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#divExpr.
VenbraceForgivingVisitor.prototype.visitDivExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#powExpr.
VenbraceForgivingVisitor.prototype.visitPowExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#coreExprBogus.
VenbraceForgivingVisitor.prototype.visitCoreExprBogus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#getterExpr.
VenbraceForgivingVisitor.prototype.visitGetterExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#controlExpr.
VenbraceForgivingVisitor.prototype.visitControlExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#notExpr.
VenbraceForgivingVisitor.prototype.visitNotExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#mathExpr.
VenbraceForgivingVisitor.prototype.visitMathExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#strExpr.
VenbraceForgivingVisitor.prototype.visitStrExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#callProcedureExpr.
VenbraceForgivingVisitor.prototype.visitCallProcedureExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#locaVarDeclExpr.
VenbraceForgivingVisitor.prototype.visitLocaVarDeclExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#atomExpr.
VenbraceForgivingVisitor.prototype.visitAtomExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#emptyExpr.
VenbraceForgivingVisitor.prototype.visitEmptyExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#parensExpr.
VenbraceForgivingVisitor.prototype.visitParensExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#curliesExpr.
VenbraceForgivingVisitor.prototype.visitCurliesExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#squaresExpr.
VenbraceForgivingVisitor.prototype.visitSquaresExpr = function(ctx) {
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


// Visit a parse tree produced by VenbraceForgivingParser#not_expr.
VenbraceForgivingVisitor.prototype.visitNot_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#math_expr.
VenbraceForgivingVisitor.prototype.visitMath_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#min_max.
VenbraceForgivingVisitor.prototype.visitMin_max = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#unary_operation.
VenbraceForgivingVisitor.prototype.visitUnary_operation = function(ctx) {
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


// Visit a parse tree produced by VenbraceForgivingParser#trig_op.
VenbraceForgivingVisitor.prototype.visitTrig_op = function(ctx) {
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


// Visit a parse tree produced by VenbraceForgivingParser#str_segment.
VenbraceForgivingVisitor.prototype.visitStr_segment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#getterAbbrev.
VenbraceForgivingVisitor.prototype.visitGetterAbbrev = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#getterVerbose.
VenbraceForgivingVisitor.prototype.visitGetterVerbose = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#getterInnerBraces.
VenbraceForgivingVisitor.prototype.visitGetterInnerBraces = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VenbraceForgivingParser#getter_inner_braces.
VenbraceForgivingVisitor.prototype.visitGetter_inner_braces = function(ctx) {
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


// Visit a parse tree produced by VenbraceForgivingParser#label.
VenbraceForgivingVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};



exports.VenbraceForgivingVisitor = VenbraceForgivingVisitor;
