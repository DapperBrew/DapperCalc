import round from 'lodash/round';
import every from 'lodash/every';
import isFinite from 'lodash/isFinite';

// Helper functions

const isNum = (...args) => every(args, isFinite);


// Calculations

/**
 * Calculates the alcohol by volume (abv) <br>
 * @module abv
 * @param  {number} og original gravity (og)
 * @param  {number} fg final gravity (fg)
 * @return {number} (((1.05 x (og - fg)) / fg) / 0.79) x 100;
 * explore this advanced calc: ABV =(76.08 * (og-fg) / (1.775-og)) * (fg / 0.794)
 *
 * @example
 * // returns 9.84
 * abv(1.088, 1.013);
 */

export const abv = (og, fg) => {
  if (!isNum(og, fg)) {
    // if not a number, throw an error
    throw new Error('arguments must be a number');
  } else if (og < fg) {
    // if original gravity is less than final gravity, throw an error
    throw new Error('Original Gravity should be greater than Final Gravity');
  } else {
    const calc = (((1.05 * (og - fg)) / fg) / 0.79) * 100;
    const calcRound = round(calc, 2);

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

export const abw = (og, fg) => {
  if (!isNum(og, fg)) {
    // if arguments are not a number, throw error
    throw new Error('arguments must be a number');
  } else if (og < fg) {
    // if original gravity is not greater than final gravity, throw error
    throw new Error('Original Gravity should be greater than Final Gravity');
  } else {
    const theabv = abv(og, fg);
    const calc = theabv * 0.79336;
    const calcRound = round(calc, 2);

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

export const sg2plato = (sgravity) => {
  if (isNum(sgravity)) {
    const calc = (-616.868)
                  + (1111.14 * sgravity)
                  - (630.272 * (sgravity ** 2))
                  + (135.997 * (sgravity ** 3));
    const calcRound = round(calc, 1);
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

export const plato2sg = (plato) => {
  if (isNum(plato)) {
    const calc = ((plato / (258.6 - ((plato / 258.2) * 227.1))) + 1);
    const calcRound = round(calc, 3);
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

export const realExtract = (og, fg) => {
  if (isNum(og, fg)) {
    const calc = (0.1808 * sg2plato(og)) + (0.8192 * sg2plato(fg));
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

export const caloriesAlcohol = (og, fg) => {
  if (isNum(og, fg)) {
    const calc = 1881.22 * fg * ((og - fg) / (1.775 - og));

    const calcRound = round(calc, 2);
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

export const caloriesCarbs = (og, fg) => {
  if (isNum(og, fg)) {
    const calc = 3550.0 * fg * ((0.1808 * og) + ((0.8192 * fg) - 1.0004));
    const calcRound = round(calc, 2);
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

export const caloriesTotal = (og, fg) => {
  if (isNum(og, fg)) {
    const calc = caloriesAlcohol(og, fg) + caloriesCarbs(og, fg);
    const calcRound = round(calc, 2);
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

export const aAttenuation = (og, fg) => {
  if (isNum(og, fg)) {
    const calc = 100 * (1 - (sg2plato(fg) / sg2plato(og)));
    const calcRound = round(calc, 1);
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

export const rAttenuation = (og, fg) => {
  if (isNum(og, fg)) {
    const calc = 100 * (1 - (realExtract(og, fg) / sg2plato(og)));
    const calcRound = round(calc, 1);
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

export const aau = (weight, aa) => {
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

export const utilization = (time, gravity) => {
  if (isNum(time, gravity)) {
    const bigness = (1.65 * (0.000125 ** (gravity - 1)));
    const timeFactor = (1 - (Math.E ** (-0.04 * time))) / 4.15;
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
 * @param  {number} adjust percentage to adjust hop utilization
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

export const ibu = (weight, aa, time, gravity, volume, adjust) => {
  if (isNum(weight, aa, time, gravity, volume)) {
    let utilizationNum;
    if (adjust) {
      utilizationNum = utilization(time, gravity) * ((adjust / 100) + 1);
    } else {
      utilizationNum = utilization(time, gravity);
    }
    const calc = (aau(weight, aa) * utilizationNum * 74.89) / volume;

    const calcRound = round(calc, 1);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};


/**
 * SRM to Lovibond
 * @module srm2lovibond
 * @param  {number} srm   SRM # to be converted
 * @see {@link https://en.wikipedia.org/wiki/Standard_Reference_Method}
 * @return {number}   Lovibond = (SRM + 0.76) / 1.3546
 *
 * @example
 * // return 6.5
 * srm2lovibond(8);
 *
 * // return 22.7
 * srm2lovibond(30);
 */

export const srm2lovibond = (srm) => {
  if (isNum(srm)) {
    const calc = (srm + 0.76) / 1.3546;
    const calcRound = round(calc, 1);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};


/**
 * Lovibond to SRM
 * @module lovibond2srm
 * @param  {number} srm   Lovibond # to be converted
 * @see {@link https://en.wikipedia.org/wiki/Standard_Reference_Method}
 * @return {number}   SRM = (1.3546 × lovibond) - 0.76
 *
 * @example
 * // return 8.7
 * lovibond2srm(7);
 *
 * // return 30.4
 * lovibond2srm(23);
 */

export const lovibond2srm = (lovibond) => {
  if (isNum(lovibond)) {
    const calc = (1.3546 * lovibond) - 0.76;
    const calcRound = round(calc, 1);
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

export const mcu = (weight, lovibond, volume) => {
  if (isNum(weight, lovibond, volume)) {
    const calc = (weight * lovibond) / volume;
    const calcRound = round(calc, 3);
    return calcRound;
  }

  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};


/**
 * Calculates color (SRM) of eer using standard reference method (Morey equation)
 * @module srm.
 * @param  {...number} mcuNum MCU units to covert to SRM. Accepts infinite # of arguments.
 * @return {number}      1.4922 x (MCU ^ 0.6859)
 *
 * @example
 * // returns 4.9
 * srm(5.72);
 *
 * // returns 6.4
 * srm(5.72, 2.54);
 */

export const srm = (...mcuNum) => {
  let totalMcu = 0;
  for (let i = 0; i < mcuNum.length; i += 1) {
    if (isNum(mcuNum[i])) {
      totalMcu += mcuNum[i];
    } else {
      // if its not a number, throw an error
      throw new Error('arguments must be a number');
    }
  }
  const calc = 1.4922 * (totalMcu ** 0.6859);
  const calcRound = round(calc, 1);
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

export const sg2gp = (sg) => {
  if (isNum(sg)) {
    const calc = (sg - 1) * 1000;
    const calcRound = round(calc);
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

export const gp2sg = (gp) => {
  if (isNum(gp)) {
    const calc = (gp / 1000) + 1;
    return calc;
  }
  // if its not a number, throw an error
  throw new Error('arguments must be a number');
};


/**
 * Calculate new SG when wort is diluted
 * @module dilute
 * @param  {number} sg Specific Gravity of pre-diluted wort
 * @param  {number} volume initial volume
 * @param  {number} volumeAdd Volume of water to add
 * @return {number}  (returns SG) GP = (Initial Volume * initial GP) / New Total Volume
 *
 * @example
 * // return 1.046
 * dilute(1.054, 6, 1);
 */

export const dilute = (sg, volume, volumeAdd) => {
  if (isNum(sg, volume, volumeAdd)) {
    const sgNum = sg2gp(sg);
    let calc = (sgNum * volume) / (volume + volumeAdd);
    calc = gp2sg(calc);
    const calcRound = round(calc, 3);
    return calcRound;
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

export const adjustWater = (sg, tg, volume) => {
  if (!isNum(sg, tg, volume)) {
    // if arguments are not a number, throw an error
    throw new Error('arguments must be a number');
  } else if (sg < tg) {
    // if target gravity number is not less than specific gravity.
    throw new Error('target gravity must be less than specific gravity');
  } else {
    const calc = ((volume * sg2gp(sg)) / sg2gp(tg)) - volume;
    const calcRound = round(calc, 2);
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

export const adjustExtract = (sg, tg, volume, extract) => {
  if (sg > tg) {
    throw new Error('target travity must be greater than specific gravity');
  } else if (!isNum(sg, tg, volume)) {
    // if arguments are not a number, throw an error
    throw new Error('arguments must be a number');
  } else {
    let extractType = '';
    if (extract === 'LME') {
      extractType = 36;
    } else if (extract === 'DME') {
      extractType = 44;
    } else if (isNum(extract)) {
      extractType = extract;
    } else {
      throw new Error('invalid extract argument');
    }
    const calc = (sg2gp(tg) - sg2gp(sg)) * volume / extractType;
    const calcRound = round(calc, 2);
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

export const evapLossPerHour = (volume, ratePerHour, rateMeasurement = 'percentage') => {
  if (isNum(volume, ratePerHour)) {
    if (rateMeasurement === 'percentage') {
      const calc = volume * (ratePerHour / 100);
      const calcRound = round(calc, 2);
      return calcRound;
    } else if (rateMeasurement === 'volume') {
      const calcRound = round(ratePerHour, 2);
      return calcRound;
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

export const totalBoilLoss = (lossPerHour, boilTime) => {
  if (isNum(lossPerHour, boilTime)) {
    const calc = lossPerHour * (boilTime / 60);
    const calcRound = round(calc, 2);
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

export const shrinkage = (volume, boilLoss, percentage = 4) => {
  if (isNum(volume, boilLoss, percentage)) {
    const calc = (volume - boilLoss) * (percentage / 100);
    const calcRound = round(calc, 2);
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

export const postBoilVolume = (startVol, boilLoss, shrinkLoss) => {
  if (isNum(startVol, boilLoss, shrinkLoss)) {
    const calc = startVol - (boilLoss + shrinkLoss);
    const calcRound = round(calc, 2);
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

export const postBoilGravity = (startVol, sg, finalVol) => {
  if (isNum(startVol, sg, finalVol)) {
    let calc = (startVol * sg2gp(sg)) / finalVol;
    calc = gp2sg(calc);
    const calcRound = round(calc, 3);
    return calcRound;
  }
  // if arguments are not a number, throw an error
  throw new Error('arguments must be a number');
};

/**
 * Estimate Original Gravity
 * @module estimateOriginalGravity
 * @param {number} gravityPoints Total gravity points of fermentables
 * @param {number} sugarPoints Total gravity points from sugars (dextrose, etc)
 * @param {number} efficiency (mash or brewhouse)
 * @param {number} vol into fermentor (if brewhouse eff) or pre-boil vol (if mash eff)
 * @todo support liters
 * @return {number} (gravityPoints * efficiency) / volume
 *
 * @example
 * // return 1.061
 * estimateOriginalGravity(429, 46, 75, 6)
 */

export const estimateOriginalGravity = (gravityPoints, sugarPoints, efficiency, volume) => {
  if (isNum(gravityPoints, efficiency, volume)) {
    // first get the gravity points for sugars
    const sugarGravityPoints = sugarPoints / volume;
    // then get gravity points for all fermentables
    let calc = ((gravityPoints * efficiency * 0.01) / volume);
    // combine the two
    calc += sugarGravityPoints;
    calc = gp2sg(calc);
    const calcRound = round(calc, 3);
    return calcRound;
  }
  throw new Error('arguments must be a number');
};
