class Deque {
  constructor() {
    this.count = 0;
    this.lowestIndex = 0;
    this.items = {};
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestIndex > 0) {
      this.items[--this.lowestIndex];
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = element;
      this.lowestIndex = 0;
      this.count++;
    }
  }
  addBack(element) {
    this.items[this.count++] = element;
  }
  removeFront() {
    if (!this.isEmpty()) {
      const result = this.items[this.lowestIndex];
      delete this.items[this.lowestIndex++];
      return result;
    }
    return undefined;
  }
  removeBack() {
    if (!this.isEmpty()) {
      const result = this.items[this.count - 1]
      delete this.items[--this.count];
      return result;
    }
    return undefined;
  }
  peekFront() {
    if (!this.isEmpty()) {
      return this.items[this.lowestIndex];
    }
    return undefined;
  }
  peekBack() {
    if (!this.isEmpty()) {
      return this.items[this.count - 1];
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
  isEmpty() {
    return this.count === this.lowestIndex;
  }
  toString() {
    let resultStr = `${this.items[this.lowestIndex]}`;
    for (let i = this.lowestIndex + 1; i < this.count; i++) {
      resultStr = `${resultStr}, ${this.items[i]}`;
    }
    return resultStr;
  }
}