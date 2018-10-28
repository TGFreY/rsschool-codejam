const tree = {
  value: 100,
  left: {
    value: 90,
    left: { value: 70 },
    right: { value: 99 },
  },
  right: {
    value: 120,
    left: { value: 110 },
    right: { value: 130 },
  },
};

const recursion = (binarTree) => {
  const answerArr = [];
  let deep = 0;

  function goLeft(node) {
    if (node) {
      if (!Array.isArray(answerArr[deep])) {
        answerArr[deep] = [node.value];
      } else {
        answerArr[deep].push(node.value);
      }

      deep += 1;
      goLeft(node.left);

      goLeft(node.right);
      deep -= 1;
    }
  }

  goLeft(binarTree);
  return answerArr;
};

const array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]
