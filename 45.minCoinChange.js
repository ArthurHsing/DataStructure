const minCoin = (coins, amount) => {
  let cache = [];
  const coinChange = (value) => {
    if (!value) {
      return []
    }
    if (cache[value]) {
      return cache[value];
    }
    let minCoins = [];
    let newAmount;
    let newCoin;
    for (let i = 0; i < coins.length; i++) {  //每个硬币代表一种情况，比较哪一种情况下的硬币数量最少，每一种情况通过递归迭代来找到最小的值
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newCoin = coinChange(newAmount);
      }
      if (newAmount >= 0 && (newCoin.length < minCoins.length - 1 || !minCoins.length)) {
        minCoins = [coin].concat(newCoin);
      }
    }
    return (cache[value] = minCoins);
  }
  return coinChange(amount);
}

const arr = [1, 2, 5, 10, 20, 50];
console.log(minCoin(arr, 89));