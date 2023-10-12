const middle = function(array) {
  // Declare a variable called len to array.length
  let len = array.length;
  // If array length is less than or equal to 2 return an empty array
  if (len <= 2) {
    return [];
  }
  // If length is a even number 
  if (len % 2 === 0) {
    /* Return array with two values,
    first value: is length / 2 -1 (example: length = 6, / 2 = 3 -1 = 2, array[index 2])
    second value: is length / 2 (example: length = 6, / 2 = 3, array[index 3])
    */
    return [array[(len / 2) - 1], array[len / 2]];
    // If length is odd number
  } else {
    // Return middle position index of array. Use Math.floor method to round number of length / 2
    return [array[Math.floor(len / 2)]];
  }
};

module.exports = middle;