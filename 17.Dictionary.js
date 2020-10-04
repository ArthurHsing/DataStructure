import { defaultToString } from './util.js'
import { ValuePair } from './models/value-pair.js'
export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  keyValues() {
    return Object.values(this.table);
  }
  keys() {
    return this.keyValues().map(keyvalue => keyvalue.key);
  }
  values() {
    return this.keyValues().map(keyvalue => keyvalue.value);
  }
  forEach(callbackFun) {
    const keyValues = this.keyValues();
    for (let i = 0; i < keyValues.length; i++) {
      const result = callbackFun(keyValues[i].key, keyValues[i].value);
      if (result === false) {
        break;
      }
    }
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.table = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keyValues = this.keyValues();
    let resultStr = `${keyValues[0].toString()}`
    for (let i = 1; i < keyValues.length; i++) {
      resultStr = `${resultStr}, ${keyValues[i].toString()}`;
    }
    return resultStr;
  }
}

const d = new Dictionary();
d.set('a', 123);
d.set('b', 234);
d.set('c', 345);
// d.clear();
// console.log(d.isEmpty());
console.log(d.toString());