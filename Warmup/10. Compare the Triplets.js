function compareTriplets(a, b) {
  let ptsAlice = 0;
  let ptsBob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      ptsAlice++;
    }
    if (b[i] > a[i]) {
      ptsBob++;
    }
  }
  return [ptsAlice, ptsBob];
}
compareTriplets([1, 2, 3], [3, 2, 1]); // [1,]
