/*
1️⃣ Stacks – LIFO (Last In, First Out)
What is a Stack?
A stack is a data structure where the last item added is the first to be removed (LIFO rule).

Scenario: Undo/Redo in a Text Editor
Every time you type, it gets pushed onto a stack.
When you press Undo (Ctrl + Z), the last action pops off.

*/


class Stack {
    constructor() {
      this.stack = [];
    }
  
    // Push: Add item
    push(value) {
      this.stack.push(value);
    }
  
    // Pop: Remove top item
    pop() {
      return this.stack.pop();
    }
  
    // Peek: See top item
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    // isEmpty: Check if empty
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  // Example usage
  const history = new Stack();
  history.push("Open Google");
  history.push("Open YouTube");
  history.push("Open Twitter");
  
  console.log(history.peek()); // "Open Twitter"
  history.pop();
  console.log(history.peek()); // "Open YouTube"
  