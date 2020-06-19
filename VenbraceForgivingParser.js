// Generated from VenbraceForgiving.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VenbraceForgivingListener = require('./VenbraceForgivingListener').VenbraceForgivingListener;
var VenbraceForgivingVisitor = require('./VenbraceForgivingVisitor').VenbraceForgivingVisitor;

var grammarFileName = "VenbraceForgiving.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0080\u0233\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
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
    "2\t2\u0003\u0002\u0007\u0002f\n\u0002\f\u0002\u000e\u0002i\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "p\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004u\n\u0004\r",
    "\u0004\u000e\u0004v\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u0086\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u008c\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0092\n",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0007\t\u009b\n\t\f\t\u000e\t\u009e\u000b\t\u0003\t\u0005\t\u00a1",
    "\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007\n\u00a8\n\n\f\n\u000e",
    "\n\u00ab\u000b\n\u0003\n\u0005\n\u00ae\n\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\u00b5\n\u000b\f\u000b\u000e\u000b",
    "\u00b8\u000b\u000b\u0003\u000b\u0005\u000b\u00bb\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0007\f\u00c0\n\f\f\f\u000e\f\u00c3\u000b\f\u0003",
    "\f\u0003\f\u0007\f\u00c7\n\f\f\f\u000e\f\u00ca\u000b\f\u0003\f\u0003",
    "\f\u0003\f\u0007\f\u00cf\n\f\f\f\u000e\f\u00d2\u000b\f\u0003\f\u0003",
    "\f\u0003\f\u0007\f\u00d7\n\f\f\f\u000e\f\u00da\u000b\f\u0003\f\u0005",
    "\f\u00dd\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00ec\n\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00f2\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00f7\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u0102\n\u0010\f\u0010\u000e",
    "\u0010\u0105\u000b\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0109\n",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u010e\n\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u0112\n\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u0116\n\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u011a\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u0120\n\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0124\n\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u012b\n\u0013\u0003\u0013\u0007\u0013\u012e\n\u0013\f\u0013\u000e\u0013",
    "\u0131\u000b\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u0139\n\u0015\u0003\u0015\u0003\u0015",
    "\u0006\u0015\u013d\n\u0015\r\u0015\u000e\u0015\u013e\u0003\u0015\u0005",
    "\u0015\u0142\n\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u014a\n\u0017\u0003\u0017\u0003",
    "\u0017\u0005\u0017\u014e\n\u0017\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0156\n\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0163",
    "\n\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u0167\n\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0005!\u0196\n!\u0003\"\u0003\"",
    "\u0003\"\u0003\"\u0006\"\u019c\n\"\r\"\u000e\"\u019d\u0003\"\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0006\"\u01a6\n\"\r\"\u000e\"\u01a7",
    "\u0003\"\u0003\"\u0005\"\u01ac\n\"\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0005#\u01b9\n#\u0003$\u0003",
    "$\u0003$\u0007$\u01be\n$\f$\u000e$\u01c1\u000b$\u0003$\u0003$\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003",
    "(\u0003(\u0003(\u0005(\u01db\n(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    "*\u0003*\u0003*\u0007*\u01e5\n*\f*\u000e*\u01e8\u000b*\u0003*\u0003",
    "*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003-\u0003-\u0003-\u0003-\u0005-\u01fa\n-\u0003-\u0003-\u0005-\u01fe",
    "\n-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0005.\u0206\n.\u0003",
    ".\u0005.\u0209\n.\u0003.\u0007.\u020c\n.\f.\u000e.\u020f\u000b.\u0003",
    ".\u0003.\u0003/\u0003/\u0003/\u0005/\u0216\n/\u0003/\u0003/\u0005/\u021a",
    "\n/\u0003/\u0007/\u021d\n/\f/\u000e/\u0220\u000b/\u0003/\u0005/\u0223",
    "\n/\u0003/\u0003/\u0003/\u00030\u00030\u00030\u00030\u00030\u00050\u022d",
    "\n0\u00031\u00031\u00032\u00032\u00032\u0002\u00023\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@BDFHJLNPRTVXZ\\^`b\u0002\f\u0003\u0002\u001e\u001f\u0003",
    "\u0002|}\u0003\u000245\u0003\u0002=>\u0003\u00027<\u0004\u0002@@BC\u0003",
    "\u0002ST\u0003\u0002IP\u0003\u0002Z_\u0005\u0002\u000f\u0010z|\u0080",
    "\u0080\u0002\u0257\u0002g\u0003\u0002\u0002\u0002\u0004o\u0003\u0002",
    "\u0002\u0002\u0006t\u0003\u0002\u0002\u0002\b\u0085\u0003\u0002\u0002",
    "\u0002\n\u008b\u0003\u0002\u0002\u0002\f\u008d\u0003\u0002\u0002\u0002",
    "\u000e\u0095\u0003\u0002\u0002\u0002\u0010\u0097\u0003\u0002\u0002\u0002",
    "\u0012\u00a4\u0003\u0002\u0002\u0002\u0014\u00b1\u0003\u0002\u0002\u0002",
    "\u0016\u00dc\u0003\u0002\u0002\u0002\u0018\u00eb\u0003\u0002\u0002\u0002",
    "\u001a\u00f1\u0003\u0002\u0002\u0002\u001c\u00f6\u0003\u0002\u0002\u0002",
    "\u001e\u00f8\u0003\u0002\u0002\u0002 \u010a\u0003\u0002\u0002\u0002",
    "\"\u011d\u0003\u0002\u0002\u0002$\u0127\u0003\u0002\u0002\u0002&\u0132",
    "\u0003\u0002\u0002\u0002(\u013c\u0003\u0002\u0002\u0002*\u0145\u0003",
    "\u0002\u0002\u0002,\u0147\u0003\u0002\u0002\u0002.\u0155\u0003\u0002",
    "\u0002\u00020\u0162\u0003\u0002\u0002\u00022\u0166\u0003\u0002\u0002",
    "\u00024\u0168\u0003\u0002\u0002\u00026\u0171\u0003\u0002\u0002\u0002",
    "8\u0178\u0003\u0002\u0002\u0002:\u017e\u0003\u0002\u0002\u0002<\u0183",
    "\u0003\u0002\u0002\u0002>\u0189\u0003\u0002\u0002\u0002@\u0195\u0003",
    "\u0002\u0002\u0002B\u01ab\u0003\u0002\u0002\u0002D\u01b8\u0003\u0002",
    "\u0002\u0002F\u01ba\u0003\u0002\u0002\u0002H\u01c4\u0003\u0002\u0002",
    "\u0002J\u01c9\u0003\u0002\u0002\u0002L\u01d1\u0003\u0002\u0002\u0002",
    "N\u01da\u0003\u0002\u0002\u0002P\u01dc\u0003\u0002\u0002\u0002R\u01e1",
    "\u0003\u0002\u0002\u0002T\u01eb\u0003\u0002\u0002\u0002V\u01f0\u0003",
    "\u0002\u0002\u0002X\u01fd\u0003\u0002\u0002\u0002Z\u01ff\u0003\u0002",
    "\u0002\u0002\\\u0212\u0003\u0002\u0002\u0002^\u022c\u0003\u0002\u0002",
    "\u0002`\u022e\u0003\u0002\u0002\u0002b\u0230\u0003\u0002\u0002\u0002",
    "df\u0005\b\u0005\u0002ed\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002",
    "\u0002ge\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hj\u0003\u0002",
    "\u0002\u0002ig\u0003\u0002\u0002\u0002jk\u0007\u0002\u0002\u0003k\u0003",
    "\u0003\u0002\u0002\u0002lp\u0005\b\u0005\u0002mp\u0005\u0018\r\u0002",
    "np\u0005.\u0018\u0002ol\u0003\u0002\u0002\u0002om\u0003\u0002\u0002",
    "\u0002on\u0003\u0002\u0002\u0002p\u0005\u0003\u0002\u0002\u0002qu\u0005",
    "\b\u0005\u0002ru\u0005\u0018\r\u0002su\u0005.\u0018\u0002tq\u0003\u0002",
    "\u0002\u0002tr\u0003\u0002\u0002\u0002ts\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002",
    "w\u0007\u0003\u0002\u0002\u0002xy\u0007\b\u0002\u0002yz\u0005\n\u0006",
    "\u0002z{\u0007\t\u0002\u0002{\u0086\u0003\u0002\u0002\u0002|}\u0007",
    "\u0004\u0002\u0002}~\u0005\n\u0006\u0002~\u007f\u0007\u0005\u0002\u0002",
    "\u007f\u0086\u0003\u0002\u0002\u0002\u0080\u0081\u0007\u0006\u0002\u0002",
    "\u0081\u0082\u0005\n\u0006\u0002\u0082\u0083\u0007\u0007\u0002\u0002",
    "\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0086\u0005\n\u0006\u0002",
    "\u0085x\u0003\u0002\u0002\u0002\u0085|\u0003\u0002\u0002\u0002\u0085",
    "\u0080\u0003\u0002\u0002\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0086",
    "\t\u0003\u0002\u0002\u0002\u0087\u008c\u0005\f\u0007\u0002\u0088\u008c",
    "\u0005\u0010\t\u0002\u0089\u008c\u0005\u0012\n\u0002\u008a\u008c\u0005",
    "\u0014\u000b\u0002\u008b\u0087\u0003\u0002\u0002\u0002\u008b\u0088\u0003",
    "\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008a\u0003",
    "\u0002\u0002\u0002\u008c\u000b\u0003\u0002\u0002\u0002\u008d\u008e\t",
    "\u0002\u0002\u0002\u008e\u008f\u0005\u000e\b\u0002\u008f\u0091\u0007",
    "}\u0002\u0002\u0090\u0092\u0007\u0019\u0002\u0002\u0091\u0090\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0093\u0003",
    "\u0002\u0002\u0002\u0093\u0094\u0005.\u0018\u0002\u0094\r\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0007\u001d\u0002\u0002\u0096\u000f\u0003\u0002",
    "\u0002\u0002\u0097\u0098\u0007\u0019\u0002\u0002\u0098\u009c\u0007}",
    "\u0002\u0002\u0099\u009b\u0007}\u0002\u0002\u009a\u0099\u0003\u0002",
    "\u0002\u0002\u009b\u009e\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u00a0\u0003\u0002",
    "\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009f\u00a1\u0007\u0017",
    "\u0002\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a3\u0005\u0016",
    "\f\u0002\u00a3\u0011\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u0019",
    "\u0002\u0002\u00a5\u00a9\u0007}\u0002\u0002\u00a6\u00a8\u0007}\u0002",
    "\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002",
    "\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002",
    "\u0002\u00aa\u00ad\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002",
    "\u0002\u00ac\u00ae\u0007\u0018\u0002\u0002\u00ad\u00ac\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002",
    "\u0002\u00af\u00b0\u0005.\u0018\u0002\u00b0\u0013\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0007\u0011\u0002\u0002\u00b2\u00b6\u0007|\u0002",
    "\u0002\u00b3\u00b5\u0007}\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002",
    "\u0002\u00b5\u00b8\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002",
    "\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00bb\u0007\u0017\u0002",
    "\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002",
    "\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0005\u0016\f",
    "\u0002\u00bd\u0015\u0003\u0002\u0002\u0002\u00be\u00c0\u0005\u0018\r",
    "\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002",
    "\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002",
    "\u0002\u00c2\u00dd\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002",
    "\u0002\u00c4\u00c8\u0007\u0004\u0002\u0002\u00c5\u00c7\u0005\u0018\r",
    "\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c7\u00ca\u0003\u0002\u0002",
    "\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002",
    "\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002",
    "\u0002\u00cb\u00dd\u0007\u0005\u0002\u0002\u00cc\u00d0\u0007\b\u0002",
    "\u0002\u00cd\u00cf\u0005\u0018\r\u0002\u00ce\u00cd\u0003\u0002\u0002",
    "\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002",
    "\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002\u0002",
    "\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00dd\u0007\t\u0002",
    "\u0002\u00d4\u00d8\u0007\u0006\u0002\u0002\u00d5\u00d7\u0005\u0018\r",
    "\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d7\u00da\u0003\u0002\u0002",
    "\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002",
    "\u0002\u00d9\u00db\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002",
    "\u0002\u00db\u00dd\u0007\u0007\u0002\u0002\u00dc\u00c1\u0003\u0002\u0002",
    "\u0002\u00dc\u00c4\u0003\u0002\u0002\u0002\u00dc\u00cc\u0003\u0002\u0002",
    "\u0002\u00dc\u00d4\u0003\u0002\u0002\u0002\u00dd\u0017\u0003\u0002\u0002",
    "\u0002\u00de\u00df\u0007\u0004\u0002\u0002\u00df\u00e0\u0005\u001a\u000e",
    "\u0002\u00e0\u00e1\u0007\u0005\u0002\u0002\u00e1\u00ec\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\u0007\b\u0002\u0002\u00e3\u00e4\u0005\u001a\u000e",
    "\u0002\u00e4\u00e5\u0007\t\u0002\u0002\u00e5\u00ec\u0003\u0002\u0002",
    "\u0002\u00e6\u00e7\u0007\u0006\u0002\u0002\u00e7\u00e8\u0005\u001a\u000e",
    "\u0002\u00e8\u00e9\u0007\u0007\u0002\u0002\u00e9\u00ec\u0003\u0002\u0002",
    "\u0002\u00ea\u00ec\u0005\u001a\u000e\u0002\u00eb\u00de\u0003\u0002\u0002",
    "\u0002\u00eb\u00e2\u0003\u0002\u0002\u0002\u00eb\u00e6\u0003\u0002\u0002",
    "\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec\u0019\u0003\u0002\u0002",
    "\u0002\u00ed\u00f2\u0005\u001c\u000f\u0002\u00ee\u00f2\u0005$\u0013",
    "\u0002\u00ef\u00f2\u0005&\u0014\u0002\u00f0\u00f2\u0005(\u0015\u0002",
    "\u00f1\u00ed\u0003\u0002\u0002\u0002\u00f1\u00ee\u0003\u0002\u0002\u0002",
    "\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002",
    "\u00f2\u001b\u0003\u0002\u0002\u0002\u00f3\u00f7\u0005\u001e\u0010\u0002",
    "\u00f4\u00f7\u0005 \u0011\u0002\u00f5\u00f7\u0005\"\u0012\u0002\u00f6",
    "\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f6",
    "\u00f5\u0003\u0002\u0002\u0002\u00f7\u001d\u0003\u0002\u0002\u0002\u00f8",
    "\u00f9\u0007\u0012\u0002\u0002\u00f9\u00fa\u0005.\u0018\u0002\u00fa",
    "\u00fb\u0007\u0013\u0002\u0002\u00fb\u0103\u0005\u0016\f\u0002\u00fc",
    "\u00fd\u0007\u0015\u0002\u0002\u00fd\u00fe\u0005.\u0018\u0002\u00fe",
    "\u00ff\u0007\u0013\u0002\u0002\u00ff\u0100\u0005\u0016\f\u0002\u0100",
    "\u0102\u0003\u0002\u0002\u0002\u0101\u00fc\u0003\u0002\u0002\u0002\u0102",
    "\u0105\u0003\u0002\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103",
    "\u0104\u0003\u0002\u0002\u0002\u0104\u0108\u0003\u0002\u0002\u0002\u0105",
    "\u0103\u0003\u0002\u0002\u0002\u0106\u0107\u0007\u0014\u0002\u0002\u0107",
    "\u0109\u0005\u0016\f\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0108",
    "\u0109\u0003\u0002\u0002\u0002\u0109\u001f\u0003\u0002\u0002\u0002\u010a",
    "\u010b\u0007\u0016\u0002\u0002\u010b\u010d\u0007}\u0002\u0002\u010c",
    "\u010e\u0007#\u0002\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010d",
    "\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f",
    "\u0111\u0005.\u0018\u0002\u0110\u0112\u0007\u0019\u0002\u0002\u0111",
    "\u0110\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112",
    "\u0113\u0003\u0002\u0002\u0002\u0113\u0115\u0005.\u0018\u0002\u0114",
    "\u0116\u0007\"\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u0115",
    "\u0116\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117",
    "\u0119\u0005.\u0018\u0002\u0118\u011a\u0007\u0017\u0002\u0002\u0119",
    "\u0118\u0003\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a",
    "\u011b\u0003\u0002\u0002\u0002\u011b\u011c\u0005\u0016\f\u0002\u011c",
    "!\u0003\u0002\u0002\u0002\u011d\u011f\u0007$\u0002\u0002\u011e\u0120",
    "\u0007%\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002\u011f\u0120",
    "\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0123",
    "\u0005.\u0018\u0002\u0122\u0124\u0007\u0017\u0002\u0002\u0123\u0122",
    "\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0125",
    "\u0003\u0002\u0002\u0002\u0125\u0126\u0005\u0016\f\u0002\u0126#\u0003",
    "\u0002\u0002\u0002\u0127\u0128\u0007\u001a\u0002\u0002\u0128\u012f\u0007",
    "}\u0002\u0002\u0129\u012b\u0005b2\u0002\u012a\u0129\u0003\u0002\u0002",
    "\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002",
    "\u0002\u012c\u012e\u0005.\u0018\u0002\u012d\u012a\u0003\u0002\u0002",
    "\u0002\u012e\u0131\u0003\u0002\u0002\u0002\u012f\u012d\u0003\u0002\u0002",
    "\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130%\u0003\u0002\u0002",
    "\u0002\u0131\u012f\u0003\u0002\u0002\u0002\u0132\u0133\u0005,\u0017",
    "\u0002\u0133\'\u0003\u0002\u0002\u0002\u0134\u0135\u0007\u001e\u0002",
    "\u0002\u0135\u0136\u0005*\u0016\u0002\u0136\u0138\u0007}\u0002\u0002",
    "\u0137\u0139\u0007\u0019\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002",
    "\u0138\u0139\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002",
    "\u013a\u013b\u0005.\u0018\u0002\u013b\u013d\u0003\u0002\u0002\u0002",
    "\u013c\u0134\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002",
    "\u013e\u013c\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002",
    "\u013f\u0141\u0003\u0002\u0002\u0002\u0140\u0142\u0007!\u0002\u0002",
    "\u0141\u0140\u0003\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002",
    "\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u0144\u0005\u0016\f\u0002",
    "\u0144)\u0003\u0002\u0002\u0002\u0145\u0146\u0007 \u0002\u0002\u0146",
    "+\u0003\u0002\u0002\u0002\u0147\u0149\u0007\u001c\u0002\u0002\u0148",
    "\u014a\u0007\u001d\u0002\u0002\u0149\u0148\u0003\u0002\u0002\u0002\u0149",
    "\u014a\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b",
    "\u014d\t\u0003\u0002\u0002\u014c\u014e\u0007\u0019\u0002\u0002\u014d",
    "\u014c\u0003\u0002\u0002\u0002\u014d\u014e\u0003\u0002\u0002\u0002\u014e",
    "\u014f\u0003\u0002\u0002\u0002\u014f\u0150\u0005.\u0018\u0002\u0150",
    "-\u0003\u0002\u0002\u0002\u0151\u0152\u0007\u0006\u0002\u0002\u0152",
    "\u0156\u0007\u0007\u0002\u0002\u0153\u0156\u0005^0\u0002\u0154\u0156",
    "\u00050\u0019\u0002\u0155\u0151\u0003\u0002\u0002\u0002\u0155\u0153",
    "\u0003\u0002\u0002\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0156/",
    "\u0003\u0002\u0002\u0002\u0157\u0163\u0005X-\u0002\u0158\u0163\u0005",
    "2\u001a\u0002\u0159\u0163\u00058\u001d\u0002\u015a\u0163\u0005:\u001e",
    "\u0002\u015b\u0163\u0005<\u001f\u0002\u015c\u0163\u0005> \u0002\u015d",
    "\u0163\u0005@!\u0002\u015e\u0163\u0005N(\u0002\u015f\u0163\u0005Z.\u0002",
    "\u0160\u0163\u0005\\/\u0002\u0161\u0163\u0005^0\u0002\u0162\u0157\u0003",
    "\u0002\u0002\u0002\u0162\u0158\u0003\u0002\u0002\u0002\u0162\u0159\u0003",
    "\u0002\u0002\u0002\u0162\u015a\u0003\u0002\u0002\u0002\u0162\u015b\u0003",
    "\u0002\u0002\u0002\u0162\u015c\u0003\u0002\u0002\u0002\u0162\u015d\u0003",
    "\u0002\u0002\u0002\u0162\u015e\u0003\u0002\u0002\u0002\u0162\u015f\u0003",
    "\u0002\u0002\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0162\u0161\u0003",
    "\u0002\u0002\u0002\u01631\u0003\u0002\u0002\u0002\u0164\u0167\u0005",
    "4\u001b\u0002\u0165\u0167\u00056\u001c\u0002\u0166\u0164\u0003\u0002",
    "\u0002\u0002\u0166\u0165\u0003\u0002\u0002\u0002\u01673\u0003\u0002",
    "\u0002\u0002\u0168\u0169\u0007\u0006\u0002\u0002\u0169\u016a\u0007\u0012",
    "\u0002\u0002\u016a\u016b\u0005.\u0018\u0002\u016b\u016c\u0007\u0013",
    "\u0002\u0002\u016c\u016d\u0005.\u0018\u0002\u016d\u016e\u0007\u0014",
    "\u0002\u0002\u016e\u016f\u0005.\u0018\u0002\u016f\u0170\u0007\u0007",
    "\u0002\u0002\u01705\u0003\u0002\u0002\u0002\u0171\u0172\u0007\u0006",
    "\u0002\u0002\u0172\u0173\u0007\u0017\u0002\u0002\u0173\u0174\u0005\u0016",
    "\f\u0002\u0174\u0175\u0007\u0018\u0002\u0002\u0175\u0176\u0005.\u0018",
    "\u0002\u0176\u0177\u0007\u0007\u0002\u0002\u01777\u0003\u0002\u0002",
    "\u0002\u0178\u0179\u0007\u0006\u0002\u0002\u0179\u017a\u0005.\u0018",
    "\u0002\u017a\u017b\t\u0004\u0002\u0002\u017b\u017c\u0005.\u0018\u0002",
    "\u017c\u017d\u0007\u0007\u0002\u0002\u017d9\u0003\u0002\u0002\u0002",
    "\u017e\u017f\u0007\u0006\u0002\u0002\u017f\u0180\u00073\u0002\u0002",
    "\u0180\u0181\u0005.\u0018\u0002\u0181\u0182\u0007\u0007\u0002\u0002",
    "\u0182;\u0003\u0002\u0002\u0002\u0183\u0184\u0007\u0006\u0002\u0002",
    "\u0184\u0185\u0005.\u0018\u0002\u0185\u0186\t\u0005\u0002\u0002\u0186",
    "\u0187\u0005.\u0018\u0002\u0187\u0188\u0007\u0007\u0002\u0002\u0188",
    "=\u0003\u0002\u0002\u0002\u0189\u018a\u0007\u0006\u0002\u0002\u018a",
    "\u018b\u0005.\u0018\u0002\u018b\u018c\t\u0006\u0002\u0002\u018c\u018d",
    "\u0005.\u0018\u0002\u018d\u018e\u0007\u0007\u0002\u0002\u018e?\u0003",
    "\u0002\u0002\u0002\u018f\u0196\u0005B\"\u0002\u0190\u0196\u0005D#\u0002",
    "\u0191\u0196\u0005F$\u0002\u0192\u0196\u0005H%\u0002\u0193\u0196\u0005",
    "J&\u0002\u0194\u0196\u0005L\'\u0002\u0195\u018f\u0003\u0002\u0002\u0002",
    "\u0195\u0190\u0003\u0002\u0002\u0002\u0195\u0191\u0003\u0002\u0002\u0002",
    "\u0195\u0192\u0003\u0002\u0002\u0002\u0195\u0193\u0003\u0002\u0002\u0002",
    "\u0195\u0194\u0003\u0002\u0002\u0002\u0196A\u0003\u0002\u0002\u0002",
    "\u0197\u0198\u0007\u0006\u0002\u0002\u0198\u019b\u0005.\u0018\u0002",
    "\u0199\u019a\u0007?\u0002\u0002\u019a\u019c\u0005.\u0018\u0002\u019b",
    "\u0199\u0003\u0002\u0002\u0002\u019c\u019d\u0003\u0002\u0002\u0002\u019d",
    "\u019b\u0003\u0002\u0002\u0002\u019d\u019e\u0003\u0002\u0002\u0002\u019e",
    "\u019f\u0003\u0002\u0002\u0002\u019f\u01a0\u0007\u0007\u0002\u0002\u01a0",
    "\u01ac\u0003\u0002\u0002\u0002\u01a1\u01a2\u0007\u0006\u0002\u0002\u01a2",
    "\u01a5\u0005.\u0018\u0002\u01a3\u01a4\u0007A\u0002\u0002\u01a4\u01a6",
    "\u0005.\u0018\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002\u01a6\u01a7",
    "\u0003\u0002\u0002\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a7\u01a8",
    "\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9\u01aa",
    "\u0007\u0007\u0002\u0002\u01aa\u01ac\u0003\u0002\u0002\u0002\u01ab\u0197",
    "\u0003\u0002\u0002\u0002\u01ab\u01a1\u0003\u0002\u0002\u0002\u01acC",
    "\u0003\u0002\u0002\u0002\u01ad\u01ae\u0007\u0006\u0002\u0002\u01ae\u01af",
    "\u0005.\u0018\u0002\u01af\u01b0\t\u0007\u0002\u0002\u01b0\u01b1\u0005",
    ".\u0018\u0002\u01b1\u01b2\u0007\u0007\u0002\u0002\u01b2\u01b9\u0003",
    "\u0002\u0002\u0002\u01b3\u01b4\u0007\u0006\u0002\u0002\u01b4\u01b5\u0005",
    ".\u0018\u0002\u01b5\u01b6\u0007{\u0002\u0002\u01b6\u01b7\u0007\u0007",
    "\u0002\u0002\u01b7\u01b9\u0003\u0002\u0002\u0002\u01b8\u01ad\u0003\u0002",
    "\u0002\u0002\u01b8\u01b3\u0003\u0002\u0002\u0002\u01b9E\u0003\u0002",
    "\u0002\u0002\u01ba\u01bb\u0007\u0006\u0002\u0002\u01bb\u01bf\t\b\u0002",
    "\u0002\u01bc\u01be\u0005.\u0018\u0002\u01bd\u01bc\u0003\u0002\u0002",
    "\u0002\u01be\u01c1\u0003\u0002\u0002\u0002\u01bf\u01bd\u0003\u0002\u0002",
    "\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002\u01c0\u01c2\u0003\u0002\u0002",
    "\u0002\u01c1\u01bf\u0003\u0002\u0002\u0002\u01c2\u01c3\u0007\u0007\u0002",
    "\u0002\u01c3G\u0003\u0002\u0002\u0002\u01c4\u01c5\u0007\u0006\u0002",
    "\u0002\u01c5\u01c6\t\t\u0002\u0002\u01c6\u01c7\u0005.\u0018\u0002\u01c7",
    "\u01c8\u0007\u0007\u0002\u0002\u01c8I\u0003\u0002\u0002\u0002\u01c9",
    "\u01ca\u0007\u0006\u0002\u0002\u01ca\u01cb\u0007U\u0002\u0002\u01cb",
    "\u01cc\u0007X\u0002\u0002\u01cc\u01cd\u0005.\u0018\u0002\u01cd\u01ce",
    "\u0007B\u0002\u0002\u01ce\u01cf\u0005.\u0018\u0002\u01cf\u01d0\u0007",
    "\u0007\u0002\u0002\u01d0K\u0003\u0002\u0002\u0002\u01d1\u01d2\u0007",
    "\u0006\u0002\u0002\u01d2\u01d3\t\n\u0002\u0002\u01d3\u01d4\u0005.\u0018",
    "\u0002\u01d4\u01d5\u0007\u0007\u0002\u0002\u01d5M\u0003\u0002\u0002",
    "\u0002\u01d6\u01db\u0005R*\u0002\u01d7\u01db\u0005P)\u0002\u01d8\u01db",
    "\u0005T+\u0002\u01d9\u01db\u0005V,\u0002\u01da\u01d6\u0003\u0002\u0002",
    "\u0002\u01da\u01d7\u0003\u0002\u0002\u0002\u01da\u01d8\u0003\u0002\u0002",
    "\u0002\u01da\u01d9\u0003\u0002\u0002\u0002\u01dbO\u0003\u0002\u0002",
    "\u0002\u01dc\u01dd\u0007\u0006\u0002\u0002\u01dd\u01de\u0007b\u0002",
    "\u0002\u01de\u01df\u0005.\u0018\u0002\u01df\u01e0\u0007\u0007\u0002",
    "\u0002\u01e0Q\u0003\u0002\u0002\u0002\u01e1\u01e2\u0007\u0006\u0002",
    "\u0002\u01e2\u01e6\u0007a\u0002\u0002\u01e3\u01e5\u0005.\u0018\u0002",
    "\u01e4\u01e3\u0003\u0002\u0002\u0002\u01e5\u01e8\u0003\u0002\u0002\u0002",
    "\u01e6\u01e4\u0003\u0002\u0002\u0002\u01e6\u01e7\u0003\u0002\u0002\u0002",
    "\u01e7\u01e9\u0003\u0002\u0002\u0002\u01e8\u01e6\u0003\u0002\u0002\u0002",
    "\u01e9\u01ea\u0007\u0007\u0002\u0002\u01eaS\u0003\u0002\u0002\u0002",
    "\u01eb\u01ec\u0007\u0006\u0002\u0002\u01ec\u01ed\u0007t\u0002\u0002",
    "\u01ed\u01ee\u0005.\u0018\u0002\u01ee\u01ef\u0007\u0007\u0002\u0002",
    "\u01efU\u0003\u0002\u0002\u0002\u01f0\u01f1\u0007\u0006\u0002\u0002",
    "\u01f1\u01f2\u0007n\u0002\u0002\u01f2\u01f3\u0005.\u0018\u0002\u01f3",
    "\u01f4\u0007\u0007\u0002\u0002\u01f4W\u0003\u0002\u0002\u0002\u01f5",
    "\u01fe\u0007}\u0002\u0002\u01f6\u01f7\u0007\u0006\u0002\u0002\u01f7",
    "\u01f9\u0007\u001b\u0002\u0002\u01f8\u01fa\u0007\u001d\u0002\u0002\u01f9",
    "\u01f8\u0003\u0002\u0002\u0002\u01f9\u01fa\u0003\u0002\u0002\u0002\u01fa",
    "\u01fb\u0003\u0002\u0002\u0002\u01fb\u01fc\u0007}\u0002\u0002\u01fc",
    "\u01fe\u0007\u0007\u0002\u0002\u01fd\u01f5\u0003\u0002\u0002\u0002\u01fd",
    "\u01f6\u0003\u0002\u0002\u0002\u01feY\u0003\u0002\u0002\u0002\u01ff",
    "\u0200\u0007\u0006\u0002\u0002\u0200\u0205\u0007\u001a\u0002\u0002\u0201",
    "\u0206\u0007}\u0002\u0002\u0202\u0203\u0007}\u0002\u0002\u0203\u0204",
    "\u0007\f\u0002\u0002\u0204\u0206\u0007}\u0002\u0002\u0205\u0201\u0003",
    "\u0002\u0002\u0002\u0205\u0202\u0003\u0002\u0002\u0002\u0206\u020d\u0003",
    "\u0002\u0002\u0002\u0207\u0209\u0005b2\u0002\u0208\u0207\u0003\u0002",
    "\u0002\u0002\u0208\u0209\u0003\u0002\u0002\u0002\u0209\u020a\u0003\u0002",
    "\u0002\u0002\u020a\u020c\u0005.\u0018\u0002\u020b\u0208\u0003\u0002",
    "\u0002\u0002\u020c\u020f\u0003\u0002\u0002\u0002\u020d\u020b\u0003\u0002",
    "\u0002\u0002\u020d\u020e\u0003\u0002\u0002\u0002\u020e\u0210\u0003\u0002",
    "\u0002\u0002\u020f\u020d\u0003\u0002\u0002\u0002\u0210\u0211\u0007\u0007",
    "\u0002\u0002\u0211[\u0003\u0002\u0002\u0002\u0212\u021e\u0007\u0006",
    "\u0002\u0002\u0213\u0215\u0007\u001e\u0002\u0002\u0214\u0216\u0007 ",
    "\u0002\u0002\u0215\u0214\u0003\u0002\u0002\u0002\u0215\u0216\u0003\u0002",
    "\u0002\u0002\u0216\u0217\u0003\u0002\u0002\u0002\u0217\u0219\u0007}",
    "\u0002\u0002\u0218\u021a\u0007\u0019\u0002\u0002\u0219\u0218\u0003\u0002",
    "\u0002\u0002\u0219\u021a\u0003\u0002\u0002\u0002\u021a\u021b\u0003\u0002",
    "\u0002\u0002\u021b\u021d\u0005.\u0018\u0002\u021c\u0213\u0003\u0002",
    "\u0002\u0002\u021d\u0220\u0003\u0002\u0002\u0002\u021e\u021c\u0003\u0002",
    "\u0002\u0002\u021e\u021f\u0003\u0002\u0002\u0002\u021f\u0222\u0003\u0002",
    "\u0002\u0002\u0220\u021e\u0003\u0002\u0002\u0002\u0221\u0223\u0007!",
    "\u0002\u0002\u0222\u0221\u0003\u0002\u0002\u0002\u0222\u0223\u0003\u0002",
    "\u0002\u0002\u0223\u0224\u0003\u0002\u0002\u0002\u0224\u0225\u0005.",
    "\u0018\u0002\u0225\u0226\u0007\u0007\u0002\u0002\u0226]\u0003\u0002",
    "\u0002\u0002\u0227\u022d\u0005`1\u0002\u0228\u0229\u0007\u0006\u0002",
    "\u0002\u0229\u022a\u0005`1\u0002\u022a\u022b\u0007\u0007\u0002\u0002",
    "\u022b\u022d\u0003\u0002\u0002\u0002\u022c\u0227\u0003\u0002\u0002\u0002",
    "\u022c\u0228\u0003\u0002\u0002\u0002\u022d_\u0003\u0002\u0002\u0002",
    "\u022e\u022f\t\u000b\u0002\u0002\u022fa\u0003\u0002\u0002\u0002\u0230",
    "\u0231\u0007}\u0002\u0002\u0231c\u0003\u0002\u0002\u0002;gotv\u0085",
    "\u008b\u0091\u009c\u00a0\u00a9\u00ad\u00b6\u00ba\u00c1\u00c8\u00d0\u00d8",
    "\u00dc\u00eb\u00f1\u00f6\u0103\u0108\u010d\u0111\u0115\u0119\u011f\u0123",
    "\u012a\u012f\u0138\u013e\u0141\u0149\u014d\u0155\u0162\u0166\u0195\u019d",
    "\u01a7\u01ab\u01b8\u01bf\u01da\u01e6\u01f9\u01fd\u0205\u0208\u020d\u0215",
    "\u0219\u021e\u0222\u022c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'{'", "'}'", "'('", "')'", "'['", "']'", 
                     "','", "'==='", "'.'", "'<-'", "':'", "'true'", "'false'", 
                     "'when'", "'if'", "'then'", "'else'", "'else if'", 
                     "'for each'", "'do'", "'result'", "'to'", "'call'", 
                     "'get'", "'set'", "'global'", "'initialize'", "'init'", 
                     "'local'", "'in'", "'by'", "'from'", "'while'", "'test'", 
                     "'evaluate but ignore'", "'open another screen'", "'open another screen with start value'", 
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

