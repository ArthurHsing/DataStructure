import { defaultEquals } from './util.js'
import { Node } from './models/linked-list-models.js'
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count++;
      return true;
    }
    return false;
  }
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
      current = current.next;
    }
    // for (let i = 0; i < this.count; i++) {
    //   if (this.equalsFn(element, current.element)) {
    //     return i;
    //   }
    //   current = current.next;
    // }
    return -1;
  }
  remove(element) {
    return this.removeAt(this.indexOf(element));
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  getHead() {
    return this.head;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let current = this.head;
    let resultString = `${current.element}`;
    while (current.next) {
      current = current.next;
      resultString = `${resultString}, ${current.element}`
    }
    return resultString;
  }
}