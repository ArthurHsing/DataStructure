function partition(arr, left, right) {
  // const pivot = arr[Math.floor((left + right) / 2)];
  const pivotIndex = left + Math.floor(Math.random() * (right - left));
  const pivot = arr[pivotIndex];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

function quick(arr, left, right) {
  let index = partition(arr, left, right);
  if (index - 1 > left) {
    quick(arr, left, index - 1);
  }
  if (index < right) {
    quick(arr, index, right);
  }
}

function quickSort(arr) {
  quick(arr, 0, arr.length - 1);
}

// 下面这种不加=的效率要高一点点，少循环一次
/**
function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

function quick(arr, left, right) {
  let index = partition(arr, left, right);
  if (index - 1 > left) {
    quick(arr, left, index - 1);
  }
  if (index < right) {
    quick(arr, index, right);
  }
}

function quickSort(arr) {
  quick(arr, 0, arr.length - 1);
}

 */











const arr = [3, 5, 1, 6, 4, 7, 2];
quickSort(arr, 0, arr.length - 1);
console.dir(arr);