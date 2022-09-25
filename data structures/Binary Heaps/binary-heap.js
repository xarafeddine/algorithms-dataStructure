class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  remove() {
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
      this.values[parentIndex] < this.values[currentIndex]
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
        if (this.values[child2Index] > this.values[currentIndex]) {
          child2 = child2Index;
        }
      }
      if (this.values[child1Index]) {
        if (this.values[child1Index] > this.values[currentIndex]) {
          child1 = child1Index;
        }
      }

      let indexOfMax;
      if (child1 && child2) {
        indexOfMax =
          this.values[child1] > this.values[child2] ? child1 : child2;
      } else if (!child1 && child2) {
        indexOfMax = child2;
      } else if (child1 && !child2) {
        indexOfMax = child1;
      } else {
        break;
      }

      [this.values[currentIndex], this.values[indexOfMax]] = [
        this.values[indexOfMax],
        this.values[currentIndex],
      ];
      currentIndex = indexOfMax;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
heap.insert(55);
// heap.insert(54);
// heap.insert(1);
console.log(heap.values);
debugger;
