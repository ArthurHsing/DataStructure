import { defaultCompare, defaultEquals, Compare } from './util.js'
import LinkedList from './11.LinkedList.js'
class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
  insert(element) {
    if (this.size() === 0) {
      super.insert(element, 0);
    } else {
      super.insert(element, this.getIndexNextSortedElement(element));
    }
    return true;
  }
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i;
    for (i = 0; i < (this.size()) && current; i++) {
      if (defaultCompare(element, current.element) === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}

const s = new SortedLinkedList();
s.insert(4);
s.insert(3);
s.insert(6);
s.insert(1);
s.insert(-9);
s.insert(9);
console.log(s);