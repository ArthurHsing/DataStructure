const COMPARE = {
  BIGGER_THAN: 1,
  LESS_THAN: 0
}

const compareFun = (value1, value2) => {
  if (value1 - value2 > 0) {
    return COMPARE.BIGGER_THAN;
  } else {
    return COMPARE.LESS_THAN;
  }
}

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export const selectionSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (compareFun(arr[minIndex], arr[j]) === COMPARE.BIGGER_THAN) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
}

const arr = [6, 3, 4, 1, 2, 9, 8, 5, 7];
selectionSort(arr);
console.dir(arr);
