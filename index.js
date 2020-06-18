//Measures the performance of the findNemo algorithm and compares the difference between a small array, nemo, and a large array, large. The performance here is measured by time (ms), which is not the best way to measure performance due to many factors such as CPU speed, background processes, the language used, and more.

//Big O Notation: O(n) [Linear Time]. Single for loop requires that each element in the array is checked. So for n elements there are n comparisons/operations.

//Added break statement in v2 to make more efficient. Although this does not change the Big O Notation since worst case scenario for scalability would still be O(n);

const nemo = ['nemo'];
const large = new Array(10000).fill('nemo');
const {performance} = require('perf_hooks');

function findNemo(array) {
  let t0 = performance.now();
  for(let i = 0; i < array.length; i++){
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
}

findNemo(nemo);
findNemo(large);