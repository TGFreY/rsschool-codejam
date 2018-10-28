const assert = require('assert');
const make = require('../src/make.js');

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

describe('make', () => {
  it('make addition ', () => {
    const makeCalc = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(makeCalc, 777);
  });

  it('make subtraction ', () => {
    const makeCalc = make(15)(34, 21, 666)(41)(sub);
    assert.deepEqual(makeCalc, -747);
  });

  it('make multiplication ', () => {
    const makeCalc = make(15)(34, 21, 666)(41)(mul);
    assert.deepEqual(makeCalc, 292447260);
  });
});
