// function collectOddValues(arr) {
//   let result = [];

//   const helper = (input) => {
//     if (input < 0) return;

//     if (arr[input] % 2 !== 0) result.push(arr[input]);

//     helper(--input);
//   };

//   helper(arr.length - 1);

//   return result;
// }



// pure recursion

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 != 0) {
    newArr.push(arr[0]);
  }
  return [...newArr, ...collectOddValues(arr.slice(1))];
}

console.log(collectOddValues([4, 6, 1, 1, 435, 467, 8543, 2, 4, 0]));
