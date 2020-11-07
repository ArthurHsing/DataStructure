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
    for (let i = 0; i < coins.length; i++) {
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