var symbolicNames = [ null, "WS", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
                      "LSQR", "RSQR", "COMMA", "DIVIDER", "DOT", "ASSIGN", 
                      "COLON", "TRUE", "FALSE", "WHEN", "IF", "THEN", "ELSE", 
                      "ELSE_IF", "FOREACH", "DO", "RESULT", "TO", "CALL", 
                      "GET", "SET", "GLOBAL", "INITIALIZE", "INIT", "LOCAL", 
                      "IN", "BY", "FROM", "WHILE", "TEST", "EVAL_BUT_IGNORE_RESULT", 
                      "OPEN_ANOTHER_SCREEN", "OPEN_ANOTHER_SCREEN_WITH_START_VALUE", 
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

var ruleNames =  [ "program", "test_program", "test_blocks", "decl_block", 
                   "decl", "global_decl", "global_decl_keyword", "procedure_do", 
                   "procedure_result", "event_handler", "suite", "stat_block", 
                   "stat", "control_stat", "if_stat", "for_each_from_to", 
                   "while_stat", "call_procedure_stat", "var_stat", "local_var_decl_stat", 
                   "local_decl_keyword", "setter", "expr_block", "expr", 
                   "control_expr", "if_expr", "do_expr", "logic_expr", "not_expr", 
                   "compare_eq_expr", "compare_math_expr", "math_expr", 
                   "mutable_op", "immutable_op", "min_max", "unary_op", 
                   "mod", "trig", "str_expr", "str_length", "str_join", 
                   "str_reverse", "str_split_at_spaces", "getter", "call_procedure_expr", 
                   "local_var_decl_expr", "atom", "atom_elements", "label" ];

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
VenbraceForgivingParser.WS = 1;
VenbraceForgivingParser.LCURLY = 2;
VenbraceForgivingParser.RCURLY = 3;
VenbraceForgivingParser.LPAREN = 4;
VenbraceForgivingParser.RPAREN = 5;
VenbraceForgivingParser.LSQR = 6;
VenbraceForgivingParser.RSQR = 7;
VenbraceForgivingParser.COMMA = 8;
VenbraceForgivingParser.DIVIDER = 9;
VenbraceForgivingParser.DOT = 10;
VenbraceForgivingParser.ASSIGN = 11;
VenbraceForgivingParser.COLON = 12;
VenbraceForgivingParser.TRUE = 13;
VenbraceForgivingParser.FALSE = 14;
VenbraceForgivingParser.WHEN = 15;
VenbraceForgivingParser.IF = 16;
VenbraceForgivingParser.THEN = 17;
VenbraceForgivingParser.ELSE = 18;
VenbraceForgivingParser.ELSE_IF = 19;
VenbraceForgivingParser.FOREACH = 20;
VenbraceForgivingParser.DO = 21;
VenbraceForgivingParser.RESULT = 22;
VenbraceForgivingParser.TO = 23;
VenbraceForgivingParser.CALL = 24;
VenbraceForgivingParser.GET = 25;
VenbraceForgivingParser.SET = 26;
VenbraceForgivingParser.GLOBAL = 27;
VenbraceForgivingParser.INITIALIZE = 28;
VenbraceForgivingParser.INIT = 29;
VenbraceForgivingParser.LOCAL = 30;
VenbraceForgivingParser.IN = 31;
VenbraceForgivingParser.BY = 32;
VenbraceForgivingParser.FROM = 33;
VenbraceForgivingParser.WHILE = 34;
VenbraceForgivingParser.TEST = 35;
VenbraceForgivingParser.EVAL_BUT_IGNORE_RESULT = 36;
VenbraceForgivingParser.OPEN_ANOTHER_SCREEN = 37;
VenbraceForgivingParser.OPEN_ANOTHER_SCREEN_WITH_START_VALUE = 38;
VenbraceForgivingParser.CLOSE_SCREEN = 39;
VenbraceForgivingParser.CLOSE_SCREEN_WITH_VALUE = 40;
VenbraceForgivingParser.CLOSE_SCREEN_WITH_PLAIN_TEXT = 41;
VenbraceForgivingParser.CLOSE_APPLICATION = 42;
VenbraceForgivingParser.SCREEN_NAME = 43;
VenbraceForgivingParser.START_VALUE = 44;
VenbraceForgivingParser.TEXT = 45;
VenbraceForgivingParser.BREAK = 46;
VenbraceForgivingParser.GET_START_VALUE = 47;
VenbraceForgivingParser.GET_PLAIN_START_TEXT = 48;
VenbraceForgivingParser.NOT = 49;
VenbraceForgivingParser.AND = 50;
VenbraceForgivingParser.OR = 51;
VenbraceForgivingParser.XOR = 52;
VenbraceForgivingParser.LT = 53;
VenbraceForgivingParser.GT = 54;
VenbraceForgivingParser.LE = 55;
VenbraceForgivingParser.GE = 56;
VenbraceForgivingParser.EQ = 57;
VenbraceForgivingParser.NEQ = 58;
VenbraceForgivingParser.LOGIC_EQ = 59;
VenbraceForgivingParser.LOGIC_NOT_EQ = 60;
VenbraceForgivingParser.PLUS = 61;
VenbraceForgivingParser.MINUS = 62;
VenbraceForgivingParser.MUL = 63;
VenbraceForgivingParser.DIV = 64;
VenbraceForgivingParser.POW = 65;
VenbraceForgivingParser.DECIMAL = 66;
VenbraceForgivingParser.BINARY = 67;
VenbraceForgivingParser.OCTAL = 68;
VenbraceForgivingParser.HEXADECIMAL = 69;
VenbraceForgivingParser.BITWISE = 70;
VenbraceForgivingParser.SQRT = 71;
VenbraceForgivingParser.ABS = 72;
VenbraceForgivingParser.NEG = 73;
VenbraceForgivingParser.LOG = 74;
VenbraceForgivingParser.EULER = 75;
VenbraceForgivingParser.ROUND = 76;
VenbraceForgivingParser.CEILING = 77;
VenbraceForgivingParser.FLOOR = 78;
VenbraceForgivingParser.RANDOM_INTEGER = 79;
VenbraceForgivingParser.RANDOM_FRACTION = 80;
VenbraceForgivingParser.MIN = 81;
VenbraceForgivingParser.MAX = 82;
VenbraceForgivingParser.MODULO = 83;
VenbraceForgivingParser.REMAINDER = 84;
VenbraceForgivingParser.QUOTIENT = 85;
VenbraceForgivingParser.OF = 86;
VenbraceForgivingParser.CONVERT = 87;
VenbraceForgivingParser.SIN = 88;
VenbraceForgivingParser.COS = 89;
VenbraceForgivingParser.TAN = 90;
VenbraceForgivingParser.ASIN = 91;
VenbraceForgivingParser.ACOS = 92;
VenbraceForgivingParser.ATAN = 93;
VenbraceForgivingParser.ATAN2 = 94;
VenbraceForgivingParser.JOIN = 95;
VenbraceForgivingParser.LENGTH = 96;
VenbraceForgivingParser.IS_EMPTY = 97;
VenbraceForgivingParser.COMPARE_TEXTS = 98;
VenbraceForgivingParser.TRIM = 99;
VenbraceForgivingParser.UPCASE = 100;
VenbraceForgivingParser.DOWNCASE = 101;
VenbraceForgivingParser.STARTS_AT = 102;
VenbraceForgivingParser.CONTAINS = 103;
VenbraceForgivingParser.SPLIT = 104;
VenbraceForgivingParser.SPLIT_AT_FIRST = 105;
VenbraceForgivingParser.SPLIT_AT_ANY = 106;
VenbraceForgivingParser.SPLIT_AT_FIRST_OF_ANY = 107;
VenbraceForgivingParser.SPLIT_AT_SPACES = 108;
VenbraceForgivingParser.SEGMENT = 109;
VenbraceForgivingParser.REPLACE_ALL = 110;
VenbraceForgivingParser.REPLACEMENT = 111;
VenbraceForgivingParser.OBFUSCATED_TEXT = 112;
VenbraceForgivingParser.IS_A_STR = 113;
VenbraceForgivingParser.REVERSE = 114;
VenbraceForgivingParser.MAPPINGS = 115;
VenbraceForgivingParser.IN_TEXT = 116;
VenbraceForgivingParser.PREFERRING = 117;
VenbraceForgivingParser.LONGEST_STRING_FIRST = 118;
VenbraceForgivingParser.DICTIONARY = 119;
VenbraceForgivingParser.NUMBER = 120;
VenbraceForgivingParser.NEG_NUM = 121;
VenbraceForgivingParser.COMPONENT_PROPERTY = 122;
VenbraceForgivingParser.ID = 123;
VenbraceForgivingParser.LINECOMMENT = 124;
VenbraceForgivingParser.BLOCKCOMMENT = 125;
VenbraceForgivingParser.STRING = 126;

VenbraceForgivingParser.RULE_program = 0;
VenbraceForgivingParser.RULE_test_program = 1;
VenbraceForgivingParser.RULE_test_blocks = 2;
VenbraceForgivingParser.RULE_decl_block = 3;
VenbraceForgivingParser.RULE_decl = 4;
VenbraceForgivingParser.RULE_global_decl = 5;
VenbraceForgivingParser.RULE_global_decl_keyword = 6;
VenbraceForgivingParser.RULE_procedure_do = 7;
VenbraceForgivingParser.RULE_procedure_result = 8;
VenbraceForgivingParser.RULE_event_handler = 9;
VenbraceForgivingParser.RULE_suite = 10;
VenbraceForgivingParser.RULE_stat_block = 11;
VenbraceForgivingParser.RULE_stat = 12;
VenbraceForgivingParser.RULE_control_stat = 13;
VenbraceForgivingParser.RULE_if_stat = 14;
VenbraceForgivingParser.RULE_for_each_from_to = 15;
VenbraceForgivingParser.RULE_while_stat = 16;
VenbraceForgivingParser.RULE_call_procedure_stat = 17;
VenbraceForgivingParser.RULE_var_stat = 18;
VenbraceForgivingParser.RULE_local_var_decl_stat = 19;
VenbraceForgivingParser.RULE_local_decl_keyword = 20;
VenbraceForgivingParser.RULE_setter = 21;
VenbraceForgivingParser.RULE_expr_block = 22;
VenbraceForgivingParser.RULE_expr = 23;
VenbraceForgivingParser.RULE_control_expr = 24;
VenbraceForgivingParser.RULE_if_expr = 25;
VenbraceForgivingParser.RULE_do_expr = 26;
VenbraceForgivingParser.RULE_logic_expr = 27;
VenbraceForgivingParser.RULE_not_expr = 28;
VenbraceForgivingParser.RULE_compare_eq_expr = 29;
VenbraceForgivingParser.RULE_compare_math_expr = 30;
VenbraceForgivingParser.RULE_math_expr = 31;
VenbraceForgivingParser.RULE_mutable_op = 32;
VenbraceForgivingParser.RULE_immutable_op = 33;
VenbraceForgivingParser.RULE_min_max = 34;
VenbraceForgivingParser.RULE_unary_op = 35;
VenbraceForgivingParser.RULE_mod = 36;
VenbraceForgivingParser.RULE_trig = 37;
VenbraceForgivingParser.RULE_str_expr = 38;
VenbraceForgivingParser.RULE_str_length = 39;
VenbraceForgivingParser.RULE_str_join = 40;
VenbraceForgivingParser.RULE_str_reverse = 41;
VenbraceForgivingParser.RULE_str_split_at_spaces = 42;
VenbraceForgivingParser.RULE_getter = 43;
VenbraceForgivingParser.RULE_call_procedure_expr = 44;
VenbraceForgivingParser.RULE_local_var_decl_expr = 45;
VenbraceForgivingParser.RULE_atom = 46;
VenbraceForgivingParser.RULE_atom_elements = 47;
VenbraceForgivingParser.RULE_label = 48;


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
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.WHEN) | (1 << VenbraceForgivingParser.TO) | (1 << VenbraceForgivingParser.INITIALIZE) | (1 << VenbraceForgivingParser.INIT))) !== 0)) {
            this.state = 98;
            this.decl_block();
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 104;
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
        this.state = 109;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 106;
            this.decl_block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 107;
            this.stat_block();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 108;
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

Test_blocksContext.prototype.decl_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Decl_blockContext);
    } else {
        return this.getTypedRuleContext(Decl_blockContext,i);
    }
};

