class Set {
  constructor() {
    this.items = {};
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  sizeLegacy() {
    return Reflect.ownKeys(this.items).length;
  }
  valuesLegacy() {
    const result = [];
    for (let i of Reflect.ownKeys(this.items)) {
      result.push(this.items[i]);
    }
    return result;
  }
}

const set = new Set();
console.log(set.add(1));
console.log(set.add(2));
console.log(set.add(3));
console.log(set.has(2));
set.delete(2);
console.log(set.has(2));
console.log(set.sizeLegacy());
console.log(set.valuesLegacy());