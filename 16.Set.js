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
  union(otherSet) {
    const unionSet = new Set();
    const setArr = [this.valuesLegacy(), otherSet.valuesLegacy()];
    setArr.forEach(perSetValues => {
      perSetValues.forEach(value => {
        unionSet.add(value);
      });
    });
    return unionSet;
  }
}

const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);

const set2 = new Set();
set2.add(2);
set2.add(3);
set2.add(4);
console.log(set1.union(set2).valuesLegacy());