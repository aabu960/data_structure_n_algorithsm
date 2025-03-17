//

class HashTable {
  constructor(size = 7) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.data[index]) {
      for (let pair of this.data[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }
}

const users = new HashTable();
users.set("Abdul", "abdul@gmail.com");
users.set("Fatima", "fatima@gmail.com");

console.log(users.get("Abdul")); // "abdul@gmail.com"
console.log(users.get("Fatima")); // "fatima@gmail.com"


function firstRecurringCharacter(arr) {
    let seen = new Set(); // Hash set to store visited elements
  
    for (let char of arr) {
      if (seen.has(char)) {
        return char; // Return as soon as a duplicate is found
      }
      seen.add(char);
    }
  
    return undefined; // No recurring character found
  }
  
  console.log(firstRecurringCharacter([2, 1, 2, 3, 4])); // Output: 2
  console.log(firstRecurringCharacter("abca"));         // Output: "a"
  console.log(firstRecurringCharacter([1, 2, 3, 4]));   // Output: undefined
  