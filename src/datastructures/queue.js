/**
 * Queue implementation using Javascript (based on a William Fiset's Queue Java implementation)
 *
 * @author Ngan Nguyen, ngan.tx.nguyen@gmail.com
 *
 * Date: 10/1/2020
 *
 * Queue:
 *  - A linear data structure models real-world queues by having two primary operations (enqueue and dequeue). FIFO.
 *  - Every queue has a front and a back. We insert new element in the back (enqueue) and remove element from the front (dequeue).
 *  - Usage:
 *    - Any waiting lines model a queue
 *    - Efficiently keep track of x most recently added elements
 *    - Web server request management where you want FIFO, First In First Out
 *    - BFS graph traversal
 *  - Complexity:
 *    - Enqueue: O(1)
 *    - Dequeue: O(1)
 *    - Peak: O(1)
 *    - IsEmpty: O(1)
 *    - Contains: O(n)
 *    - Removal: O(n)
 */

import { SinglyLinkedList } from './linkedList';

/**
 * Queue implementation using SinglyLinkedList
 * @param {string | number} firstElement (optional) provide a value to initialize the queue with a first element
 */
export function Queue(firstElement = null) {
  const list = new SinglyLinkedList();

  this.size = () => list.size();
  this.isEmpty = () => list.size() === 0;
  this.clear = () => list.clear();

  /**
   * Get the element at the front of the queue without modifying the queue. O(1)
   * @returns {string | number} front element
   */
  this.peak = () => {
    if (this.isEmpty()) throw new Error('Queue Empty');
    return list.peakFirst();
  };

  /**
   * Adding element to the end of the queue (polling). O(1)
   * @param {string | number} value
   */
  this.enqueue = value => list.addLast(value);

  /**
   * Remove the front element of the queue and return its value. O(1)
   * @returns {string | number} front element
   */
  this.dequeue = () => {
    if (this.isEmpty()) throw new Error('Queue Empty');
    return list.removeFirst();
  };

  if (firstElement) this.enqueue(firstElement);

  this[Symbol.iterator] = list[Symbol.iterator];

  this.toString = () => {
    const values = [];
    for (let node of this[Symbol.iterator]()) values.push(node.data);
    return values.join(' ');
  };
}