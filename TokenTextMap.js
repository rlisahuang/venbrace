// Map token names to ints in VenbraceForgiving.tokens
// This is currently built manually, but really should be done automatically.
var tokenTextMap = {
  'LCURLY': '{',
  'RCURLY': '}',
  'LPAREN': '(', 
  'RPAREN': ')', 
  'LSQR': '[',
  'RSQR': ']',
  'GLOBAL': 'global', 
  'LOCAL': 'local', 
  'MINUS': '-', 
  'NUMBER': undefined, 
  'NEG_NUM': undefined
}

exports.tokenTextMap = tokenTextMap; 
