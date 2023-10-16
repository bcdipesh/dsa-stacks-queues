/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const currentNode = new Node(val);
    if (this.first === null && this.last === null) {
      this.first = currentNode;
      this.last = currentNode;
    } else {
      currentNode.next = this.first;
      this.first = currentNode;
    }
    ++this.size;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.isEmpty()) {
      throw Error("Stack is empty.");
    }

    const firstNode = this.first;
    const secondNode = this.first.next;
    firstNode.next = null;
    this.first = secondNode;
    --this.size;

    return firstNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.isEmpty()) {
      throw Error("Stack is empty.");
    }

    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Stack;
