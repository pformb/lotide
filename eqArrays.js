// eqArrays.js
// Use assertEqual to test if eqArrays function is working correctly. 
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Function to check if two arrays are the same
const eqArrays = function(arr1, arr2) {
  // If array 1 length is not equal to array 2 length, return false.  Stop computing immediately. 
  if (arr1.length !== arr2.length) {
    return false;
  }
  /* Loop through arrays, length can be either arr1 or arr2 as if they are not the same it will 
  return false from above code. arr1[i] and arr2[i] is the elements inside each array */
  for (let i = 0; i < arr1.length; i++) {
    // If elements inside each array dont equal each other, return false. 
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If the code makes it this far, all elements are the same in both arrays, so, return True
  return true;
};
  
// Test Code: 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);