// s[i][j]，i代表开始矩阵，j代表结束矩阵，s[i][j]代表矩阵i、j之间的最优分割点
// 假如只有两个矩阵，那么最开始i=1，j=2，s[i][j] = 1
const print = (s, i, j) => {
  // i === j代表开始矩阵和结束矩阵是同一个矩阵，
  // 这就代表i和j之间已经不可能再有分割点了，故应直接打印出这个点的值
  if (i === j) {
    console.log(`A[${i}]`);
  } else {
    // 这是代表i !== j的情况，
    // 那就打印一个左括号（
    console.log('(');
    // 再找到划分点，分成左半边（先）
    print(s, i, s[i][j]);
    // 和右半边（后）
    print(s, s[i][j] + 1, j)
    // 左右两部分都递归完之后，再打印一个右括号）
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
        // 这一步是非常妙的，也就是最重要的状态转移方程，i代表开始矩阵、j代表结束矩阵、k代表分隔点
        // 自己写三个矩阵出来就可以推出这个转移方程
        const q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) {
          m[i][j] = q;  //m记录的是从矩阵i乘到矩阵j的最小乘法次数
          s[i][j] = k;  //s记录的是划分点
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