// Function to check if the expected value is the same as actual, (example: "hello", "hello" or 2, 2)

const assertEqual = function(actual, expected) {
  // if actual is the same as expected
  if (actual === expected) {
    // console log Assert Pass
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // If actual is not same as expected
  } else {
    // Console log Assert Fail
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
  
