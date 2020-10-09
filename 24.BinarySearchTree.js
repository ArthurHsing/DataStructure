import { Compare, defaultCompare } from './util.js';
import { Node } from './models/node.js';
export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    console.log(node.key);
    console.log(key);
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
}
const b = new BinarySearchTree();
b.insert(6);
b.insert(3);
b.insert(7);
b.insert(2);
b.insert(9);
b.insert(8);
console.dir(b);