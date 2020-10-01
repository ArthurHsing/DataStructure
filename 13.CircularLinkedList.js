import { defaultEquals } from './util.js';
import { Node } from './models/linked-list-models.js'
import LinkedList from './11.LinkedList.js'
class CircularLinkedList extends LinkedList {
  constructor(equals = defaultEquals) {
    super(equals);
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        if (this.head == null) {
          this.push(element);
        } else {
          node.next = this.head;
          this.head = node;
          this.getElementAt(this.size() - 1).next.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  push(element) {
    const node = new Node(element);
    if (this.count === 0) {
      this.head = node;
      this.head.next = this.head;
    } else {
      let current = this.head;
      for (let i = 1; i < this.count; i++) {
        current = current.next;
      }
      current.next = node;
      node.next = this.head;
    }
    this.count++;
    return true;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let deleted;
      if (index === 0) {
        deleted = this.head;
        if (this.count === 1) {
          this.head = undefined;
        } else {
          const last = this.getElementAt(this.count - 1);
          this.head = this.head.next;
          last.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        deleted = previous.next;
        previous.next = deleted.next;
      }
      return deleted;
    }
  }
}

const c = new CircularLinkedList();
c.push(1);
c.push(2);
c.push(3);
c.push(4);
c.removeAt(2)
console.dir(c);