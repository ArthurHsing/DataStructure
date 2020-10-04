import { ValuePair } from "./models/value-pair.js";
import { defaultToString } from './util.js';
import LinkedList from './11.LinkedList.js';
class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key % 37;
    }
    const str = this.toStrFn(key);
    let num = str.charCodeAt(0);
    for (let i = 1; i < str.length; i++) {
      num += str.charCodeAt(i);
    }
    return num % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const hash = this.hashCode(key);
      if (this.table[hash] == null) {
        this.table[hash] = new LinkedList();
      }
      this.table[hash].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }
  get(key) {
    const hash = this.hashCode(key);
    const linkedList = this.table[hash];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }
  remove(key) {
    const hash = this.hashCode(key);
    const linkedList = this.table[hash];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[hash];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}

const ht = new HashTableSeparateChaining();
ht.put('arthur', 123);
ht.put('hsing', 456);
ht.put(19, 987);
ht.remove(19);
console.dir(ht);