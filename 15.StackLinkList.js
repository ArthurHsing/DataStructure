import DoublyLinkedList from "./12.DoublyLinkedList.js";
class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.removeAt(this.items.count - 1).element;
  }
  peek() {
    return this.items.getElementAt(this.items.count - 1).element;
  }
  isEmpty() {
    return this.items.isEmpty();
  }
  size() {
    return this.items.size();
  }
  clear() {
    this.items = new DoublyLinkedList();
    return true;
  }
  toString() {
    return this.items.toString();
  }
}