class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    let direction;
    while (currentNode) {
      var prevNode = currentNode;
      if (currentNode.value < value) {
        direction = "right";
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        direction = "left";
        currentNode = currentNode.left;
      } else {
        return this;
      }
    }

    prevNode[direction] = newNode;
    return this;
  }

  find(value) {
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      }
    }
    return false;
  }
}

let tree = new BinarySearchTree();
tree.insert(19);
tree.insert(34);
tree.insert(2);
tree.insert(23);
tree.insert(22);
tree.insert(27);
tree.insert(28);
tree.insert(62);

debugger;
