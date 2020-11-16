const minCoinChange = (coins, amount) => {
  const result = [];
  while (amount > 0) {
    for (let i = coins.length - 1; i >= 0; i--) {
      const coin = coins[i];
      if (amount >= coin) {
        result.push(coin);
        amount -= coin
        break;
      }
    }
  }
  return result;
}

const coins = [1, 2, 5, 10];
const amount = 31;
console.log(minCoinChange(coins, amount));