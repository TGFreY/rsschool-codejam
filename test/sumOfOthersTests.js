const assert = require('assert');
const sumOfOther = require('../src/sumOfOther.js');

describe('sumOfOther', () => {
  it('positive sum', () => {
    const arr = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(arr, [8, 7, 6, 9]);
  });

  it('negative sum', () => {
    const arr = sumOfOther([-95, -32, -14, -8]);
    assert.deepEqual(arr, [-54, -117, -135, -141]);
  });

  it('mixed sum', () => {
    const arr = sumOfOther([95, -32, 14, -8]);
    assert.deepEqual(arr, [-26, 101, 55, 77]);
  });
});