Test_blocksContext.prototype.stat_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stat_blockContext);
    } else {
        return this.getTypedRuleContext(Stat_blockContext,i);
    }
};

Test_blocksContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
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
    this.enterRule(localctx, 4, VenbraceForgivingParser.RULE_test_blocks);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 114;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 111;
                this.decl_block();
                break;

            case 2:
                this.state = 112;
                this.stat_block();
                break;

            case 3:
                this.state = 113;
                this.expr_block();
                break;

            }
            this.state = 116; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.TRUE) | (1 << VenbraceForgivingParser.FALSE) | (1 << VenbraceForgivingParser.WHEN) | (1 << VenbraceForgivingParser.IF) | (1 << VenbraceForgivingParser.FOREACH) | (1 << VenbraceForgivingParser.TO) | (1 << VenbraceForgivingParser.CALL) | (1 << VenbraceForgivingParser.SET) | (1 << VenbraceForgivingParser.INITIALIZE) | (1 << VenbraceForgivingParser.INIT))) !== 0) || _la===VenbraceForgivingParser.WHILE || ((((_la - 120)) & ~0x1f) == 0 && ((1 << (_la - 120)) & ((1 << (VenbraceForgivingParser.NUMBER - 120)) | (1 << (VenbraceForgivingParser.NEG_NUM - 120)) | (1 << (VenbraceForgivingParser.COMPONENT_PROPERTY - 120)) | (1 << (VenbraceForgivingParser.ID - 120)) | (1 << (VenbraceForgivingParser.STRING - 120)))) !== 0));
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
    this.enterRule(localctx, 6, VenbraceForgivingParser.RULE_decl_block);
    try {
        this.state = 131;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.LSQR:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            localctx.declLbrace = this.match(VenbraceForgivingParser.LSQR);
            this.state = 119;
            this.decl();
            this.state = 120;
            localctx.declRbrace = this.match(VenbraceForgivingParser.RSQR);
            break;
        case VenbraceForgivingParser.LCURLY:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            localctx.declLbrace = this.match(VenbraceForgivingParser.LCURLY);
            this.state = 123;
            this.decl();
            this.state = 124;
            localctx.declRbrace = this.match(VenbraceForgivingParser.RCURLY);
            break;
        case VenbraceForgivingParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
            localctx.declLbrace = this.match(VenbraceForgivingParser.LPAREN);
            this.state = 127;
            this.decl();
            this.state = 128;
            localctx.declRbrace = this.match(VenbraceForgivingParser.RPAREN);
            break;
        case VenbraceForgivingParser.WHEN:
        case VenbraceForgivingParser.TO:
        case VenbraceForgivingParser.INITIALIZE:
        case VenbraceForgivingParser.INIT:
            this.enterOuterAlt(localctx, 4);
            this.state = 130;
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
    this.enterRule(localctx, 8, VenbraceForgivingParser.RULE_decl);
    try {
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.global_decl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
            this.procedure_do();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 135;
            this.procedure_result();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 136;
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

Global_declContext.prototype.global_decl_keyword = function() {
    return this.getTypedRuleContext(Global_decl_keywordContext,0);
};

Global_declContext.prototype.ID = function() {
    return this.getToken(VenbraceForgivingParser.ID, 0);
};

Global_declContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Global_declContext.prototype.INIT = function() {
    return this.getToken(VenbraceForgivingParser.INIT, 0);
};

Global_declContext.prototype.INITIALIZE = function() {
    return this.getToken(VenbraceForgivingParser.INITIALIZE, 0);
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
    this.enterRule(localctx, 10, VenbraceForgivingParser.RULE_global_decl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.INITIALIZE || _la===VenbraceForgivingParser.INIT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 140;
        this.global_decl_keyword();
        this.state = 141;
        this.match(VenbraceForgivingParser.ID);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.TO) {
            this.state = 142;
            this.match(VenbraceForgivingParser.TO);
        }

        this.state = 145;
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
    this.enterRule(localctx, 12, VenbraceForgivingParser.RULE_global_decl_keyword);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
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
    this.enterRule(localctx, 14, VenbraceForgivingParser.RULE_procedure_do);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(VenbraceForgivingParser.TO);
        this.state = 150;
        localctx.proc_name = this.match(VenbraceForgivingParser.ID);
        this.state = 154;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 151;
                localctx.arg_name = this.match(VenbraceForgivingParser.ID); 
            }
            this.state = 156;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.DO) {
            this.state = 157;
            this.match(VenbraceForgivingParser.DO);
        }

        this.state = 160;
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
    this.enterRule(localctx, 16, VenbraceForgivingParser.RULE_procedure_result);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(VenbraceForgivingParser.TO);
        this.state = 163;
        localctx.proc_name = this.match(VenbraceForgivingParser.ID);
        this.state = 167;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 164;
                localctx.arg_name = this.match(VenbraceForgivingParser.ID); 
            }
            this.state = 169;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.RESULT) {
            this.state = 170;
            this.match(VenbraceForgivingParser.RESULT);
        }

        this.state = 173;
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
    this.enterRule(localctx, 18, VenbraceForgivingParser.RULE_event_handler);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(VenbraceForgivingParser.WHEN);
        this.state = 176;
        this.match(VenbraceForgivingParser.COMPONENT_PROPERTY);
        this.state = 180;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 177;
                localctx.param_name = this.match(VenbraceForgivingParser.ID); 
            }
            this.state = 182;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.DO) {
            this.state = 183;
            this.match(VenbraceForgivingParser.DO);
        }

        this.state = 186;
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
    this.enterRule(localctx, 20, VenbraceForgivingParser.RULE_suite);
    var _la = 0; // Token type
    try {
        this.state = 218;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 191;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 188;
                    this.stat_block(); 
                }
                this.state = 193;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
            localctx.suiteLbrace = this.match(VenbraceForgivingParser.LCURLY);
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.IF) | (1 << VenbraceForgivingParser.FOREACH) | (1 << VenbraceForgivingParser.CALL) | (1 << VenbraceForgivingParser.SET) | (1 << VenbraceForgivingParser.INITIALIZE))) !== 0) || _la===VenbraceForgivingParser.WHILE) {
                this.state = 195;
                this.stat_block();
                this.state = 200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 201;
            localctx.suiteRbrace = this.match(VenbraceForgivingParser.RCURLY);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 202;
            localctx.suiteLbrace = this.match(VenbraceForgivingParser.LSQR);
            this.state = 206;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.IF) | (1 << VenbraceForgivingParser.FOREACH) | (1 << VenbraceForgivingParser.CALL) | (1 << VenbraceForgivingParser.SET) | (1 << VenbraceForgivingParser.INITIALIZE))) !== 0) || _la===VenbraceForgivingParser.WHILE) {
                this.state = 203;
                this.stat_block();
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 209;
            localctx.suiteRbrace = this.match(VenbraceForgivingParser.RSQR);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 210;
            localctx.suiteLbrace = this.match(VenbraceForgivingParser.LPAREN);
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LCURLY) | (1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.LSQR) | (1 << VenbraceForgivingParser.IF) | (1 << VenbraceForgivingParser.FOREACH) | (1 << VenbraceForgivingParser.CALL) | (1 << VenbraceForgivingParser.SET) | (1 << VenbraceForgivingParser.INITIALIZE))) !== 0) || _la===VenbraceForgivingParser.WHILE) {
                this.state = 211;
                this.stat_block();
                this.state = 216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 217;
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
    this.enterRule(localctx, 22, VenbraceForgivingParser.RULE_stat_block);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.LCURLY:
            this.enterOuterAlt(localctx, 1);
            this.state = 220;
            localctx.statLbrace = this.match(VenbraceForgivingParser.LCURLY);
            this.state = 221;
            this.stat();
            this.state = 222;
            localctx.statRbrace = this.match(VenbraceForgivingParser.RCURLY);
            break;
        case VenbraceForgivingParser.LSQR:
            this.enterOuterAlt(localctx, 2);
            this.state = 224;
            localctx.statLbrace = this.match(VenbraceForgivingParser.LSQR);
            this.state = 225;
            this.stat();
            this.state = 226;
            localctx.statRbrace = this.match(VenbraceForgivingParser.RSQR);
            break;
        case VenbraceForgivingParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 228;
            localctx.statLbrace = this.match(VenbraceForgivingParser.LPAREN);
            this.state = 229;
            this.stat();
            this.state = 230;
            localctx.statRbrace = this.match(VenbraceForgivingParser.RPAREN);
            break;
        case VenbraceForgivingParser.IF:
        case VenbraceForgivingParser.FOREACH:
        case VenbraceForgivingParser.CALL:
        case VenbraceForgivingParser.SET:
        case VenbraceForgivingParser.INITIALIZE:
        case VenbraceForgivingParser.WHILE:
            this.enterOuterAlt(localctx, 4);
            this.state = 232;
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
    this.enterRule(localctx, 24, VenbraceForgivingParser.RULE_stat);
    try {
        this.state = 239;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.IF:
        case VenbraceForgivingParser.FOREACH:
        case VenbraceForgivingParser.WHILE:
            this.enterOuterAlt(localctx, 1);
            this.state = 235;
            this.control_stat();
            break;
        case VenbraceForgivingParser.CALL:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
            this.call_procedure_stat();
            break;
        case VenbraceForgivingParser.SET:
            this.enterOuterAlt(localctx, 3);
            this.state = 237;
            this.var_stat();
            break;
        case VenbraceForgivingParser.INITIALIZE:
            this.enterOuterAlt(localctx, 4);
            this.state = 238;
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
    this.enterRule(localctx, 26, VenbraceForgivingParser.RULE_control_stat);
    try {
        this.state = 244;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 241;
            this.if_stat();
            break;
        case VenbraceForgivingParser.FOREACH:
            this.enterOuterAlt(localctx, 2);
            this.state = 242;
            this.for_each_from_to();
            break;
        case VenbraceForgivingParser.WHILE:
            this.enterOuterAlt(localctx, 3);
            this.state = 243;
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
    this.enterRule(localctx, 28, VenbraceForgivingParser.RULE_if_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(VenbraceForgivingParser.IF);
        this.state = 247;
        localctx.e1 = this.expr_block();
        this.state = 248;
        this.match(VenbraceForgivingParser.THEN);
        this.state = 249;
        localctx.s1 = this.suite();
        this.state = 257;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 250;
                this.match(VenbraceForgivingParser.ELSE_IF);
                this.state = 251;
                localctx.e2 = this.expr_block();
                this.state = 252;
                this.match(VenbraceForgivingParser.THEN);
                this.state = 253;
                localctx.s2 = this.suite(); 
            }
            this.state = 259;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

        this.state = 262;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 260;
            this.match(VenbraceForgivingParser.ELSE);
            this.state = 261;
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
    this.enterRule(localctx, 30, VenbraceForgivingParser.RULE_for_each_from_to);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(VenbraceForgivingParser.FOREACH);
        this.state = 265;
        this.match(VenbraceForgivingParser.ID);
        this.state = 267;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.FROM) {
            this.state = 266;
            this.match(VenbraceForgivingParser.FROM);
        }

        this.state = 269;
        localctx.from = this.expr_block();
        this.state = 271;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.TO) {
            this.state = 270;
            this.match(VenbraceForgivingParser.TO);
        }

        this.state = 273;
        localctx.to = this.expr_block();
        this.state = 275;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.BY) {
            this.state = 274;
            this.match(VenbraceForgivingParser.BY);
        }

        this.state = 277;
        localctx.by = this.expr_block();
        this.state = 279;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.DO) {
            this.state = 278;
            this.match(VenbraceForgivingParser.DO);
        }

        this.state = 281;
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
    this.enterRule(localctx, 32, VenbraceForgivingParser.RULE_while_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(VenbraceForgivingParser.WHILE);
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.TEST) {
            this.state = 284;
            this.match(VenbraceForgivingParser.TEST);
        }

        this.state = 287;
        this.expr_block();
        this.state = 289;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.DO) {
            this.state = 288;
            this.match(VenbraceForgivingParser.DO);
        }

        this.state = 291;
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
    this.enterRule(localctx, 34, VenbraceForgivingParser.RULE_call_procedure_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.match(VenbraceForgivingParser.CALL);
        this.state = 294;
        this.match(VenbraceForgivingParser.ID);
        this.state = 301;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 296;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
                if(la_===1) {
                    this.state = 295;
                    this.label();

                }
                this.state = 298;
                localctx.arg = this.expr_block(); 
            }
            this.state = 303;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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
    this.enterRule(localctx, 36, VenbraceForgivingParser.RULE_var_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
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

Local_var_decl_statContext.prototype.INITIALIZE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.INITIALIZE);
    } else {
        return this.getToken(VenbraceForgivingParser.INITIALIZE, i);
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
    this.enterRule(localctx, 38, VenbraceForgivingParser.RULE_local_var_decl_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 306;
        		this.match(VenbraceForgivingParser.INITIALIZE);
        		this.state = 307;
        		this.local_decl_keyword();
        		this.state = 308;
        		this.match(VenbraceForgivingParser.ID);
        		this.state = 310;
        		this._errHandler.sync(this);
        		_la = this._input.LA(1);
        		if(_la===VenbraceForgivingParser.TO) {
        		    this.state = 309;
        		    this.match(VenbraceForgivingParser.TO);
        		}

        		this.state = 312;
        		this.expr_block();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 316; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,32, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 319;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.IN) {
            this.state = 318;
            this.match(VenbraceForgivingParser.IN);
        }

        this.state = 321;
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
    this.enterRule(localctx, 40, VenbraceForgivingParser.RULE_local_decl_keyword);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
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
    this.target = null; // Token
    return this;
}

SetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetterContext.prototype.constructor = SetterContext;

SetterContext.prototype.SET = function() {
    return this.getToken(VenbraceForgivingParser.SET, 0);
};

SetterContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

SetterContext.prototype.ID = function() {
    return this.getToken(VenbraceForgivingParser.ID, 0);
};

SetterContext.prototype.COMPONENT_PROPERTY = function() {
    return this.getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0);
};

SetterContext.prototype.GLOBAL = function() {
    return this.getToken(VenbraceForgivingParser.GLOBAL, 0);
};

SetterContext.prototype.TO = function() {
    return this.getToken(VenbraceForgivingParser.TO, 0);
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
    this.enterRule(localctx, 42, VenbraceForgivingParser.RULE_setter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 325;
        this.match(VenbraceForgivingParser.SET);
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.GLOBAL) {
            this.state = 326;
            this.match(VenbraceForgivingParser.GLOBAL);
        }

        this.state = 329;
        localctx.target = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.COMPONENT_PROPERTY || _la===VenbraceForgivingParser.ID)) {
            localctx.target = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 331;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.TO) {
            this.state = 330;
            this.match(VenbraceForgivingParser.TO);
        }

        this.state = 333;
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

Expr_blockContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Expr_blockContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Expr_blockContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

Expr_blockContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Expr_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterExpr_block(this);
	}
};

