function pivotHelper(arr, start = 0, end = arr.length) {
  let num = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[start] > arr[i]) {
      num++;
      [arr[num], arr[i]] = [arr[i], arr[num]];
    }
  }
  [arr[start], arr[num]] = [arr[num], arr[start]];
//   console.log(arr);
  return num;
}

function quickSort(arr, start = 0, end = arr.length) {
  if (start < end) {
    let pivotIndex = pivotHelper(arr, start, end);
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}
console.log(quickSort([7, -4, 6, 9081, 65, 3, 1, 5, 8]));
