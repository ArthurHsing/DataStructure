const findMaxValue = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const countingSort = (arr) => {
  const array = [];
  const result = [];
  for (let i of arr) {
    if (!array[i]) {
      array[i] = 0;
    }
    array[i]++;
  }
  array.forEach((element, index) => {
    while (element > 0) {
      result.push(index);
      element--;
    }
  });
  return result;
}
const result = countingSort([3, 5, 1, 6, 4, 7, 2, 5, 2, 6]);

console.dir(result);