Expr_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitExpr_block(this);
	}
};

Expr_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitExpr_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Expr_blockContext = Expr_blockContext;

VenbraceForgivingParser.prototype.expr_block = function() {

    var localctx = new Expr_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, VenbraceForgivingParser.RULE_expr_block);
    try {
        this.state = 339;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 335;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 336;
            this.match(VenbraceForgivingParser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 337;
            this.atom();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 338;
            this.expr();
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


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.getter = function() {
    return this.getTypedRuleContext(GetterContext,0);
};

ExprContext.prototype.control_expr = function() {
    return this.getTypedRuleContext(Control_exprContext,0);
};

ExprContext.prototype.logic_expr = function() {
    return this.getTypedRuleContext(Logic_exprContext,0);
};

ExprContext.prototype.not_expr = function() {
    return this.getTypedRuleContext(Not_exprContext,0);
};

ExprContext.prototype.compare_eq_expr = function() {
    return this.getTypedRuleContext(Compare_eq_exprContext,0);
};

ExprContext.prototype.compare_math_expr = function() {
    return this.getTypedRuleContext(Compare_math_exprContext,0);
};

ExprContext.prototype.math_expr = function() {
    return this.getTypedRuleContext(Math_exprContext,0);
};

ExprContext.prototype.str_expr = function() {
    return this.getTypedRuleContext(Str_exprContext,0);
};

ExprContext.prototype.call_procedure_expr = function() {
    return this.getTypedRuleContext(Call_procedure_exprContext,0);
};

ExprContext.prototype.local_var_decl_expr = function() {
    return this.getTypedRuleContext(Local_var_decl_exprContext,0);
};

ExprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.ExprContext = ExprContext;

VenbraceForgivingParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, VenbraceForgivingParser.RULE_expr);
    try {
        this.state = 352;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 341;
            this.getter();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 342;
            this.control_expr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 343;
            this.logic_expr();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 344;
            this.not_expr();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 345;
            this.compare_eq_expr();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 346;
            this.compare_math_expr();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 347;
            this.math_expr();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 348;
            this.str_expr();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 349;
            this.call_procedure_expr();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 350;
            this.local_var_decl_expr();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 351;
            this.atom();
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
    this.enterRule(localctx, 48, VenbraceForgivingParser.RULE_control_expr);
    try {
        this.state = 356;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 354;
            this.if_expr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 355;
            this.do_expr();
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

If_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

If_exprContext.prototype.IF = function() {
    return this.getToken(VenbraceForgivingParser.IF, 0);
};

If_exprContext.prototype.THEN = function() {
    return this.getToken(VenbraceForgivingParser.THEN, 0);
};

If_exprContext.prototype.ELSE = function() {
    return this.getToken(VenbraceForgivingParser.ELSE, 0);
};

If_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 50, VenbraceForgivingParser.RULE_if_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 359;
        this.match(VenbraceForgivingParser.IF);
        this.state = 360;
        localctx.c = this.expr_block();
        this.state = 361;
        this.match(VenbraceForgivingParser.THEN);
        this.state = 362;
        localctx.e1 = this.expr_block();
        this.state = 363;
        this.match(VenbraceForgivingParser.ELSE);
        this.state = 364;
        localctx.e2 = this.expr_block();
        this.state = 365;
        this.match(VenbraceForgivingParser.RPAREN);
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

Do_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

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

Do_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 52, VenbraceForgivingParser.RULE_do_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 368;
        this.match(VenbraceForgivingParser.DO);
        this.state = 369;
        this.suite();
        this.state = 370;
        this.match(VenbraceForgivingParser.RESULT);
        this.state = 371;
        this.expr_block();
        this.state = 372;
        this.match(VenbraceForgivingParser.RPAREN);
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


function Logic_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_logic_expr;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

Logic_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logic_exprContext.prototype.constructor = Logic_exprContext;

Logic_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Logic_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Logic_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Logic_exprContext.prototype.AND = function() {
    return this.getToken(VenbraceForgivingParser.AND, 0);
};

Logic_exprContext.prototype.OR = function() {
    return this.getToken(VenbraceForgivingParser.OR, 0);
};

Logic_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterLogic_expr(this);
	}
};

Logic_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitLogic_expr(this);
	}
};

