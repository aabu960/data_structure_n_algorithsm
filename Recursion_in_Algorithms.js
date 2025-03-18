function countdown(n) {
    if (n<=0){
        console.log("Done!");
        return;
    }
console.log(n);
countdown(n-1);

}
// Factorial
countdown(10);

function factorial(n) {
    if(n === 0) return 1; //Base Case

return n * factorial(n-1); // Recussive Case

}

console.log(factorial(5));


// Factorial Using Iteration

function factorialIteration(n) {
    let result = 1;
    for(let i = 2; i <=n; i++){
        result *= i;

    }
    return result;

}
console.log(factorialIteration(10));

// Fibonacci Sequence 
//Find nth Fibonacci Number (0, 1, 1, 2, 3, 5, 8...)

function fibonacci(n) {
    if (n <= 1) return n; // Base Case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive Case
  }
  
  console.log(fibonacci(5)); // Output: 5
 
  // Sum of an Array using Recursion
  function sumArray(arr, index = 0) {
    if (index === arr.length) return 0; // Base Case
    return arr[index] + sumArray(arr, index + 1); // Recursive Case
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); // 15
  

  