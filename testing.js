var dapperCalc = (function () {

	// abv (Alchol by Volume)
	// og = number | Original Gravity | ex: 1.088
	// fg - number | Final Gravity | ex: 1.018
  var abv = function (og, fg) {
    if( og > fg && !isNaN(og) && !isNaN(fg) ) {
    	var calc = (((1.05 * (og - fg)) / fg) / 0.79) * 100;
    	return Math.round(calc * 10) / 10;
    }
    else {
    	return null;
    }
  };

  // abw (Alchol by Weight)
	// og = number | Original Gravity | ex: 1.088
	// fg - number | Final Gravity | ex: 1.018
  var abw = function (og, fg) {
    if( og > fg && !isNaN(og) && !isNaN(fg) ) {
    	var theabv = abv(og, fg);
    	console.log(abv(og,fg));
    	var calc = ((abv(og,fg) * 0.79336) / fg);
    	return Math.round(calc * 10) / 10;
    }
    else {
    	return null;
    }
  };

  // aau (Alpha Acid Units)
  // weight = number | ounces of hops
  // aa = number | Alpha Acids percentage
  var aau = function (weight, aa) {
  	if (!isNaN(weight) && !isNaN(aa)) {
  		return weight * aa;
  	}
  	else {
  		return null;
  	}
  };


  // utilization (Hop Utilization)
  // time = number | time left in boil
  // gravity = number | gravity of wort when adding hops
  // http://realbeer.com/hops/research.html
  var utilization = function(time, gravity) {
  	if (!isNaN(time) && !isNaN(gravity)) {
  		var bigness = (1.65 * Math.pow(0.000125,(gravity - 1)));
  		var timeFactor = (1 - Math.pow(Math.E,(-0.04 * time))) / 4.15;
  		return bigness * timeFactor;
  	}
  	else {
  		return null;
  	}
  };

  // IBU (International Bittering Units)
  // Tinsenth
  // weight = number | ounces of hops
  // aa = number | alpha acids percentage
  // time = number | time left in boil
  // gravity = number | gravity of wort when adding hops
  // volume = number | post boil Volume

  var ibu = function(weight, aa, time, gravity, volume) {
  	if (!isNaN(weight) && !isNaN(aa) && !isNaN(time) && !isNaN(gravity) && !isNaN(volume)) {
  		calc = (aau(weight, aa) * utilization(time, gravity) * 74.89) / volume;
  		// multiply by 1.1 to account for pellet vs whole hop
  		calc = calc * 1.1;
  		return Math.round(calc * 10) / 10;
  	}
  	else {
  		return null;
  	}
  };


  
  return {
    abv: abv,
    abw: abw,
    aau: aau,
    utilization: utilization,
    ibu: ibu
  };

})();