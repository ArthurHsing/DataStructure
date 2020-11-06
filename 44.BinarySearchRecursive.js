const binarySearchRecursive = (array, value, low, high) => {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      return binarySearchRecursive(array, value, mid + 1, high);
    } else if (array[mid] > value) {
      return binarySearchRecursive(array, value, low, mid - 1);
    } else {
      return mid;
    }
  }
  return -1;
}

const binarySearch = (array, value) => {
  return binarySearchRecursive(array, value, 0, array.length - 1);
}

const arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 2));