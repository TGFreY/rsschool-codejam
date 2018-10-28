const make = (...outerArgs) => {
  const stack = [];

  const wrapp = (...innerArgs) => {
    for (let i = 0; i < innerArgs.length; i += 1) {
      if (typeof innerArgs[i] !== 'function') {
        stack.push(innerArgs[i]);
      } else {
        return stack.reduce((ac, cv) => innerArgs[i](ac, cv));
      }
    }
    return wrapp;
  };
  return wrapp(...outerArgs);
};

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

console.log(make(15)(34, 21, 666)(41)(sum)); // return 777
console.log(make(15)(34, 21, 666)(41)(sub)); // return -747
