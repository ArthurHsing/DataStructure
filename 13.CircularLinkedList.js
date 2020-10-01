import { defaultEquals } from './util.js';
import { Node } from './models/linked-list-models.js'
import LinkedList from './11.LinkedList.js'
class CircularLinkedList extends LinkedList {
  constructor(equals = defaultEquals) {
    super(equals);
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new Node(element);
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.head.next = this.head;
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
}

const c = new CircularLinkedList();
c.insert(1, 0);
c.insert(2, 1);
c.insert(3, 2);
c.insert('1-2', 3);
console.dir(c);