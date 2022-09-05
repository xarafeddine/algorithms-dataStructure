function selectionSort(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 1) return arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
      //   console.log(arr, min);
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log(selectionSort([4, 5, 2, 54, 7, 1, 9, 9, 0, 67, 0]));
