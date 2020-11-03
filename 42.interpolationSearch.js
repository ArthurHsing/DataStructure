const interpolationSearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;
  let delta = -1;
  let position = -1;
  while (low <= high && value >= array[low] && value <= array[high]) {
    delta = (value - array[low]) / (array[high] - array[low]);
    position = low + Math.floor((high - low) * delta);
    if (array[position] > value) {
      high = position - 1;
    } else if (array[position] < value) {
      low = position + 1;
    } else {
      return position
    }
  }
  return -1;
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(interpolationSearch(arr, 15));