const findStr = (solution, wordX, m, n) => {
  let result = '';
  while (solution[m][n] !== '0') {
    if (solution[m][n] === 'diagonal') {
      result = wordX[m - 1] + result;
      m--;
      n--;
    } else if (solution[m][n] === 'top') {
      m--;
    } else if (solution[m][n] === 'left') {
      n--;
    }
  }
  return result;
}
const lcs = (wordX, wordY) => {
  const m = wordX.length;
  const n = wordY.length;
  const l = [];
  const solution = [];
  for (let i = 0; i <= m; i++) {
    l[i] = [];
    solution[i] = [];
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0;
      solution[i][j] = '0';
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
        solution[i][j] = '0';
      } else if (wordX[i - 1] === wordY[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1;
        solution[i][j] = 'diagonal';
      } else {
        const top = l[i - 1][j];
        const left = l[i][j - 1];
        if (top > left) {
          l[i][j] = top;
          solution[i][j] = 'top';
        } else {
          l[i][j] = left;
          solution[i][j] = 'left';
        }
      }
    }
  }
  return findStr(solution, wordX, m, n);
}

const str1 = 'absdfwefa';
const str2 = 'awerweasdfwefwe';
console.log(lcs(str1, str2));