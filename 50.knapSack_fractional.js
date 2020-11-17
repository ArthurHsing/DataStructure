const knapSack = (capacity, weights, values) => {
  let totalValue = 0;
  let load = 0;
  const n = weights.length;
  for (let i = 0; i < n; i++) {
    if (weights[i] <= capacity - load) {
      load += weights[i];
      totalValue += values[i];
    } else {
      const r = (capacity - load) / weights[i];
      totalValue += r * values[i];
      break;
    }
  }
  return totalValue;
}
const goods = [
  { weight: 4, value: 5 },
  { weight: 3, value: 4 },
  { weight: 2, value: 3 },
];
goods.sort((a, b) => {
  return (b.value / b.weight) - (a.value / a.weight)
});
const goodsObj = goods.reduce((acc, curr) => {
  acc.weights.push(curr.weight);
  acc.values.push(curr.value);
  return acc;
}, { weights: [], values: [] });
const capacity = 6;
console.log(knapSack(capacity, goodsObj.weights, goodsObj.values));