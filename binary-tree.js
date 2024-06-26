// СОЗДАЕМ КЛАСС NODE

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// СОЗДАЕМ КЛАСС BINARYTREE

class binaryTree {
  constructor() {
    this.root = null;
  }

  // МЕТОД ДОБАВЛЕНИЯ УЗЛА

  add(value) {
    // создаем ноду
    const newNode = new Node(value);
    // проверяем если нет корня, то делаем
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // переменная устанавилвается равной корневому узлу
    let currentNode = this.root;

    // цикл, пока currentNode не будет равен null, тогда вставка нового узла
    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  preOrder(node, callback) {
    if (!node) {
      return;
    }
    if (callback) {
      callback(node);
    }
    this.preOrder(node.left, callback);
    this.preOrder(node.right, callback);
  }

  inOrder(node, callback) {
    if (!node) {
      return;
    }

    this.inOrder(node.left, callback);
    if (callback) {
      callback(node);
    }
    this.inOrder(node.right, callback);
  }

  postOrder(node, callback) {
    if (!node) {
      return;
    }

    this.postOrder(node.left, callback);
    this.postOrder(node.right, callback);
    if (callback) {
      callback(node);
    }
  }

  // ОБХОД В ГЛУБИНУ

  traverseDFS(callback, method) {
    if (method === "preOrder") {
      alert("DFS-PRE");
      return this.preOrder(this.root, callback);
    }
    if (method === "inOrder") {
      alert("DFS-IN");
      return this.inOrder(this.root, callback);
    }
    if (method === "postOrder") {
      alert("DFS-POST");
      return this.postOrder(this.root, callback);
    }
  }

  // ОБХОД В ШИРИНУ

  traverseBFS(callback) {
    alert("BFS");
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      callback(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

const myTree = new binaryTree();

myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);

// myTree.traverseDFS((node) => console.log(node.value), "preOrder");

// 8 7 5 2 6 9 10 20 11

// myTree.traverseDFS((node) => console.log(node.value), "inOrder");

// 2 5 6 7 8 9 10 11 20

// myTree.traverseDFS((node) => console.log(node.value), "postOrder");

// 2 6 5 7 11 20 10 9 8

myTree.traverseBFS((node) => console.log(node.value));

// 8 7 9 5 10 2 6 20 11
