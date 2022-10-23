// using memoizition
function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  let result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}

// using tabulation

function fib_table(n) {
  if (n <= 2) return 1;
  const arr = [undefined, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(fib_table(10000));
