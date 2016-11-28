/* eslint-disable import/no-extraneous-dependencies */

import { assert } from 'chai';
import { describe, it } from 'mocha';

// import { abv, abw, sg2plato } from '../';

import * as calc from '../';


// ABV Calcuation Test
describe('abv', () => {
  it('only allow numbers', () => {
    assert.throw(() => { calc.abv('meh', 1.019); }, Error);
  });

  it('enforce og > fg', () => {
    assert.throw(() => { calc.abv(1.012, 1.089); }, Error);
  });

  it('should return correct ABV', () => {
    assert.equal(calc.abv(1.089, 1.012), 10.11);
    assert.equal(calc.abv(1.089, 1.019), 9.13);
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
    assert.equal(calc.abw(1.089, 1.012), 8.02);
    assert.equal(calc.abw(1.089, 1.019), 7.24);
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
    assert.equal(calc.realExtract(1.088, 1.012), 6.3544);
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
    assert.equal(calc.rAttenuation(1.088, 1.012), 69.9);
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
