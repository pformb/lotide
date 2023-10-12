
// Function that takes an array and a callback function as its parameters.
/* Function will keep collecting items from a provided array until the callback provided
returns a truthy value. */
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

module.exports = takeUntil;

