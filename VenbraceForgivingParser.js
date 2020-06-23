// Generated from VenbraceForgiving.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VenbraceForgivingListener = require('./VenbraceForgivingListener').VenbraceForgivingListener;
var VenbraceForgivingVisitor = require('./VenbraceForgivingVisitor').VenbraceForgivingVisitor;

var grammarFileName = "VenbraceForgiving.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0083\u0260\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0004",
    "2\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u0004",
    "9\t9\u0003\u0002\u0007\u0002t\n\u0002\f\u0002\u000e\u0002w\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "~\n\u0003\u0003\u0004\u0006\u0004\u0081\n\u0004\r\u0004\u000e\u0004",
    "\u0082\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u008b\n\u0005\u0003\u0006\u0006\u0006\u008e\n\u0006",
    "\r\u0006\u000e\u0006\u008f\u0003\u0007\u0005\u0007\u0093\n\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u0097\n\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007\u009b\n\u0007\u0003\u0007\u0005\u0007\u009e\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b\u00ad\n\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0005\t\u00b3\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00b9",
    "\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0003\r\u0007\r\u00c4\n\r\f\r\u000e\r\u00c7\u000b\r\u0003\r",
    "\u0005\r\u00ca\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u00d1\n\u000e\f\u000e\u000e\u000e\u00d4\u000b\u000e\u0003",
    "\u000e\u0005\u000e\u00d7\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u00de\n\u000f\f\u000f\u000e\u000f",
    "\u00e1\u000b\u000f\u0003\u000f\u0005\u000f\u00e4\n\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0007\u0010\u00e9\n\u0010\f\u0010\u000e\u0010",
    "\u00ec\u000b\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00f0\n\u0010",
    "\f\u0010\u000e\u0010\u00f3\u000b\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u00f8\n\u0010\f\u0010\u000e\u0010\u00fb\u000b\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u0100\n\u0010\f\u0010",
    "\u000e\u0010\u0103\u000b\u0010\u0003\u0010\u0005\u0010\u0106\n\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u0115\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u011b\n\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u0120\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u012b\n\u0014\f\u0014\u000e\u0014\u012e\u000b\u0014",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u0132\n\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u0137\n\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u013b\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u013f",
    "\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0143\n\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u0149\n\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u014d\n\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0154\n\u0017\u0003",
    "\u0017\u0007\u0017\u0157\n\u0017\f\u0017\u000e\u0017\u015a\u000b\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0005\u0019\u0162\n\u0019\u0003\u0019\u0003\u0019\u0006\u0019\u0166",
    "\n\u0019\r\u0019\u000e\u0019\u0167\u0003\u0019\u0005\u0019\u016b\n\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u0173\n\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0177",
    "\n\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u017d\n\u001b\u0003\u001b\u0005\u001b\u0180\n\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0007\u001d\u018a\n\u001d\f\u001d\u000e\u001d\u018d\u000b\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0007\u001e\u0195\n\u001e\f\u001e\u000e\u001e\u0198\u000b\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u019f",
    "\n\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0006!\u01a8",
    "\n!\r!\u000e!\u01a9\u0005!\u01ac\n!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0007!\u01b3\n!\f!\u000e!\u01b6\u000b!\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0006\"\u01bd\n\"\r\"\u000e\"\u01be\u0005\"\u01c1\n\"\u0003",
    "\"\u0003\"\u0003\"\u0007\"\u01c6\n\"\f\"\u000e\"\u01c9\u000b\"\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0007#\u01d1\n#\f#\u000e#\u01d4",
    "\u000b#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0005$\u01ec\n$\u0003%\u0003%\u0005%\u01f0\n",
    "%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)",
    "\u0005)\u0205\n)\u0003*\u0003*\u0007*\u0209\n*\f*\u000e*\u020c\u000b",
    "*\u0003+\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003.\u0003.\u0003.\u0003/\u0003/\u00030\u00030\u00030\u0003",
    "0\u00050\u0222\n0\u00031\u00031\u00031\u00032\u00032\u00072\u0229\n",
    "2\f2\u000e2\u022c\u000b2\u00033\u00033\u00033\u00034\u00034\u00034\u0003",
    "5\u00035\u00035\u00055\u0237\n5\u00035\u00055\u023a\n5\u00036\u0003",
    "6\u00036\u00036\u00036\u00056\u0241\n6\u00036\u00056\u0244\n6\u0003",
    "6\u00076\u0247\n6\f6\u000e6\u024a\u000b6\u00037\u00037\u00037\u0003",
    "7\u00057\u0250\n7\u00037\u00067\u0253\n7\r7\u000e7\u0254\u00037\u0005",
    "7\u0258\n7\u00037\u00037\u00038\u00038\u00039\u00039\u00039\u0002\u0007",
    "8:@BD:\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnp\u0002\b\u0003",
    "\u0002!\"\u0003\u0002:?\u0003\u0002VW\u0003\u0002LS\u0003\u0002]b\u0005",
    "\u0002\u0012\u0013}\u007f\u0083\u0083\u0002\u0287\u0002u\u0003\u0002",
    "\u0002\u0002\u0004}\u0003\u0002\u0002\u0002\u0006\u0080\u0003\u0002",
    "\u0002\u0002\b\u008a\u0003\u0002\u0002\u0002\n\u008d\u0003\u0002\u0002",
    "\u0002\f\u009d\u0003\u0002\u0002\u0002\u000e\u00ac\u0003\u0002\u0002",
    "\u0002\u0010\u00b2\u0003\u0002\u0002\u0002\u0012\u00b4\u0003\u0002\u0002",
    "\u0002\u0014\u00bc\u0003\u0002\u0002\u0002\u0016\u00be\u0003\u0002\u0002",
    "\u0002\u0018\u00c0\u0003\u0002\u0002\u0002\u001a\u00cd\u0003\u0002\u0002",
    "\u0002\u001c\u00da\u0003\u0002\u0002\u0002\u001e\u0105\u0003\u0002\u0002",
    "\u0002 \u0114\u0003\u0002\u0002\u0002\"\u011a\u0003\u0002\u0002\u0002",
    "$\u011f\u0003\u0002\u0002\u0002&\u0121\u0003\u0002\u0002\u0002(\u0133",
    "\u0003\u0002\u0002\u0002*\u0146\u0003\u0002\u0002\u0002,\u0150\u0003",
    "\u0002\u0002\u0002.\u015b\u0003\u0002\u0002\u00020\u0165\u0003\u0002",
    "\u0002\u00022\u016e\u0003\u0002\u0002\u00024\u017f\u0003\u0002\u0002",
    "\u00026\u0181\u0003\u0002\u0002\u00028\u0183\u0003\u0002\u0002\u0002",
    ":\u018e\u0003\u0002\u0002\u0002<\u019e\u0003\u0002\u0002\u0002>\u01a0",
    "\u0003\u0002\u0002\u0002@\u01ab\u0003\u0002\u0002\u0002B\u01c0\u0003",
    "\u0002\u0002\u0002D\u01ca\u0003\u0002\u0002\u0002F\u01eb\u0003\u0002",
    "\u0002\u0002H\u01ef\u0003\u0002\u0002\u0002J\u01f1\u0003\u0002\u0002",
    "\u0002L\u01f8\u0003\u0002\u0002\u0002N\u01fd\u0003\u0002\u0002\u0002",
    "P\u0204\u0003\u0002\u0002\u0002R\u0206\u0003\u0002\u0002\u0002T\u020d",
    "\u0003\u0002\u0002\u0002V\u0210\u0003\u0002\u0002\u0002X\u0212\u0003",
    "\u0002\u0002\u0002Z\u0218\u0003\u0002\u0002\u0002\\\u021b\u0003\u0002",
    "\u0002\u0002^\u0221\u0003\u0002\u0002\u0002`\u0223\u0003\u0002\u0002",
    "\u0002b\u0226\u0003\u0002\u0002\u0002d\u022d\u0003\u0002\u0002\u0002",
    "f\u0230\u0003\u0002\u0002\u0002h\u0239\u0003\u0002\u0002\u0002j\u023b",
    "\u0003\u0002\u0002\u0002l\u0252\u0003\u0002\u0002\u0002n\u025b\u0003",
    "\u0002\u0002\u0002p\u025d\u0003\u0002\u0002\u0002rt\u0005\u000e\b\u0002",
    "sr\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002vx\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002xy\u0007\u0002\u0002\u0003y\u0003\u0003\u0002\u0002\u0002",
    "z~\u0005\u000e\b\u0002{~\u0005 \u0011\u0002|~\u00056\u001c\u0002}z\u0003",
    "\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002}|\u0003\u0002\u0002\u0002",
    "~\u0005\u0003\u0002\u0002\u0002\u007f\u0081\u0005\b\u0005\u0002\u0080",
    "\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082",
    "\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083",
    "\u0007\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0003\u0002\u0002\u0085",
    "\u008b\u0005\u000e\b\u0002\u0086\u0087\u0007\u0004\u0002\u0002\u0087",
    "\u008b\u0005 \u0011\u0002\u0088\u0089\u0007\u0005\u0002\u0002\u0089",
    "\u008b\u00056\u001c\u0002\u008a\u0084\u0003\u0002\u0002\u0002\u008a",
    "\u0086\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008b",
    "\t\u0003\u0002\u0002\u0002\u008c\u008e\u0005\f\u0007\u0002\u008d\u008c",
    "\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u008d",
    "\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u000b",
    "\u0003\u0002\u0002\u0002\u0091\u0093\u0007\u0003\u0002\u0002\u0092\u0091",
    "\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0003\u0002\u0002\u0002\u0094\u009e\u0005\u000e\b\u0002\u0095\u0097",
    "\u0007\u0004\u0002\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0096\u0097",
    "\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009e",
    "\u0005 \u0011\u0002\u0099\u009b\u0007\u0005\u0002\u0002\u009a\u0099",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u009e\u00056\u001c\u0002\u009d\u0092",
    "\u0003\u0002\u0002\u0002\u009d\u0096\u0003\u0002\u0002\u0002\u009d\u009a",
    "\u0003\u0002\u0002\u0002\u009e\r\u0003\u0002\u0002\u0002\u009f\u00a0",
    "\u0007\u000b\u0002\u0002\u00a0\u00a1\u0005\u0010\t\u0002\u00a1\u00a2",
    "\u0007\f\u0002\u0002\u00a2\u00ad\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\u0007\u0007\u0002\u0002\u00a4\u00a5\u0005\u0010\t\u0002\u00a5\u00a6",
    "\u0007\b\u0002\u0002\u00a6\u00ad\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0007\t\u0002\u0002\u00a8\u00a9\u0005\u0010\t\u0002\u00a9\u00aa\u0007",
    "\n\u0002\u0002\u00aa\u00ad\u0003\u0002\u0002\u0002\u00ab\u00ad\u0005",
    "\u0010\t\u0002\u00ac\u009f\u0003\u0002\u0002\u0002\u00ac\u00a3\u0003",
    "\u0002\u0002\u0002\u00ac\u00a7\u0003\u0002\u0002\u0002\u00ac\u00ab\u0003",
    "\u0002\u0002\u0002\u00ad\u000f\u0003\u0002\u0002\u0002\u00ae\u00b3\u0005",
    "\u0012\n\u0002\u00af\u00b3\u0005\u0018\r\u0002\u00b0\u00b3\u0005\u001a",
    "\u000e\u0002\u00b1\u00b3\u0005\u001c\u000f\u0002\u00b2\u00ae\u0003\u0002",
    "\u0002\u0002\u00b2\u00af\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002",
    "\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b3\u0011\u0003\u0002",
    "\u0002\u0002\u00b4\u00b5\u0005\u0014\u000b\u0002\u00b5\u00b6\u0005\u0016",
    "\f\u0002\u00b6\u00b8\u0007\u0080\u0002\u0002\u00b7\u00b9\u0007\u001c",
    "\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002",
    "\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb\u00056",
    "\u001c\u0002\u00bb\u0013\u0003\u0002\u0002\u0002\u00bc\u00bd\t\u0002",
    "\u0002\u0002\u00bd\u0015\u0003\u0002\u0002\u0002\u00be\u00bf\u0007 ",
    "\u0002\u0002\u00bf\u0017\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007\u001c",
    "\u0002\u0002\u00c1\u00c5\u0007\u0080\u0002\u0002\u00c2\u00c4\u0007\u0080",
    "\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c7\u0003\u0002",
    "\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002",
    "\u0002\u0002\u00c6\u00c9\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002",
    "\u0002\u0002\u00c8\u00ca\u0007\u001a\u0002\u0002\u00c9\u00c8\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002",
    "\u0002\u0002\u00cb\u00cc\u0005\u001e\u0010\u0002\u00cc\u0019\u0003\u0002",
    "\u0002\u0002\u00cd\u00ce\u0007\u001c\u0002\u0002\u00ce\u00d2\u0007\u0080",
    "\u0002\u0002\u00cf\u00d1\u0007\u0080\u0002\u0002\u00d0\u00cf\u0003\u0002",
    "\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002",
    "\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002",
    "\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d5\u00d7\u0007\u001b",
    "\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002",
    "\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u00056",
    "\u001c\u0002\u00d9\u001b\u0003\u0002\u0002\u0002\u00da\u00db\u0007\u0014",
    "\u0002\u0002\u00db\u00df\u0007\u007f\u0002\u0002\u00dc\u00de\u0007\u0080",
    "\u0002\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00de\u00e1\u0003\u0002",
    "\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002",
    "\u0002\u0002\u00e0\u00e3\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002",
    "\u0002\u0002\u00e2\u00e4\u0007\u001a\u0002\u0002\u00e3\u00e2\u0003\u0002",
    "\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\u0005\u001e\u0010\u0002\u00e6\u001d\u0003\u0002",
    "\u0002\u0002\u00e7\u00e9\u0005 \u0011\u0002\u00e8\u00e7\u0003\u0002",
    "\u0002\u0002\u00e9\u00ec\u0003\u0002\u0002\u0002\u00ea\u00e8\u0003\u0002",
    "\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u0106\u0003\u0002",
    "\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ed\u00f1\u0007\u0007",
    "\u0002\u0002\u00ee\u00f0\u0005 \u0011\u0002\u00ef\u00ee\u0003\u0002",
    "\u0002\u0002\u00f0\u00f3\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002",
    "\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u00f4\u0003\u0002",
    "\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f4\u0106\u0007\b",
    "\u0002\u0002\u00f5\u00f9\u0007\u000b\u0002\u0002\u00f6\u00f8\u0005 ",
    "\u0011\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f8\u00fb\u0003\u0002",
    "\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002",
    "\u0002\u0002\u00fa\u00fc\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002",
    "\u0002\u0002\u00fc\u0106\u0007\f\u0002\u0002\u00fd\u0101\u0007\t\u0002",
    "\u0002\u00fe\u0100\u0005 \u0011\u0002\u00ff\u00fe\u0003\u0002\u0002",
    "\u0002\u0100\u0103\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002",
    "\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0104\u0003\u0002\u0002",
    "\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0104\u0106\u0007\n\u0002",
    "\u0002\u0105\u00ea\u0003\u0002\u0002\u0002\u0105\u00ed\u0003\u0002\u0002",
    "\u0002\u0105\u00f5\u0003\u0002\u0002\u0002\u0105\u00fd\u0003\u0002\u0002",
    "\u0002\u0106\u001f\u0003\u0002\u0002\u0002\u0107\u0108\u0007\u0007\u0002",
    "\u0002\u0108\u0109\u0005\"\u0012\u0002\u0109\u010a\u0007\b\u0002\u0002",
    "\u010a\u0115\u0003\u0002\u0002\u0002\u010b\u010c\u0007\u000b\u0002\u0002",
    "\u010c\u010d\u0005\"\u0012\u0002\u010d\u010e\u0007\f\u0002\u0002\u010e",
    "\u0115\u0003\u0002\u0002\u0002\u010f\u0110\u0007\t\u0002\u0002\u0110",
    "\u0111\u0005\"\u0012\u0002\u0111\u0112\u0007\n\u0002\u0002\u0112\u0115",
    "\u0003\u0002\u0002\u0002\u0113\u0115\u0005\"\u0012\u0002\u0114\u0107",
    "\u0003\u0002\u0002\u0002\u0114\u010b\u0003\u0002\u0002\u0002\u0114\u010f",
    "\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0115!",
    "\u0003\u0002\u0002\u0002\u0116\u011b\u0005$\u0013\u0002\u0117\u011b",
    "\u0005,\u0017\u0002\u0118\u011b\u0005.\u0018\u0002\u0119\u011b\u0005",
    "0\u0019\u0002\u011a\u0116\u0003\u0002\u0002\u0002\u011a\u0117\u0003",
    "\u0002\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011a\u0119\u0003",
    "\u0002\u0002\u0002\u011b#\u0003\u0002\u0002\u0002\u011c\u0120\u0005",
    "&\u0014\u0002\u011d\u0120\u0005(\u0015\u0002\u011e\u0120\u0005*\u0016",
    "\u0002\u011f\u011c\u0003\u0002\u0002\u0002\u011f\u011d\u0003\u0002\u0002",
    "\u0002\u011f\u011e\u0003\u0002\u0002\u0002\u0120%\u0003\u0002\u0002",
    "\u0002\u0121\u0122\u0007\u0015\u0002\u0002\u0122\u0123\u00056\u001c",
    "\u0002\u0123\u0124\u0007\u0016\u0002\u0002\u0124\u012c\u0005\u001e\u0010",
    "\u0002\u0125\u0126\u0007\u0018\u0002\u0002\u0126\u0127\u00056\u001c",
    "\u0002\u0127\u0128\u0007\u0016\u0002\u0002\u0128\u0129\u0005\u001e\u0010",
    "\u0002\u0129\u012b\u0003\u0002\u0002\u0002\u012a\u0125\u0003\u0002\u0002",
    "\u0002\u012b\u012e\u0003\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002",
    "\u0002\u012c\u012d\u0003\u0002\u0002\u0002\u012d\u0131\u0003\u0002\u0002",
    "\u0002\u012e\u012c\u0003\u0002\u0002\u0002\u012f\u0130\u0007\u0017\u0002",
    "\u0002\u0130\u0132\u0005\u001e\u0010\u0002\u0131\u012f\u0003\u0002\u0002",
    "\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132\'\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0007\u0019\u0002\u0002\u0134\u0136\u0007\u0080\u0002",
    "\u0002\u0135\u0137\u0007&\u0002\u0002\u0136\u0135\u0003\u0002\u0002",
    "\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0138\u0003\u0002\u0002",
    "\u0002\u0138\u013a\u00056\u001c\u0002\u0139\u013b\u0007\u001c\u0002",
    "\u0002\u013a\u0139\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002",
    "\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u013e\u00056\u001c",
    "\u0002\u013d\u013f\u0007%\u0002\u0002\u013e\u013d\u0003\u0002\u0002",
    "\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u0140\u0003\u0002\u0002",
    "\u0002\u0140\u0142\u00056\u001c\u0002\u0141\u0143\u0007\u001a\u0002",
    "\u0002\u0142\u0141\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002",
    "\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u0145\u0005\u001e\u0010",
    "\u0002\u0145)\u0003\u0002\u0002\u0002\u0146\u0148\u0007\'\u0002\u0002",
    "\u0147\u0149\u0007(\u0002\u0002\u0148\u0147\u0003\u0002\u0002\u0002",
    "\u0148\u0149\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002",
    "\u014a\u014c\u00056\u001c\u0002\u014b\u014d\u0007\u001a\u0002\u0002",
    "\u014c\u014b\u0003\u0002\u0002\u0002\u014c\u014d\u0003\u0002\u0002\u0002",
    "\u014d\u014e\u0003\u0002\u0002\u0002\u014e\u014f\u0005\u001e\u0010\u0002",
    "\u014f+\u0003\u0002\u0002\u0002\u0150\u0151\u0007\u001d\u0002\u0002",
    "\u0151\u0158\u0007\u0080\u0002\u0002\u0152\u0154\u0005p9\u0002\u0153",
    "\u0152\u0003\u0002\u0002\u0002\u0153\u0154\u0003\u0002\u0002\u0002\u0154",
    "\u0155\u0003\u0002\u0002\u0002\u0155\u0157\u00056\u001c\u0002\u0156",
    "\u0153\u0003\u0002\u0002\u0002\u0157\u015a\u0003\u0002\u0002\u0002\u0158",
    "\u0156\u0003\u0002\u0002\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159",
    "-\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002\u0002\u0002\u015b",
    "\u015c\u00054\u001b\u0002\u015c/\u0003\u0002\u0002\u0002\u015d\u015e",
    "\u0005\u0014\u000b\u0002\u015e\u015f\u00052\u001a\u0002\u015f\u0161",
    "\u0007\u0080\u0002\u0002\u0160\u0162\u0007\u001c\u0002\u0002\u0161\u0160",
    "\u0003\u0002\u0002\u0002\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0163",
    "\u0003\u0002\u0002\u0002\u0163\u0164\u00056\u001c\u0002\u0164\u0166",
    "\u0003\u0002\u0002\u0002\u0165\u015d\u0003\u0002\u0002\u0002\u0166\u0167",
    "\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002\u0167\u0168",
    "\u0003\u0002\u0002\u0002\u0168\u016a\u0003\u0002\u0002\u0002\u0169\u016b",
    "\u0007$\u0002\u0002\u016a\u0169\u0003\u0002\u0002\u0002\u016a\u016b",
    "\u0003\u0002\u0002\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016d",
    "\u0005\u001e\u0010\u0002\u016d1\u0003\u0002\u0002\u0002\u016e\u016f",
    "\u0007#\u0002\u0002\u016f3\u0003\u0002\u0002\u0002\u0170\u0172\u0007",
    "\u001f\u0002\u0002\u0171\u0173\u0007 \u0002\u0002\u0172\u0171\u0003",
    "\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002\u0173\u0174\u0003",
    "\u0002\u0002\u0002\u0174\u0176\u0007\u0080\u0002\u0002\u0175\u0177\u0007",
    "\u001c\u0002\u0002\u0176\u0175\u0003\u0002\u0002\u0002\u0176\u0177\u0003",
    "\u0002\u0002\u0002\u0177\u0178\u0003\u0002\u0002\u0002\u0178\u0180\u0005",
    "6\u001c\u0002\u0179\u017a\u0007\u001f\u0002\u0002\u017a\u017c\u0007",
    "\u007f\u0002\u0002\u017b\u017d\u0007\u001c\u0002\u0002\u017c\u017b\u0003",
    "\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u017e\u0003",
    "\u0002\u0002\u0002\u017e\u0180\u00056\u001c\u0002\u017f\u0170\u0003",
    "\u0002\u0002\u0002\u017f\u0179\u0003\u0002\u0002\u0002\u01805\u0003",
    "\u0002\u0002\u0002\u0181\u0182\u00058\u001d\u0002\u01827\u0003\u0002",
    "\u0002\u0002\u0183\u0184\b\u001d\u0001\u0002\u0184\u0185\u0005:\u001e",
    "\u0002\u0185\u018b\u0003\u0002\u0002\u0002\u0186\u0187\f\u0003\u0002",
    "\u0002\u0187\u0188\u00077\u0002\u0002\u0188\u018a\u00058\u001d\u0003",
    "\u0189\u0186\u0003\u0002\u0002\u0002\u018a\u018d\u0003\u0002\u0002\u0002",
    "\u018b\u0189\u0003\u0002\u0002\u0002\u018b\u018c\u0003\u0002\u0002\u0002",
    "\u018c9\u0003\u0002\u0002\u0002\u018d\u018b\u0003\u0002\u0002\u0002",
    "\u018e\u018f\b\u001e\u0001\u0002\u018f\u0190\u0005<\u001f\u0002\u0190",
    "\u0196\u0003\u0002\u0002\u0002\u0191\u0192\f\u0003\u0002\u0002\u0192",
    "\u0193\u00078\u0002\u0002\u0193\u0195\u0005:\u001e\u0003\u0194\u0191",
    "\u0003\u0002\u0002\u0002\u0195\u0198\u0003\u0002\u0002\u0002\u0196\u0194",
    "\u0003\u0002\u0002\u0002\u0196\u0197\u0003\u0002\u0002\u0002\u0197;",
    "\u0003\u0002\u0002\u0002\u0198\u0196\u0003\u0002\u0002\u0002\u0199\u019f",
    "\u0005@!\u0002\u019a\u019b\u0005@!\u0002\u019b\u019c\u0005> \u0002\u019c",
    "\u019d\u0005@!\u0002\u019d\u019f\u0003\u0002\u0002\u0002\u019e\u0199",
    "\u0003\u0002\u0002\u0002\u019e\u019a\u0003\u0002\u0002\u0002\u019f=",
    "\u0003\u0002\u0002\u0002\u01a0\u01a1\t\u0003\u0002\u0002\u01a1?\u0003",
    "\u0002\u0002\u0002\u01a2\u01a3\b!\u0001\u0002\u01a3\u01ac\u0005B\"\u0002",
    "\u01a4\u01a7\u0005B\"\u0002\u01a5\u01a6\u0007B\u0002\u0002\u01a6\u01a8",
    "\u0005@!\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003",
    "\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003",
    "\u0002\u0002\u0002\u01aa\u01ac\u0003\u0002\u0002\u0002\u01ab\u01a2\u0003",
    "\u0002\u0002\u0002\u01ab\u01a4\u0003\u0002\u0002\u0002\u01ac\u01b4\u0003",
    "\u0002\u0002\u0002\u01ad\u01ae\f\u0003\u0002\u0002\u01ae\u01af\u0007",
    "C\u0002\u0002\u01af\u01b3\u0005@!\u0003\u01b0\u01b1\f\u0004\u0002\u0002",
    "\u01b1\u01b3\u0007~\u0002\u0002\u01b2\u01ad\u0003\u0002\u0002\u0002",
    "\u01b2\u01b0\u0003\u0002\u0002\u0002\u01b3\u01b6\u0003\u0002\u0002\u0002",
    "\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002",
    "\u01b5A\u0003\u0002\u0002\u0002\u01b6\u01b4\u0003\u0002\u0002\u0002",
    "\u01b7\u01b8\b\"\u0001\u0002\u01b8\u01c1\u0005D#\u0002\u01b9\u01bc\u0005",
    "D#\u0002\u01ba\u01bb\u0007D\u0002\u0002\u01bb\u01bd\u0005B\"\u0002\u01bc",
    "\u01ba\u0003\u0002\u0002\u0002\u01bd\u01be\u0003\u0002\u0002\u0002\u01be",
    "\u01bc\u0003\u0002\u0002\u0002\u01be\u01bf\u0003\u0002\u0002\u0002\u01bf",
    "\u01c1\u0003\u0002\u0002\u0002\u01c0\u01b7\u0003\u0002\u0002\u0002\u01c0",
    "\u01b9\u0003\u0002\u0002\u0002\u01c1\u01c7\u0003\u0002\u0002\u0002\u01c2",
    "\u01c3\f\u0003\u0002\u0002\u01c3\u01c4\u0007E\u0002\u0002\u01c4\u01c6",
    "\u0005B\"\u0003\u01c5\u01c2\u0003\u0002\u0002\u0002\u01c6\u01c9\u0003",
    "\u0002\u0002\u0002\u01c7\u01c5\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003",
    "\u0002\u0002\u0002\u01c8C\u0003\u0002\u0002\u0002\u01c9\u01c7\u0003",
    "\u0002\u0002\u0002\u01ca\u01cb\b#\u0001\u0002\u01cb\u01cc\u0005F$\u0002",
    "\u01cc\u01d2\u0003\u0002\u0002\u0002\u01cd\u01ce\f\u0003\u0002\u0002",
    "\u01ce\u01cf\u0007F\u0002\u0002\u01cf\u01d1\u0005D#\u0003\u01d0\u01cd",
    "\u0003\u0002\u0002\u0002\u01d1\u01d4\u0003\u0002\u0002\u0002\u01d2\u01d0",
    "\u0003\u0002\u0002\u0002\u01d2\u01d3\u0003\u0002\u0002\u0002\u01d3E",
    "\u0003\u0002\u0002\u0002\u01d4\u01d2\u0003\u0002\u0002\u0002\u01d5\u01ec",
    "\u0005h5\u0002\u01d6\u01ec\u0005H%\u0002\u01d7\u01ec\u0005N(\u0002\u01d8",
    "\u01ec\u0005P)\u0002\u01d9\u01ec\u0005^0\u0002\u01da\u01ec\u0005j6\u0002",
    "\u01db\u01ec\u0005l7\u0002\u01dc\u01ec\u0005n8\u0002\u01dd\u01de\u0007",
    "\t\u0002\u0002\u01de\u01ec\u0007\n\u0002\u0002\u01df\u01e0\u0007\t\u0002",
    "\u0002\u01e0\u01e1\u00056\u001c\u0002\u01e1\u01e2\u0007\n\u0002\u0002",
    "\u01e2\u01ec\u0003\u0002\u0002\u0002\u01e3\u01e4\u0007\u0007\u0002\u0002",
    "\u01e4\u01e5\u00056\u001c\u0002\u01e5\u01e6\u0007\b\u0002\u0002\u01e6",
    "\u01ec\u0003\u0002\u0002\u0002\u01e7\u01e8\u0007\u000b\u0002\u0002\u01e8",
    "\u01e9\u00056\u001c\u0002\u01e9\u01ea\u0007\f\u0002\u0002\u01ea\u01ec",
    "\u0003\u0002\u0002\u0002\u01eb\u01d5\u0003\u0002\u0002\u0002\u01eb\u01d6",
    "\u0003\u0002\u0002\u0002\u01eb\u01d7\u0003\u0002\u0002\u0002\u01eb\u01d8",
    "\u0003\u0002\u0002\u0002\u01eb\u01d9\u0003\u0002\u0002\u0002\u01eb\u01da",
    "\u0003\u0002\u0002\u0002\u01eb\u01db\u0003\u0002\u0002\u0002\u01eb\u01dc",
    "\u0003\u0002\u0002\u0002\u01eb\u01dd\u0003\u0002\u0002\u0002\u01eb\u01df",
    "\u0003\u0002\u0002\u0002\u01eb\u01e3\u0003\u0002\u0002\u0002\u01eb\u01e7",
    "\u0003\u0002\u0002\u0002\u01ecG\u0003\u0002\u0002\u0002\u01ed\u01f0",
    "\u0005J&\u0002\u01ee\u01f0\u0005L\'\u0002\u01ef\u01ed\u0003\u0002\u0002",
    "\u0002\u01ef\u01ee\u0003\u0002\u0002\u0002\u01f0I\u0003\u0002\u0002",
    "\u0002\u01f1\u01f2\u0007\u0015\u0002\u0002\u01f2\u01f3\u00056\u001c",
    "\u0002\u01f3\u01f4\u0007\u0016\u0002\u0002\u01f4\u01f5\u00056\u001c",
    "\u0002\u01f5\u01f6\u0007\u0017\u0002\u0002\u01f6\u01f7\u00056\u001c",
    "\u0002\u01f7K\u0003\u0002\u0002\u0002\u01f8\u01f9\u0007\u001a\u0002",
    "\u0002\u01f9\u01fa\u0005\u001e\u0010\u0002\u01fa\u01fb\u0007\u001b\u0002",
    "\u0002\u01fb\u01fc\u00056\u001c\u0002\u01fcM\u0003\u0002\u0002\u0002",
    "\u01fd\u01fe\u00076\u0002\u0002\u01fe\u01ff\u00056\u001c\u0002\u01ff",
    "O\u0003\u0002\u0002\u0002\u0200\u0205\u0005R*\u0002\u0201\u0205\u0005",
    "T+\u0002\u0202\u0205\u0005X-\u0002\u0203\u0205\u0005Z.\u0002\u0204\u0200",
    "\u0003\u0002\u0002\u0002\u0204\u0201\u0003\u0002\u0002\u0002\u0204\u0202",
    "\u0003\u0002\u0002\u0002\u0204\u0203\u0003\u0002\u0002\u0002\u0205Q",
    "\u0003\u0002\u0002\u0002\u0206\u020a\t\u0004\u0002\u0002\u0207\u0209",
    "\u00056\u001c\u0002\u0208\u0207\u0003\u0002\u0002\u0002\u0209\u020c",
    "\u0003\u0002\u0002\u0002\u020a\u0208\u0003\u0002\u0002\u0002\u020a\u020b",
    "\u0003\u0002\u0002\u0002\u020bS\u0003\u0002\u0002\u0002\u020c\u020a",
    "\u0003\u0002\u0002\u0002\u020d\u020e\u0005V,\u0002\u020e\u020f\u0005",
    "6\u001c\u0002\u020fU\u0003\u0002\u0002\u0002\u0210\u0211\t\u0005\u0002",
    "\u0002\u0211W\u0003\u0002\u0002\u0002\u0212\u0213\u0007X\u0002\u0002",
    "\u0213\u0214\u0007[\u0002\u0002\u0214\u0215\u00056\u001c\u0002\u0215",
    "\u0216\u0007E\u0002\u0002\u0216\u0217\u00056\u001c\u0002\u0217Y\u0003",
    "\u0002\u0002\u0002\u0218\u0219\u0005\\/\u0002\u0219\u021a\u00056\u001c",
    "\u0002\u021a[\u0003\u0002\u0002\u0002\u021b\u021c\t\u0006\u0002\u0002",
    "\u021c]\u0003\u0002\u0002\u0002\u021d\u0222\u0005b2\u0002\u021e\u0222",
    "\u0005`1\u0002\u021f\u0222\u0005d3\u0002\u0220\u0222\u0005f4\u0002\u0221",
    "\u021d\u0003\u0002\u0002\u0002\u0221\u021e\u0003\u0002\u0002\u0002\u0221",
    "\u021f\u0003\u0002\u0002\u0002\u0221\u0220\u0003\u0002\u0002\u0002\u0222",
    "_\u0003\u0002\u0002\u0002\u0223\u0224\u0007e\u0002\u0002\u0224\u0225",
    "\u00056\u001c\u0002\u0225a\u0003\u0002\u0002\u0002\u0226\u022a\u0007",
    "d\u0002\u0002\u0227\u0229\u00056\u001c\u0002\u0228\u0227\u0003\u0002",
    "\u0002\u0002\u0229\u022c\u0003\u0002\u0002\u0002\u022a\u0228\u0003\u0002",
    "\u0002\u0002\u022a\u022b\u0003\u0002\u0002\u0002\u022bc\u0003\u0002",
    "\u0002\u0002\u022c\u022a\u0003\u0002\u0002\u0002\u022d\u022e\u0007w",
    "\u0002\u0002\u022e\u022f\u00056\u001c\u0002\u022fe\u0003\u0002\u0002",
    "\u0002\u0230\u0231\u0007q\u0002\u0002\u0231\u0232\u00056\u001c\u0002",
    "\u0232g\u0003\u0002\u0002\u0002\u0233\u023a\u0007\u0080\u0002\u0002",
    "\u0234\u0236\u0007\u001e\u0002\u0002\u0235\u0237\u0007 \u0002\u0002",
    "\u0236\u0235\u0003\u0002\u0002\u0002\u0236\u0237\u0003\u0002\u0002\u0002",
    "\u0237\u0238\u0003\u0002\u0002\u0002\u0238\u023a\u0007\u0080\u0002\u0002",
    "\u0239\u0233\u0003\u0002\u0002\u0002\u0239\u0234\u0003\u0002\u0002\u0002",
    "\u023ai\u0003\u0002\u0002\u0002\u023b\u0240\u0007\u001d\u0002\u0002",
    "\u023c\u0241\u0007\u0080\u0002\u0002\u023d\u023e\u0007\u0080\u0002\u0002",
    "\u023e\u023f\u0007\u000f\u0002\u0002\u023f\u0241\u0007\u0080\u0002\u0002",
    "\u0240\u023c\u0003\u0002\u0002\u0002\u0240\u023d\u0003\u0002\u0002\u0002",
    "\u0241\u0248\u0003\u0002\u0002\u0002\u0242\u0244\u0005p9\u0002\u0243",
    "\u0242\u0003\u0002\u0002\u0002\u0243\u0244\u0003\u0002\u0002\u0002\u0244",
    "\u0245\u0003\u0002\u0002\u0002\u0245\u0247\u00056\u001c\u0002\u0246",
    "\u0243\u0003\u0002\u0002\u0002\u0247\u024a\u0003\u0002\u0002\u0002\u0248",
    "\u0246\u0003\u0002\u0002\u0002\u0248\u0249\u0003\u0002\u0002\u0002\u0249",
    "k\u0003\u0002\u0002\u0002\u024a\u0248\u0003\u0002\u0002\u0002\u024b",
    "\u024c\u0007!\u0002\u0002\u024c\u024d\u0007#\u0002\u0002\u024d\u024f",
    "\u0007\u0080\u0002\u0002\u024e\u0250\u0007\u001c\u0002\u0002\u024f\u024e",
    "\u0003\u0002\u0002\u0002\u024f\u0250\u0003\u0002\u0002\u0002\u0250\u0251",
    "\u0003\u0002\u0002\u0002\u0251\u0253\u00056\u001c\u0002\u0252\u024b",
    "\u0003\u0002\u0002\u0002\u0253\u0254\u0003\u0002\u0002\u0002\u0254\u0252",
    "\u0003\u0002\u0002\u0002\u0254\u0255\u0003\u0002\u0002\u0002\u0255\u0257",
    "\u0003\u0002\u0002\u0002\u0256\u0258\u0007$\u0002\u0002\u0257\u0256",
    "\u0003\u0002\u0002\u0002\u0257\u0258\u0003\u0002\u0002\u0002\u0258\u0259",
    "\u0003\u0002\u0002\u0002\u0259\u025a\u00056\u001c\u0002\u025am\u0003",
    "\u0002\u0002\u0002\u025b\u025c\t\u0007\u0002\u0002\u025co\u0003\u0002",
    "\u0002\u0002\u025d\u025e\u0007\u0080\u0002\u0002\u025eq\u0003\u0002",
    "\u0002\u0002Fu}\u0082\u008a\u008f\u0092\u0096\u009a\u009d\u00ac\u00b2",
    "\u00b8\u00c5\u00c9\u00d2\u00d6\u00df\u00e3\u00ea\u00f1\u00f9\u0101\u0105",
    "\u0114\u011a\u011f\u012c\u0131\u0136\u013a\u013e\u0142\u0148\u014c\u0153",
    "\u0158\u0161\u0167\u016a\u0172\u0176\u017c\u017f\u018b\u0196\u019e\u01a9",
    "\u01ab\u01b2\u01b4\u01be\u01c0\u01c7\u01d2\u01eb\u01ef\u0204\u020a\u0221",
    "\u022a\u0236\u0239\u0240\u0243\u0248\u024f\u0254\u0257"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'decl'", "'stat'", "'expr'", null, "'{'", "'}'", 
                     "'('", "')'", "'['", "']'", "','", "'==='", "'.'", 
                     "'<-'", "':'", "'true'", "'false'", "'when'", "'if'", 
                     "'then'", "'else'", "'else if'", "'for each'", "'do'", 
                     "'result'", "'to'", "'call'", "'get'", "'set'", "'global'", 
                     "'initialize'", "'init'", "'local'", "'in'", "'by'", 
                     "'from'", "'while'", "'test'", "'evaluate but ignore'", 
                     "'open another screen'", "'open another screen with start value'", 
                     "'close screen'", "'close screen with value'", "'close screen with plain text'", 
                     "'close application'", "'screenName'", "'startValue'", 
                     "'text'", "'break'", "'get start value'", "'get plain start text'", 
                     "'not'", "'and'", "'or'", "'xor'", "'<'", "'>'", "'<='", 
                     "'>='", "'='", "'!='", null, null, "'+'", "'-'", "'*'", 
                     "'/'", "'^'", "'decimal'", "'binary'", "'octal'", "'hexadecimal'", 
                     "'bitwise'", "'square root'", "'absolute'", "'neg'", 
                     "'log'", "'e^'", "'round'", "'ceiling'", "'floor'", 
                     "'random integer'", "'random fraction'", "'min'", "'max'", 
                     "'modulo'", "'remainder'", "'quotient'", "'of'", "'convert'", 
                     "'sin'", "'cos'", "'tan'", "'asin'", "'acos'", "'atan'", 
                     "'atan2'", "'join'", "'length'", "'is empty'", "'compare texts'", 
                     "'trim'", "'upcase'", "'downcase'", "'starts at'", 
                     "'contains'", "'split'", "'split at first'", "'split at any'", 
                     "'split at first of any'", "'split at spaces'", "'segment'", 
                     "'replace all'", "'replacement'", "'Obfuscated Text'", 
                     "'is a string?'", "'reverse'", "'mappings'", "'in text'", 
                     "'preferring'", "'longest string first'", "'dictionary'" ];

