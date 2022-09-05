function sumZero(arr) {
    // arr should be sorted

  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    }
    else if (arr[i] + arr[j] > 0) {
      j--;
    } else {
      i++;
    }
  }

}

console.log(sumZero([-3, -2, -1, 0, 4, 5, 6]));
