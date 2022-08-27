// -------naive approche
// function maxSubarraySum(arr, num) {
//   if (arr.length < num || num === 0) return null;

//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let sum = 0;

//     for (let j = 0; j < num; j++) {
//       sum += arr[i + j];
//     }
//     if (max < sum) max = sum;
//   }

//   return max;
// }

// ---------- better approche
function maxSubarraySum(arr, num) {
  if (arr.length < num || num === 0) return null;

  let sum = 0;

  for (let j = 0; j < num; j++) {
    sum += arr[j];
  }

  let max = sum;

  for (let i = num; i < arr.length; i++) {
    sum = sum - arr[i - num] + arr[i];
    if (max < sum) max = sum;
  }

  return max;
}

console.log(maxSubarraySum([5, 3, 6, 2, 12, 4], 2));