var symbolicNames = [ null, null, null, null, "WS", "LCURLY", "RCURLY", 
                      "LPAREN", "RPAREN", "LSQR", "RSQR", "COMMA", "DIVIDER", 
                      "DOT", "ASSIGN", "COLON", "TRUE", "FALSE", "WHEN", 
                      "IF", "THEN", "ELSE", "ELSE_IF", "FOREACH", "DO", 
                      "RESULT", "TO", "CALL", "GET", "SET", "GLOBAL", "INITIALIZE", 
                      "INIT", "LOCAL", "IN", "BY", "FROM", "WHILE", "TEST", 
                      "EVAL_BUT_IGNORE_RESULT", "OPEN_ANOTHER_SCREEN", "OPEN_ANOTHER_SCREEN_WITH_START_VALUE", 
                      "CLOSE_SCREEN", "CLOSE_SCREEN_WITH_VALUE", "CLOSE_SCREEN_WITH_PLAIN_TEXT", 
                      "CLOSE_APPLICATION", "SCREEN_NAME", "START_VALUE", 
                      "TEXT", "BREAK", "GET_START_VALUE", "GET_PLAIN_START_TEXT", 
                      "NOT", "AND", "OR", "XOR", "LT", "GT", "LE", "GE", 
                      "EQ", "NEQ", "LOGIC_EQ", "LOGIC_NOT_EQ", "PLUS", "MINUS", 
                      "MUL", "DIV", "POW", "DECIMAL", "BINARY", "OCTAL", 
                      "HEXADECIMAL", "BITWISE", "SQRT", "ABS", "NEG", "LOG", 
                      "EULER", "ROUND", "CEILING", "FLOOR", "RANDOM_INTEGER", 
                      "RANDOM_FRACTION", "MIN", "MAX", "MODULO", "REMAINDER", 
                      "QUOTIENT", "OF", "CONVERT", "SIN", "COS", "TAN", 
                      "ASIN", "ACOS", "ATAN", "ATAN2", "JOIN", "LENGTH", 
                      "IS_EMPTY", "COMPARE_TEXTS", "TRIM", "UPCASE", "DOWNCASE", 
                      "STARTS_AT", "CONTAINS", "SPLIT", "SPLIT_AT_FIRST", 
                      "SPLIT_AT_ANY", "SPLIT_AT_FIRST_OF_ANY", "SPLIT_AT_SPACES", 
                      "SEGMENT", "REPLACE_ALL", "REPLACEMENT", "OBFUSCATED_TEXT", 
                      "IS_A_STR", "REVERSE", "MAPPINGS", "IN_TEXT", "PREFERRING", 
                      "LONGEST_STRING_FIRST", "DICTIONARY", "NUMBER", "NEG_NUM", 
                      "COMPONENT_PROPERTY", "ID", "LINECOMMENT", "BLOCKCOMMENT", 
                      "STRING" ];

