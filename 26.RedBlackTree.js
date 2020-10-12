import BinarySearchTree from './24.BinarySearchTree.js';
import { RedBlackNode } from './models/node.js';
import { Colors } from './models/tree.js';
import { Compare } from './util.js';
class RedBlackTree extends BinarySearchTree {
  constructor() {
    super();
  }
  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }
  fixTreeProperties(node) {
    while (node && node.parent && node.parent.isRed() && node.color != Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;
      // 情形A：父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        // 情形1A：叔节点也是红色——只需要重新填写颜色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          // 将当前节点的引用指向祖父节点，继续检查树是否有其他冲突
          node = grandParent;
        } else {
          // 情形2A：节点时右侧子——左旋转
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }
          // 情形3A：节点是左侧子节点——右旋转
          this.rotationLL(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {  //情形B：父节点是右侧子节点
        const uncle = grandParent.left;
        // 情形1B：叔节点时红色——只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情形2B：节点是左侧子节点——左旋转
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          // 情形3B：节点是右侧子节点——左旋转
          this.rotationRR(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK;
  }
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node.parent.left === node) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
}

const rbt = new RedBlackTree();
rbt.insert(9);
rbt.insert(8);
rbt.insert(7);
rbt.insert(6);
rbt.insert(5);
console.dir(rbt);