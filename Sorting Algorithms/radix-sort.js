function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

function radixSort(arr) {
  let times = 0;
  while (times < mostDigits(arr)) {
    const obj = {};
    for (let num of arr) {
      obj[getDigit(num, times)]
        ? obj[getDigit(num, times)].push(num)
        : (obj[getDigit(num, times)] = [num]);
    }
    let temp = [];
    for (item in obj) {
      temp.push(...obj[item]);
    }

    // console.log(obj, temp);
    arr = temp;
    ++times;
  }

  return arr;
}

console.log(radixSort([234, 09804, 598, 7, 8, 1110, 2, 23, 6]));
