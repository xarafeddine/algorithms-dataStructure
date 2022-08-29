function collectStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = arr.concat(collectStrings(obj[key]));
    }
  }
  return arr;
}

console.log(collectStrings({ d: "dfs", h: 3, u: { h: "df", y: 8 } }));
