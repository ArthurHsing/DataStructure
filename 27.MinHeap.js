import { defaultCompare } from './util.js';
export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.head = [];
  }

}