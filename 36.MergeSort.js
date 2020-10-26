const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
const mergeSort = (arr) => {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid, arr.length));
    arr = merge(left, right);
  }
  return arr;
}
const arr = [9, 4, 2, 7, 10, 14, 3, 1, 6];
const result = mergeSort(arr);
console.dir(result);