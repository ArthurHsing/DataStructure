class Queue {
  constructor() {
    this.count = 0;
    this.lowestIndex = 0;
    this.items = {};
  }
  enqueue(element) {
    this.items[this.count++] = element;
  }
  isEmpty() {
    return this.count === this.lowestIndex;
  }
  dequeue() {
    if (!this.isEmpty()) {
      const result = this.items[this.lowestIndex];
      delete this.items[this.lowestIndex++];
      return result;
    }
    return undefined;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.lowestIndex];
    }
    return undefined;
  }
  size() {
    return (this.count - this.lowestIndex);
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestIndex = 0;
  }
  toString() {
    let resultStr = `${this.items[this.lowestIndex]}`;
    for (let i = this.lowestIndex + 1; i < this.count; i++) {
      resultStr = `${resultStr}, ${this.items[i]}`;
    }
    return resultStr;
  }
}