Logic_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitLogic_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Logic_exprContext = Logic_exprContext;

VenbraceForgivingParser.prototype.logic_expr = function() {

    var localctx = new Logic_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, VenbraceForgivingParser.RULE_logic_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 375;
        localctx.a = this.expr_block();
        this.state = 376;
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.AND || _la===VenbraceForgivingParser.OR)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 377;
        localctx.b = this.expr_block();
        this.state = 378;
        this.match(VenbraceForgivingParser.RPAREN);
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

Not_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Not_exprContext.prototype.NOT = function() {
    return this.getToken(VenbraceForgivingParser.NOT, 0);
};

Not_exprContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Not_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 56, VenbraceForgivingParser.RULE_not_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 381;
        this.match(VenbraceForgivingParser.NOT);
        this.state = 382;
        this.expr_block();
        this.state = 383;
        this.match(VenbraceForgivingParser.RPAREN);
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


function Compare_eq_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_compare_eq_expr;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

Compare_eq_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Compare_eq_exprContext.prototype.constructor = Compare_eq_exprContext;

Compare_eq_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Compare_eq_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Compare_eq_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Compare_eq_exprContext.prototype.LOGIC_EQ = function() {
    return this.getToken(VenbraceForgivingParser.LOGIC_EQ, 0);
};

