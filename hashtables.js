//



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
  