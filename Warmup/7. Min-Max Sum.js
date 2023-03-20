function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  // se remueve primer elemento que es el menor
  let maxValue = arr.slice(1).reduce((curr, acum) => acum + curr);
  // se remueve último elemento que es el mayor
  let minValue = arr
    .slice(0, arr.length - 1)
    .reduce((curr, acum) => acum + curr);

  console.log(minValue, maxValue);
}

miniMaxSum([1, 3, 5, 9, 7]); // 16 24
miniMaxSum([1, 2, 3, 4, 5]); // 10 14
