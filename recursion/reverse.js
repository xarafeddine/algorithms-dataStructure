function reverse(str) {
  if (!str) {
    return null;
  }
  if (str.length === 1) {
    return str[0];
  }
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("jkjkjh"));
