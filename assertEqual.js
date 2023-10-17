// Function to check if the expected value is the same as actual

const assertEqual = function(actual, expected) {
  // If actual is the same as expected
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
  
