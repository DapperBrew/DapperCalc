// Various helper functions for DapperBrew/DapperCalc

var dapperHelp = (function () {

  // isNum (Is this a number?)
  // Checks to see if a variable contains a numeric value (regardless its type)
  // Can check infinite # of arguments
  var isNum = function() {
  	var args = arguments;
  	for (var i = 0; i < args.length; i++) {
  		n = args[i];
  		if ( !(!isNaN(parseFloat(n)) && isFinite(n)) ) {
  			return false;
  		} 
  	}
  	return true;
  };

  // Return private functions
  return {
  isNum: isNum,
  };

})();