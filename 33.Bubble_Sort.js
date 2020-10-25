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

let bubbleSort;
export default bubbleSort = (array, compareFn) => {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {  //比较length - 1轮
    for (let j = 0; j < length - i - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === COMPARE.LESS_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
}

const arr = [2, 3, 1];
bubbleSort(arr, compareFun);
console.dir(arr);