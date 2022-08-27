function search(arr, value) {
  let begin = 0;
  let end = arr.length - 1;

  while (begin <= end) {
    if (arr[begin] === value) return begin;
    if (arr[end] === value) return end;
    let middle = Math.floor((begin + end) / 2);

    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      begin = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

console.log(search([2, 3, 4, 5, 6, 87], 5));
