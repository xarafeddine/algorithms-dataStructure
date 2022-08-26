function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i] ** 2] = ++obj[arr1[i] ** 2] || 1;
  }

  console.log(obj);

  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr2[i]]) return false;
    obj[arr2[i]]--;
  }

  return true;
}

console.log(same([2, 3, 4, 1, 1], [1, 1, 4, 9, 16]));
console.log(same([1, 2, 3, 4], [16, 1, 9, 11]));
