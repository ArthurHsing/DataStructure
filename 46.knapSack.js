const knapSack = (capacity, weights, values) => {
  const n = weights.length;
  const kS = [];
  console.log(n);
  for (let i = 0; i <= n; i++) {
    kS[i] = []; //最大价值矩阵
  }
  for (let i = 0; i <= n; i++) {  //i代表前i个物品
    for (let w = 0; w <= capacity; w++) { //j代表背包的容量
      if (i === 0 || w === 0) { //当没有物品或者背包容量为0时，那么无论如何，价值都为0
        kS[i][w] = 0;
        // 当背包容量不断增加时，看当前这个物品的重量是否能够装进背包
      } else if (weights[i - 1] <= w) { //如果当前物品的重量小于背包的容量，那么就把当前物品放进背包，并且把（当前物品产生的价值 + 剩下的容量能够装下的物品的最大价值）与 （不装当前物品的最大价值） 进行比较（注意，weights和values是用i-1表示当前的,而kS矩阵是用i表示当前的）
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];  //当前物品产生的价值 + 剩下的容量能够装下的物品的最大价值
        const b = kS[i - 1][w]; //不装当前物品的最大价值
        kS[i][w] = a > b ? a : b; //更新最大价值矩阵
      } else {  //当前重量下，物品压根就放不进去,那么就直接采用上一个物品的在当前背包重量下的最大价值
        kS[i][w] = kS[i - 1][w];
      }
    }
  }
  console.log(kS);
  return kS[n][capacity];
}

const weights = [1, 2, 3, 4, 5];
const values = [10, 5, 3, 24, 1];
const capacity = 6;
console.log(knapSack(capacity, weights, values));