var ruleNames =  [ "program", "test_program", "test_top_blocks", "top_block", 
                   "test_blocks", "block", "decl_block", "decl", "global_decl", 
                   "init_keyword", "global_decl_keyword", "procedure_do", 
                   "procedure_result", "event_handler", "suite", "stat_block", 
                   "stat", "control_stat", "if_stat", "for_each_from_to", 
                   "while_stat", "call_procedure_stat", "var_stat", "local_var_decl_stat", 
                   "local_decl_keyword", "setter", "expr_block", "and_expr", 
                   "or_expr", "math_compare_expr", "math_compare_op", "add_sub_expr", 
                   "mul_div_expr", "pow_expr", "core_expr", "control_expr", 
                   "if_expr", "do_expr", "not_expr", "math_expr", "min_max", 
                   "unary_operation", "unary_op", "mod", "trig", "trig_op", 
                   "str_expr", "str_length", "str_join", "str_reverse", 
                   "str_split_at_spaces", "getter", "call_procedure_expr", 
                   "local_var_decl_expr", "atom", "label" ];

function VenbraceForgivingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;


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

    return this;
}

VenbraceForgivingParser.prototype = Object.create(antlr4.Parser.prototype);
VenbraceForgivingParser.prototype.constructor = VenbraceForgivingParser;

Object.defineProperty(VenbraceForgivingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

VenbraceForgivingParser.EOF = antlr4.Token.EOF;
VenbraceForgivingParser.T__0 = 1;
VenbraceForgivingParser.T__1 = 2;
VenbraceForgivingParser.T__2 = 3;
VenbraceForgivingParser.WS = 4;
VenbraceForgivingParser.LCURLY = 5;
VenbraceForgivingParser.RCURLY = 6;
VenbraceForgivingParser.LPAREN = 7;
VenbraceForgivingParser.RPAREN = 8;
VenbraceForgivingParser.LSQR = 9;
VenbraceForgivingParser.RSQR = 10;
VenbraceForgivingParser.COMMA = 11;
VenbraceForgivingParser.DIVIDER = 12;
VenbraceForgivingParser.DOT = 13;
VenbraceForgivingParser.ASSIGN = 14;
VenbraceForgivingParser.COLON = 15;
VenbraceForgivingParser.TRUE = 16;
VenbraceForgivingParser.FALSE = 17;
VenbraceForgivingParser.WHEN = 18;
VenbraceForgivingParser.IF = 19;
VenbraceForgivingParser.THEN = 20;
VenbraceForgivingParser.ELSE = 21;
VenbraceForgivingParser.ELSE_IF = 22;
VenbraceForgivingParser.FOREACH = 23;
VenbraceForgivingParser.DO = 24;
VenbraceForgivingParser.RESULT = 25;
VenbraceForgivingParser.TO = 26;
VenbraceForgivingParser.CALL = 27;
VenbraceForgivingParser.GET = 28;
VenbraceForgivingParser.SET = 29;
VenbraceForgivingParser.GLOBAL = 30;
VenbraceForgivingParser.INITIALIZE = 31;
VenbraceForgivingParser.INIT = 32;
VenbraceForgivingParser.LOCAL = 33;
VenbraceForgivingParser.IN = 34;
VenbraceForgivingParser.BY = 35;
VenbraceForgivingParser.FROM = 36;
VenbraceForgivingParser.WHILE = 37;
VenbraceForgivingParser.TEST = 38;
VenbraceForgivingParser.EVAL_BUT_IGNORE_RESULT = 39;
VenbraceForgivingParser.OPEN_ANOTHER_SCREEN = 40;
VenbraceForgivingParser.OPEN_ANOTHER_SCREEN_WITH_START_VALUE = 41;
VenbraceForgivingParser.CLOSE_SCREEN = 42;
VenbraceForgivingParser.CLOSE_SCREEN_WITH_VALUE = 43;
VenbraceForgivingParser.CLOSE_SCREEN_WITH_PLAIN_TEXT = 44;
VenbraceForgivingParser.CLOSE_APPLICATION = 45;
VenbraceForgivingParser.SCREEN_NAME = 46;
VenbraceForgivingParser.START_VALUE = 47;
VenbraceForgivingParser.TEXT = 48;
VenbraceForgivingParser.BREAK = 49;
VenbraceForgivingParser.GET_START_VALUE = 50;
VenbraceForgivingParser.GET_PLAIN_START_TEXT = 51;
VenbraceForgivingParser.NOT = 52;
VenbraceForgivingParser.AND = 53;
VenbraceForgivingParser.OR = 54;
VenbraceForgivingParser.XOR = 55;
VenbraceForgivingParser.LT = 56;
VenbraceForgivingParser.GT = 57;
VenbraceForgivingParser.LE = 58;
VenbraceForgivingParser.GE = 59;
VenbraceForgivingParser.EQ = 60;
VenbraceForgivingParser.NEQ = 61;
VenbraceForgivingParser.LOGIC_EQ = 62;
VenbraceForgivingParser.LOGIC_NOT_EQ = 63;
VenbraceForgivingParser.PLUS = 64;
VenbraceForgivingParser.MINUS = 65;
VenbraceForgivingParser.MUL = 66;
VenbraceForgivingParser.DIV = 67;
VenbraceForgivingParser.POW = 68;
VenbraceForgivingParser.DECIMAL = 69;
VenbraceForgivingParser.BINARY = 70;
VenbraceForgivingParser.OCTAL = 71;
VenbraceForgivingParser.HEXADECIMAL = 72;
VenbraceForgivingParser.BITWISE = 73;
VenbraceForgivingParser.SQRT = 74;
VenbraceForgivingParser.ABS = 75;
VenbraceForgivingParser.NEG = 76;
VenbraceForgivingParser.LOG = 77;
VenbraceForgivingParser.EULER = 78;
VenbraceForgivingParser.ROUND = 79;
VenbraceForgivingParser.CEILING = 80;
VenbraceForgivingParser.FLOOR = 81;
VenbraceForgivingParser.RANDOM_INTEGER = 82;
VenbraceForgivingParser.RANDOM_FRACTION = 83;
VenbraceForgivingParser.MIN = 84;
VenbraceForgivingParser.MAX = 85;
VenbraceForgivingParser.MODULO = 86;
VenbraceForgivingParser.REMAINDER = 87;
VenbraceForgivingParser.QUOTIENT = 88;
VenbraceForgivingParser.OF = 89;
VenbraceForgivingParser.CONVERT = 90;
VenbraceForgivingParser.SIN = 91;
VenbraceForgivingParser.COS = 92;
VenbraceForgivingParser.TAN = 93;
VenbraceForgivingParser.ASIN = 94;
VenbraceForgivingParser.ACOS = 95;
VenbraceForgivingParser.ATAN = 96;
VenbraceForgivingParser.ATAN2 = 97;
VenbraceForgivingParser.JOIN = 98;
VenbraceForgivingParser.LENGTH = 99;
VenbraceForgivingParser.IS_EMPTY = 100;
VenbraceForgivingParser.COMPARE_TEXTS = 101;
VenbraceForgivingParser.TRIM = 102;
VenbraceForgivingParser.UPCASE = 103;
VenbraceForgivingParser.DOWNCASE = 104;
VenbraceForgivingParser.STARTS_AT = 105;
VenbraceForgivingParser.CONTAINS = 106;
VenbraceForgivingParser.SPLIT = 107;
VenbraceForgivingParser.SPLIT_AT_FIRST = 108;
VenbraceForgivingParser.SPLIT_AT_ANY = 109;
VenbraceForgivingParser.SPLIT_AT_FIRST_OF_ANY = 110;
VenbraceForgivingParser.SPLIT_AT_SPACES = 111;
VenbraceForgivingParser.SEGMENT = 112;
VenbraceForgivingParser.REPLACE_ALL = 113;
VenbraceForgivingParser.REPLACEMENT = 114;
VenbraceForgivingParser.OBFUSCATED_TEXT = 115;
VenbraceForgivingParser.IS_A_STR = 116;
VenbraceForgivingParser.REVERSE = 117;
VenbraceForgivingParser.MAPPINGS = 118;
VenbraceForgivingParser.IN_TEXT = 119;
VenbraceForgivingParser.PREFERRING = 120;
VenbraceForgivingParser.LONGEST_STRING_FIRST = 121;
VenbraceForgivingParser.DICTIONARY = 122;
VenbraceForgivingParser.NUMBER = 123;
VenbraceForgivingParser.NEG_NUM = 124;
VenbraceForgivingParser.COMPONENT_PROPERTY = 125;
VenbraceForgivingParser.ID = 126;
VenbraceForgivingParser.LINECOMMENT = 127;
VenbraceForgivingParser.BLOCKCOMMENT = 128;
VenbraceForgivingParser.STRING = 129;

VenbraceForgivingParser.RULE_program = 0;
VenbraceForgivingParser.RULE_test_program = 1;
VenbraceForgivingParser.RULE_test_top_blocks = 2;
VenbraceForgivingParser.RULE_top_block = 3;
VenbraceForgivingParser.RULE_test_blocks = 4;
VenbraceForgivingParser.RULE_block = 5;
VenbraceForgivingParser.RULE_decl_block = 6;
VenbraceForgivingParser.RULE_decl = 7;
VenbraceForgivingParser.RULE_global_decl = 8;
VenbraceForgivingParser.RULE_init_keyword = 9;
VenbraceForgivingParser.RULE_global_decl_keyword = 10;
VenbraceForgivingParser.RULE_procedure_do = 11;
VenbraceForgivingParser.RULE_procedure_result = 12;
VenbraceForgivingParser.RULE_event_handler = 13;
VenbraceForgivingParser.RULE_suite = 14;
VenbraceForgivingParser.RULE_stat_block = 15;
VenbraceForgivingParser.RULE_stat = 16;
VenbraceForgivingParser.RULE_control_stat = 17;
VenbraceForgivingParser.RULE_if_stat = 18;
VenbraceForgivingParser.RULE_for_each_from_to = 19;
VenbraceForgivingParser.RULE_while_stat = 20;
VenbraceForgivingParser.RULE_call_procedure_stat = 21;
VenbraceForgivingParser.RULE_var_stat = 22;
VenbraceForgivingParser.RULE_local_var_decl_stat = 23;
VenbraceForgivingParser.RULE_local_decl_keyword = 24;
VenbraceForgivingParser.RULE_setter = 25;
VenbraceForgivingParser.RULE_expr_block = 26;
VenbraceForgivingParser.RULE_and_expr = 27;
VenbraceForgivingParser.RULE_or_expr = 28;
VenbraceForgivingParser.RULE_math_compare_expr = 29;
VenbraceForgivingParser.RULE_math_compare_op = 30;
VenbraceForgivingParser.RULE_add_sub_expr = 31;
VenbraceForgivingParser.RULE_mul_div_expr = 32;
VenbraceForgivingParser.RULE_pow_expr = 33;
VenbraceForgivingParser.RULE_core_expr = 34;
VenbraceForgivingParser.RULE_control_expr = 35;
VenbraceForgivingParser.RULE_if_expr = 36;
VenbraceForgivingParser.RULE_do_expr = 37;
VenbraceForgivingParser.RULE_not_expr = 38;
VenbraceForgivingParser.RULE_math_expr = 39;
VenbraceForgivingParser.RULE_min_max = 40;
VenbraceForgivingParser.RULE_unary_operation = 41;
VenbraceForgivingParser.RULE_unary_op = 42;
VenbraceForgivingParser.RULE_mod = 43;
VenbraceForgivingParser.RULE_trig = 44;
VenbraceForgivingParser.RULE_trig_op = 45;
VenbraceForgivingParser.RULE_str_expr = 46;
VenbraceForgivingParser.RULE_str_length = 47;
VenbraceForgivingParser.RULE_str_join = 48;
VenbraceForgivingParser.RULE_str_reverse = 49;
VenbraceForgivingParser.RULE_str_split_at_spaces = 50;
VenbraceForgivingParser.RULE_getter = 51;
VenbraceForgivingParser.RULE_call_procedure_expr = 52;
VenbraceForgivingParser.RULE_local_var_decl_expr = 53;
VenbraceForgivingParser.RULE_atom = 54;
VenbraceForgivingParser.RULE_label = 55;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(VenbraceForgivingParser.EOF, 0);
};

