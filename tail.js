// Test Function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to return everything except the 0 index position in an array
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

// Test Code:

const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
console.log(words)


