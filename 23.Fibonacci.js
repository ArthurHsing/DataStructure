"use strict"
console.time('执行时间');
function fib(n) {
  const result = fibTool(0n, 1n, BigInt(n));
  return Number(result % BigInt(1e9 + 7));
};

function fibTool(a, b, n) {
  if (n === 0n) {
    return a;
  }
  return fibTool(b, a + b, n - 1n);
}

console.log(fib(40));
console.timeEnd('执行时间');
/**
 * 迭代版本的fibonacci数列
 */
/*
console.time('执行开始');
function fibonacci(n) {
  return Number(fibonacciTool(BigInt(n)));
}
function fibonacciTool(n) {
  if (n === 0n) {
    return 0n;
  }
  if (n === 1n) {
    return 1n;
  }
  let a = 0n;
  let b = 1n;
  for (let i = 2n; i <= n; i += 1n) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
console.log(fibonacci(40));
console.timeEnd('执行开始');
*/