ProgramContext.prototype.decl_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Decl_blockContext);
    } else {
        return this.getTypedRuleContext(Decl_blockContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.ProgramContext = ProgramContext;

VenbraceForgivingParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, VenbraceForgivingParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (VenbraceForgivingParser.LCURLY - 5)) | (1 << (VenbraceForgivingParser.LPAREN - 5)) | (1 << (VenbraceForgivingParser.LSQR - 5)) | (1 << (VenbraceForgivingParser.WHEN - 5)) | (1 << (VenbraceForgivingParser.TO - 5)) | (1 << (VenbraceForgivingParser.INITIALIZE - 5)) | (1 << (VenbraceForgivingParser.INIT - 5)))) !== 0)) {
            this.state = 112;
            this.decl_block();
            this.state = 117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 118;
        this.match(VenbraceForgivingParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_programContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_test_program;
    return this;
}

Test_programContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_programContext.prototype.constructor = Test_programContext;

Test_programContext.prototype.decl_block = function() {
    return this.getTypedRuleContext(Decl_blockContext,0);
};

Test_programContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

Test_programContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Test_programContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterTest_program(this);
	}
};

Test_programContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitTest_program(this);
	}
};

Test_programContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitTest_program(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Test_programContext = Test_programContext;

VenbraceForgivingParser.prototype.test_program = function() {

    var localctx = new Test_programContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, VenbraceForgivingParser.RULE_test_program);
    try {
        this.state = 123;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.decl_block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.stat_block();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 122;
            this.expr_block();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_top_blocksContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_test_top_blocks;
    return this;
}

Test_top_blocksContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_top_blocksContext.prototype.constructor = Test_top_blocksContext;

Test_top_blocksContext.prototype.top_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Top_blockContext);
    } else {
        return this.getTypedRuleContext(Top_blockContext,i);
    }
};

Test_top_blocksContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterTest_top_blocks(this);
	}
};

Test_top_blocksContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitTest_top_blocks(this);
	}
};

Test_top_blocksContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitTest_top_blocks(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Test_top_blocksContext = Test_top_blocksContext;

VenbraceForgivingParser.prototype.test_top_blocks = function() {

    var localctx = new Test_top_blocksContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, VenbraceForgivingParser.RULE_test_top_blocks);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 125;
            this.top_block();
            this.state = 128; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.T__0) | (1 << VenbraceForgivingParser.T__1) | (1 << VenbraceForgivingParser.T__2))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Top_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_top_block;
    return this;
}

Top_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Top_blockContext.prototype.constructor = Top_blockContext;

Top_blockContext.prototype.decl_block = function() {
    return this.getTypedRuleContext(Decl_blockContext,0);
};

Top_blockContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

Top_blockContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Top_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterTop_block(this);
	}
};

Top_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitTop_block(this);
	}
};

Top_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitTop_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Top_blockContext = Top_blockContext;

VenbraceForgivingParser.prototype.top_block = function() {

    var localctx = new Top_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, VenbraceForgivingParser.RULE_top_block);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 130;
            this.match(VenbraceForgivingParser.T__0);
            this.state = 131;
            this.decl_block();
            break;
        case VenbraceForgivingParser.T__1:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.match(VenbraceForgivingParser.T__1);
            this.state = 133;
            this.stat_block();
            break;
        case VenbraceForgivingParser.T__2:
            this.enterOuterAlt(localctx, 3);
            this.state = 134;
            this.match(VenbraceForgivingParser.T__2);
            this.state = 135;
            this.expr_block();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_blocksContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_test_blocks;
    return this;
}

Test_blocksContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_blocksContext.prototype.constructor = Test_blocksContext;

Test_blocksContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

Test_blocksContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterTest_blocks(this);
	}
};

Test_blocksContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitTest_blocks(this);
	}
};

Test_blocksContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitTest_blocks(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Test_blocksContext = Test_blocksContext;

VenbraceForgivingParser.prototype.test_blocks = function() {

    var localctx = new Test_blocksContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, VenbraceForgivingParser.RULE_test_blocks);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 138;
            this.block();
            this.state = 141; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.T__0) | (1 << VenbraceForgivingParser.T__1) | (1 << VenbraceForgivingParser.T__2) | (1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.TRUE) | (1 << VenbraceForgivingParser.FALSE) | (1 << VenbraceForgivingParser.WHEN) | (1 << VenbraceForgivingParser.IF) | (1 << VenbraceForgivingParser.FOREACH) | (1 << VenbraceForgivingParser.DO) | (1 << VenbraceForgivingParser.TO) | (1 << VenbraceForgivingParser.CALL) | (1 << VenbraceForgivingParser.GET) | (1 << VenbraceForgivingParser.SET) | (1 << VenbraceForgivingParser.INITIALIZE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VenbraceForgivingParser.INIT - 32)) | (1 << (VenbraceForgivingParser.WHILE - 32)) | (1 << (VenbraceForgivingParser.NOT - 32)))) !== 0) || ((((_la - 74)) & ~0x1f) == 0 && ((1 << (_la - 74)) & ((1 << (VenbraceForgivingParser.SQRT - 74)) | (1 << (VenbraceForgivingParser.ABS - 74)) | (1 << (VenbraceForgivingParser.NEG - 74)) | (1 << (VenbraceForgivingParser.LOG - 74)) | (1 << (VenbraceForgivingParser.EULER - 74)) | (1 << (VenbraceForgivingParser.ROUND - 74)) | (1 << (VenbraceForgivingParser.CEILING - 74)) | (1 << (VenbraceForgivingParser.FLOOR - 74)) | (1 << (VenbraceForgivingParser.MIN - 74)) | (1 << (VenbraceForgivingParser.MAX - 74)) | (1 << (VenbraceForgivingParser.MODULO - 74)) | (1 << (VenbraceForgivingParser.SIN - 74)) | (1 << (VenbraceForgivingParser.COS - 74)) | (1 << (VenbraceForgivingParser.TAN - 74)) | (1 << (VenbraceForgivingParser.ASIN - 74)) | (1 << (VenbraceForgivingParser.ACOS - 74)) | (1 << (VenbraceForgivingParser.ATAN - 74)) | (1 << (VenbraceForgivingParser.JOIN - 74)) | (1 << (VenbraceForgivingParser.LENGTH - 74)))) !== 0) || ((((_la - 111)) & ~0x1f) == 0 && ((1 << (_la - 111)) & ((1 << (VenbraceForgivingParser.SPLIT_AT_SPACES - 111)) | (1 << (VenbraceForgivingParser.REVERSE - 111)) | (1 << (VenbraceForgivingParser.NUMBER - 111)) | (1 << (VenbraceForgivingParser.NEG_NUM - 111)) | (1 << (VenbraceForgivingParser.COMPONENT_PROPERTY - 111)) | (1 << (VenbraceForgivingParser.ID - 111)) | (1 << (VenbraceForgivingParser.STRING - 111)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.decl_block = function() {
    return this.getTypedRuleContext(Decl_blockContext,0);
};

BlockContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

BlockContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.BlockContext = BlockContext;

VenbraceForgivingParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, VenbraceForgivingParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.state = 155;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.T__0) {
                this.state = 143;
                this.match(VenbraceForgivingParser.T__0);
            }

            this.state = 146;
            this.decl_block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.T__1) {
                this.state = 147;
                this.match(VenbraceForgivingParser.T__1);
            }

            this.state = 150;
            this.stat_block();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.T__2) {
                this.state = 151;
                this.match(VenbraceForgivingParser.T__2);
            }

            this.state = 154;
            this.expr_block();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Decl_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_decl_block;
    this.declLbrace = null; // Token
    this.declRbrace = null; // Token
    return this;
}

Decl_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_blockContext.prototype.constructor = Decl_blockContext;

Decl_blockContext.prototype.decl = function() {
    return this.getTypedRuleContext(DeclContext,0);
};

Decl_blockContext.prototype.LSQR = function() {
    return this.getToken(VenbraceForgivingParser.LSQR, 0);
};

Decl_blockContext.prototype.RSQR = function() {
    return this.getToken(VenbraceForgivingParser.RSQR, 0);
};

Decl_blockContext.prototype.LCURLY = function() {
    return this.getToken(VenbraceForgivingParser.LCURLY, 0);
};

Decl_blockContext.prototype.RCURLY = function() {
    return this.getToken(VenbraceForgivingParser.RCURLY, 0);
};

Decl_blockContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Decl_blockContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Decl_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterDecl_block(this);
	}
};

Decl_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitDecl_block(this);
	}
};

Decl_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitDecl_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Decl_blockContext = Decl_blockContext;

VenbraceForgivingParser.prototype.decl_block = function() {

    var localctx = new Decl_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, VenbraceForgivingParser.RULE_decl_block);
    try {
        this.state = 170;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.LSQR:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            localctx.declLbrace = this.match(VenbraceForgivingParser.LSQR);
            this.state = 158;
            this.decl();
            this.state = 159;
            localctx.declRbrace = this.match(VenbraceForgivingParser.RSQR);
            break;
        case VenbraceForgivingParser.LCURLY:
            this.enterOuterAlt(localctx, 2);
            this.state = 161;
            localctx.declLbrace = this.match(VenbraceForgivingParser.LCURLY);
            this.state = 162;
            this.decl();
            this.state = 163;
            localctx.declRbrace = this.match(VenbraceForgivingParser.RCURLY);
            break;
        case VenbraceForgivingParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 165;
            localctx.declLbrace = this.match(VenbraceForgivingParser.LPAREN);
            this.state = 166;
            this.decl();
            this.state = 167;
            localctx.declRbrace = this.match(VenbraceForgivingParser.RPAREN);
            break;
        case VenbraceForgivingParser.WHEN:
        case VenbraceForgivingParser.TO:
        case VenbraceForgivingParser.INITIALIZE:
        case VenbraceForgivingParser.INIT:
            this.enterOuterAlt(localctx, 4);
            this.state = 169;
            this.decl();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_decl;
    return this;
}

DeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclContext.prototype.constructor = DeclContext;

DeclContext.prototype.global_decl = function() {
    return this.getTypedRuleContext(Global_declContext,0);
};

DeclContext.prototype.procedure_do = function() {
    return this.getTypedRuleContext(Procedure_doContext,0);
};

DeclContext.prototype.procedure_result = function() {
    return this.getTypedRuleContext(Procedure_resultContext,0);
};

DeclContext.prototype.event_handler = function() {
    return this.getTypedRuleContext(Event_handlerContext,0);
};

DeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterDecl(this);
	}
};

DeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitDecl(this);
	}
};

DeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.DeclContext = DeclContext;

VenbraceForgivingParser.prototype.decl = function() {

    var localctx = new DeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, VenbraceForgivingParser.RULE_decl);
    try {
        this.state = 176;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 172;
            this.global_decl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 173;
            this.procedure_do();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 174;
            this.procedure_result();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 175;
            this.event_handler();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Global_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_global_decl;
    return this;
}

Global_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Global_declContext.prototype.constructor = Global_declContext;

Global_declContext.prototype.init_keyword = function() {
    return this.getTypedRuleContext(Init_keywordContext,0);
};

Global_declContext.prototype.global_decl_keyword = function() {
    return this.getTypedRuleContext(Global_decl_keywordContext,0);
};

Global_declContext.prototype.ID = function() {
    return this.getToken(VenbraceForgivingParser.ID, 0);
};

Global_declContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Global_declContext.prototype.TO = function() {
    return this.getToken(VenbraceForgivingParser.TO, 0);
};

Global_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterGlobal_decl(this);
	}
};

Global_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitGlobal_decl(this);
	}
};

Global_declContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitGlobal_decl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Global_declContext = Global_declContext;

VenbraceForgivingParser.prototype.global_decl = function() {

    var localctx = new Global_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, VenbraceForgivingParser.RULE_global_decl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.init_keyword();
        this.state = 179;
        this.global_decl_keyword();
        this.state = 180;
        this.match(VenbraceForgivingParser.ID);
        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.TO) {
            this.state = 181;
            this.match(VenbraceForgivingParser.TO);
        }

        this.state = 184;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Init_keywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_init_keyword;
    return this;
}

Init_keywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Init_keywordContext.prototype.constructor = Init_keywordContext;

Init_keywordContext.prototype.INITIALIZE = function() {
    return this.getToken(VenbraceForgivingParser.INITIALIZE, 0);
};

Init_keywordContext.prototype.INIT = function() {
    return this.getToken(VenbraceForgivingParser.INIT, 0);
};

Init_keywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterInit_keyword(this);
	}
};

Init_keywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitInit_keyword(this);
	}
};

Init_keywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitInit_keyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Init_keywordContext = Init_keywordContext;

VenbraceForgivingParser.prototype.init_keyword = function() {

    var localctx = new Init_keywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, VenbraceForgivingParser.RULE_init_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.INITIALIZE || _la===VenbraceForgivingParser.INIT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Global_decl_keywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_global_decl_keyword;
    return this;
}

Global_decl_keywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Global_decl_keywordContext.prototype.constructor = Global_decl_keywordContext;

Global_decl_keywordContext.prototype.GLOBAL = function() {
    return this.getToken(VenbraceForgivingParser.GLOBAL, 0);
};

Global_decl_keywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterGlobal_decl_keyword(this);
	}
};

Global_decl_keywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitGlobal_decl_keyword(this);
	}
};

Global_decl_keywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitGlobal_decl_keyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Global_decl_keywordContext = Global_decl_keywordContext;

VenbraceForgivingParser.prototype.global_decl_keyword = function() {

    var localctx = new Global_decl_keywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, VenbraceForgivingParser.RULE_global_decl_keyword);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(VenbraceForgivingParser.GLOBAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Procedure_doContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_procedure_do;
    this.proc_name = null; // Token
    this.arg_name = null; // Token
    return this;
}

Procedure_doContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Procedure_doContext.prototype.constructor = Procedure_doContext;

Procedure_doContext.prototype.TO = function() {
    return this.getToken(VenbraceForgivingParser.TO, 0);
};

