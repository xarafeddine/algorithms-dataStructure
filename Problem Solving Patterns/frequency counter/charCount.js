function charCount(str) {
  if (typeof str !== 'string') {
    return "enter a string";
  }

  let result = {};

  for (char of str) {
    if (!/[a-z0-9]/.test(char)) continue;
    char = char.toLowerCase();
    result[char] = ++result[char] || 1;
  }

  return result;
}

console.log(charCount('dsfsd2543'));
