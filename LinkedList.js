/*  

2️⃣ Types of Linked Lists
There are three main types of linked lists:

Singly Linked List – Each node points to the next node only.
Doubly Linked List – Each node points to both next and previous nodes.
Circular Linked List – The last node connects back to the first node, forming a loop.
*/

//Implementation

class Node {
    constructor(value) {
      this.value = value;  // Data stored in node
      this.next = null;  // Pointer to next node
    }
}
    class LinkedList {
        constructor() {
          this.head = null;  // First node
          this.tail = null;  // Last node
          this.length = 0;   // Number of nodes
        }
// Add node at the end (Append)
append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  
  // Add node at the beginning (Prepend)
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
   // Print linked list
   printList() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}
// Example usage
const tasks = new LinkedList();
tasks.append("Complete project");
tasks.append("Submit assignment");
tasks.prepend("Wake up");

tasks.printList(); // Wake up -> Complete project -> Submit assignment
    