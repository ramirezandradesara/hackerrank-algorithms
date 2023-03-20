function staircase(n) {
  // Write your code here
  let nSpaces = n - 1;
  let nNumeral = 1
  let stair = "";

  for (let i = 0; i < n; i++) {
    stair += (' ').repeat(nSpaces) + '#'.repeat(nNumeral) + '\n'
    nSpaces -= 1
    nNumeral += 1
  }
  console.log(stair);
}

staircase(6);

//      #
//     ##
//    ###
//   ####
//  #####
// ######