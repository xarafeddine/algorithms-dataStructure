class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }
  dequeue() {
    let max = this.values[0];
    let last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return max;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      parentIndex >= 0 &&
      this.values[parentIndex].priority > this.values[currentIndex].priority
    ) {
      [this.values[parentIndex], this.values[currentIndex]] = [
        this.values[currentIndex],
        this.values[parentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  sinkDown() {
    let currentIndex = 0;
    while (currentIndex < this.values.length - 1) {
      let child1Index = 2 * currentIndex + 1;
      let child2Index = 2 * currentIndex + 2;

      let child1, child2;
      if (this.values[child2Index]) {
        if (
          this.values[child2Index].priority < this.values[currentIndex].priority
        ) {
          child2 = child2Index;
        }
      }
      if (this.values[child1Index]) {
        if (
          this.values[child1Index].priority < this.values[currentIndex].priority
        ) {
          child1 = child1Index;
        }
      }

      let indexOfMin;
      if (child1 && child2) {
        indexOfMin =
          this.values[child1].priority < this.values[child2].priority
            ? child1
            : child2;
      } else if (!child1 && child2) {
        indexOfMin = child2;
      } else if (child1 && !child2) {
        indexOfMin = child1;
      } else {
        break;
      }

      [this.values[currentIndex], this.values[indexOfMin]] = [
        this.values[indexOfMin],
        this.values[currentIndex],
      ];
      currentIndex = indexOfMin;
    }
  }
}

const queue = new PriorityQueue();
queue.enqueue("common cold", 5);
queue.enqueue("gunshot wound", 1);
queue.enqueue("high fever", 4);
queue.enqueue("broken arm", 2);
queue.enqueue("glass in foot", 3);

debugger;
