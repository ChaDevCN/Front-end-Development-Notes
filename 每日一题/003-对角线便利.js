/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = [];
  // 行列
  // 00 01 02 03
  // 10 11 12 13
  // 20 21 22 23
  // 30 31 32 33
  // const n = mat.length
  for (let row = 0; row <= mat.length; row++) {
    if (row % 2 !== 0) {
      for (let i = row; i >= 0; i--) {
        let j = row - i;
        result.push(`${i}${j}`);
      }
    } else {
      for (let i = 0; i <= row; i++) {
        console.log(i, row);
      }
    }
  }
  return result;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
