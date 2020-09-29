const wm = new WeakMap();
class Stack {
  constructor() {
    wm.set(this, []);
  }
  push(element) {
    const arr = wm.get(this);
    arr.push(element);
  }
  pop() {
    const arr = wm.get(this);
    return arr.pop();
  }
  peek() {
    const arr = wm.get(this);
    return arr[arr.length - 1];
  }
  isEmpty() {
    const arr = wm.get(this);
    return arr.length === 0;
  }
  size() {
    const arr = wm.get(this);
    return arr.length;
  }
  clear() {
    wm.set(this, []);
  }
}
export default Stack;