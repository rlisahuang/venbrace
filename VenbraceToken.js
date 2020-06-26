var antlr4 = require('./antlr4/index');
var CommonToken = antlr4.CommonToken;
// var Token = antlr4.Token;

function VenbraceToken(source, type, channel, start, stop) {
    CommonToken.call(this, source, type, channel, start, stop);
    this.srcName = null;
    return this;
};

VenbraceToken.prototype = Object.create(CommonToken.prototype);
VenbraceToken.prototype.constructor = VenbraceToken;

VenbraceToken.prototype.toString = function() {
    var t = CommonToken.prototype.toString();
    return srcName +":"+t;
};

exports.VenbraceToken = VenbraceToken;
