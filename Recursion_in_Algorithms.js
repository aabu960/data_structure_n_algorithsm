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