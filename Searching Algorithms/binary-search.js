function binarySearch(arr, item) {
  // arr=arr.sort()

  let start = 0,
    end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== item && start <= end) {
    if (arr[middle] < item) {
      start = ++middle;
    } else {
      end = --middle;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === item ? middle : -1;
}

console.log(binarySearch(["erer", "p", "r"], "erer"));
