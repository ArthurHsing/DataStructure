const partition = (array, left, right) => {
  const mid = array[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (array[left] < mid) {
      left++;
    }
    while (array[right] > mid) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}

const quick = (array, left, right) => {
  const index = partition(array, left, right);
  if (index - 1 > left) {
    quick(array, left, index - 1);
  }
  if (index < right) {
    quick(array, index, right);
  }
}

const quickSorting = (array) => {
  quick(array, 0, array.length - 1);
}

const arr = [5, 1, 3, 2, 9, 7, 8];

const binarySearch = (array, value) => {
  quickSorting(array);
  let left = 0;
  let right = array.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] < value) {
      left = mid + 1;
    } else if (array[mid] > value) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
}
console.log(binarySearch(arr, 9));