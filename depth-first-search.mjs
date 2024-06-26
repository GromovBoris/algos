import { binaryTree } from "./binary-tree.mjs";

binaryTree.preOrder = function (node, callback) {
  if (!node) {
    return;
  }
  if (callback) {
    callback(node);
  }
  this.preOrder(node.left, callback);
  this.preOrder(node.right, callback);
};
binaryTree.inOrder = function (node, callback) {
  if (!node) {
    return;
  }
};
binaryTree.postOrder = function (node, callback) {
  if (!node) {
    return;
  }
};

binaryTree.traverseDFS = function (callback, method) {
  if ((method = "preOrder")) {
    return this.preOrder(this.root, callback);
  }
  if ((method = "inOrder")) {
    return this.preOrder(this.root, callback);
  }
  if ((method = "postOrder")) {
    return this.preOrder(this.root, callback);
  }
};

const myTree = new binaryTree();

myTree.add(4);
myTree.add(8);
myTree.add(3);
myTree.add(9);
myTree.add(3);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(1);
myTree.add(11);

console.log(myTree.preOrder());
