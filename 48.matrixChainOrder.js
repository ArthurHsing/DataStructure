const print = (s, i, j) => {
  debugger;
  if (i === j) {
    console.log(`A[${i}]`);
  } else {
    console.log('(');
    print(s, i, s[i][j]);
    print(s, s[i][j] + 1, j)
    console.log(')');
  }
}

// 入参p就是[1,2,3]这样的数组，代表p.length-1个矩阵，即1*2和2*3
const matrixChainOrder = (p) => {
  const n = p.length - 1;
  const m = [];
  const s = [];
  for (let i = 1; i <= n; i++) {
    m[i] = [];
    m[i][i] = 0;
  }
  for (let i = 0; i <= n; i++) {
    s[i] = []
    for (let j = 0; j <= n; j++) {
      s[i][j] = 0;
    }
  }
  // l代表步长，就是开始矩阵和结束矩阵隔得有多远
  // 如果有2个矩阵，那么步长的最大值肯定1
  // 如果有3个矩阵，那么步长的最大值为2，故l<n
  for (let l = 1; l < n; l++) {
    // i代表开始矩阵
    // 开始矩阵 加上 步长 肯定小于等于矩阵的个数，故i + l <= n, 故i <= n - l
    for (let i = 1; i <= n - l; i++) {
      // j代表结束矩阵
      const j = l + i;
      m[i][j] = Number.MAX_SAFE_INTEGER;
      // k代表选取的分隔点，根据不同的分隔点，来更新最小相乘次数m[i][j]的值（i代表开始矩阵，j代表结束矩阵）
      for (let k = i; k <= j - 1; k++) {
        console.log(i - 1, k, j);
        const q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) {
          m[i][j] = q;
          s[i][j] = k;
        }
      }
    }
  }
  print(s, 1, n);
  console.log(m);
  console.log(s);
  return m[1][n];
}
const p = [10, 100, 5];
console.log(matrixChainOrder(p));