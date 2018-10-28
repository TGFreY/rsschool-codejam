module.exports = function make(...outerArgs) {
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
