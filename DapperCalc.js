/* jshint strict: true */
/* global isNum */

var dapperCalc = (function () {
  "use strict";

  // abv (Alchol by Volume)
  // og = number | Original Gravity | ex: 1.088
  // fg - number | Final Gravity | ex: 1.018
  var abv = function (og, fg) {
    if (og > fg && isNum(og, fg)) {
      var calc = (((1.05 * (og - fg)) / fg) / 0.79) * 100;
      return Math.round(calc * 100) / 100;
    }
    return null;
  };

  // abw (Alchol by Weight)
  // og = number | Original Gravity | ex: 1.088
  // fg - number | Final Gravity | ex: 1.018
  var abw = function (og, fg) {
    if (og > fg && isNum(og, fg)) {
      var theabv = abv(og, fg);
      var calc = ((theabv * 0.79336) / fg);
      return Math.round(calc * 100) / 100;
    }
    return null;
  };

  // Specific Gravity (sg) to plato
  // can also be used for sg to brix
  // sgravity = number | specific gravity
  var sg2plato = function (sgravity) {
    if (isNum(sgravity)) {
      var calc = (-616.868) + (1111.14 * sgravity) - (630.272 * Math.pow(sgravity, 2)) + (135.997 * Math.pow(sgravity, 3));
      return Math.round(calc * 10) / 10;
    }
    return null;
  };

  // plato to sg (specific gravity)
  // can also be used for brix to sg
  // plato = number | plato or brix
  var plato2sg = function (plato) {
    if (isNum(plato)) {
      var calc = (plato / (258.6 - ((plato / 258.2) * 227.1)) + 1);
      return Math.round(calc * 1000) / 1000;
    }
    return null;
  };

  // Real Extract
  // og = number | original gravity
  // fg = number | original gravity
  // http://hbd.org/ensmingr/
  var realExtract = function (og, fg) {
    if (isNum(og, fg)) {
      return (0.1808 * sg2plato(og)) + (0.8192 * sg2plato(fg));
    }
    return null;
  };

  // calories (total)
  // for 12oz
  // og = number | original gravity
  // fg = number | final gravity
  // http://hbd.org/ensmingr/
  var calories = function (og, fg) {
    if (isNum(og, fg)) {
      var calc = (6.9 * dapperCalc.abw(og, fg) + 4.0 * (dapperCalc.realExtract(og, fg) - 0.1)) * fg * 3.55;
      return Math.round(calc * 10) / 10;
    }
    return null;
  };

  // Apparent Attenuation
  // og = number | original gravity
  // fg = number | final gravity
  // http://hbd.org/ensmingr/
  var aAttenuation = function (og, fg) {
    if (isNum(og, fg)) {
      var calc = 100 * (1 - (dapperCalc.sg2plato(fg) / dapperCalc.sg2plato(og)));
      return Math.round(calc * 10) / 10;
    }
    return null;
  };

  // Real Attenuation
  // og = number | original gravity
  // fg = number | final gravity
  // http://hbd.org/ensmingr/
  var rAttenuation = function (og, fg) {
    if (isNum(og, fg)) {
      var calc = 100 * (1 - (dapperCalc.realExtract(og, fg) / dapperCalc.sg2plato(og)));
      return Math.round(calc * 10) / 10;
    }
    return null;
  };


  // aau (Alpha Acid Units)
  // weight = number | ounces of hops
  // aa = number | Alpha Acids percentage
  var aau = function (weight, aa) {
    if (isNum(weight, aa)) {
      return weight * aa;
    }
    return null;
  };


  // utilization (Hop Utilization)
  // time = number | time left in boil
  // gravity = number | gravity of wort when adding hops
  // http://realbeer.com/hops/research.html
  var utilization = function (time, gravity) {
    if (isNum(time, gravity)) {
      var bigness = (1.65 * Math.pow(0.000125, (gravity - 1)));
      var timeFactor = (1 - Math.pow(Math.E, (-0.04 * time))) / 4.15;
      return bigness * timeFactor;
    }
    return null;
  };

  // IBU (International Bittering Units)
  // Tinsenth
  // weight = number | ounces of hops
  // aa = number | alpha acids percentage
  // time = number | time left in boil
  // gravity = number | gravity of wort when adding hops
  // volume = number | post boil Volume
  var ibu = function (weight, aa, time, gravity, volume) {
    if (isNum(weight, aa, time, gravity, volume)) {
      var calc = (aau(weight, aa) * utilization(time, gravity) * 74.89) / volume;
      // multiply by 1.1 to account for pellet vs whole hop
      calc = calc * 1.1;
      return Math.round(calc * 10) / 10;
    }
    return null;
  };

  // MCU (Malt Color Units)
  // weight = number | weight of grains
  // lovibond = number | color of grains in lovibond
  // volume = number | batch size + deadspace/trub loss
  // Morey's Formula
  var mcu = function (weight, lovibond, volume) {
    if (isNum(weight, lovibond, volume)) {
      return (weight * lovibond) / volume;
    }
    return null;
  };

  // SRM (standard reference method)
  // accepts infinite # of arguments (MCU)
  // arguments = number | MCU (Malt Color Units)
  // Morey's Formula
  var srm = function () {
    var args = arguments,
      totalMcu = 0;
    for (var i = 0; i < args.length; i++) {
      if (isNum()) {
        totalMcu += args[i];
      } else {
        return null;
      }
    }
    var calc = 1.4922 * (Math.pow(totalMcu, 0.6859));
    return Math.round(calc * 10) / 10;
  };

  // Specific Gravity to Gravity Points
  // sg = number | Specific Gravity
  var sg2gp = function (sg) {
    if (isNum(sg)) {
      var calc = (sg - 1) * 1000;
      return Math.round(calc);
    }
    return null;
  };

  var gp2sg = function (gp) {
    if (isNum(gp)) {
      return (gp / 1000) + 1;
    }
    return null;
  };

  // Adjust with Water
  // Estimate how much water is needed reach target gravity
  // sg = number | specific/current gravity
  // tg = number | target gravity
  // volume = current volume (in gallons)
  var adjustWater = function (sg, tg, volume) {
    if (sg >= tg && isNum(sg, tg, volume)) {
      var calc = ((volume * sg2gp(sg)) / sg2gp(tg)) - volume;
      return Math.round(calc * 100) / 100;
    }
    return null;
  };

  // Adjust with extract
  // Estimate how much extract is needed to reach target gravity
  // Returns lb needed
  // sg = number | specific/current gravity
  // tg = number | target gravity
  // volume = number | current volume (in gallons)
  // extract = string or number | "LME", "DME", or custom Gravity Point value
  var adjustExtract = function (sg, tg, volume, extract) {
    if (sg <= tg && isNum(sg, tg, volume)) {
      var extractType;
      if (extract === "LME") {
        extractType = 36;
      } else if (extract === "DME") {
        extractType = 44;
      } else if (isNum(extract)) {
        extractType = extract;
      }
      var calc = (dapperCalc.sg2gp(tg) - dapperCalc.sg2gp(sg)) * volume / extractType;
      return Math.round(calc * 100) / 100;
    }
    return null;
  };

  // How much volume is lost after wort cools
  // percentage = number | how much wort shrinks due to cooling
  // volume = number (gallons) | volume of hot wort
  var shrinkage = function (percentage, volume) {
    if (isNum(percentage, volume)) {
      return volume * (percentage / 100);
    }
    return null;
  };

  // Returns how much volume (gallons) is lost to evaporation per hour
  // volume = number (gallons) | pre-boil volume
  // rate = number | either percentage lost per hour or volume (gallons) lost per hour
  // measurement = string | "percPerHour" for percentage/hour. "volPerHour" for volume/hour
  var evapPerHour = function (volume, rate, measurement) {
    if (isNum(volume, rate)) {
      if (measurement === "percPerHour") {
        return volume * (rate / 100);
      }
      if (measurement === "volPerHour") {
        return rate;
      }
      return null;
    }
    return null;
  };

  // Returns how much total volume (gallons) is lost during the boil to evaporation 
  // evapPerHour = number | how much volume is lost per hour to evaporation. Can use evapLoss()
  // boilTime = number | total length of boil
  var totalBoilLoss = function (evapPerHour, boilTime) {
    if (isNum(evapPerHour, boilTime)) {
      return evapPerHour * (boilTime / 60);
    }
    return null;
  };

  var postBoilVolume = function (startVol, boilLoss, shrinkLoss) {
    if (isNum(startVol, boilLoss, shrinkLoss)) {
      return startVol - (boilLoss + shrinkLoss);
    }
    return null;
  };

  var postBoilGravity = function (startVol, sg, finalVol) {
    if (isNum(startVol, sg, finalVol)) {
      var calc =  (startVol * dapperCalc.sg2gp(sg)) / finalVol;
      calc = gp2sg(calc);
      return Math.round(calc * 1000) / 1000;
    }
    return null;
  };

  // future:
  // final gravity points = (1v*1GP * 2v*2GP) / (1v + 2v)

  return {
    abv: abv,
    abw: abw,
    sg2plato: sg2plato,
    plato2sg: plato2sg,
    realExtract: realExtract,
    calories: calories,
    aAttenuation: aAttenuation,
    rAttenuation: rAttenuation,
    aau: aau,
    utilization: utilization,
    ibu: ibu,
    mcu: mcu,
    srm: srm,
    sg2gp: sg2gp,
    gp2sg: gp2sg,
    adjustWater: adjustWater,
    adjustExtract: adjustExtract,
    shrinkage: shrinkage,
    evapPerHour: evapPerHour,
    totalBoilLoss: totalBoilLoss,
    postBoilVolume: postBoilVolume,
    postBoilGravity: postBoilGravity,
  };

}());