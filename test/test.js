/* eslint-disable import/no-extraneous-dependencies */

import { assert } from 'chai';
import { describe, it } from 'mocha';

// import { abv, abw, sg2plato } from '../';

import * as calc from '../index';


// ABV Calcuation Test
describe('abv', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.abv('meh', 1.019); }, Error);
  });

  it('enforce og > fg', () => {
    assert.throw(() => { calc.abv(1.012, 1.089); }, Error);
  });

  it('should return correct ABV', () => {
    assert.equal(calc.abv(1.089, 1.012), 10.20);
    assert.equal(calc.abv(1.089, 1.019), 9.28);
  });
});

// ABW Calcuation Test
describe('abw', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.abw('meh', 1.019); }, Error);
  });

  it('enforce og > fg', () => {
    assert.throw(() => { calc.abw(1.012, 1.089); }, Error);
  });

  it('should return correct ABW', () => {
    assert.equal(calc.abw(1.089, 1.012), 8.0);
    assert.equal(calc.abw(1.089, 1.019), 7.23);
  });
});

// sg2plato Calcuation Test
describe('sg2plato', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.sg2plato('meh'); }, Error);
  });

  it('should return correct plato', () => {
    assert.equal(calc.sg2plato(1.089), 21.3);
  });
});

// plato2sg Calcuation Test
describe('plato2sg', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.plato2sg('meh'); }, Error);
  });

  it('should return correct specific gravity', () => {
    assert.equal(calc.plato2sg(18), 1.074);
  });
});

// Real Extract Calcuation Test
describe('realExtract', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.realExtract('meh', 1.012); }, Error);
  });

  it('should return correct real extraction number', () => {
    assert.equal(calc.realExtract(1.088, 1.012), 6.5697);
  });
});

// Calories from alcohol Calcuation Test
describe('caloriesAlcohol', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.caloriesAlcohol('meh', 1.012); }, Error);
  });

  it('should return correct number of calories from alcohol', () => {
    assert.equal(calc.caloriesAlcohol(1.088, 1.012), 210.61);
  });
});

// Calories from carbs Calcuation Test
describe('caloriesCarbs', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.caloriesCarbs('meh', 1.012); }, Error);
  });

  it('should return correct number of calories from carbs', () => {
    assert.equal(calc.caloriesCarbs(1.088, 1.012), 91.04);
  });
});

// Total Calories Calcuation Test
describe('caloriesTotal', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.caloriesTotal('meh', 1.012); }, Error);
  });

  it('should return correct number of total calories', () => {
    assert.equal(calc.caloriesTotal(1.088, 1.012), 301.65);
  });
});

// Apparent Attenuation Calcuation Test
describe('aAttenuation', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.aAttenuation('meh', 1.012); }, Error);
  });

  it('should return correct apparent attenuation', () => {
    assert.equal(calc.aAttenuation(1.088, 1.012), 85.3);
  });
});

// Real Attenuation Calcuation Test
describe('rAttenuation', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.rAttenuation('meh', 1.012); }, Error);
  });

  it('should return correct real attenuation', () => {
    assert.equal(calc.rAttenuation(1.088, 1.012), 68.9);
  });
});

// Alpha Acid Units Calcuation Test
describe('aau', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.aau('meh', 'yo'); }, Error);
  });

  it('should return correct Alpha Acid Unit', () => {
    assert.equal(calc.aau(1.5, 12), 18);
  });
});

// Hop Utilization Calcuation Test
describe('utilization', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.utilization('meh', 1.088); }, Error);
  });

  it('should return correct hop utilization', () => {
    assert.equal(calc.utilization(60, 1.048), 0.2348476097710606);
  });
});

// IBU Calcuation Test
describe('ibu', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.ibu(1.5, 12, 'meh', 1.048, 5.5); }, Error);
  });

  it('should return correct hop ibu', () => {
    assert.equal(calc.ibu(1.5, 12, 60, 1.048, 5.5), 57.6);
    assert.equal(calc.ibu(1.5, 12, 60, 1.048, 5.5, 10), 63.3);
  });
});


// SRM to Lovibond Test
describe('srm2lovibond', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.srm2lovibond('meh'); }, Error);
  });

  it('should return correct lovibond', () => {
    assert.equal(calc.srm2lovibond(8), 6.5);
    assert.equal(calc.srm2lovibond(30), 22.7);
  });
});


// Lovibond to SRM Test
describe('lovibond2srm', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.lovibond2srm('meh'); }, Error);
  });

  it('should return correct lovibond', () => {
    assert.equal(calc.lovibond2srm(7), 8.7);
    assert.equal(calc.lovibond2srm(23), 30.4);
  });
});


// MCU Calcuation Test
describe('mcu', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.mcu(9, 'meh', 5.5); }, Error);
  });

  it('should return correct malt color unit', () => {
    assert.equal(calc.mcu(9, 3.5, 5.5), 5.727);
  });
});

// SRM Calcuation Test
describe('srm', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.srm(5.72, 'meh'); }, Error);
  });

  it('should return correct SRM', () => {
    assert.equal(calc.srm(5.72), 4.9);
    assert.equal(calc.srm(5.72, 2.54), 6.4);
  });
});

// SG to GP Calcuation Test
describe('sg2gp', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.sg2gp('meh'); }, Error);
  });

  it('should return correct gravity points', () => {
    assert.equal(calc.sg2gp(1.088), 88);
  });
});

// GP to SP Calcuation Test
describe('gp2sg', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.gp2sg('meh'); }, Error);
  });

  it('should return correct specific gravity', () => {
    assert.equal(calc.gp2sg(88), 1.088);
  });
});