Procedure_doContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

Procedure_doContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.ID);
    } else {
        return this.getToken(VenbraceForgivingParser.ID, i);
    }
};


Procedure_doContext.prototype.DO = function() {
    return this.getToken(VenbraceForgivingParser.DO, 0);
};

Procedure_doContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterProcedure_do(this);
	}
};

Procedure_doContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitProcedure_do(this);
	}
};

Procedure_doContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitProcedure_do(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Procedure_doContext = Procedure_doContext;

VenbraceForgivingParser.prototype.procedure_do = function() {

    var localctx = new Procedure_doContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, VenbraceForgivingParser.RULE_procedure_do);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(VenbraceForgivingParser.TO);
        this.state = 191;
        localctx.proc_name = this.match(VenbraceForgivingParser.ID);
        this.state = 195;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 192;
                localctx.arg_name = this.match(VenbraceForgivingParser.ID); 
            }
            this.state = 197;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

        this.state = 199;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 198;
            this.match(VenbraceForgivingParser.DO);

        }
        this.state = 201;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Procedure_resultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_procedure_result;
    this.proc_name = null; // Token
    this.arg_name = null; // Token
    return this;
}

Procedure_resultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Procedure_resultContext.prototype.constructor = Procedure_resultContext;

Procedure_resultContext.prototype.TO = function() {
    return this.getToken(VenbraceForgivingParser.TO, 0);
};

Procedure_resultContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Procedure_resultContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.ID);
    } else {
        return this.getToken(VenbraceForgivingParser.ID, i);
    }
};


Procedure_resultContext.prototype.RESULT = function() {
    return this.getToken(VenbraceForgivingParser.RESULT, 0);
};

Procedure_resultContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterProcedure_result(this);
	}
};

Procedure_resultContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitProcedure_result(this);
	}
};

Procedure_resultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitProcedure_result(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Procedure_resultContext = Procedure_resultContext;

VenbraceForgivingParser.prototype.procedure_result = function() {

    var localctx = new Procedure_resultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, VenbraceForgivingParser.RULE_procedure_result);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(VenbraceForgivingParser.TO);
        this.state = 204;
        localctx.proc_name = this.match(VenbraceForgivingParser.ID);
        this.state = 208;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 205;
                localctx.arg_name = this.match(VenbraceForgivingParser.ID); 
            }
            this.state = 210;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.RESULT) {
            this.state = 211;
            this.match(VenbraceForgivingParser.RESULT);
        }

        this.state = 214;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_handlerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_event_handler;
    this.param_name = null; // Token
    return this;
}

Event_handlerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_handlerContext.prototype.constructor = Event_handlerContext;

Event_handlerContext.prototype.WHEN = function() {
    return this.getToken(VenbraceForgivingParser.WHEN, 0);
};

Event_handlerContext.prototype.COMPONENT_PROPERTY = function() {
    return this.getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0);
};

Event_handlerContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

Event_handlerContext.prototype.DO = function() {
    return this.getToken(VenbraceForgivingParser.DO, 0);
};

Event_handlerContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.ID);
    } else {
        return this.getToken(VenbraceForgivingParser.ID, i);
    }
};


Event_handlerContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterEvent_handler(this);
	}
};

Event_handlerContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitEvent_handler(this);
	}
};

Event_handlerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitEvent_handler(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Event_handlerContext = Event_handlerContext;

VenbraceForgivingParser.prototype.event_handler = function() {

    var localctx = new Event_handlerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, VenbraceForgivingParser.RULE_event_handler);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(VenbraceForgivingParser.WHEN);
        this.state = 217;
        this.match(VenbraceForgivingParser.COMPONENT_PROPERTY);
        this.state = 221;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 218;
                localctx.param_name = this.match(VenbraceForgivingParser.ID); 
            }
            this.state = 223;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

        this.state = 225;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 224;
            this.match(VenbraceForgivingParser.DO);

        }
        this.state = 227;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SuiteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_suite;
    this.suiteLbrace = null; // Token
    this.suiteRbrace = null; // Token
    return this;
}

SuiteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuiteContext.prototype.constructor = SuiteContext;

SuiteContext.prototype.stat_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stat_blockContext);
    } else {
        return this.getTypedRuleContext(Stat_blockContext,i);
    }
};

SuiteContext.prototype.LCURLY = function() {
    return this.getToken(VenbraceForgivingParser.LCURLY, 0);
};

SuiteContext.prototype.RCURLY = function() {
    return this.getToken(VenbraceForgivingParser.RCURLY, 0);
};

SuiteContext.prototype.LSQR = function() {
    return this.getToken(VenbraceForgivingParser.LSQR, 0);
};

SuiteContext.prototype.RSQR = function() {
    return this.getToken(VenbraceForgivingParser.RSQR, 0);
};

SuiteContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

SuiteContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

SuiteContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterSuite(this);
	}
};

SuiteContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitSuite(this);
	}
};

SuiteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitSuite(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.SuiteContext = SuiteContext;

VenbraceForgivingParser.prototype.suite = function() {

    var localctx = new SuiteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, VenbraceForgivingParser.RULE_suite);
    var _la = 0; // Token type
    try {
        this.state = 259;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 229;
                    this.stat_block(); 
                }
                this.state = 234;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 235;
            localctx.suiteLbrace = this.match(VenbraceForgivingParser.LCURLY);
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.IF) | (1 << VenbraceForgivingParser.FOREACH) | (1 << VenbraceForgivingParser.CALL) | (1 << VenbraceForgivingParser.SET) | (1 << VenbraceForgivingParser.INITIALIZE))) !== 0) || _la===VenbraceForgivingParser.INIT || _la===VenbraceForgivingParser.WHILE) {
                this.state = 236;
                this.stat_block();
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 242;
            localctx.suiteRbrace = this.match(VenbraceForgivingParser.RCURLY);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 243;
            localctx.suiteLbrace = this.match(VenbraceForgivingParser.LSQR);
            this.state = 247;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.IF) | (1 << VenbraceForgivingParser.FOREACH) | (1 << VenbraceForgivingParser.CALL) | (1 << VenbraceForgivingParser.SET) | (1 << VenbraceForgivingParser.INITIALIZE))) !== 0) || _la===VenbraceForgivingParser.INIT || _la===VenbraceForgivingParser.WHILE) {
                this.state = 244;
                this.stat_block();
                this.state = 249;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 250;
            localctx.suiteRbrace = this.match(VenbraceForgivingParser.RSQR);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 251;
            localctx.suiteLbrace = this.match(VenbraceForgivingParser.LPAREN);
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.IF) | (1 << VenbraceForgivingParser.FOREACH) | (1 << VenbraceForgivingParser.CALL) | (1 << VenbraceForgivingParser.SET) | (1 << VenbraceForgivingParser.INITIALIZE))) !== 0) || _la===VenbraceForgivingParser.INIT || _la===VenbraceForgivingParser.WHILE) {
                this.state = 252;
                this.stat_block();
                this.state = 257;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 258;
            localctx.suiteRbrace = this.match(VenbraceForgivingParser.RPAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Stat_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_stat_block;
    this.statLbrace = null; // Token
    this.statRbrace = null; // Token
    return this;
}

Stat_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stat_blockContext.prototype.constructor = Stat_blockContext;

Stat_blockContext.prototype.stat = function() {
    return this.getTypedRuleContext(StatContext,0);
};

Stat_blockContext.prototype.LCURLY = function() {
    return this.getToken(VenbraceForgivingParser.LCURLY, 0);
};

Stat_blockContext.prototype.RCURLY = function() {
    return this.getToken(VenbraceForgivingParser.RCURLY, 0);
};

Stat_blockContext.prototype.LSQR = function() {
    return this.getToken(VenbraceForgivingParser.LSQR, 0);
};

Stat_blockContext.prototype.RSQR = function() {
    return this.getToken(VenbraceForgivingParser.RSQR, 0);
};

Stat_blockContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Stat_blockContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Stat_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterStat_block(this);
	}
};

Stat_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitStat_block(this);
	}
};

Stat_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitStat_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Stat_blockContext = Stat_blockContext;

VenbraceForgivingParser.prototype.stat_block = function() {

    var localctx = new Stat_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, VenbraceForgivingParser.RULE_stat_block);
    try {
        this.state = 274;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.LCURLY:
            this.enterOuterAlt(localctx, 1);
            this.state = 261;
            localctx.statLbrace = this.match(VenbraceForgivingParser.LCURLY);
            this.state = 262;
            this.stat();
            this.state = 263;
            localctx.statRbrace = this.match(VenbraceForgivingParser.RCURLY);
            break;
        case VenbraceForgivingParser.LSQR:
            this.enterOuterAlt(localctx, 2);
            this.state = 265;
            localctx.statLbrace = this.match(VenbraceForgivingParser.LSQR);
            this.state = 266;
            this.stat();
            this.state = 267;
            localctx.statRbrace = this.match(VenbraceForgivingParser.RSQR);
            break;
        case VenbraceForgivingParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 269;
            localctx.statLbrace = this.match(VenbraceForgivingParser.LPAREN);
            this.state = 270;
            this.stat();
            this.state = 271;
            localctx.statRbrace = this.match(VenbraceForgivingParser.RPAREN);
            break;
        case VenbraceForgivingParser.IF:
        case VenbraceForgivingParser.FOREACH:
        case VenbraceForgivingParser.CALL:
        case VenbraceForgivingParser.SET:
        case VenbraceForgivingParser.INITIALIZE:
        case VenbraceForgivingParser.INIT:
        case VenbraceForgivingParser.WHILE:
            this.enterOuterAlt(localctx, 4);
            this.state = 273;
            this.stat();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.control_stat = function() {
    return this.getTypedRuleContext(Control_statContext,0);
};

StatContext.prototype.call_procedure_stat = function() {
    return this.getTypedRuleContext(Call_procedure_statContext,0);
};

StatContext.prototype.var_stat = function() {
    return this.getTypedRuleContext(Var_statContext,0);
};

StatContext.prototype.local_var_decl_stat = function() {
    return this.getTypedRuleContext(Local_var_decl_statContext,0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitStat(this);
	}
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.StatContext = StatContext;

VenbraceForgivingParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, VenbraceForgivingParser.RULE_stat);
    try {
        this.state = 280;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.IF:
        case VenbraceForgivingParser.FOREACH:
        case VenbraceForgivingParser.WHILE:
            this.enterOuterAlt(localctx, 1);
            this.state = 276;
            this.control_stat();
            break;
        case VenbraceForgivingParser.CALL:
            this.enterOuterAlt(localctx, 2);
            this.state = 277;
            this.call_procedure_stat();
            break;
        case VenbraceForgivingParser.SET:
            this.enterOuterAlt(localctx, 3);
            this.state = 278;
            this.var_stat();
            break;
        case VenbraceForgivingParser.INITIALIZE:
        case VenbraceForgivingParser.INIT:
            this.enterOuterAlt(localctx, 4);
            this.state = 279;
            this.local_var_decl_stat();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Control_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_control_stat;
    return this;
}

Control_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Control_statContext.prototype.constructor = Control_statContext;

Control_statContext.prototype.if_stat = function() {
    return this.getTypedRuleContext(If_statContext,0);
};

Control_statContext.prototype.for_each_from_to = function() {
    return this.getTypedRuleContext(For_each_from_toContext,0);
};

Control_statContext.prototype.while_stat = function() {
    return this.getTypedRuleContext(While_statContext,0);
};

Control_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterControl_stat(this);
	}
};

Control_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitControl_stat(this);
	}
};

Control_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitControl_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Control_statContext = Control_statContext;

VenbraceForgivingParser.prototype.control_stat = function() {

    var localctx = new Control_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, VenbraceForgivingParser.RULE_control_stat);
    try {
        this.state = 285;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 282;
            this.if_stat();
            break;
        case VenbraceForgivingParser.FOREACH:
            this.enterOuterAlt(localctx, 2);
            this.state = 283;
            this.for_each_from_to();
            break;
        case VenbraceForgivingParser.WHILE:
            this.enterOuterAlt(localctx, 3);
            this.state = 284;
            this.while_stat();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_if_stat;
    this.e1 = null; // Expr_blockContext
    this.s1 = null; // SuiteContext
    this.e2 = null; // Expr_blockContext
    this.s2 = null; // SuiteContext
    this.s3 = null; // SuiteContext
    return this;
}

If_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statContext.prototype.constructor = If_statContext;

If_statContext.prototype.IF = function() {
    return this.getToken(VenbraceForgivingParser.IF, 0);
};

If_statContext.prototype.THEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.THEN);
    } else {
        return this.getToken(VenbraceForgivingParser.THEN, i);
    }
};


If_statContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

If_statContext.prototype.suite = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SuiteContext);
    } else {
        return this.getTypedRuleContext(SuiteContext,i);
    }
};

If_statContext.prototype.ELSE_IF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.ELSE_IF);
    } else {
        return this.getToken(VenbraceForgivingParser.ELSE_IF, i);
    }
};


If_statContext.prototype.ELSE = function() {
    return this.getToken(VenbraceForgivingParser.ELSE, 0);
};

If_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterIf_stat(this);
	}
};

If_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitIf_stat(this);
	}
};

If_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitIf_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.If_statContext = If_statContext;

VenbraceForgivingParser.prototype.if_stat = function() {

    var localctx = new If_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, VenbraceForgivingParser.RULE_if_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(VenbraceForgivingParser.IF);
        this.state = 288;
        localctx.e1 = this.expr_block();
        this.state = 289;
        this.match(VenbraceForgivingParser.THEN);
        this.state = 290;
        localctx.s1 = this.suite();
        this.state = 298;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 291;
                this.match(VenbraceForgivingParser.ELSE_IF);
                this.state = 292;
                localctx.e2 = this.expr_block();
                this.state = 293;
                this.match(VenbraceForgivingParser.THEN);
                this.state = 294;
                localctx.s2 = this.suite(); 
            }
            this.state = 300;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
        }

        this.state = 303;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        if(la_===1) {
            this.state = 301;
            this.match(VenbraceForgivingParser.ELSE);
            this.state = 302;
            localctx.s3 = this.suite();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function For_each_from_toContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_for_each_from_to;
    this.from = null; // Expr_blockContext
    this.to = null; // Expr_blockContext
    this.by = null; // Expr_blockContext
    return this;
}

For_each_from_toContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_each_from_toContext.prototype.constructor = For_each_from_toContext;

For_each_from_toContext.prototype.FOREACH = function() {
    return this.getToken(VenbraceForgivingParser.FOREACH, 0);
};

For_each_from_toContext.prototype.ID = function() {
    return this.getToken(VenbraceForgivingParser.ID, 0);
};

For_each_from_toContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

For_each_from_toContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

For_each_from_toContext.prototype.FROM = function() {
    return this.getToken(VenbraceForgivingParser.FROM, 0);
};

For_each_from_toContext.prototype.TO = function() {
    return this.getToken(VenbraceForgivingParser.TO, 0);
};

For_each_from_toContext.prototype.BY = function() {
    return this.getToken(VenbraceForgivingParser.BY, 0);
};

For_each_from_toContext.prototype.DO = function() {
    return this.getToken(VenbraceForgivingParser.DO, 0);
};

For_each_from_toContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterFor_each_from_to(this);
	}
};

For_each_from_toContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitFor_each_from_to(this);
	}
};

For_each_from_toContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitFor_each_from_to(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.For_each_from_toContext = For_each_from_toContext;

VenbraceForgivingParser.prototype.for_each_from_to = function() {

    var localctx = new For_each_from_toContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, VenbraceForgivingParser.RULE_for_each_from_to);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.match(VenbraceForgivingParser.FOREACH);
        this.state = 306;
        this.match(VenbraceForgivingParser.ID);
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.FROM) {
            this.state = 307;
            this.match(VenbraceForgivingParser.FROM);
        }

        this.state = 310;
        localctx.from = this.expr_block();
        this.state = 312;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.TO) {
            this.state = 311;
            this.match(VenbraceForgivingParser.TO);
        }

        this.state = 314;
        localctx.to = this.expr_block();
        this.state = 316;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.BY) {
            this.state = 315;
            this.match(VenbraceForgivingParser.BY);
        }

        this.state = 318;
        localctx.by = this.expr_block();
        this.state = 320;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        if(la_===1) {
            this.state = 319;
            this.match(VenbraceForgivingParser.DO);

        }
        this.state = 322;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function While_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_while_stat;
    return this;
}

While_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_statContext.prototype.constructor = While_statContext;

While_statContext.prototype.WHILE = function() {
    return this.getToken(VenbraceForgivingParser.WHILE, 0);
};

While_statContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

While_statContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

While_statContext.prototype.TEST = function() {
    return this.getToken(VenbraceForgivingParser.TEST, 0);
};

While_statContext.prototype.DO = function() {
    return this.getToken(VenbraceForgivingParser.DO, 0);
};

While_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterWhile_stat(this);
	}
};

While_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitWhile_stat(this);
	}
};

While_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitWhile_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.While_statContext = While_statContext;

VenbraceForgivingParser.prototype.while_stat = function() {

    var localctx = new While_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, VenbraceForgivingParser.RULE_while_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.match(VenbraceForgivingParser.WHILE);
        this.state = 326;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.TEST) {
            this.state = 325;
            this.match(VenbraceForgivingParser.TEST);
        }

        this.state = 328;
        this.expr_block();
        this.state = 330;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        if(la_===1) {
            this.state = 329;
            this.match(VenbraceForgivingParser.DO);

        }
        this.state = 332;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Call_procedure_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_call_procedure_stat;
    this.arg = null; // Expr_blockContext
    return this;
}

