function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  console.log(result);
  return result;
}

function fibonacciMemoization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }
  fibonacci(n);
  console.log(memo);
}

console.log(fibonacciMemoization(7));