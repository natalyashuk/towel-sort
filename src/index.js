
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let r = [];
  if (matrix.length == 0 ) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      matrix[i];
    } else {
      matrix[i].reverse();
    }
    return [].concat(...arr);
  }
}
