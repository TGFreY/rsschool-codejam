module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  return arr.map(elem => sum - elem);
};
