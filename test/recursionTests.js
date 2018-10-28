const assert = require('assert');
const recursion = require('../src/recursion.js');

const smallTree = {
  value: 3,
  left: {
    value: 1,
  },
  right: {
    value: 2,
  },
};

const tree = {
  value: 100,
  left: {
    value: 90,
    left: {
      value: 70,
    },
    right: {
      value: 99,
    },
  },
  right: {
    value: 120,
    left: {
      value: 110,
    },
    right: {
      value: 130,
    },
  },
};

const bigTree = {
  value: 19,
  left: {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 4,
      },
      right: {
        value: 7,
      },
    },
    right: {
      value: 12,
      left: {
        value: 11,
      },
      right: {
        value: 13,
      },
    },
  },
  right: {
    value: 50,
    left: {
      value: 40,
      left: {
        value: 35,
      },
      right: {
        value: 45,
      },
    },
    right: {
      value: 80,
      left: {
        value: 75,
      },
      right: {
        value: 85,
      },
    },
  },
};

describe('recursion', () => {
  it('recursion example tree ', () => {
    const arr = recursion(smallTree);
    assert.deepEqual(arr, [
      [3],
      [1, 2],
    ]);
  });
  it('recursion example tree ', () => {
    const arr = recursion(tree);
    assert.deepEqual(arr, [
      [100],
      [90, 120],
      [70, 99, 110, 130],
    ]);
  });

  it('recursion big tree ', () => {
    const arr = recursion(bigTree);
    assert.deepEqual(arr, [
      [19],
      [10, 50],
      [5, 12, 40, 80],
      [4, 7, 11, 13, 35, 45, 75, 85],
    ]);
  });
});
