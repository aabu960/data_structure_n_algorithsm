//Sorting Allgithsm
/*  

✅ Bubble Sort – Swap adjacent elements
✅ Selection Sort – Find the smallest and place it first
✅ Insertion Sort – Insert each element in its correct place
✅ Merge Sort – Divide, sort, merge (recursion)
✅ Quick Sort – Pick pivot, partition, sort (recursion)
✅ Heap Sort – Convert to heap, sort using heapify
*/

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
        }
      }
    }
    return arr;
  }
  
  console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
  console.log("sorted")