const { NotImplementedError, ListNode } = require('../extensions/index.js');

 //const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    let node = new ListNode(data);

    if(this.head === null && this.tail === null) {
        this.head = node;
        this.tail = node;
    }

    else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue(){
    let removedEl = this.head.value;
    this.head = this.head.next;
    return removedEl;
  }

  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
