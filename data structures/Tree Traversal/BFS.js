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

  BFS() {
    if (!this.root) return null;
    let currentNode = this.root;
    let queue = [currentNode];
    let visited = [];
    while (queue.length !== 0) {
      let removedNode = queue.shift();
      visited.push(removedNode.value);
      removedNode.left && queue.push(removedNode.left);
      removedNode.right && queue.push(removedNode.right);
    }
    return visited;
  }

  DFS_PreOrder() {
    if (!this.root) return null;
    let arr = [];
    helper(this.root);

    function helper(currentNode) {
      if (currentNode) {
        arr.push(currentNode.value);
        helper(currentNode.left);
        helper(currentNode.right);
      }
    }

    return arr;
  }

  DFS_PostOrder() {
    if (!this.root) return null;
    let arr = [];
    helper(this.root);

    function helper(currentNode) {
      if (currentNode) {
        helper(currentNode.left);
        helper(currentNode.right);
        arr.push(currentNode.value);
      }
    }

    return arr;
  }

  DFS_InOrder() {
    if (!this.root) return null;
    let arr = [];
    helper(this.root);

    function helper(currentNode) {
      if (currentNode) {
        helper(currentNode.left);
        arr.push(currentNode.value);
        helper(currentNode.right);
      }
    }

    return arr;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);


debugger;
