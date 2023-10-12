// Function named map that takes in an array and a callback function as parameters
const map = function(array, callback) {
  // Declare a variable called results thats an empty array
  const results = [];
  // Loop through array and call each value in array: item
  for (let item of array) {
    /* Push each item to results after running it through callback function. The callback function
    can be what ever you want it to be */
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
