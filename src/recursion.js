module.exports = function recursion(binarTree) {
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
