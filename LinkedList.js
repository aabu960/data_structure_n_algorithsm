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

    }