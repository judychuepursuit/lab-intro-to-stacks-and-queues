const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// created Node class
class Node {
// changed description to data as per instructions
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// created Stack methods -LIFO
class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    let newItem = new Node (data)
    newItem.next = this.top
    this.top = newItem
}
  // "top" replaced "head" from linked list lab
  // "currentNode" replaced "currentNde" from class review w John
  size() {
    let count = 0;
    let currentNode = this.top
      while (currentNode) {
      count++;
      currentNode = currentNode.next
      }
      return count;
  }

  pop () {
    let oldTop = this.top  
    this.top = this.top.next
      return oldTop
}

  isEmpty() {
    return !this.top
  }

  findMin() {
    // Ahmad had   let min = infinity;
    let min = this.top.data;
    let node = this.top;
    while (node) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

  peek() {
    return this.top;
  }

// BONUS: SORT-sort the stack into ascending order. CHALLENGE only use stacks to achieve this (no arrays or objects etc.)
// }
// sort() {
//   if (this.isEmpty()) {
//     // console.log("Stack is empty");
//   }
}
// QUEUE-FIFO
class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = value;

  }
  count() {
    return this.size;

  }
  // (The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.)= dequeue from another queue
  dequeue() {
    // removed these from answer from reading and tests still passed
    // if (this.first == null) {
    //   throw new Error("The queue is empty");
    // }
    const item = this.first;
    // removed these from answer from reading and tests still passed
    // if (this.first === this.last) {
    //   this.last = null;
    // }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  peek() {
    // removed these from answer from reading and tests still passed
    // if (this.first == null) {
    //   throw new Error("The queue is empty");
    // }
    return this.first;
  }

// (The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.)= enqueue from another queue
enqueue(data) {
  let newItem = new Node(data);
  if (!this.first) {
    this.first = newItem;
    this.last = newItem;
  } else {
    this.last.next = newItem;
    this.last = newItem;
  }
  this.size++;
  // removed these from answer from reading and tests still passed
  // return ++this.size;
  // }
  // isEmpty() {
  //   return this.first === null;
}

  findMax() {
    let node = this.first;
    let max = this.first.data;
    while (node) {
      if (node.data > max) {
        max = node.data;
      }
      node = node.next;
    }
    return max;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.size === 0;
  }

}

const numStack = new Stack();
console.log(numStack.isEmpty());
for (let i = 0; i < nums.length; i++) {
  numStack.push(nums[i]);
}
console.log(inspect(numStack));
console.log(numStack.isEmpty());

module.exports = {
  Node,
  Queue,
  Stack,
};
