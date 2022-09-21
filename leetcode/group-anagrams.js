var groupAnagrams = function (strs) {
  if (strs.length === 1) {
    return [[strs[0]]];
  }

  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }

    let obj = {};

    for (char of str1) {
      obj[char] = (obj[char] || 0) + 1;
    }

    for (char of str2) {
      if (!obj[char]) return false;
      --obj[char];
    }

    return true;
  }

  let arr = [];

  for (str of strs) {
    let exist = false;
    for (ele of arr) {
      if (isAnagram(ele[0], str)) {
        ele.push(str);
        exist = true;
      }
    }

    if (!exist) {
      arr.push([str]);
    }
  }

  return arr;
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat",'er','re','qwer']))