Call_procedure_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Call_procedure_statContext.prototype.constructor = Call_procedure_statContext;

Call_procedure_statContext.prototype.CALL = function() {
    return this.getToken(VenbraceForgivingParser.CALL, 0);
};

Call_procedure_statContext.prototype.ID = function() {
    return this.getToken(VenbraceForgivingParser.ID, 0);
};

Call_procedure_statContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Call_procedure_statContext.prototype.label = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelContext);
    } else {
        return this.getTypedRuleContext(LabelContext,i);
    }
};

Call_procedure_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterCall_procedure_stat(this);
	}
};

Call_procedure_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitCall_procedure_stat(this);
	}
};

Call_procedure_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitCall_procedure_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Call_procedure_statContext = Call_procedure_statContext;

VenbraceForgivingParser.prototype.call_procedure_stat = function() {

    var localctx = new Call_procedure_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, VenbraceForgivingParser.RULE_call_procedure_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(VenbraceForgivingParser.CALL);
        this.state = 335;
        this.match(VenbraceForgivingParser.ID);
        this.state = 342;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 337;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
                if(la_===1) {
                    this.state = 336;
                    this.label();

                }
                this.state = 339;
                localctx.arg = this.expr_block(); 
            }
            this.state = 344;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Var_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_var_stat;
    return this;
}

Var_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_statContext.prototype.constructor = Var_statContext;

Var_statContext.prototype.setter = function() {
    return this.getTypedRuleContext(SetterContext,0);
};

Var_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterVar_stat(this);
	}
};

Var_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitVar_stat(this);
	}
};

Var_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitVar_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Var_statContext = Var_statContext;

VenbraceForgivingParser.prototype.var_stat = function() {

    var localctx = new Var_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, VenbraceForgivingParser.RULE_var_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.setter();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Local_var_decl_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_local_var_decl_stat;
    return this;
}

Local_var_decl_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Local_var_decl_statContext.prototype.constructor = Local_var_decl_statContext;

Local_var_decl_statContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

Local_var_decl_statContext.prototype.init_keyword = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Init_keywordContext);
    } else {
        return this.getTypedRuleContext(Init_keywordContext,i);
    }
};

Local_var_decl_statContext.prototype.local_decl_keyword = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Local_decl_keywordContext);
    } else {
        return this.getTypedRuleContext(Local_decl_keywordContext,i);
    }
};

Local_var_decl_statContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.ID);
    } else {
        return this.getToken(VenbraceForgivingParser.ID, i);
    }
};


Local_var_decl_statContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Local_var_decl_statContext.prototype.IN = function() {
    return this.getToken(VenbraceForgivingParser.IN, 0);
};

Local_var_decl_statContext.prototype.TO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.TO);
    } else {
        return this.getToken(VenbraceForgivingParser.TO, i);
    }
};


Local_var_decl_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterLocal_var_decl_stat(this);
	}
};

Local_var_decl_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitLocal_var_decl_stat(this);
	}
};

Local_var_decl_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitLocal_var_decl_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Local_var_decl_statContext = Local_var_decl_statContext;

VenbraceForgivingParser.prototype.local_var_decl_stat = function() {

    var localctx = new Local_var_decl_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, VenbraceForgivingParser.RULE_local_var_decl_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 347;
        		this.init_keyword();
        		this.state = 348;
        		this.local_decl_keyword();
        		this.state = 349;
        		this.match(VenbraceForgivingParser.ID);
        		this.state = 351;
        		this._errHandler.sync(this);
        		_la = this._input.LA(1);
        		if(_la===VenbraceForgivingParser.TO) {
        		    this.state = 350;
        		    this.match(VenbraceForgivingParser.TO);
        		}

        		this.state = 353;
        		this.expr_block();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 357; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,37, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 360;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.IN) {
            this.state = 359;
            this.match(VenbraceForgivingParser.IN);
        }

        this.state = 362;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Local_decl_keywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_local_decl_keyword;
    return this;
}

Local_decl_keywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Local_decl_keywordContext.prototype.constructor = Local_decl_keywordContext;

Local_decl_keywordContext.prototype.LOCAL = function() {
    return this.getToken(VenbraceForgivingParser.LOCAL, 0);
};

Local_decl_keywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterLocal_decl_keyword(this);
	}
};

Local_decl_keywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitLocal_decl_keyword(this);
	}
};

Local_decl_keywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitLocal_decl_keyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Local_decl_keywordContext = Local_decl_keywordContext;

VenbraceForgivingParser.prototype.local_decl_keyword = function() {

    var localctx = new Local_decl_keywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, VenbraceForgivingParser.RULE_local_decl_keyword);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        this.match(VenbraceForgivingParser.LOCAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_setter;
    return this;
}

SetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetterContext.prototype.constructor = SetterContext;

SetterContext.prototype.SET = function() {
    return this.getToken(VenbraceForgivingParser.SET, 0);
};

SetterContext.prototype.ID = function() {
    return this.getToken(VenbraceForgivingParser.ID, 0);
};

SetterContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

SetterContext.prototype.GLOBAL = function() {
    return this.getToken(VenbraceForgivingParser.GLOBAL, 0);
};

SetterContext.prototype.TO = function() {
    return this.getToken(VenbraceForgivingParser.TO, 0);
};

SetterContext.prototype.COMPONENT_PROPERTY = function() {
    return this.getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0);
};

SetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterSetter(this);
	}
};

SetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitSetter(this);
	}
};

SetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitSetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.SetterContext = SetterContext;

VenbraceForgivingParser.prototype.setter = function() {

    var localctx = new SetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, VenbraceForgivingParser.RULE_setter);
    var _la = 0; // Token type
    try {
        this.state = 381;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 366;
            this.match(VenbraceForgivingParser.SET);
            this.state = 368;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.GLOBAL) {
                this.state = 367;
                this.match(VenbraceForgivingParser.GLOBAL);
            }

            this.state = 370;
            this.match(VenbraceForgivingParser.ID);
            this.state = 372;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.TO) {
                this.state = 371;
                this.match(VenbraceForgivingParser.TO);
            }

            this.state = 374;
            this.expr_block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 375;
            this.match(VenbraceForgivingParser.SET);
            this.state = 376;
            this.match(VenbraceForgivingParser.COMPONENT_PROPERTY);
            this.state = 378;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.TO) {
                this.state = 377;
                this.match(VenbraceForgivingParser.TO);
            }

            this.state = 380;
            this.expr_block();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Expr_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_expr_block;
    return this;
}

Expr_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_blockContext.prototype.constructor = Expr_blockContext;


 
Expr_blockContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AndExprBogusContext(parser, ctx) {
	Expr_blockContext.call(this, parser);
    Expr_blockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExprBogusContext.prototype = Object.create(Expr_blockContext.prototype);
AndExprBogusContext.prototype.constructor = AndExprBogusContext;

VenbraceForgivingParser.AndExprBogusContext = AndExprBogusContext;

AndExprBogusContext.prototype.and_expr = function() {
    return this.getTypedRuleContext(And_exprContext,0);
};
AndExprBogusContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterAndExprBogus(this);
	}
};

AndExprBogusContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitAndExprBogus(this);
	}
};

AndExprBogusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitAndExprBogus(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceForgivingParser.Expr_blockContext = Expr_blockContext;

VenbraceForgivingParser.prototype.expr_block = function() {

    var localctx = new Expr_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, VenbraceForgivingParser.RULE_expr_block);
    try {
        localctx = new AndExprBogusContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this.and_expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function And_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_and_expr;
    return this;
}

And_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_exprContext.prototype.constructor = And_exprContext;


 
And_exprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AndExprContext(parser, ctx) {
	And_exprContext.call(this, parser);
    And_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExprContext.prototype = Object.create(And_exprContext.prototype);
AndExprContext.prototype.constructor = AndExprContext;

VenbraceForgivingParser.AndExprContext = AndExprContext;

AndExprContext.prototype.and_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_exprContext);
    } else {
        return this.getTypedRuleContext(And_exprContext,i);
    }
};

AndExprContext.prototype.AND = function() {
    return this.getToken(VenbraceForgivingParser.AND, 0);
};
AndExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterAndExpr(this);
	}
};

AndExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitAndExpr(this);
	}
};

AndExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitAndExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrExprBogusContext(parser, ctx) {
	And_exprContext.call(this, parser);
    And_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExprBogusContext.prototype = Object.create(And_exprContext.prototype);
OrExprBogusContext.prototype.constructor = OrExprBogusContext;

VenbraceForgivingParser.OrExprBogusContext = OrExprBogusContext;

OrExprBogusContext.prototype.or_expr = function() {
    return this.getTypedRuleContext(Or_exprContext,0);
};
OrExprBogusContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterOrExprBogus(this);
	}
};

OrExprBogusContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitOrExprBogus(this);
	}
};

OrExprBogusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitOrExprBogus(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceForgivingParser.prototype.and_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new And_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 54;
    this.enterRecursionRule(localctx, 54, VenbraceForgivingParser.RULE_and_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new OrExprBogusContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 386;
        this.or_expr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 393;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndExprContext(this, new And_exprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, VenbraceForgivingParser.RULE_and_expr);
                this.state = 388;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 389;
                this.match(VenbraceForgivingParser.AND);
                this.state = 390;
                this.and_expr(1); 
            }
            this.state = 395;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Or_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_or_expr;
    return this;
}

Or_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Or_exprContext.prototype.constructor = Or_exprContext;


 
Or_exprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function MathCompareExprBogusContext(parser, ctx) {
	Or_exprContext.call(this, parser);
    Or_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MathCompareExprBogusContext.prototype = Object.create(Or_exprContext.prototype);
MathCompareExprBogusContext.prototype.constructor = MathCompareExprBogusContext;

VenbraceForgivingParser.MathCompareExprBogusContext = MathCompareExprBogusContext;

MathCompareExprBogusContext.prototype.math_compare_expr = function() {
    return this.getTypedRuleContext(Math_compare_exprContext,0);
};
MathCompareExprBogusContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMathCompareExprBogus(this);
	}
};

MathCompareExprBogusContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMathCompareExprBogus(this);
	}
};

MathCompareExprBogusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMathCompareExprBogus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrExprContext(parser, ctx) {
	Or_exprContext.call(this, parser);
    Or_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExprContext.prototype = Object.create(Or_exprContext.prototype);
OrExprContext.prototype.constructor = OrExprContext;

VenbraceForgivingParser.OrExprContext = OrExprContext;

OrExprContext.prototype.or_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Or_exprContext);
    } else {
        return this.getTypedRuleContext(Or_exprContext,i);
    }
};

OrExprContext.prototype.OR = function() {
    return this.getToken(VenbraceForgivingParser.OR, 0);
};
OrExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterOrExpr(this);
	}
};

OrExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitOrExpr(this);
	}
};

OrExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitOrExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceForgivingParser.prototype.or_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Or_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 56;
    this.enterRecursionRule(localctx, 56, VenbraceForgivingParser.RULE_or_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new MathCompareExprBogusContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 397;
        this.math_compare_expr();
        this._ctx.stop = this._input.LT(-1);
        this.state = 404;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrExprContext(this, new Or_exprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, VenbraceForgivingParser.RULE_or_expr);
                this.state = 399;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 400;
                this.match(VenbraceForgivingParser.OR);
                this.state = 401;
                this.or_expr(1); 
            }
            this.state = 406;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Math_compare_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_math_compare_expr;
    return this;
}

Math_compare_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Math_compare_exprContext.prototype.constructor = Math_compare_exprContext;


 
Math_compare_exprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MathCompareExprContext(parser, ctx) {
	Math_compare_exprContext.call(this, parser);
    Math_compare_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MathCompareExprContext.prototype = Object.create(Math_compare_exprContext.prototype);
MathCompareExprContext.prototype.constructor = MathCompareExprContext;

VenbraceForgivingParser.MathCompareExprContext = MathCompareExprContext;

MathCompareExprContext.prototype.add_sub_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Add_sub_exprContext);
    } else {
        return this.getTypedRuleContext(Add_sub_exprContext,i);
    }
};

MathCompareExprContext.prototype.math_compare_op = function() {
    return this.getTypedRuleContext(Math_compare_opContext,0);
};
MathCompareExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMathCompareExpr(this);
	}
};

MathCompareExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMathCompareExpr(this);
	}
};

MathCompareExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMathCompareExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddSubExprBogusContext(parser, ctx) {
	Math_compare_exprContext.call(this, parser);
    Math_compare_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubExprBogusContext.prototype = Object.create(Math_compare_exprContext.prototype);
AddSubExprBogusContext.prototype.constructor = AddSubExprBogusContext;

VenbraceForgivingParser.AddSubExprBogusContext = AddSubExprBogusContext;

AddSubExprBogusContext.prototype.add_sub_expr = function() {
    return this.getTypedRuleContext(Add_sub_exprContext,0);
};
AddSubExprBogusContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterAddSubExprBogus(this);
	}
};

AddSubExprBogusContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitAddSubExprBogus(this);
	}
};

AddSubExprBogusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitAddSubExprBogus(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceForgivingParser.Math_compare_exprContext = Math_compare_exprContext;

VenbraceForgivingParser.prototype.math_compare_expr = function() {

    var localctx = new Math_compare_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, VenbraceForgivingParser.RULE_math_compare_expr);
    try {
        this.state = 412;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AddSubExprBogusContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 407;
            this.add_sub_expr(0);
            break;

        case 2:
            localctx = new MathCompareExprContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 408;
            this.add_sub_expr(0);
            this.state = 409;
            this.math_compare_op();
            this.state = 410;
            this.add_sub_expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Math_compare_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_math_compare_op;
    return this;
}

Math_compare_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Math_compare_opContext.prototype.constructor = Math_compare_opContext;

Math_compare_opContext.prototype.LT = function() {
    return this.getToken(VenbraceForgivingParser.LT, 0);
};

Math_compare_opContext.prototype.LE = function() {
    return this.getToken(VenbraceForgivingParser.LE, 0);
};

Math_compare_opContext.prototype.EQ = function() {
    return this.getToken(VenbraceForgivingParser.EQ, 0);
};

Math_compare_opContext.prototype.NEQ = function() {
    return this.getToken(VenbraceForgivingParser.NEQ, 0);
};

Math_compare_opContext.prototype.GE = function() {
    return this.getToken(VenbraceForgivingParser.GE, 0);
};

Math_compare_opContext.prototype.GT = function() {
    return this.getToken(VenbraceForgivingParser.GT, 0);
};

Math_compare_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMath_compare_op(this);
	}
};

Math_compare_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMath_compare_op(this);
	}
};

Math_compare_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMath_compare_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Math_compare_opContext = Math_compare_opContext;

VenbraceForgivingParser.prototype.math_compare_op = function() {

    var localctx = new Math_compare_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, VenbraceForgivingParser.RULE_math_compare_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 414;
        _la = this._input.LA(1);
        if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (VenbraceForgivingParser.LT - 56)) | (1 << (VenbraceForgivingParser.GT - 56)) | (1 << (VenbraceForgivingParser.LE - 56)) | (1 << (VenbraceForgivingParser.GE - 56)) | (1 << (VenbraceForgivingParser.EQ - 56)) | (1 << (VenbraceForgivingParser.NEQ - 56)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Add_sub_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_add_sub_expr;
    return this;
}

Add_sub_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Add_sub_exprContext.prototype.constructor = Add_sub_exprContext;


 
Add_sub_exprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function SubExprContext(parser, ctx) {
	Add_sub_exprContext.call(this, parser);
    Add_sub_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubExprContext.prototype = Object.create(Add_sub_exprContext.prototype);
SubExprContext.prototype.constructor = SubExprContext;

VenbraceForgivingParser.SubExprContext = SubExprContext;

SubExprContext.prototype.add_sub_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Add_sub_exprContext);
    } else {
        return this.getTypedRuleContext(Add_sub_exprContext,i);
    }
};

SubExprContext.prototype.MINUS = function() {
    return this.getToken(VenbraceForgivingParser.MINUS, 0);
};
SubExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterSubExpr(this);
	}
};

SubExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitSubExpr(this);
	}
};

SubExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitSubExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MutableAddExprContext(parser, ctx) {
	Add_sub_exprContext.call(this, parser);
    Add_sub_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MutableAddExprContext.prototype = Object.create(Add_sub_exprContext.prototype);
MutableAddExprContext.prototype.constructor = MutableAddExprContext;

VenbraceForgivingParser.MutableAddExprContext = MutableAddExprContext;

MutableAddExprContext.prototype.mul_div_expr = function() {
    return this.getTypedRuleContext(Mul_div_exprContext,0);
};

MutableAddExprContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.PLUS);
    } else {
        return this.getToken(VenbraceForgivingParser.PLUS, i);
    }
};


MutableAddExprContext.prototype.add_sub_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Add_sub_exprContext);
    } else {
        return this.getTypedRuleContext(Add_sub_exprContext,i);
    }
};
MutableAddExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMutableAddExpr(this);
	}
};

MutableAddExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMutableAddExpr(this);
	}
};

MutableAddExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMutableAddExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubNegNumExprContext(parser, ctx) {
	Add_sub_exprContext.call(this, parser);
    Add_sub_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubNegNumExprContext.prototype = Object.create(Add_sub_exprContext.prototype);
SubNegNumExprContext.prototype.constructor = SubNegNumExprContext;

VenbraceForgivingParser.SubNegNumExprContext = SubNegNumExprContext;

SubNegNumExprContext.prototype.add_sub_expr = function() {
    return this.getTypedRuleContext(Add_sub_exprContext,0);
};

SubNegNumExprContext.prototype.NEG_NUM = function() {
    return this.getToken(VenbraceForgivingParser.NEG_NUM, 0);
};
SubNegNumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterSubNegNumExpr(this);
	}
};

SubNegNumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitSubNegNumExpr(this);
	}
};

SubNegNumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitSubNegNumExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulDivExprBogusContext(parser, ctx) {
	Add_sub_exprContext.call(this, parser);
    Add_sub_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivExprBogusContext.prototype = Object.create(Add_sub_exprContext.prototype);
MulDivExprBogusContext.prototype.constructor = MulDivExprBogusContext;

VenbraceForgivingParser.MulDivExprBogusContext = MulDivExprBogusContext;

MulDivExprBogusContext.prototype.mul_div_expr = function() {
    return this.getTypedRuleContext(Mul_div_exprContext,0);
};
MulDivExprBogusContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMulDivExprBogus(this);
	}
};

MulDivExprBogusContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMulDivExprBogus(this);
	}
};

MulDivExprBogusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMulDivExprBogus(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceForgivingParser.prototype.add_sub_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Add_sub_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 62;
    this.enterRecursionRule(localctx, 62, VenbraceForgivingParser.RULE_add_sub_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 425;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            localctx = new MulDivExprBogusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 417;
            this.mul_div_expr(0);
            break;

        case 2:
            localctx = new MutableAddExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 418;
            this.mul_div_expr(0);
            this.state = 421; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 419;
            		this.match(VenbraceForgivingParser.PLUS);
            		this.state = 420;
            		this.add_sub_expr(0);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 423; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,46, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 434;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 432;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SubExprContext(this, new Add_sub_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, VenbraceForgivingParser.RULE_add_sub_expr);
                    this.state = 427;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 428;
                    this.match(VenbraceForgivingParser.MINUS);
                    this.state = 429;
                    this.add_sub_expr(1);
                    break;

                case 2:
                    localctx = new SubNegNumExprContext(this, new Add_sub_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, VenbraceForgivingParser.RULE_add_sub_expr);
                    this.state = 430;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 431;
                    this.match(VenbraceForgivingParser.NEG_NUM);
                    break;

                } 
            }
            this.state = 436;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Mul_div_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_mul_div_expr;
    return this;
}

Mul_div_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mul_div_exprContext.prototype.constructor = Mul_div_exprContext;


 
Mul_div_exprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function PowExprBogusContext(parser, ctx) {
	Mul_div_exprContext.call(this, parser);
    Mul_div_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowExprBogusContext.prototype = Object.create(Mul_div_exprContext.prototype);
PowExprBogusContext.prototype.constructor = PowExprBogusContext;

VenbraceForgivingParser.PowExprBogusContext = PowExprBogusContext;

PowExprBogusContext.prototype.pow_expr = function() {
    return this.getTypedRuleContext(Pow_exprContext,0);
};
PowExprBogusContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterPowExprBogus(this);
	}
};

PowExprBogusContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitPowExprBogus(this);
	}
};

PowExprBogusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitPowExprBogus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MutableMulExprContext(parser, ctx) {
	Mul_div_exprContext.call(this, parser);
    Mul_div_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MutableMulExprContext.prototype = Object.create(Mul_div_exprContext.prototype);
MutableMulExprContext.prototype.constructor = MutableMulExprContext;

VenbraceForgivingParser.MutableMulExprContext = MutableMulExprContext;

MutableMulExprContext.prototype.pow_expr = function() {
    return this.getTypedRuleContext(Pow_exprContext,0);
};

MutableMulExprContext.prototype.MUL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.MUL);
    } else {
        return this.getToken(VenbraceForgivingParser.MUL, i);
    }
};


MutableMulExprContext.prototype.mul_div_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Mul_div_exprContext);
    } else {
        return this.getTypedRuleContext(Mul_div_exprContext,i);
    }
};
MutableMulExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMutableMulExpr(this);
	}
};

MutableMulExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMutableMulExpr(this);
	}
};

MutableMulExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMutableMulExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DivExprContext(parser, ctx) {
	Mul_div_exprContext.call(this, parser);
    Mul_div_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivExprContext.prototype = Object.create(Mul_div_exprContext.prototype);
DivExprContext.prototype.constructor = DivExprContext;

VenbraceForgivingParser.DivExprContext = DivExprContext;

DivExprContext.prototype.mul_div_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Mul_div_exprContext);
    } else {
        return this.getTypedRuleContext(Mul_div_exprContext,i);
    }
};

DivExprContext.prototype.DIV = function() {
    return this.getToken(VenbraceForgivingParser.DIV, 0);
};
DivExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterDivExpr(this);
	}
};

DivExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitDivExpr(this);
	}
};

DivExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitDivExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceForgivingParser.prototype.mul_div_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Mul_div_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 64;
    this.enterRecursionRule(localctx, 64, VenbraceForgivingParser.RULE_mul_div_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PowExprBogusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 438;
            this.pow_expr(0);
            break;

        case 2:
            localctx = new MutableMulExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 439;
            this.pow_expr(0);
            this.state = 442; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 440;
            		this.match(VenbraceForgivingParser.MUL);
            		this.state = 441;
            		this.mul_div_expr(0);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 444; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,50, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 453;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new DivExprContext(this, new Mul_div_exprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, VenbraceForgivingParser.RULE_mul_div_expr);
                this.state = 448;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 449;
                this.match(VenbraceForgivingParser.DIV);
                this.state = 450;
                this.mul_div_expr(1); 
            }
            this.state = 455;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Pow_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_pow_expr;
    return this;
}

Pow_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pow_exprContext.prototype.constructor = Pow_exprContext;


 
Pow_exprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function CoreExprBogusContext(parser, ctx) {
	Pow_exprContext.call(this, parser);
    Pow_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CoreExprBogusContext.prototype = Object.create(Pow_exprContext.prototype);
CoreExprBogusContext.prototype.constructor = CoreExprBogusContext;

VenbraceForgivingParser.CoreExprBogusContext = CoreExprBogusContext;

CoreExprBogusContext.prototype.core_expr = function() {
    return this.getTypedRuleContext(Core_exprContext,0);
};
CoreExprBogusContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterCoreExprBogus(this);
	}
};

CoreExprBogusContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitCoreExprBogus(this);
	}
};

CoreExprBogusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitCoreExprBogus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowExprContext(parser, ctx) {
	Pow_exprContext.call(this, parser);
    Pow_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowExprContext.prototype = Object.create(Pow_exprContext.prototype);
PowExprContext.prototype.constructor = PowExprContext;

VenbraceForgivingParser.PowExprContext = PowExprContext;

PowExprContext.prototype.pow_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Pow_exprContext);
    } else {
        return this.getTypedRuleContext(Pow_exprContext,i);
    }
};

PowExprContext.prototype.POW = function() {
    return this.getToken(VenbraceForgivingParser.POW, 0);
};
PowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterPowExpr(this);
	}
};

PowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitPowExpr(this);
	}
};

PowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitPowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceForgivingParser.prototype.pow_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Pow_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 66;
    this.enterRecursionRule(localctx, 66, VenbraceForgivingParser.RULE_pow_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CoreExprBogusContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 457;
        this.core_expr();
        this._ctx.stop = this._input.LT(-1);
        this.state = 464;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,53,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new PowExprContext(this, new Pow_exprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, VenbraceForgivingParser.RULE_pow_expr);
                this.state = 459;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 460;
                this.match(VenbraceForgivingParser.POW);
                this.state = 461;
                this.pow_expr(1); 
            }
            this.state = 466;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,53,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Core_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_core_expr;
    return this;
}

Core_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Core_exprContext.prototype.constructor = Core_exprContext;

Core_exprContext.prototype.getter = function() {
    return this.getTypedRuleContext(GetterContext,0);
};

Core_exprContext.prototype.control_expr = function() {
    return this.getTypedRuleContext(Control_exprContext,0);
};

Core_exprContext.prototype.not_expr = function() {
    return this.getTypedRuleContext(Not_exprContext,0);
};

Core_exprContext.prototype.math_expr = function() {
    return this.getTypedRuleContext(Math_exprContext,0);
};

Core_exprContext.prototype.str_expr = function() {
    return this.getTypedRuleContext(Str_exprContext,0);
};

Core_exprContext.prototype.call_procedure_expr = function() {
    return this.getTypedRuleContext(Call_procedure_exprContext,0);
};

Core_exprContext.prototype.local_var_decl_expr = function() {
    return this.getTypedRuleContext(Local_var_decl_exprContext,0);
};

Core_exprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

Core_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Core_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Core_exprContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Core_exprContext.prototype.LCURLY = function() {
    return this.getToken(VenbraceForgivingParser.LCURLY, 0);
};

Core_exprContext.prototype.RCURLY = function() {
    return this.getToken(VenbraceForgivingParser.RCURLY, 0);
};

Core_exprContext.prototype.LSQR = function() {
    return this.getToken(VenbraceForgivingParser.LSQR, 0);
};

Core_exprContext.prototype.RSQR = function() {
    return this.getToken(VenbraceForgivingParser.RSQR, 0);
};

Core_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterCore_expr(this);
	}
};

Core_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitCore_expr(this);
	}
};

Core_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitCore_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Core_exprContext = Core_exprContext;

VenbraceForgivingParser.prototype.core_expr = function() {

    var localctx = new Core_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, VenbraceForgivingParser.RULE_core_expr);
    try {
        this.state = 489;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 467;
            this.getter();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 468;
            this.control_expr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 469;
            this.not_expr();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 470;
            this.math_expr();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 471;
            this.str_expr();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 472;
            this.call_procedure_expr();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 473;
            this.local_var_decl_expr();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 474;
            this.atom();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 475;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 476;
            this.match(VenbraceForgivingParser.RPAREN);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 477;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 478;
            this.expr_block();
            this.state = 479;
            this.match(VenbraceForgivingParser.RPAREN);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 481;
            this.match(VenbraceForgivingParser.LCURLY);
            this.state = 482;
            this.expr_block();
            this.state = 483;
            this.match(VenbraceForgivingParser.RCURLY);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 485;
            this.match(VenbraceForgivingParser.LSQR);
            this.state = 486;
            this.expr_block();
            this.state = 487;
            this.match(VenbraceForgivingParser.RSQR);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Control_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_control_expr;
    return this;
}

Control_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Control_exprContext.prototype.constructor = Control_exprContext;

Control_exprContext.prototype.if_expr = function() {
    return this.getTypedRuleContext(If_exprContext,0);
};

Control_exprContext.prototype.do_expr = function() {
    return this.getTypedRuleContext(Do_exprContext,0);
};

Control_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterControl_expr(this);
	}
};

Control_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitControl_expr(this);
	}
};

Control_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitControl_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Control_exprContext = Control_exprContext;

VenbraceForgivingParser.prototype.control_expr = function() {

    var localctx = new Control_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, VenbraceForgivingParser.RULE_control_expr);
    try {
        this.state = 493;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 491;
            this.if_expr();
            break;
        case VenbraceForgivingParser.DO:
            this.enterOuterAlt(localctx, 2);
            this.state = 492;
            this.do_expr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_if_expr;
    this.c = null; // Expr_blockContext
    this.e1 = null; // Expr_blockContext
    this.e2 = null; // Expr_blockContext
    return this;
}

If_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_exprContext.prototype.constructor = If_exprContext;

If_exprContext.prototype.IF = function() {
    return this.getToken(VenbraceForgivingParser.IF, 0);
};

If_exprContext.prototype.THEN = function() {
    return this.getToken(VenbraceForgivingParser.THEN, 0);
};

If_exprContext.prototype.ELSE = function() {
    return this.getToken(VenbraceForgivingParser.ELSE, 0);
};

If_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

If_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterIf_expr(this);
	}
};

If_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitIf_expr(this);
	}
};

If_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitIf_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.If_exprContext = If_exprContext;

VenbraceForgivingParser.prototype.if_expr = function() {

    var localctx = new If_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, VenbraceForgivingParser.RULE_if_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 495;
        this.match(VenbraceForgivingParser.IF);
        this.state = 496;
        localctx.c = this.expr_block();
        this.state = 497;
        this.match(VenbraceForgivingParser.THEN);
        this.state = 498;
        localctx.e1 = this.expr_block();
        this.state = 499;
        this.match(VenbraceForgivingParser.ELSE);
        this.state = 500;
        localctx.e2 = this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Do_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_do_expr;
    return this;
}

Do_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Do_exprContext.prototype.constructor = Do_exprContext;

Do_exprContext.prototype.DO = function() {
    return this.getToken(VenbraceForgivingParser.DO, 0);
};

Do_exprContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

Do_exprContext.prototype.RESULT = function() {
    return this.getToken(VenbraceForgivingParser.RESULT, 0);
};

Do_exprContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Do_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterDo_expr(this);
	}
};

Do_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitDo_expr(this);
	}
};

Do_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitDo_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Do_exprContext = Do_exprContext;

VenbraceForgivingParser.prototype.do_expr = function() {

    var localctx = new Do_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, VenbraceForgivingParser.RULE_do_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 502;
        this.match(VenbraceForgivingParser.DO);
        this.state = 503;
        this.suite();
        this.state = 504;
        this.match(VenbraceForgivingParser.RESULT);
        this.state = 505;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Not_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_not_expr;
    return this;
}

Not_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_exprContext.prototype.constructor = Not_exprContext;

Not_exprContext.prototype.NOT = function() {
    return this.getToken(VenbraceForgivingParser.NOT, 0);
};

Not_exprContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Not_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterNot_expr(this);
	}
};

Not_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitNot_expr(this);
	}
};

Not_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitNot_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Not_exprContext = Not_exprContext;

VenbraceForgivingParser.prototype.not_expr = function() {

    var localctx = new Not_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, VenbraceForgivingParser.RULE_not_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 507;
        this.match(VenbraceForgivingParser.NOT);
        this.state = 508;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Math_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_math_expr;
    return this;
}

Math_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Math_exprContext.prototype.constructor = Math_exprContext;

Math_exprContext.prototype.min_max = function() {
    return this.getTypedRuleContext(Min_maxContext,0);
};

Math_exprContext.prototype.unary_operation = function() {
    return this.getTypedRuleContext(Unary_operationContext,0);
};

Math_exprContext.prototype.mod = function() {
    return this.getTypedRuleContext(ModContext,0);
};

Math_exprContext.prototype.trig = function() {
    return this.getTypedRuleContext(TrigContext,0);
};

Math_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMath_expr(this);
	}
};

Math_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMath_expr(this);
	}
};

Math_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMath_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Math_exprContext = Math_exprContext;

VenbraceForgivingParser.prototype.math_expr = function() {

    var localctx = new Math_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, VenbraceForgivingParser.RULE_math_expr);
    try {
        this.state = 514;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.MIN:
        case VenbraceForgivingParser.MAX:
            this.enterOuterAlt(localctx, 1);
            this.state = 510;
            this.min_max();
            break;
        case VenbraceForgivingParser.SQRT:
        case VenbraceForgivingParser.ABS:
        case VenbraceForgivingParser.NEG:
        case VenbraceForgivingParser.LOG:
        case VenbraceForgivingParser.EULER:
        case VenbraceForgivingParser.ROUND:
        case VenbraceForgivingParser.CEILING:
        case VenbraceForgivingParser.FLOOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 511;
            this.unary_operation();
            break;
        case VenbraceForgivingParser.MODULO:
            this.enterOuterAlt(localctx, 3);
            this.state = 512;
            this.mod();
            break;
        case VenbraceForgivingParser.SIN:
        case VenbraceForgivingParser.COS:
        case VenbraceForgivingParser.TAN:
        case VenbraceForgivingParser.ASIN:
        case VenbraceForgivingParser.ACOS:
        case VenbraceForgivingParser.ATAN:
            this.enterOuterAlt(localctx, 4);
            this.state = 513;
            this.trig();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Min_maxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_min_max;
    return this;
}

Min_maxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Min_maxContext.prototype.constructor = Min_maxContext;

Min_maxContext.prototype.MIN = function() {
    return this.getToken(VenbraceForgivingParser.MIN, 0);
};

Min_maxContext.prototype.MAX = function() {
    return this.getToken(VenbraceForgivingParser.MAX, 0);
};

Min_maxContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Min_maxContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMin_max(this);
	}
};

Min_maxContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMin_max(this);
	}
};

Min_maxContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMin_max(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Min_maxContext = Min_maxContext;

VenbraceForgivingParser.prototype.min_max = function() {

    var localctx = new Min_maxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, VenbraceForgivingParser.RULE_min_max);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 516;
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.MIN || _la===VenbraceForgivingParser.MAX)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 520;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 517;
                this.expr_block(); 
            }
            this.state = 522;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,57,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_operationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_unary_operation;
    return this;
}

Unary_operationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_operationContext.prototype.constructor = Unary_operationContext;

Unary_operationContext.prototype.unary_op = function() {
    return this.getTypedRuleContext(Unary_opContext,0);
};

Unary_operationContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Unary_operationContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterUnary_operation(this);
	}
};

Unary_operationContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitUnary_operation(this);
	}
};

Unary_operationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitUnary_operation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Unary_operationContext = Unary_operationContext;

