class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
const stack = new Stack();
stack.push(123);
stack.push(342);
stack.push(987);