const finMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }
  }
  return { max, min };
}
const getBucketIndex = (value, minValue, significantDigit, radixBase) => {
  return Math.floor((value - minValue) / significantDigit % radixBase);
}
const countingSortForRadix = (arr, minValue, significantDigit, radixBase) => {
  let bucketIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    bucketIndex = getBucketIndex(arr[i], minValue, significantDigit, radixBase);
    buckets[bucketIndex]++;
  }
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    bucketIndex = getBucketIndex(arr[i], minValue, significantDigit, radixBase);
    aux[--buckets[bucketIndex]] = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = aux[i];
  }
  return arr;
}
const radixSort = (arr, radixBase = 10) => {
  const { max: maxValue, min: minValue } = finMinMax(arr);
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    arr = countingSortForRadix(arr, minValue, significantDigit, radixBase);
    significantDigit *= 10;
  }
  return arr;
}

const arr = [456, 789, 123, 1, 32, 4, 243, 321, 42, 90, 10, 999];
console.log(radixSort(arr));