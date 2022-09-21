class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail.next = node;
    }

    this.tail = node;

    this.size++;

    return this;
  }

  pop() {
    let currentNode = this.head;
    if (!currentNode) return currentNode;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      this.tail.next = null;
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
    this.head = newNode;
    this.size++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    let counter = index;
    while (counter > 0) {
      current = current.next;
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

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.size++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size) return false;
    if (index === this.size - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    let prevNode = this.get(index - 1);

    prevNode.next = prevNode.next.next;
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

const list = new SinglyLinkedList();
list.push(2);
list.push(12);
list.push(22);
list.push(32);

console.log(list);
