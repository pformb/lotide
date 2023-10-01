// findKey

// Function to check if the expected value is the same as actual, (example: "hello", "hello" or 2, 2)
// Test Function:
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

// Search for key by callback function
// Define a function called findKey that takes an object and a callback function as arguments
const findKey = function(object, callback) {
  // We use Object.entries(object) to get an array of key-value pairs from the object
  for (const [key, value] of Object.entries(object)) {
    /* Inside the loop, we check if the callback function returns true for the current value
    If it does, we return the key immediately. */
    if (callback(value)) {
      return key;
    }
  }
  // If the loop completes without finding a matching key, return undefined.
  return undefined;
};

// Test Code:
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"