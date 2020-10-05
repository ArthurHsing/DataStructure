import { ValuePair } from "./models/value-pair.js";
import { defaultToString } from './util.js';
class HashTableLinearProbing {
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
      let hash = this.hashCode(key);
      if (this.table[hash] == null) {
        this.table[hash] = new ValuePair(key, value);
      } else {
        while (this.table[++hash]) { }
        this.table[hash] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }
  get(key) {
    let hash = this.hashCode(key);
    let valuePair = this.table[hash];
    if (valuePair != null) {
      if (valuePair.key === key) {
        return valuePair.value;
      }
      valuePair = this.table[++hash];
      while (valuePair != null && valuePair.key !== key) {
        valuePair = this.table[++hash];
      }
      if (valuePair != null && valuePair.key === key) {
        return valuePair.value
      }
    }
    return undefined;
  }
}

const ht = new HashTableLinearProbing();
ht.put('Ygritte', 12345);
ht.put('Jonathan', 23456);
ht.put('Jamie', 34567);
ht.put(5, 45678);
console.dir(ht);
console.log(ht.get('Ygritte'));