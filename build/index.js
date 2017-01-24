'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.estimateOriginalGravity = exports.postBoilGravity = exports.postBoilVolume = exports.shrinkage = exports.totalBoilLoss = exports.evapLossPerHour = exports.adjustExtract = exports.adjustWater = exports.gp2sg = exports.sg2gp = exports.srm = exports.mcu = exports.ibu = exports.utilization = exports.aau = exports.rAttenuation = exports.aAttenuation = exports.caloriesTotal = exports.caloriesCarbs = exports.caloriesAlcohol = exports.realExtract = exports.plato2sg = exports.sg2plato = exports.abw = exports.abv = undefined;

var _round = require('lodash/round');

var _round2 = _interopRequireDefault(_round);

var _every = require('lodash/every');

var _every2 = _interopRequireDefault(_every);

var _isFinite = require('lodash/isFinite');

var _isFinite2 = _interopRequireDefault(_isFinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helper functions

var isNum = function isNum() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _every2.default)(args, _isFinite2.default);
};

// Calculations

/**
 * Calculates the alcohol by volume (abv) <br>
 * @module abv
 * @param  {number} og original gravity (og)
 * @param  {number} fg final gravity (fg)
 * @return {number} (((1.05 x (og - fg)) / fg) / 0.79) x 100;
 *
 * @example
 * // returns 9.84
 * abv(1.088, 1.013);
 */

var abv = exports.abv = function abv(og, fg) {
  if (!isNum(og, fg)) {
    // if not a number, throw an error
    throw new Error('arguments must be a number');
  } else if (og < fg) {
    // if original gravity is less than final gravity, throw an error
    throw new Error('Original Gravity should be greater than Final Gravity');
  } else {
    var calc = 1.05 * (og - fg) / fg / 0.79 * 100;
    var calcRound = (0, _round2.default)(calc, 2);

    return calcRound;
  }
};

/**
 * Calculates the Alcohol by weight (ABW)
 * @module abw
 * @param  {number} og The original gravity (og)
 * @param  {number} fg The final gravity (nfg)
 * @return {number} (abv x 0.79336) / fg
 *
 * @example
 * // returns 7.71
 * abw(1.088, 1.013);
 */

var abw = exports.abw = function abw(og, fg) {
  if (!isNum(og, fg)) {
    // if arguments are not a number, throw error
    throw new Error('arguments must be a number');
  } else if (og < fg) {
    // if original gravity is not greater than final gravity, throw error
    throw new Error('Original Gravity should be greater than Final Gravity');
  } else {
    var theabv = abv(og, fg);
    var calc = theabv * 0.79336;
    var calcRound = (0, _round2.default)(calc, 2);

    return calcRound;
  }
};

/**
 * Convert specific gravity (sg) to plato
 * @module sg2plato
 * @param  {number} sg the specific gravity (sg)
 * @return {number}    (-616.868) + (1111.14 x sg) - (630.272 x sg^2) + (135.997 x sg^3)
 *
 * @example
 * // returns 21.1
 * sg2plato(1.088);
 */

