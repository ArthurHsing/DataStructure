import { defaultToString } from './util.js';
import { ValuePair } from './models/value-pair.js'
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const str = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      this.table[this.hashCode(key)] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    const keys = Object.keys(this.table);
    const length = keys.length;
    if (length === 0) {
      return '';
    }
    let resultStr = `${keys[0]} => ${this.table[keys[0]]}`;
    for (let i = 1; i < length; i++) {
      resultStr = `${resultStr}, ${keys[i]} => ${this.table[keys[i]]}`;
    }
    return resultStr;
  }
}

const ht = new HashTable();
ht.put('a', 1234);
ht.put('b', 1234);
ht.put('c', 1234);
// console.log(ht.isEmpty());
console.log(ht.toString());