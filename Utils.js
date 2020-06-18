/**
 * File: Utils.js
 * Author: Lyn Turbak
 * Created: 2020/06/18
 * 
 * Helpful utilities for Venbrace parser
 */

function spaces(n) {
  // Acts like Python ' ' * n 
  return multiplyString(' ', n); 
}

function newlines(n) {
  // Acts like Python '\n' * n 
  return multiplyString('\n', n); 
}

function dashes(n) {
  // Acts like Python '-' * n 
  return multiplyString('-', n); 
}

function multiplyString(str, n) {
  // Acts like python str * n 
  // console.log("multiplyString('" + str + "', " + n + ")");
  return Array(n).fill(str).join('')
}

exports.spaces = spaces;
exports.newlines = newlines;
exports.dashes = dashes;
exports.multiplyString = dashes;

