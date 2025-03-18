 /* 
 2️⃣ Queues – FIFO (First In, First Out)
What is a Queue?
A queue is a data structure where the first element added is the first to be removed (FIFO rule).

Scenario: Printer Queue
When multiple documents are sent to a printer, the first document added gets printed first.
 */

class Queue {
    constructor() {
      this.queue = [];
    }
  
    // Enqueue: Add item
    enqueue(value) {
      this.queue.push(value);
    }
  
    // Dequeue: Remove first item
    dequeue() {
      return this.queue.shift();
    }
  
    // Peek: See first item
    peek() {
      return this.queue[0];
    }
  
    // isEmpty: Check if empty
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  // Example usage
  const printerQueue = new Queue();
  printerQueue.enqueue("Document1.pdf");
  printerQueue.enqueue("Document2.pdf");
  printerQueue.enqueue("Document3.pdf");
  
  console.log(printerQueue.peek()); // "Document1.pdf"
  printerQueue.dequeue();
  console.log(printerQueue.peek()); // "Document2.pdf"
   