VenbraceForgivingParser.prototype.unary_operation = function() {

    var localctx = new Unary_operationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, VenbraceForgivingParser.RULE_unary_operation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 523;
        this.unary_op();
        this.state = 524;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_unary_op;
    return this;
}

Unary_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_opContext.prototype.constructor = Unary_opContext;

Unary_opContext.prototype.SQRT = function() {
    return this.getToken(VenbraceForgivingParser.SQRT, 0);
};

Unary_opContext.prototype.ABS = function() {
    return this.getToken(VenbraceForgivingParser.ABS, 0);
};

Unary_opContext.prototype.NEG = function() {
    return this.getToken(VenbraceForgivingParser.NEG, 0);
};

Unary_opContext.prototype.LOG = function() {
    return this.getToken(VenbraceForgivingParser.LOG, 0);
};

Unary_opContext.prototype.EULER = function() {
    return this.getToken(VenbraceForgivingParser.EULER, 0);
};

Unary_opContext.prototype.ROUND = function() {
    return this.getToken(VenbraceForgivingParser.ROUND, 0);
};

Unary_opContext.prototype.CEILING = function() {
    return this.getToken(VenbraceForgivingParser.CEILING, 0);
};

Unary_opContext.prototype.FLOOR = function() {
    return this.getToken(VenbraceForgivingParser.FLOOR, 0);
};

Unary_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterUnary_op(this);
	}
};

Unary_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitUnary_op(this);
	}
};

Unary_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitUnary_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Unary_opContext = Unary_opContext;

VenbraceForgivingParser.prototype.unary_op = function() {

    var localctx = new Unary_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, VenbraceForgivingParser.RULE_unary_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 526;
        _la = this._input.LA(1);
        if(!(((((_la - 74)) & ~0x1f) == 0 && ((1 << (_la - 74)) & ((1 << (VenbraceForgivingParser.SQRT - 74)) | (1 << (VenbraceForgivingParser.ABS - 74)) | (1 << (VenbraceForgivingParser.NEG - 74)) | (1 << (VenbraceForgivingParser.LOG - 74)) | (1 << (VenbraceForgivingParser.EULER - 74)) | (1 << (VenbraceForgivingParser.ROUND - 74)) | (1 << (VenbraceForgivingParser.CEILING - 74)) | (1 << (VenbraceForgivingParser.FLOOR - 74)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_mod;
    return this;
}

ModContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModContext.prototype.constructor = ModContext;

ModContext.prototype.MODULO = function() {
    return this.getToken(VenbraceForgivingParser.MODULO, 0);
};

ModContext.prototype.OF = function() {
    return this.getToken(VenbraceForgivingParser.OF, 0);
};

ModContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

ModContext.prototype.DIV = function() {
    return this.getToken(VenbraceForgivingParser.DIV, 0);
};

ModContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMod(this);
	}
};

ModContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMod(this);
	}
};

ModContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.ModContext = ModContext;

VenbraceForgivingParser.prototype.mod = function() {

    var localctx = new ModContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, VenbraceForgivingParser.RULE_mod);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 528;
        this.match(VenbraceForgivingParser.MODULO);
        this.state = 529;
        this.match(VenbraceForgivingParser.OF);
        this.state = 530;
        this.expr_block();
        this.state = 531;
        this.match(VenbraceForgivingParser.DIV);
        this.state = 532;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TrigContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_trig;
    return this;
}

TrigContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrigContext.prototype.constructor = TrigContext;

TrigContext.prototype.trig_op = function() {
    return this.getTypedRuleContext(Trig_opContext,0);
};

TrigContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

TrigContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterTrig(this);
	}
};

TrigContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitTrig(this);
	}
};

TrigContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitTrig(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.TrigContext = TrigContext;

VenbraceForgivingParser.prototype.trig = function() {

    var localctx = new TrigContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, VenbraceForgivingParser.RULE_trig);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 534;
        this.trig_op();
        this.state = 535;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Trig_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_trig_op;
    return this;
}

Trig_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Trig_opContext.prototype.constructor = Trig_opContext;

Trig_opContext.prototype.SIN = function() {
    return this.getToken(VenbraceForgivingParser.SIN, 0);
};

Trig_opContext.prototype.COS = function() {
    return this.getToken(VenbraceForgivingParser.COS, 0);
};

Trig_opContext.prototype.TAN = function() {
    return this.getToken(VenbraceForgivingParser.TAN, 0);
};

Trig_opContext.prototype.ASIN = function() {
    return this.getToken(VenbraceForgivingParser.ASIN, 0);
};

Trig_opContext.prototype.ACOS = function() {
    return this.getToken(VenbraceForgivingParser.ACOS, 0);
};

Trig_opContext.prototype.ATAN = function() {
    return this.getToken(VenbraceForgivingParser.ATAN, 0);
};

Trig_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterTrig_op(this);
	}
};

Trig_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitTrig_op(this);
	}
};

Trig_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitTrig_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Trig_opContext = Trig_opContext;

VenbraceForgivingParser.prototype.trig_op = function() {

    var localctx = new Trig_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, VenbraceForgivingParser.RULE_trig_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 537;
        _la = this._input.LA(1);
        if(!(((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (VenbraceForgivingParser.SIN - 91)) | (1 << (VenbraceForgivingParser.COS - 91)) | (1 << (VenbraceForgivingParser.TAN - 91)) | (1 << (VenbraceForgivingParser.ASIN - 91)) | (1 << (VenbraceForgivingParser.ACOS - 91)) | (1 << (VenbraceForgivingParser.ATAN - 91)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_str_expr;
    return this;
}

Str_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_exprContext.prototype.constructor = Str_exprContext;

Str_exprContext.prototype.str_join = function() {
    return this.getTypedRuleContext(Str_joinContext,0);
};

Str_exprContext.prototype.str_length = function() {
    return this.getTypedRuleContext(Str_lengthContext,0);
};

Str_exprContext.prototype.str_reverse = function() {
    return this.getTypedRuleContext(Str_reverseContext,0);
};

Str_exprContext.prototype.str_split_at_spaces = function() {
    return this.getTypedRuleContext(Str_split_at_spacesContext,0);
};

Str_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterStr_expr(this);
	}
};

Str_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitStr_expr(this);
	}
};

Str_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitStr_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Str_exprContext = Str_exprContext;

VenbraceForgivingParser.prototype.str_expr = function() {

    var localctx = new Str_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, VenbraceForgivingParser.RULE_str_expr);
    try {
        this.state = 543;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.JOIN:
            this.enterOuterAlt(localctx, 1);
            this.state = 539;
            this.str_join();
            break;
        case VenbraceForgivingParser.LENGTH:
            this.enterOuterAlt(localctx, 2);
            this.state = 540;
            this.str_length();
            break;
        case VenbraceForgivingParser.REVERSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 541;
            this.str_reverse();
            break;
        case VenbraceForgivingParser.SPLIT_AT_SPACES:
            this.enterOuterAlt(localctx, 4);
            this.state = 542;
            this.str_split_at_spaces();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_lengthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_str_length;
    return this;
}

Str_lengthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_lengthContext.prototype.constructor = Str_lengthContext;

Str_lengthContext.prototype.LENGTH = function() {
    return this.getToken(VenbraceForgivingParser.LENGTH, 0);
};

Str_lengthContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_lengthContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterStr_length(this);
	}
};

Str_lengthContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitStr_length(this);
	}
};

Str_lengthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitStr_length(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Str_lengthContext = Str_lengthContext;

VenbraceForgivingParser.prototype.str_length = function() {

    var localctx = new Str_lengthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, VenbraceForgivingParser.RULE_str_length);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 545;
        this.match(VenbraceForgivingParser.LENGTH);
        this.state = 546;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_joinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_str_join;
    return this;
}

Str_joinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_joinContext.prototype.constructor = Str_joinContext;

Str_joinContext.prototype.JOIN = function() {
    return this.getToken(VenbraceForgivingParser.JOIN, 0);
};

Str_joinContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Str_joinContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterStr_join(this);
	}
};

Str_joinContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitStr_join(this);
	}
};

Str_joinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitStr_join(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Str_joinContext = Str_joinContext;

VenbraceForgivingParser.prototype.str_join = function() {

    var localctx = new Str_joinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, VenbraceForgivingParser.RULE_str_join);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 548;
        this.match(VenbraceForgivingParser.JOIN);
        this.state = 552;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,59,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 549;
                this.expr_block(); 
            }
            this.state = 554;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,59,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_reverseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_str_reverse;
    return this;
}

Str_reverseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_reverseContext.prototype.constructor = Str_reverseContext;

Str_reverseContext.prototype.REVERSE = function() {
    return this.getToken(VenbraceForgivingParser.REVERSE, 0);
};

Str_reverseContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_reverseContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterStr_reverse(this);
	}
};

Str_reverseContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitStr_reverse(this);
	}
};

Str_reverseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitStr_reverse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Str_reverseContext = Str_reverseContext;

VenbraceForgivingParser.prototype.str_reverse = function() {

    var localctx = new Str_reverseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, VenbraceForgivingParser.RULE_str_reverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 555;
        this.match(VenbraceForgivingParser.REVERSE);
        this.state = 556;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_split_at_spacesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_str_split_at_spaces;
    return this;
}

Str_split_at_spacesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_split_at_spacesContext.prototype.constructor = Str_split_at_spacesContext;

Str_split_at_spacesContext.prototype.SPLIT_AT_SPACES = function() {
    return this.getToken(VenbraceForgivingParser.SPLIT_AT_SPACES, 0);
};

Str_split_at_spacesContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_split_at_spacesContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterStr_split_at_spaces(this);
	}
};

Str_split_at_spacesContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitStr_split_at_spaces(this);
	}
};

Str_split_at_spacesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitStr_split_at_spaces(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Str_split_at_spacesContext = Str_split_at_spacesContext;

VenbraceForgivingParser.prototype.str_split_at_spaces = function() {

    var localctx = new Str_split_at_spacesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, VenbraceForgivingParser.RULE_str_split_at_spaces);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 558;
        this.match(VenbraceForgivingParser.SPLIT_AT_SPACES);
        this.state = 559;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_getter;
    return this;
}

GetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetterContext.prototype.constructor = GetterContext;

GetterContext.prototype.ID = function() {
    return this.getToken(VenbraceForgivingParser.ID, 0);
};

GetterContext.prototype.GET = function() {
    return this.getToken(VenbraceForgivingParser.GET, 0);
};

GetterContext.prototype.GLOBAL = function() {
    return this.getToken(VenbraceForgivingParser.GLOBAL, 0);
};

GetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterGetter(this);
	}
};

GetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitGetter(this);
	}
};

GetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitGetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.GetterContext = GetterContext;

VenbraceForgivingParser.prototype.getter = function() {

    var localctx = new GetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, VenbraceForgivingParser.RULE_getter);
    var _la = 0; // Token type
    try {
        this.state = 567;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 561;
            this.match(VenbraceForgivingParser.ID);
            break;
        case VenbraceForgivingParser.GET:
            this.enterOuterAlt(localctx, 2);
            this.state = 562;
            this.match(VenbraceForgivingParser.GET);
            this.state = 564;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.GLOBAL) {
                this.state = 563;
                this.match(VenbraceForgivingParser.GLOBAL);
            }

            this.state = 566;
            this.match(VenbraceForgivingParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Call_procedure_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_call_procedure_expr;
    this.component = null; // Token
    this.method = null; // Token
    this.arg = null; // Expr_blockContext
    return this;
}

Call_procedure_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Call_procedure_exprContext.prototype.constructor = Call_procedure_exprContext;

Call_procedure_exprContext.prototype.CALL = function() {
    return this.getToken(VenbraceForgivingParser.CALL, 0);
};

Call_procedure_exprContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.ID);
    } else {
        return this.getToken(VenbraceForgivingParser.ID, i);
    }
};


Call_procedure_exprContext.prototype.DOT = function() {
    return this.getToken(VenbraceForgivingParser.DOT, 0);
};

Call_procedure_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Call_procedure_exprContext.prototype.label = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelContext);
    } else {
        return this.getTypedRuleContext(LabelContext,i);
    }
};

Call_procedure_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterCall_procedure_expr(this);
	}
};

Call_procedure_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitCall_procedure_expr(this);
	}
};

Call_procedure_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitCall_procedure_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Call_procedure_exprContext = Call_procedure_exprContext;

VenbraceForgivingParser.prototype.call_procedure_expr = function() {

    var localctx = new Call_procedure_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, VenbraceForgivingParser.RULE_call_procedure_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 569;
        this.match(VenbraceForgivingParser.CALL);
        this.state = 574;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
        switch(la_) {
        case 1:
            this.state = 570;
            this.match(VenbraceForgivingParser.ID);
            break;

        case 2:
            this.state = 571;
            localctx.component = this.match(VenbraceForgivingParser.ID);
            this.state = 572;
            this.match(VenbraceForgivingParser.DOT);
            this.state = 573;
            localctx.method = this.match(VenbraceForgivingParser.ID);
            break;

        }
        this.state = 582;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,64,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 577;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
                if(la_===1) {
                    this.state = 576;
                    this.label();

                }
                this.state = 579;
                localctx.arg = this.expr_block(); 
            }
            this.state = 584;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,64,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Local_var_decl_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_local_var_decl_expr;
    this.init = null; // Expr_blockContext
    this.body = null; // Expr_blockContext
    return this;
}

Local_var_decl_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Local_var_decl_exprContext.prototype.constructor = Local_var_decl_exprContext;

Local_var_decl_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Local_var_decl_exprContext.prototype.INITIALIZE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.INITIALIZE);
    } else {
        return this.getToken(VenbraceForgivingParser.INITIALIZE, i);
    }
};


Local_var_decl_exprContext.prototype.LOCAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.LOCAL);
    } else {
        return this.getToken(VenbraceForgivingParser.LOCAL, i);
    }
};


Local_var_decl_exprContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.ID);
    } else {
        return this.getToken(VenbraceForgivingParser.ID, i);
    }
};


Local_var_decl_exprContext.prototype.IN = function() {
    return this.getToken(VenbraceForgivingParser.IN, 0);
};

Local_var_decl_exprContext.prototype.TO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.TO);
    } else {
        return this.getToken(VenbraceForgivingParser.TO, i);
    }
};


Local_var_decl_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterLocal_var_decl_expr(this);
	}
};

Local_var_decl_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitLocal_var_decl_expr(this);
	}
};

Local_var_decl_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitLocal_var_decl_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Local_var_decl_exprContext = Local_var_decl_exprContext;

VenbraceForgivingParser.prototype.local_var_decl_expr = function() {

    var localctx = new Local_var_decl_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, VenbraceForgivingParser.RULE_local_var_decl_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 592; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 585;
        		this.match(VenbraceForgivingParser.INITIALIZE);
        		this.state = 586;
        		this.match(VenbraceForgivingParser.LOCAL);
        		this.state = 587;
        		this.match(VenbraceForgivingParser.ID);
        		this.state = 589;
        		this._errHandler.sync(this);
        		_la = this._input.LA(1);
        		if(_la===VenbraceForgivingParser.TO) {
        		    this.state = 588;
        		    this.match(VenbraceForgivingParser.TO);
        		}

        		this.state = 591;
        		localctx.init = this.expr_block();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 594; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,66, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 597;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.IN) {
            this.state = 596;
            this.match(VenbraceForgivingParser.IN);
        }

        this.state = 599;
        localctx.body = this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.NUMBER = function() {
    return this.getToken(VenbraceForgivingParser.NUMBER, 0);
};

AtomContext.prototype.NEG_NUM = function() {
    return this.getToken(VenbraceForgivingParser.NEG_NUM, 0);
};

AtomContext.prototype.STRING = function() {
    return this.getToken(VenbraceForgivingParser.STRING, 0);
};

AtomContext.prototype.TRUE = function() {
    return this.getToken(VenbraceForgivingParser.TRUE, 0);
};

AtomContext.prototype.FALSE = function() {
    return this.getToken(VenbraceForgivingParser.FALSE, 0);
};

AtomContext.prototype.COMPONENT_PROPERTY = function() {
    return this.getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.AtomContext = AtomContext;

VenbraceForgivingParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, VenbraceForgivingParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 601;
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.TRUE || _la===VenbraceForgivingParser.FALSE || ((((_la - 123)) & ~0x1f) == 0 && ((1 << (_la - 123)) & ((1 << (VenbraceForgivingParser.NUMBER - 123)) | (1 << (VenbraceForgivingParser.NEG_NUM - 123)) | (1 << (VenbraceForgivingParser.COMPONENT_PROPERTY - 123)) | (1 << (VenbraceForgivingParser.STRING - 123)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.ID = function() {
    return this.getToken(VenbraceForgivingParser.ID, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.LabelContext = LabelContext;

VenbraceForgivingParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, VenbraceForgivingParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 603;
        this.match(VenbraceForgivingParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


VenbraceForgivingParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 27:
			return this.and_expr_sempred(localctx, predIndex);
	case 28:
			return this.or_expr_sempred(localctx, predIndex);
	case 31:
			return this.add_sub_expr_sempred(localctx, predIndex);
	case 32:
			return this.mul_div_expr_sempred(localctx, predIndex);
	case 33:
			return this.pow_expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

VenbraceForgivingParser.prototype.and_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VenbraceForgivingParser.prototype.or_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VenbraceForgivingParser.prototype.add_sub_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VenbraceForgivingParser.prototype.mul_div_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VenbraceForgivingParser.prototype.pow_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.VenbraceForgivingParser = VenbraceForgivingParser;
