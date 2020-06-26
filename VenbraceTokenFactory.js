var antlr4 = require('./antlr4/index');
var CommonTokenFactory = require('antlr4/CommonTokenFactory.js').CommonTokenFactory;
var VenbraceToken = require('VenbraceToken.js').VenbraceToken;

function VenbraceTokenFactory(input) {
    this.input = input;
    return this;
};

VenbraceTokenFactory.prototype = Object.create(CommonTokenFactory.prototype);
VenbraceTokenFactory.prototype.constructor = VenbraceTokenFactory;

VenbraceTokenFactory.prototype.createThin = function(type, text) {
    var t = new VenbraceToken(null, type, text);
    return t;
};

VenbraceTokenFactory.prototype.create = function(source, type, text, channel, start, stop, line, column) {
    var t = new VenbraceToken(source, type, channel, start, stop);
    t.line = line;
    t.column = column;
    t.srcName = input.getSourceName();
    return t;
};

exports.VenbraceTokenFactory = VenbraceTokenFactory;
