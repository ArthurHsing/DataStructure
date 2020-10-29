const insertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

const createBuckets = (arr, size) => {
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  const buckets = new Array(Math.floor((maxValue - minValue) / size) + 1);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / size)].push(arr[i]);
  }
  return buckets;
}

const bucketSort = (arr, size = 5) => {
  const buckets = createBuckets(arr, size);
  const result = [];
  buckets.forEach((bucket) => {
    result.push(...insertionSort(bucket));
  });
  return result;
}

const arr = [9, 3, 4, 6, 2, 1, 8, 7, 5, 10, 5, 1, 2, 5, 4, 3];
console.log(bucketSort(arr, 3));