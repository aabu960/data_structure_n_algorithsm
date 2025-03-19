// SEARCHING
// Binary Search 
//Linear 
function binarySearch (arr, target) {
    for(let i = 0; i<=Array.length;i++) {
        if (arr ===target) return i; //fond

    }
    return -1; // not found
}

console.log(binarySearch([10,52,0,30,10]));

// Binary search

function binarySearches(arr, target) {
    left= 0;
    right= arr.length -1;

    while (left <= right ) {
        let mid = Math.floor((left + right) / 2);


if(arr[mid]=== target) return mid //found
else if (arr[mid <target] ) left = mid +1;
else right = mid -1;


    } 
    return -1 // not found 

}

console.log("good")