// SG of diluted water test
describe('dilute', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.dilute('meh'); }, Error);
  });

  it('should return correct specific gravity', () => {
    assert.equal(calc.dilute(1.054, 6, 1), 1.046);
  });
});

// Water needed Calcuation Test
describe('adjustWater', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.adjustWater(1.088, 'meh', 5); }, Error);
  });

  it('should return correct amount of water needed', () => {
    assert.equal(calc.adjustWater(1.088, 1.078, 5), 0.64);
  });
});

// extract needed Calcuation Test
describe('adjustExtract', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.adjustExtract(1.078, 'meh', 5, 'LME'); }, Error);
  });

  it('should return correct amount of extract needed if LME chosen', () => {
    assert.equal(calc.adjustExtract(1.078, 1.088, 5, 'LME'), 1.39);
  });

  it('should return correct amount of extract needed if DME chosen', () => {
    assert.equal(calc.adjustExtract(1.078, 1.088, 5, 'DME'), 1.14);
  });

  it('should return correct amount of extract needed if custom gravity points used', () => {
    assert.equal(calc.adjustExtract(1.078, 1.088, 5, 46), 1.09);
  });
});

// Loss per hour by evaperation Calcuation Test
describe('evapLossPerHour', () => {
  it('only allow numbers for volume & rate', () => {
    assert.throw(() => { calc.evapLossPerHour(5, 'meh', 'volume'); }, Error);
  });

  it('should return correct amount lost per hour (default value)', () => {
    assert.equal(calc.evapLossPerHour(6, 10), 0.60);
  });

  it('should return correct amount lost per hour (percentage)', () => {
    assert.equal(calc.evapLossPerHour(6, 10, 'percentage'), 0.60);
  });

  it('should return correct amount lost per hour (volume)', () => {
    assert.equal(calc.evapLossPerHour(6, 0.5, 'volume'), 0.50);
  });
});

// Total Boil Lost to Volume Calcuation Test
describe('totalBoilLoss', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.totalBoilLoss(0.60, 'meh'); }, Error);
  });

  it('should return correct amount of volume lost to boil', () => {
    assert.equal(calc.totalBoilLoss(0.60, 90), 0.90);
  });
});

// Shrinkage Calcuation Test
describe('shrinkage', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.shrinkage(7, 'meh'); }, Error);
  });

  it('should return correct amount of shrinkage (default value)', () => {
    assert.equal(calc.shrinkage(7, 0.90), 0.24);
  });

  it('should return correct amount of shrinkage (custom value)', () => {
    assert.equal(calc.shrinkage(7, 0.90, 3), 0.18);
  });
});


// Post Boil Volume Calcuation Test
describe('postBoilVolume', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.postBoilVolume(0.60, 'meh'); }, Error);
  });

  it('should return correct amount of volume lost to boil', () => {
    assert.equal(calc.postBoilVolume(7, 0.90, 0.24), 5.86);
  });
});

// Post Boil Gravity Calculation Test
describe('postBoilGravity', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.postBoilGravity(7, 'meh', 5.71); }, Error);
  });

  it('Shoul return the post boil gravity', () => {
    assert.equal(calc.postBoilGravity(7, 1.059, 5.71), 1.072);
  });
});

// Boil Off Test
describe('Boil Off test', () => {
  const startingVolume = 7;
  const evapRate = 10;
  const boilTime = 90;
  const shrinkageRate = 4;
  const sg = 1.059;
  const evapLossPerHour = calc.evapLossPerHour(startingVolume, evapRate);
  const totalBoilLoss = calc.totalBoilLoss(evapLossPerHour, boilTime);
  const shrinkage = calc.shrinkage(startingVolume, totalBoilLoss, shrinkageRate);
  const postBoilVolume = calc.postBoilVolume(startingVolume, totalBoilLoss, shrinkage);
  const postBoilGravity = calc.postBoilGravity(startingVolume, sg, postBoilVolume);

  it('correct amount lost to evap per hour', () => {
    assert.equal(evapLossPerHour, 0.70);
  });

  it('correct total boil loss', () => {
    assert.equal(totalBoilLoss, 1.05);
  });

  it('correct total loss from shrinkage', () => {
    assert.equal(shrinkage, 0.24);
  });

  it('calculate post boil volume', () => {
    assert.equal(postBoilVolume, 5.71);
  });

  it('calculate post boil gravity', () => {
    assert.equal(postBoilGravity, 1.072);
  });
});

// Estimate Original Gravity
describe('estimateOriginalGravity', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.estimateOriginalGravity(7, 'meh', 72, 5.5); }, Error);
  });

  it('Should return estimated OG', () => {
    assert.equal(calc.estimateOriginalGravity(429, 46, 75, 6), 1.061);
  });
});

// Estimate Final Gravity Points
describe('estimateFinalGP', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.estimateFinalGP('meh', 54); }, Error);
  });

  it('Should return estimated Final Gravity Points', () => {
    assert.equal(calc.estimateFinalGP(75, 54), 13.5);
    assert.equal(calc.estimateFinalGP(75, 54, true), 14);
  });
});

// Estimate Final Gravity Points
describe('estimateFinalGravity', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.estimateFinalGravity('meh', 17, 75, 154); }, Error);
  });

  it('Should return estimated Final Gravity Points', () => {
    assert.equal(calc.estimateFinalGravity(54, 17, 75), 1.010);
    assert.equal(calc.estimateFinalGravity(54, 17, 75, 154), 1.012);
  });
});