Compare_eq_exprContext.prototype.LOGIC_NOT_EQ = function() {
    return this.getToken(VenbraceForgivingParser.LOGIC_NOT_EQ, 0);
};

Compare_eq_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterCompare_eq_expr(this);
	}
};

Compare_eq_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitCompare_eq_expr(this);
	}
};

Compare_eq_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitCompare_eq_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Compare_eq_exprContext = Compare_eq_exprContext;

VenbraceForgivingParser.prototype.compare_eq_expr = function() {

    var localctx = new Compare_eq_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, VenbraceForgivingParser.RULE_compare_eq_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 386;
        localctx.a = this.expr_block();
        this.state = 387;
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.LOGIC_EQ || _la===VenbraceForgivingParser.LOGIC_NOT_EQ)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 388;
        localctx.b = this.expr_block();
        this.state = 389;
        this.match(VenbraceForgivingParser.RPAREN);
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


function Compare_math_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_compare_math_expr;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

Compare_math_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Compare_math_exprContext.prototype.constructor = Compare_math_exprContext;

Compare_math_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Compare_math_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Compare_math_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Compare_math_exprContext.prototype.EQ = function() {
    return this.getToken(VenbraceForgivingParser.EQ, 0);
};

Compare_math_exprContext.prototype.NEQ = function() {
    return this.getToken(VenbraceForgivingParser.NEQ, 0);
};

Compare_math_exprContext.prototype.GT = function() {
    return this.getToken(VenbraceForgivingParser.GT, 0);
};

Compare_math_exprContext.prototype.GE = function() {
    return this.getToken(VenbraceForgivingParser.GE, 0);
};

Compare_math_exprContext.prototype.LT = function() {
    return this.getToken(VenbraceForgivingParser.LT, 0);
};

Compare_math_exprContext.prototype.LE = function() {
    return this.getToken(VenbraceForgivingParser.LE, 0);
};

Compare_math_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterCompare_math_expr(this);
	}
};

Compare_math_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitCompare_math_expr(this);
	}
};

Compare_math_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitCompare_math_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Compare_math_exprContext = Compare_math_exprContext;

VenbraceForgivingParser.prototype.compare_math_expr = function() {

    var localctx = new Compare_math_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, VenbraceForgivingParser.RULE_compare_math_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 391;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 392;
        localctx.a = this.expr_block();
        this.state = 393;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (VenbraceForgivingParser.LT - 53)) | (1 << (VenbraceForgivingParser.GT - 53)) | (1 << (VenbraceForgivingParser.LE - 53)) | (1 << (VenbraceForgivingParser.GE - 53)) | (1 << (VenbraceForgivingParser.EQ - 53)) | (1 << (VenbraceForgivingParser.NEQ - 53)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 394;
        localctx.b = this.expr_block();
        this.state = 395;
        this.match(VenbraceForgivingParser.RPAREN);
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

Math_exprContext.prototype.mutable_op = function() {
    return this.getTypedRuleContext(Mutable_opContext,0);
};

Math_exprContext.prototype.immutable_op = function() {
    return this.getTypedRuleContext(Immutable_opContext,0);
};

Math_exprContext.prototype.min_max = function() {
    return this.getTypedRuleContext(Min_maxContext,0);
};

Math_exprContext.prototype.unary_op = function() {
    return this.getTypedRuleContext(Unary_opContext,0);
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
    this.enterRule(localctx, 62, VenbraceForgivingParser.RULE_math_expr);
    try {
        this.state = 403;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 397;
            this.mutable_op();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 398;
            this.immutable_op();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 399;
            this.min_max();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 400;
            this.unary_op();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 401;
            this.mod();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 402;
            this.trig();
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


function Mutable_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_mutable_op;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

Mutable_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mutable_opContext.prototype.constructor = Mutable_opContext;

Mutable_opContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Mutable_opContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Mutable_opContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Mutable_opContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.PLUS);
    } else {
        return this.getToken(VenbraceForgivingParser.PLUS, i);
    }
};


Mutable_opContext.prototype.MUL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceForgivingParser.MUL);
    } else {
        return this.getToken(VenbraceForgivingParser.MUL, i);
    }
};


Mutable_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterMutable_op(this);
	}
};

Mutable_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitMutable_op(this);
	}
};

Mutable_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitMutable_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Mutable_opContext = Mutable_opContext;

VenbraceForgivingParser.prototype.mutable_op = function() {

    var localctx = new Mutable_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, VenbraceForgivingParser.RULE_mutable_op);
    var _la = 0; // Token type
    try {
        this.state = 425;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 405;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 406;
            localctx.a = this.expr_block();
            this.state = 409; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 407;
                this.match(VenbraceForgivingParser.PLUS);
                this.state = 408;
                localctx.b = this.expr_block();
                this.state = 411; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===VenbraceForgivingParser.PLUS);
            this.state = 413;
            this.match(VenbraceForgivingParser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 415;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 416;
            localctx.a = this.expr_block();
            this.state = 419; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 417;
                this.match(VenbraceForgivingParser.MUL);
                this.state = 418;
                localctx.b = this.expr_block();
                this.state = 421; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===VenbraceForgivingParser.MUL);
            this.state = 423;
            this.match(VenbraceForgivingParser.RPAREN);
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


function Immutable_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_immutable_op;
    return this;
}

Immutable_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Immutable_opContext.prototype.constructor = Immutable_opContext;


 
Immutable_opContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Immutable_neg_num_special_caseContext(parser, ctx) {
	Immutable_opContext.call(this, parser);
    Immutable_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Immutable_neg_num_special_caseContext.prototype = Object.create(Immutable_opContext.prototype);
Immutable_neg_num_special_caseContext.prototype.constructor = Immutable_neg_num_special_caseContext;

VenbraceForgivingParser.Immutable_neg_num_special_caseContext = Immutable_neg_num_special_caseContext;

Immutable_neg_num_special_caseContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Immutable_neg_num_special_caseContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Immutable_neg_num_special_caseContext.prototype.NEG_NUM = function() {
    return this.getToken(VenbraceForgivingParser.NEG_NUM, 0);
};

Immutable_neg_num_special_caseContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};
Immutable_neg_num_special_caseContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterImmutable_neg_num_special_case(this);
	}
};

Immutable_neg_num_special_caseContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitImmutable_neg_num_special_case(this);
	}
};

Immutable_neg_num_special_caseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitImmutable_neg_num_special_case(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Immutable_regular_caseContext(parser, ctx) {
	Immutable_opContext.call(this, parser);
    this.a = null; // Expr_blockContext;
    this.b = null; // Expr_blockContext;
    Immutable_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Immutable_regular_caseContext.prototype = Object.create(Immutable_opContext.prototype);
Immutable_regular_caseContext.prototype.constructor = Immutable_regular_caseContext;

VenbraceForgivingParser.Immutable_regular_caseContext = Immutable_regular_caseContext;

Immutable_regular_caseContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Immutable_regular_caseContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

Immutable_regular_caseContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Immutable_regular_caseContext.prototype.MINUS = function() {
    return this.getToken(VenbraceForgivingParser.MINUS, 0);
};

Immutable_regular_caseContext.prototype.DIV = function() {
    return this.getToken(VenbraceForgivingParser.DIV, 0);
};

Immutable_regular_caseContext.prototype.POW = function() {
    return this.getToken(VenbraceForgivingParser.POW, 0);
};
Immutable_regular_caseContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterImmutable_regular_case(this);
	}
};

Immutable_regular_caseContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitImmutable_regular_case(this);
	}
};

