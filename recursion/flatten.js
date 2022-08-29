function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = [...newArr, ...flatten(arr[i])];
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flatten([4, 45, 6, ["rte", 2, 7, [5, 6, true, "33"]], [343]]));
