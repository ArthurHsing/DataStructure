import { DoublyNode } from './models/linked-list-models.js';
import LinkedList from './11.LinkedList.js';
import { defaultEquals } from './util.js';
export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }
  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.pre = this.tail;
      this.tail = node;
    }
    this.count++;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      if (index === 0) {
        if (this.head == null) {
          this.push(element);
        } else {
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
        }
      } else if (index === this.count) {
        this.push(element);
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        previous.next = node;
        node.prev = previous;
        node.next = current;
        current.prev = node;
      }
      this.count++;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let deleted;
      if (index === 0) {
        deleted = this.head;
        if (this.count === 1) {
          this.head = undefined;
          this.tail = undefined;
        } else {
          this.head = this.head.next;
          this.head.previous = undefined;
        }
      } else if (index === this.count - 1) {
        deleted = this.tail;
        const previous = this.getElementAt(index - 1);
        this.tail = previous;
        this.tail.next = undefined;
      } else {
        const current = deleted = this.getElementAt(index);
        const previous = current.pre;
        const next = current.next;
        previous.next = next;
        next.pre = previous;
      }
      this.count--;
      return deleted;
    }
    return undefined;
  }
}