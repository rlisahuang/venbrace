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
  if (isInt(n)) {
    if (n >= 0) {
      return Array(n).fill(str).join('');
    } else {
      throw 'Utils.multiplyString given negative integer: ' + n.toString();
    }
  } else {
    throw 'Utils.multiplyString given noninteger: ' + n.toString();
  }
}

// https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}


function displayTimeTaken(msg, obj, thunk) {
  var start = Date.now();
  var result = thunk.call(obj);
  var stop = Date.now();
  console.log(msg + ((stop - start)/ 1000).toString() + ' seconds');
  return result;

}

function capitalizeFirstLetter(str) {
  if (str.length == 0) {
    return str;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function uncapitalizeFirstLetter(str) {
  if (str.length == 0) {
    return str;
  } else {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
}

// Mutate arr1 by pushing all elements of arr2
// See https://stackoverflow.com/questions/4156101/copy-array-items-into-another-array
function pushArray(arr1, arr2) {
  arr1.push.apply(arr1, arr2); // mutate arr1 by add all elements of arr2
  return arr1; // Return modified arr1 for kicks.
}

exports.className = className;
exports.zip = zip;
exports.spaces = spaces;
exports.newlines = newlines;
exports.dashes = dashes;
exports.multiplyString = dashes;
exports.isInt = isInt;
exports.displayTimeTaken = displayTimeTaken;
exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.uncapitalizeFirstLetter = uncapitalizeFirstLetter;
exports.pushArray = pushArray;

