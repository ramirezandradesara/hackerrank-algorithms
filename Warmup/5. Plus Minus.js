function plusMinus(arr) {
  // Write your code here
  // 1. Filtra num segun variable
  // 2. Mide el largo del arr, es decir, cuantos numeros hay pos, neg o son ceros
  // 3. Divide por el largo total del arr para saber su ratio
  // 4. Establace cuantos decimales debe tener
  let positives = (arr.filter((num) => num > 0).length / arr.length).toFixed(6);
  let negatives = (arr.filter((num) => num < 0).length / arr.length).toFixed(6);
  let zeros = (arr.filter((num) => num === 0).length / arr.length).toFixed(6);

  console.log(positives);
  console.log(negatives);
  console.log(zeros);
}

plusMinus([1, 1, 0, -1, -1]);
