function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj = {};
  for (i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }

  for (i = 0; i < str1.length; i++) {
    if (!obj[str2[i]]) return false;
    --obj[str2[i]];
    console.log(obj);
  }

  return true;
}

console.log(isAnagram("hgoojojo", "ghjojooo"));
