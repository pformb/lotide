// Test Functions:
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(eqArrays) {
  if (eqArrays !== true) {
    console.log(`🛑🛑🛑`);
  } else {
    console.log(`✅✅✅`);
  }
};
/* Function that takes the values from an array and the values inside nested arrays inside that array 
and moves them to newArray */
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

// Test Code:

console.log(flatten([1, 2, [3, 4], 5, [6]]))

