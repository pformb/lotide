const tail = function(array) {
  // Declare a variable called newArray as an empty array
  const newArray = [];
  // Loop through array starting at index position 1 (skipping 0)
  for (let i = 1; i < array.length; i++) {
    // Push array[i] which is all the other values in array other than 0 to newArray
    newArray.push(array[i]);
  }
  return newArray;
};


module.exports = tail;


