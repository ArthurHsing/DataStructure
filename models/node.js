import { Colors } from './tree.js'

export class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
  toString() {
    return `${this.key}`;
  }
}
export class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }
  isRed() {
    return this.color === Colors.RED
  }
}