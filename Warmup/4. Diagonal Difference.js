function diagonalDifference(arr) {
  let leftToRight = 0;
  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
  };

  let rightToLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    rightToLeft += arr[i][arr.length - 1 - i];
  };

  return Math.abs(leftToRight - rightToLeft);
}

diagonalDifference([
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
]); // 1

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]); // 2

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]); // 15
