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
 * @return {number}    (-616.868) + (1111.14 x sgravity) - (630.272 x sgravity^2) + (135.997 x sgravity^3)
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
 * @param  {number} gravity   Specific gravity (sg)
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
