// takeUntil

// Function that takes an array and a callback function as its parameters.
/* Function will keep collecting items from a provided array until the callback provided returns a
truthy value. */

const takeUntil = function(array, callback) {
  // Declare a variable called results that is an empty array
  const results = [];
  // Loop through elements in array and name them item
  for (let item of array) {
    // if callback item = true (example: item < 0)
    if (callback(item)) {
      // break (stop the loop, dont loop further)
      break;
    }
    // push items to results array
    results.push(item);
  }
  return results;
};

// Test Code:

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// Returns all the numbers till the number is less than 0. Item = x
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// Returns all the strings till the string is a comma. Item = x
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);