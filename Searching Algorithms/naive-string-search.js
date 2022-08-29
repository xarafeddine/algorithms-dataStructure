function naiveStringSearch(largeString, smallString) {
  let count = 0;
  for (let j = 0; j < largeString.length; j++) {
    let exist = true;

    for (let i = 0; i < smallString.length; i++) {
      if (largeString[j + i] !== smallString[i]) {
        exist = false;
        break;
      }
    }
    if (exist) {
      j += smallString.length - 1;
      count++;
    }
  }
  return count;
}

console.log(naiveStringSearch("i aamqmm am what i am dato mate", "m"));
