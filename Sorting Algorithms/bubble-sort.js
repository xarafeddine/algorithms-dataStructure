function bubbleSort(arr) {
  for (let j = arr.length; j > 0; j--) {
    let noSwaps = true;
    for (let i = 0; i < j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([-36, 5, 57, 8, 9, 6, 3, 100]));
