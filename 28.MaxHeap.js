import { MinHeap } from './27.MinHeap.js';
function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}
export class MaxHeap extends MinHeap {
  constructor() {
    super();
    this.compareFn = reverseCompare(this.compareFn);
  }
}

// const maxHeap = new MaxHeap();
// maxHeap.insert(1);
// maxHeap.insert(2);
// maxHeap.insert(3);
// maxHeap.insert(4);
// maxHeap.insert(5);
// console.dir(maxHeap);
// console.log(maxHeap.extract());