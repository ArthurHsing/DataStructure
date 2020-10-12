import { Compare, defaultCompare } from './util.js';
export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }
  insert(value) {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  siftUp(index) {
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.compareFn(this.heap[parentIndex], this.heap[index]) === Compare.BIGGER_THAN) {
      this.swap(this.heap, parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }
  swap(arr, i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap.shift();
    this.siftDown(0);
    return removedValue;
  }
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
      element = left;
    }
    if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
      element = right;
    }
    if (index !== element) {
      this.swap(this.heap, index, element);
      this.siftDown(element);
    }
  }
}

const mh = new MinHeap();
mh.insert(3);
mh.insert(5);
mh.insert(2);
mh.insert(4);
mh.insert(1);
// mh.extract();
console.dir(mh);