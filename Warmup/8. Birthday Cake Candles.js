// function birthdayCakeCandles(candles) {
//   candles.sort((a, b) => a - b);
//   let maxValue = [...candles].pop();
//   let cantMax = candles.filter((n) => n === maxValue).length;
//   return cantMax;
// }

function birthdayCakeCandles(candles) {
  let maxValue = Math.max(...candles);
  let nTallestCandles = candles.filter((candle) => candle === maxValue).length;
  return nTallestCandles;
}

birthdayCakeCandles([4, 4, 1, 3]);
birthdayCakeCandles([3, 2, 1, 3]);
