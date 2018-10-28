const sumOfOther = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur);
  return arr.map(elem => sum - elem);
};

const arr = [2, 3, 4, 1];
console.log(sumOfOther(arr));
