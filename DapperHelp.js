 /*jshint unused:false*/
 
// Various helper functions for DapperBrew/DapperCalc

"use strict";

// check if argument(s) is a number.
// can accept infinite # of arguments.
function isNum() {
  var args = arguments;
  for (var i = 0; i < args.length; i++) {
    var n = args[i];
    if ( !(!isNaN(parseFloat(n)) && isFinite(n)) ) {
      return false;
    } 
  }
  return true;
}
