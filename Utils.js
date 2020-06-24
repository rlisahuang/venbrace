/**
 * File: Utils.js
 * Author: Lyn Turbak
 * Created: 2020/06/18
 * 
 * Helpful utilities for Venbrace parser
 */

function className(obj) {
  if (obj && obj.constructor) {
    return obj.constructor.name;
  } else {
    return 'noClassName';
  }
}

// Returns zip two arrays, making an array of two-element arrays.
// Length of returned array is length of shorter of two array:
function zip (arr1, arr2) {
  if (arr1.length <= arr2) {
    return arr1.map( (arr1Elt, index) => [arr1Elt, arr2[index]] );
  } else {
    return arr2.map( (arr2Elt, index) => [arr1[index], arr2Elt] );
  }
}

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

function displayTimeTaken(msg, obj, thunk) {
  var start = Date.now();
  var result = thunk.call(obj);
  var stop = Date.now();
  console.log(msg + ((stop - start)/ 1000).toString() + ' seconds');
  return result;

}

exports.className = className;
exports.zip = zip;
exports.spaces = spaces;
exports.newlines = newlines;
exports.dashes = dashes;
exports.multiplyString = dashes;
exports.displayTimeTaken = displayTimeTaken

