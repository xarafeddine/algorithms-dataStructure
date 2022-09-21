class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;

    this.size++;

    return this;
  }

  pop() {
    let currentNode = this.tail;
    if (!currentNode) return null;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentNode.prev;
      this.tail.next = null;
      currentNode.prev = null;
    }
    this.size--;
    return this;
  }

  shift() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      let currentNode = this.head.next;
      currentNode.prev = null;
      this.head.next = null;
      this.head = currentNode;
    }
    this.size--;
    return this;
  }
  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    if (!this.head) this.tail = newNode;
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.size) return null;

    let counter = index;
    let current = this.head;
    let move = "next";

    if (index > Math.floor(this.size / 2)) {
      current = this.tail;
      move = "prev";
      counter = this.size - 1 - index;
    }

    while (counter > 0) {
      current = current[move];
      counter--;
    }

    return current;
  }

  set(val, index) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.size) return false;
    if (index === this.size) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    let prevNode = this.get(index - 1);
    prevNode.next.prev = newNode;
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;

    this.size++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size) return false;
    if (index === this.size - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    let nextNode = removedNode.next;

    removedNode.prev = null;
    removedNode.next = null;
    
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.size--;
    return true;
  }

  reverse() {
    let count = this.size;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;
    while (count > 0) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;

      this.size--;
    }
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);

console.log(list);
