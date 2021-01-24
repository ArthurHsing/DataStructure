class HeapSort {
  constructor(arr) {
    const start = Math.floor((arr.length - 1) / 2);
    for (let i = start; i >= 0; i--) {
      this.maxHeap(arr, arr.length, i);
    }
    for (let j = arr.length - 1; j > 0; j--) {
      let temp = arr[0];
      arr[0] = arr[j];
      arr[j] = temp;
      this.maxHeap(arr, j, 0);
    }
    return arr;
  }
  maxHeap(arr, size, index) {
    let max = index;
    // 左子节点
    const leftNode = 2 * index + 1;
    // 右子节点
    const rightNode = 2 * index + 2;
    // 和两个子节点分别对比，找出最大的节点
    if (leftNode < size && arr[leftNode] > arr[max]) {
      max = leftNode;
    }
    if (rightNode < size && arr[rightNode] > arr[max]) {
      max = rightNode;
    }
    // 交换位置
    if (max != index) {
      let temp = arr[index];
      arr[index] = arr[max];
      arr[max] = temp;
      // 交换位置以后，可能会破坏之前排好的堆，所以，之前排好的堆需要重新调整
      this.maxHeap(arr, size, max);
    }
  }
}

const hs = new HeapSort([9, 6, 8, 7, 0, 1, 10, 4, 2]);
console.log(hs);