var sg2plato = exports.sg2plato = function sg2plato(sgravity) {
  if (isNum(sgravity)) {
    var calc = -616.868 + 1111.14 * sgravity - 630.272 * Math.pow(sgravity, 2) + 135.997 * Math.pow(sgravity, 3);
    var calcRound = (0, _round2.default)(calc, 1);
    return calcRound;
  }
  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Convert plato to specific gravity (sg)
 * @module plato2sg
 * @param  {number} plato plato number to be converted
 * @return {number}    plato / (258.6 -((plato / 258.2) x 227.1)) + 1
 *
 * @example
 * // returns 1.074
 * plato2sg(18);
 */

var plato2sg = exports.plato2sg = function plato2sg(plato) {
  if (isNum(plato)) {
    var calc = plato / (258.6 - plato / 258.2 * 227.1) + 1;
    var calcRound = (0, _round2.default)(calc, 3);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate real extract from starting gravity & final gravity.
 * @module realExtract
 * @param  {number} og original gravity (og)
 * @param  {number} fg final gravity (fg)
 * @see {@link http://hbd.org/ensmingr/|hbd.org/ensmingr}
 * @return {number}    (0.1808 × °Pi) + (0.8192 × °Pf)
 *
 * @example
 * // returns 6.3544
 * realExtract(1.088, 1.012);
 */

var realExtract = exports.realExtract = function realExtract(og, fg) {
  if (isNum(og, fg)) {
    var calc = 0.1808 * sg2plato(og) + 0.8192 * sg2plato(fg);
    return calc;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
* Calculate number of calories from Alcohol in 12oz serving.
* @module caloriesAlcohol
* @param  {number} og original gravity (og)
* @param  {number} fg final gravity (fg)
* @see {@link https://www.homebrewersassociation.org/how-to-brew/how-many-calories-are-in-beer/|www.homebrewersassociation.org}
* @return {number}    1881.22 * fg * ((og - fg) / (1.775 - og))
*
* @example
* // returns 210.61
* caloriesAlcohol(1.088, 1.012);
*/

var caloriesAlcohol = exports.caloriesAlcohol = function caloriesAlcohol(og, fg) {
  if (isNum(og, fg)) {
    var calc = 1881.22 * fg * ((og - fg) / (1.775 - og));

    var calcRound = (0, _round2.default)(calc, 2);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
* Calculate number of calories from carbs in 12oz serving.
* @module caloriesCarbs
* @param  {number} og original gravity (og)
* @param  {number} fg final gravity (fg)
* @see {@link https://www.homebrewersassociation.org/how-to-brew/how-many-calories-are-in-beer/|www.homebrewersassociation.org}
* @return {number}    3550.0 * fg * ((0.1808 * og) + ((0.8192 * fg) - 1.0004))
*
* @example
* // returns 91.04
* caloriesCarbs(1.088, 1.012);
*/

var caloriesCarbs = exports.caloriesCarbs = function caloriesCarbs(og, fg) {
  if (isNum(og, fg)) {
    var calc = 3550.0 * fg * (0.1808 * og + (0.8192 * fg - 1.0004));
    var calcRound = (0, _round2.default)(calc, 2);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
* Calculate number of calories in 12oz serving.
* @module caloriesTotal
* @param  {number} og original gravity (og)
* @param  {number} fg final gravity (fg)
* @see {@link https://www.homebrewersassociation.org/how-to-brew/how-many-calories-are-in-beer/|www.homebrewersassociation.org}
* @return {number}    calories from alcohol + calories from carbs
*
* @example
* // returns 301.65
* caloriesTotal(1.088, 1.012);
*/

var caloriesTotal = exports.caloriesTotal = function caloriesTotal(og, fg) {
  if (isNum(og, fg)) {
    var calc = caloriesAlcohol(og, fg) + caloriesCarbs(og, fg);
    var calcRound = (0, _round2.default)(calc, 2);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate the apparent attenuation
 * @module aAttenuation
 * @param  {number} og original gravity (og)
 * @param  {number} fg final gravity (fg)
 * @see {@link http://hbd.org/ensmingr/|hbd.org/ensmingr}
 * @return {number}    100 x (1 - (°Pf / °Pi))
 *
 * @example
 * // return 85.3
 * aAttenuation(1.088, 1.012);
 */

var aAttenuation = exports.aAttenuation = function aAttenuation(og, fg) {
  if (isNum(og, fg)) {
    var calc = 100 * (1 - sg2plato(fg) / sg2plato(og));
    var calcRound = (0, _round2.default)(calc, 1);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate the real attenuation
 * @module rAttenuation
 * @param  {number} og original gravity (og)
 * @param  {number} fg final gravity (fg)
 * @see {@link http://hbd.org/ensmingr/|hbd.org/ensmingr}
 * @return {number}    100 x (1 - (real extract / °Pi)
 *
 * @example
 * // return 69.9
 * rAttenuation(1.088, 1.012);
 */

var rAttenuation = exports.rAttenuation = function rAttenuation(og, fg) {
  if (isNum(og, fg)) {
    var calc = 100 * (1 - realExtract(og, fg) / sg2plato(og));
    var calcRound = (0, _round2.default)(calc, 1);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate Alpha Acid Units
 * @module aau
 * @param  {number} weight weight of hops (in oz)
 * @param  {number} aa     Alpha Acidic percentage
 * @todo   Add imperial unit option (grams)
 * @return {number}        weight x Alpha Acid Percentage
 *
 * @example
 * // returns 18
 * aau(1.5, 12);
 */

var aau = exports.aau = function aau(weight, aa) {
  if (isNum(weight, aa)) {
    return weight * aa;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Hop Utilization (Tinseth)
 * @module utilization
 * @param  {number} time      time left in boil (minutes)
 * @param  {number} gravity   Specific gravity (sg) of pre-boil wort
 * @see {@link http://realbeer.com/hops/research.html|realbeer.com}
 * @todo   Add rager scale option
 * @return {number}           utilization = bigness factor x boil time factor
 *
 * @example
 * // returns 0.2348476097710606
 * utilization(60, 1.048);
 */

var utilization = exports.utilization = function utilization(time, gravity) {
  if (isNum(time, gravity)) {
    var bigness = 1.65 * Math.pow(0.000125, gravity - 1);
    var timeFactor = (1 - Math.pow(Math.E, -0.04 * time)) / 4.15;
    return bigness * timeFactor;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate IBU for hop addition (Tinseth / pellets)
 * @module ibu
 * @param  {number} weight  Weight of hops (oz)
 * @param  {number} aa      Alpha acids percentage of hops
 * @param  {number} time   time left in boil (minutes)
 * @param  {number} gravity Specific Gravity of wort (pre-boil)
 * @param  {number} volume  post boil volume (gallons)
 * @see {@link http://howtobrew.com/book/section-1/hops/hop-bittering-calculations|howtobrew.com/}
 * @todo allow for grams for hops
 * @todo allow for liter for volume
 * @todo allow for rager scale
 * @todo allow for whole hops
 * @return {number}         (aau x utilization x 74.89) / volume
 *
 * @example
 * // returns 63.3
 * ibu(1.5, 12, 60, 1.048, 5.5);
 */

var ibu = exports.ibu = function ibu(weight, aa, time, gravity, volume) {
  if (isNum(weight, aa, time, gravity, volume)) {
    var calc = aau(weight, aa) * utilization(time, gravity) * 74.89 / volume;

    // multiply by 1.1 to account for pellet vs whole hop
    calc *= 1.1;
    var calcRound = (0, _round2.default)(calc, 1);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate Malt Color Units
 * @module mcu
 * @param  {number} weight   weight of grain/fermentable (in lb)
 * @param  {number} lovibond color of grains in lovibond
 * @param  {number} volume   batch size (in gallons) including deadspace/trub loss
 * @todo support kg for weight
 * @todo support liter for volume
 * @return {number}          (weight * lovibond) / volume
 *
 * @example
 * // return 5.727
 * mcu(9, 3.5, 5.5);
 */

var mcu = exports.mcu = function mcu(weight, lovibond, volume) {
  if (isNum(weight, lovibond, volume)) {
    var calc = weight * lovibond / volume;
    var calcRound = (0, _round2.default)(calc, 3);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculates color (SRM) of eer using standard reference method (Morey equation)
 * @module srm.
 * @param  {...number} mcuNum MCU units to covert to SRM. Accepts infinite # of arguments.
 * @return {number}      1.4922 x (MCU x 0.6859)
 *
 * @example
 * // returns 4.9
 * srm(5.72);
 *
 * // returns 6.4
 * srm(5.72, 2.54);
 */

var srm = exports.srm = function srm() {
  var totalMcu = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    if (isNum(arguments.length <= i ? undefined : arguments[i])) {
      totalMcu += arguments.length <= i ? undefined : arguments[i];
    } else {
      // if its not a number, throw an error
      throw new Error('arguments must be a number');
    }
  }
  var calc = 1.4922 * Math.pow(totalMcu, 0.6859);
  var calcRound = (0, _round2.default)(calc, 1);
  return calcRound;
};

/**
 * Convert specific gravity (sg) to gravity points.
 * @module sg2gp
 * @param  {number} sg The specific gravity (sg)
 * @return {number}    (sg - 1) x 1000
 *
 * @example
 * // return 88
 * sg2gp(1.088);
 */

var sg2gp = exports.sg2gp = function sg2gp(sg) {
  if (isNum(sg)) {
    var calc = (sg - 1) * 1000;
    var calcRound = (0, _round2.default)(calc);
    return calcRound;
  }
  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Convert gravity points to specific gravity (sg)
 * @module gp2sg
 * @param  {number} gp Gravitiy points
 * @return {number}    (gravity points / 1000) + 1
 *
 * @example
 * // return 1.088
 * gp2sg(88);
 */

var gp2sg = exports.gp2sg = function gp2sg(gp) {
  if (isNum(gp)) {
    var calc = gp / 1000 + 1;
    return calc;
  }
  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate water needed to reach target gravity.
 * @module adjustWater
 * @param  {number} sg     Current/Specific gravity (sg)
 * @param  {number} tg     Target gravity
 * @param  {number} volume current volume (gallons)
 * @todo support liters for input volume
 * @todo support liters for return
 * @return {number}        (volume x sg / target gravity points) - volume
 *
 * @example
 * // return .64
 * adjustWater(1.088, 1.078, 5);
 */

var adjustWater = exports.adjustWater = function adjustWater(sg, tg, volume) {
  if (!isNum(sg, tg, volume)) {
    // if arguments are not a number, throw an error
    throw new Error('arguments must be a number');
  } else if (sg < tg) {
    // if target gravity number is not less than specific gravity.
    throw new Error('target gravity must be less than specific gravity');
  } else {
    var calc = volume * sg2gp(sg) / sg2gp(tg) - volume;
    var calcRound = (0, _round2.default)(calc, 2);
    return calcRound;
  }
};

/**
 * Calculate how much extract (in lb) is needed to reach target gravity.
 * @module adjustExtract
 * @param  {number} sg      Current / specific gravity (sg)
 * @param  {number} tg      target gravity
 * @param  {number} volume  volume (gallons)
 * @param  {(string|number)} extract 'DME', 'LME', or custom gravity point value.
 * @todo support liters for input volume.
 * @todo support kilograms for output volume
 * @return {number}        lb = (target gravity - sg) x volume / extract gravity points
 *
 * @example
 * // return 1.39
 * adjustExtract(1.078, 1.088, 5, 'LME');
 *
 * // return 1.14
 * adjustExtract(1.078, 1.088, 5, 'DME');
 *
 * // return 1.14
 * adjustExtract(1.078, 1.088, 5, 46);
 */

var adjustExtract = exports.adjustExtract = function adjustExtract(sg, tg, volume, extract) {
  if (sg > tg) {
    throw new Error('target travity must be greater than specific gravity');
  } else if (!isNum(sg, tg, volume)) {
    // if arguments are not a number, throw an error
    throw new Error('arguments must be a number');
  } else {
    var extractType = '';
    if (extract === 'LME') {
      extractType = 36;
    } else if (extract === 'DME') {
      extractType = 44;
    } else if (isNum(extract)) {
      extractType = extract;
    } else {
      throw new Error('invalid extract argument');
    }
    var calc = (sg2gp(tg) - sg2gp(sg)) * volume / extractType;
    var calcRound = (0, _round2.default)(calc, 2);
    return calcRound;
  }
};

/**
 * Calculate how much volume (gallons) is lost per hour to evaperation
 * @module evapLossPerHour
 * @param  {number} volume                     pre-boil volume (gallons)
 * @param  {number} ratePerHour                percentage or voluem lost per hour
 * @param  {string} [rateMeasurement=percentage] set rate measurement to 'percentage' or 'volume'
 * @todo option for input volume to be liters
 * @todo option for output volume to be liters
 * @return {number} volume x (percentage lost per hour / 100)
 *
 * @example
 * // return 0.60
 * evapPerHour(6, 10);
 *
 * // return 0.60
 * evapPerHour(6, 10, 'percentage');
 *
 * // return 0.50
 * evapPerHour(6, .5, 'volume');
 */

var evapLossPerHour = exports.evapLossPerHour = function evapLossPerHour(volume, ratePerHour) {
  var rateMeasurement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'percentage';

  if (isNum(volume, ratePerHour)) {
    if (rateMeasurement === 'percentage') {
      var calc = volume * (ratePerHour / 100);
      var calcRound = (0, _round2.default)(calc, 2);
      return calcRound;
    } else if (rateMeasurement === 'volume') {
      var _calcRound = (0, _round2.default)(ratePerHour, 2);
      return _calcRound;
    }
    throw new Error('invalid measurement argument');
  }
  // if arguments are not a number, throw an error
  throw new Error('volume & rate must be a number');
};

/**
 * Calculate total volume (gallons) lost during boil to evaperation
 * @module totalBoilLoss
 * @param  {number} lossPerHour amount of volume (in lb) lost per hour to evaperation
 * @param  {number} boilTime        length of boil (in minutes)
 * @todo support volume input in liters
 * @todo support volume output in liters
 * @return {number}                 evapLossPerHour x (boilTime / 60)
 *
 * @example
 * // return 0.90
 * totalBoilLoss(.60, 90);
 */

var totalBoilLoss = exports.totalBoilLoss = function totalBoilLoss(lossPerHour, boilTime) {
  if (isNum(lossPerHour, boilTime)) {
    var calc = lossPerHour * (boilTime / 60);
    var calcRound = (0, _round2.default)(calc, 2);
    return calcRound;
  }
  // if arguments are not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Volume lost after wort cools (in gallons)
 * @module shrinkage
 * @param  {number} volume     pre-boil volume (gallons)
 * @param  {number} boilLoss   Amount of volume (gallons) lost to boil.
 * @param  {number} [percentage = 4] percentage the wort shrinks due to cooling
 * @todo support input volume in liters
 * @todo support return volume in liters
 * @todo support boilLoss in liters
 * @return {number}            volume x (percentage/100)
 *
 * @example
 * // return 0.24
 * shrinkage(7, 0.90);
 *
 * // return 0.15
 * shrinkage(7, 0.90, 3);
 */

var shrinkage = exports.shrinkage = function shrinkage(volume, boilLoss) {
  var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

  if (isNum(volume, boilLoss, percentage)) {
    var calc = (volume - boilLoss) * (percentage / 100);
    var calcRound = (0, _round2.default)(calc, 2);
    return calcRound;
  }
  // if arguments are not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate post boil volume (gallons)
 * @module postBoilVolume
 * @param  {number} startVol   Starting volume pre-boil (gallons)
 * @param  {number} boilLoss   volume loss to boil (gallons)
 * @param  {number} shrinkLoss volume loss to shrinking during cooling (gallons)
 * @todo support input startVal in liters
 * @todo support input boilLoss in liters
 * @todo support input shrinkLoss in liters
 * @todo support return value in liters
 * @return {number}            start_volume - (boil_loss + shrink_loss)
 *
 * @example
 * // return 6.86
 * postBoilVolume(7, 0.90, 0.24)
 */

var postBoilVolume = exports.postBoilVolume = function postBoilVolume(startVol, boilLoss, shrinkLoss) {
  if (isNum(startVol, boilLoss, shrinkLoss)) {
    var calc = startVol - (boilLoss + shrinkLoss);
    var calcRound = (0, _round2.default)(calc, 2);
    return calcRound;
  }
  // if arguments are not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Calculate post boil gravity.
 * @module postBoilGravity
 * @param  {number} startVol Starting volume (gallons)
 * @param  {number} sg       starting gravity (sg)
 * @param  {number} finalVol Final volume (gallons)
 * @todo   support starting volume in liters
 * @todo   support final volume in liters
 * @return {number} (starting_volume x gravity_points) / final_volume
 *
 * @example
 * // return 1.072
 * postBoilGravity(7, 1.059, 5.71)
 */

var postBoilGravity = exports.postBoilGravity = function postBoilGravity(startVol, sg, finalVol) {
  if (isNum(startVol, sg, finalVol)) {
    var calc = startVol * sg2gp(sg) / finalVol;
    calc = gp2sg(calc);
    var calcRound = (0, _round2.default)(calc, 3);
    return calcRound;
  }
  // if arguments are not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Estimate Original Gravity
 * @module estimateOriginalGravity
 * @param {number} gravityPoints Total gravity points of fermentables
 * @param {number} efficiency estimated brewhouse efficiency
 * @param {number} finalVolume final volume into fermentor
 * @todo support final volume in liters
 * @return {number} (gravityPoints * efficiency) / finalVolume
 *
 * @example
 * // return 1.047
 * estimateOriginalGravity(350, 74, 5.5)
 */

var estimateOriginalGravity = exports.estimateOriginalGravity = function estimateOriginalGravity(gravityPoints, efficiency, finalVolume) {
  if (isNum(gravityPoints, efficiency, finalVolume)) {
    var calc = gravityPoints * efficiency * 0.01 / finalVolume;
    calc = gp2sg(calc);
    var calcRound = (0, _round2.default)(calc, 3);
    return calcRound;
  }
  throw new Error('arguments must be a number');
};
