const minCoinChange = (coins, amount) => {
  const cache = [];
  const change = (value) => {
    if (!value) {
      return [];
    }
    if (cache[value]) {
      return cache[value];
    }
    let mins = [];
    let newMin; //代表去掉减去当前硬币的面额，剩余钱的总数找零的最小值
    for (let i = 0; i < coins.length; i++) {//每个硬币代表一种情况，比较哪一种情况下的硬币数量最少，每一种情况通过递归迭代来找到最小的值
      const coin = coins[i];
      const remain = value - coin;
      if (remain >= 0) {
        newMin = change(remain);
        if (newMin.length < mins.length - 1 || !mins.length) {
          mins = [coin].concat(newMin);
        }
      }
    }
    return (cache[value] = mins);
  }
  return change(amount);
}

const coins = [1, 2, 5, 10];
const amount = 24;
console.log(minCoinChange(coins, amount));
