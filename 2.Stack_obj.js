class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count++] = element;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (!this.isEmpty()) {
      const result = this.items[this.count - 1];
      delete this.items[--this.count];
      return result;
    }
    return undefined;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.count - 1];
    }
    return undefined;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  toString() {
    if (!this.isEmpty()) {
      let objString = `${this.items[0]}`;
      for (let i = 1; i < this.count; i++) {
        objString = `${objString}, ${this.items[i]}`;
      }
      return objString;
    }
    return '';
  }
}