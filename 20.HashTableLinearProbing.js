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
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
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
  remove(key) {
    let hash = this.hashCode(key);
    let valuePair = this.table[hash];
    if (valuePair != null) {
      if (valuePair.key === key) {
        delete this.table[hash];
        this.verifyRemoveSideEffect(key, hash);
        return true;
      }
      valuePair = this.table[++hash];
      while (valuePair != null && valuePair.key !== key) {
        valuePair = this.table[++hash];
      }
      if (valuePair != null && valuePair.key === key) {
        delete this.table[hash];
        this.verifyRemoveSideEffect(key, hash);
        return true;
      }
    }
    return false;
  }
  verifyRemoveSideEffect(key, removedPosition) {
    let index = removedPosition + 1;
    const hash = this.hashCode(key);
    while (this.table[index] != null) {
      const postHash = this.hashCode(this.table[index].key);
      if (postHash <= removedPosition || postHash <= hash) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}

const ht = new HashTableLinearProbing();
ht.put(1, 123);
ht.put(1, 234);
ht.put(2, 2345);
ht.remove(1);
console.dir(ht);