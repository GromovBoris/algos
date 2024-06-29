class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if (this.size === 0) {
      this.root = new ListNode(value);
      this.size += 1;
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    let newNode = new ListNode(value);
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();

console.log(list.add(5));
console.log(list.add(6));
console.log(list.add(33));
console.log(list.add(4));
console.log(list.add(51));
console.log(list.add(234));
list.print();