Immutable_regular_caseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitImmutable_regular_case(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceForgivingParser.Immutable_opContext = Immutable_opContext;

VenbraceForgivingParser.prototype.immutable_op = function() {

    var localctx = new Immutable_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, VenbraceForgivingParser.RULE_immutable_op);
    var _la = 0; // Token type
    try {
        this.state = 438;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Immutable_regular_caseContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 427;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 428;
            localctx.a = this.expr_block();
            this.state = 429;
            _la = this._input.LA(1);
            if(!(((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (VenbraceForgivingParser.MINUS - 62)) | (1 << (VenbraceForgivingParser.DIV - 62)) | (1 << (VenbraceForgivingParser.POW - 62)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 430;
            localctx.b = this.expr_block();
            this.state = 431;
            this.match(VenbraceForgivingParser.RPAREN);
            break;

        case 2:
            localctx = new Immutable_neg_num_special_caseContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 433;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 434;
            this.expr_block();
            this.state = 435;
            this.match(VenbraceForgivingParser.NEG_NUM);
            this.state = 436;
            this.match(VenbraceForgivingParser.RPAREN);
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

Min_maxContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Min_maxContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

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
    this.enterRule(localctx, 68, VenbraceForgivingParser.RULE_min_max);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 440;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 441;
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.MIN || _la===VenbraceForgivingParser.MAX)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 445;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.TRUE) | (1 << VenbraceForgivingParser.FALSE))) !== 0) || ((((_la - 120)) & ~0x1f) == 0 && ((1 << (_la - 120)) & ((1 << (VenbraceForgivingParser.NUMBER - 120)) | (1 << (VenbraceForgivingParser.NEG_NUM - 120)) | (1 << (VenbraceForgivingParser.COMPONENT_PROPERTY - 120)) | (1 << (VenbraceForgivingParser.ID - 120)) | (1 << (VenbraceForgivingParser.STRING - 120)))) !== 0)) {
            this.state = 442;
            this.expr_block();
            this.state = 447;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 448;
        this.match(VenbraceForgivingParser.RPAREN);
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

Unary_opContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Unary_opContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Unary_opContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

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
    this.enterRule(localctx, 70, VenbraceForgivingParser.RULE_unary_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 450;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 451;
        _la = this._input.LA(1);
        if(!(((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (VenbraceForgivingParser.SQRT - 71)) | (1 << (VenbraceForgivingParser.ABS - 71)) | (1 << (VenbraceForgivingParser.NEG - 71)) | (1 << (VenbraceForgivingParser.LOG - 71)) | (1 << (VenbraceForgivingParser.EULER - 71)) | (1 << (VenbraceForgivingParser.ROUND - 71)) | (1 << (VenbraceForgivingParser.CEILING - 71)) | (1 << (VenbraceForgivingParser.FLOOR - 71)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 452;
        this.expr_block();
        this.state = 453;
        this.match(VenbraceForgivingParser.RPAREN);
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
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

ModContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModContext.prototype.constructor = ModContext;

ModContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

ModContext.prototype.MODULO = function() {
    return this.getToken(VenbraceForgivingParser.MODULO, 0);
};

ModContext.prototype.OF = function() {
    return this.getToken(VenbraceForgivingParser.OF, 0);
};

ModContext.prototype.DIV = function() {
    return this.getToken(VenbraceForgivingParser.DIV, 0);
};

ModContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 72, VenbraceForgivingParser.RULE_mod);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 455;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 456;
        this.match(VenbraceForgivingParser.MODULO);
        this.state = 457;
        this.match(VenbraceForgivingParser.OF);
        this.state = 458;
        localctx.a = this.expr_block();
        this.state = 459;
        this.match(VenbraceForgivingParser.DIV);
        this.state = 460;
        localctx.b = this.expr_block();
        this.state = 461;
        this.match(VenbraceForgivingParser.RPAREN);
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

TrigContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

TrigContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

TrigContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

TrigContext.prototype.SIN = function() {
    return this.getToken(VenbraceForgivingParser.SIN, 0);
};

TrigContext.prototype.COS = function() {
    return this.getToken(VenbraceForgivingParser.COS, 0);
};

TrigContext.prototype.TAN = function() {
    return this.getToken(VenbraceForgivingParser.TAN, 0);
};

TrigContext.prototype.ASIN = function() {
    return this.getToken(VenbraceForgivingParser.ASIN, 0);
};

TrigContext.prototype.ACOS = function() {
    return this.getToken(VenbraceForgivingParser.ACOS, 0);
};

TrigContext.prototype.ATAN = function() {
    return this.getToken(VenbraceForgivingParser.ATAN, 0);
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
    this.enterRule(localctx, 74, VenbraceForgivingParser.RULE_trig);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 464;
        _la = this._input.LA(1);
        if(!(((((_la - 88)) & ~0x1f) == 0 && ((1 << (_la - 88)) & ((1 << (VenbraceForgivingParser.SIN - 88)) | (1 << (VenbraceForgivingParser.COS - 88)) | (1 << (VenbraceForgivingParser.TAN - 88)) | (1 << (VenbraceForgivingParser.ASIN - 88)) | (1 << (VenbraceForgivingParser.ACOS - 88)) | (1 << (VenbraceForgivingParser.ATAN - 88)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 465;
        this.expr_block();
        this.state = 466;
        this.match(VenbraceForgivingParser.RPAREN);
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
    this.enterRule(localctx, 76, VenbraceForgivingParser.RULE_str_expr);
    try {
        this.state = 472;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 468;
            this.str_join();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 469;
            this.str_length();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 470;
            this.str_reverse();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 471;
            this.str_split_at_spaces();
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

Str_lengthContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Str_lengthContext.prototype.LENGTH = function() {
    return this.getToken(VenbraceForgivingParser.LENGTH, 0);
};

Str_lengthContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_lengthContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 78, VenbraceForgivingParser.RULE_str_length);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 474;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 475;
        this.match(VenbraceForgivingParser.LENGTH);
        this.state = 476;
        this.expr_block();
        this.state = 477;
        this.match(VenbraceForgivingParser.RPAREN);
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

Str_joinContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Str_joinContext.prototype.JOIN = function() {
    return this.getToken(VenbraceForgivingParser.JOIN, 0);
};

Str_joinContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 80, VenbraceForgivingParser.RULE_str_join);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 479;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 480;
        this.match(VenbraceForgivingParser.JOIN);
        this.state = 484;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.TRUE) | (1 << VenbraceForgivingParser.FALSE))) !== 0) || ((((_la - 120)) & ~0x1f) == 0 && ((1 << (_la - 120)) & ((1 << (VenbraceForgivingParser.NUMBER - 120)) | (1 << (VenbraceForgivingParser.NEG_NUM - 120)) | (1 << (VenbraceForgivingParser.COMPONENT_PROPERTY - 120)) | (1 << (VenbraceForgivingParser.ID - 120)) | (1 << (VenbraceForgivingParser.STRING - 120)))) !== 0)) {
            this.state = 481;
            this.expr_block();
            this.state = 486;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 487;
        this.match(VenbraceForgivingParser.RPAREN);
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

Str_reverseContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Str_reverseContext.prototype.REVERSE = function() {
    return this.getToken(VenbraceForgivingParser.REVERSE, 0);
};

Str_reverseContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_reverseContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 82, VenbraceForgivingParser.RULE_str_reverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 489;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 490;
        this.match(VenbraceForgivingParser.REVERSE);
        this.state = 491;
        this.expr_block();
        this.state = 492;
        this.match(VenbraceForgivingParser.RPAREN);
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

Str_split_at_spacesContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Str_split_at_spacesContext.prototype.SPLIT_AT_SPACES = function() {
    return this.getToken(VenbraceForgivingParser.SPLIT_AT_SPACES, 0);
};

Str_split_at_spacesContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_split_at_spacesContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 84, VenbraceForgivingParser.RULE_str_split_at_spaces);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 495;
        this.match(VenbraceForgivingParser.SPLIT_AT_SPACES);
        this.state = 496;
        this.expr_block();
        this.state = 497;
        this.match(VenbraceForgivingParser.RPAREN);
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

GetterContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

GetterContext.prototype.GET = function() {
    return this.getToken(VenbraceForgivingParser.GET, 0);
};

GetterContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 86, VenbraceForgivingParser.RULE_getter);
    var _la = 0; // Token type
    try {
        this.state = 507;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 499;
            this.match(VenbraceForgivingParser.ID);
            break;
        case VenbraceForgivingParser.LPAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 500;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 501;
            this.match(VenbraceForgivingParser.GET);
            this.state = 503;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.GLOBAL) {
                this.state = 502;
                this.match(VenbraceForgivingParser.GLOBAL);
            }

            this.state = 505;
            this.match(VenbraceForgivingParser.ID);
            this.state = 506;
            this.match(VenbraceForgivingParser.RPAREN);
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

Call_procedure_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Call_procedure_exprContext.prototype.CALL = function() {
    return this.getToken(VenbraceForgivingParser.CALL, 0);
};

Call_procedure_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 88, VenbraceForgivingParser.RULE_call_procedure_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 509;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 510;
        this.match(VenbraceForgivingParser.CALL);
        this.state = 515;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.state = 511;
            this.match(VenbraceForgivingParser.ID);
            break;

        case 2:
            this.state = 512;
            localctx.component = this.match(VenbraceForgivingParser.ID);
            this.state = 513;
            this.match(VenbraceForgivingParser.DOT);
            this.state = 514;
            localctx.method = this.match(VenbraceForgivingParser.ID);
            break;

        }
        this.state = 523;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceForgivingParser.LPAREN) | (1 << VenbraceForgivingParser.TRUE) | (1 << VenbraceForgivingParser.FALSE))) !== 0) || ((((_la - 120)) & ~0x1f) == 0 && ((1 << (_la - 120)) & ((1 << (VenbraceForgivingParser.NUMBER - 120)) | (1 << (VenbraceForgivingParser.NEG_NUM - 120)) | (1 << (VenbraceForgivingParser.COMPONENT_PROPERTY - 120)) | (1 << (VenbraceForgivingParser.ID - 120)) | (1 << (VenbraceForgivingParser.STRING - 120)))) !== 0)) {
            this.state = 518;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
            if(la_===1) {
                this.state = 517;
                this.label();

            }
            this.state = 520;
            localctx.arg = this.expr_block();
            this.state = 525;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 526;
        this.match(VenbraceForgivingParser.RPAREN);
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
    this.init_val = null; // Expr_blockContext
    this.body = null; // Expr_blockContext
    return this;
}

Local_var_decl_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Local_var_decl_exprContext.prototype.constructor = Local_var_decl_exprContext;

Local_var_decl_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

Local_var_decl_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
};

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
    this.enterRule(localctx, 90, VenbraceForgivingParser.RULE_local_var_decl_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 528;
        this.match(VenbraceForgivingParser.LPAREN);
        this.state = 540;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VenbraceForgivingParser.INITIALIZE) {
            this.state = 529;
            this.match(VenbraceForgivingParser.INITIALIZE);
            this.state = 531;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.LOCAL) {
                this.state = 530;
                this.match(VenbraceForgivingParser.LOCAL);
            }

            this.state = 533;
            this.match(VenbraceForgivingParser.ID);
            this.state = 535;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceForgivingParser.TO) {
                this.state = 534;
                this.match(VenbraceForgivingParser.TO);
            }

            this.state = 537;
            localctx.init_val = this.expr_block();
            this.state = 542;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 544;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceForgivingParser.IN) {
            this.state = 543;
            this.match(VenbraceForgivingParser.IN);
        }

        this.state = 546;
        localctx.body = this.expr_block();
        this.state = 547;
        this.match(VenbraceForgivingParser.RPAREN);
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

AtomContext.prototype.atom_elements = function() {
    return this.getTypedRuleContext(Atom_elementsContext,0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceForgivingParser.LPAREN, 0);
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceForgivingParser.RPAREN, 0);
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
    this.enterRule(localctx, 92, VenbraceForgivingParser.RULE_atom);
    try {
        this.state = 554;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceForgivingParser.TRUE:
        case VenbraceForgivingParser.FALSE:
        case VenbraceForgivingParser.NUMBER:
        case VenbraceForgivingParser.NEG_NUM:
        case VenbraceForgivingParser.COMPONENT_PROPERTY:
        case VenbraceForgivingParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 549;
            this.atom_elements();
            break;
        case VenbraceForgivingParser.LPAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 550;
            this.match(VenbraceForgivingParser.LPAREN);
            this.state = 551;
            this.atom_elements();
            this.state = 552;
            this.match(VenbraceForgivingParser.RPAREN);
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


function Atom_elementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceForgivingParser.RULE_atom_elements;
    return this;
}

Atom_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Atom_elementsContext.prototype.constructor = Atom_elementsContext;

Atom_elementsContext.prototype.NUMBER = function() {
    return this.getToken(VenbraceForgivingParser.NUMBER, 0);
};

Atom_elementsContext.prototype.NEG_NUM = function() {
    return this.getToken(VenbraceForgivingParser.NEG_NUM, 0);
};

Atom_elementsContext.prototype.STRING = function() {
    return this.getToken(VenbraceForgivingParser.STRING, 0);
};

Atom_elementsContext.prototype.TRUE = function() {
    return this.getToken(VenbraceForgivingParser.TRUE, 0);
};

Atom_elementsContext.prototype.FALSE = function() {
    return this.getToken(VenbraceForgivingParser.FALSE, 0);
};

Atom_elementsContext.prototype.COMPONENT_PROPERTY = function() {
    return this.getToken(VenbraceForgivingParser.COMPONENT_PROPERTY, 0);
};

Atom_elementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.enterAtom_elements(this);
	}
};

Atom_elementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceForgivingListener ) {
        listener.exitAtom_elements(this);
	}
};

Atom_elementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceForgivingVisitor ) {
        return visitor.visitAtom_elements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceForgivingParser.Atom_elementsContext = Atom_elementsContext;

VenbraceForgivingParser.prototype.atom_elements = function() {

    var localctx = new Atom_elementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, VenbraceForgivingParser.RULE_atom_elements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 556;
        _la = this._input.LA(1);
        if(!(_la===VenbraceForgivingParser.TRUE || _la===VenbraceForgivingParser.FALSE || ((((_la - 120)) & ~0x1f) == 0 && ((1 << (_la - 120)) & ((1 << (VenbraceForgivingParser.NUMBER - 120)) | (1 << (VenbraceForgivingParser.NEG_NUM - 120)) | (1 << (VenbraceForgivingParser.COMPONENT_PROPERTY - 120)) | (1 << (VenbraceForgivingParser.STRING - 120)))) !== 0))) {
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
    this.enterRule(localctx, 96, VenbraceForgivingParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 558;
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


exports.VenbraceForgivingParser = VenbraceForgivingParser;
