const flatten = function(array) {
  // Declare a variable called newArray that is an empty array. 
  const newArray = [];
  // Loop through array to extract each value from array
  for (let i = 0; i < array.length; i++) {
    // If array[i] (values) is NOT an array, push them into newArray. 
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]) 
    } else {
      // If they are an array, loop through those nested arrays
      for (let j = 0; j < array[i].length; j++) {
        // Push array[i][j] (values found in nested arrays) into newArray
      newArray.push(array[i][j])
      }
    }
  }
return newArray
}

module.exports = flatten;


