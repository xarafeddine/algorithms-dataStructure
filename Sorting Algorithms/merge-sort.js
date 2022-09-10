function merge(arr1, arr2) {
  if (arr1[0] > arr2[-1]) {
    return arr2.concat(arr1);
  }
  if (arr1[-1] < arr2[0]) {
    return arr1.concat(arr2);
  }

  let arr = [];
  let j = 0;
  let i = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] < arr1[i]) {
      arr.push(arr2[j]);
      j++;
    } else {
      arr.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }
  //   arr.push(...arr2.slice(j));
  //   arr.push(...arr1.slice(i));

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2));
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([2, 4, 7, 23, 98, 100, 45, 68, 83, 98, 560]));
