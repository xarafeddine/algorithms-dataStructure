function countUniqueValues(arr) {
  arr = arr.sort();
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
    // console.log(arr, i, j);
  }

  return i + 1;
}

console.log(countUniqueValues([3,4,2,3,3,5,7,9,1,4]));
