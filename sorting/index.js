// main.mjs
import quickSort from './Quick.js';
import mergeSort from './Merge.js';
import heapSort from './Heap.js';
import bogoSort from './Bogo.js';

// Function to calculate execution time
async function calculateExecutionTime(sortFunction, array) {
    const startTime = performance.now();
    await sortFunction(array);
    const endTime = performance.now();
    const Time = endTime - startTime;
    console.log(sortFunction, Time , 'ms');
}

// Example usage
let unsortedArray = Array.from({ length: 999999}, () => Math.floor(Math.random() * 99999999999));

// Calculate execution time for quickSort
await calculateExecutionTime(quickSort, [...unsortedArray]);

// Calculate execution time for mergeSort
await calculateExecutionTime(mergeSort, [...unsortedArray]);

// Calculate execution time for heapSort
await calculateExecutionTime(heapSort, [...unsortedArray]);

// Calculate execution time for bogoSort //! not run it , your CPU will fucked up :)
// await calculateExecutionTime(bogoSort, [...unsortedArray]);


