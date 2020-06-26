// Map token names to ints in VenbraceForgiving.tokens
// This is currently built manually, but really should be done automatically.
var tokenIntMap = {
  'LCURLY': 5, 
  'RCURLY': 6, 
  'LPAREN': 7, 
  'RPAREN': 8, 
  'LSQR': 9,
  'RSQR': 10,
  'GLOBAL': 30, 
  'LOCAL': 33, 
  'MINUS': 64, 
  'NUMBER': 122, 
  'NEG_NUM': 123
}

exports.tokenIntMap = tokenIntMap; 
