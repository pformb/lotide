// eqObjects

// Use assertEqual to check if our expected result is the actual result.
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Inside of our eqObjects function, we will be able to call eqArrays whenever we encounter arrays.
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // declare variables to the number of keys in each object1 and object2.
  let len1 = Object.keys(object1).length;
  let len2 = Object.keys(object2).length;
  // If the number of keys in object1 is not the same as object2 return false
  if (len1 !== len2) {
    return false;
  }
  /* Use for..of (since the keys are an array) to loop through object1 keys
  and declare keys/values to variable "items" */
  for (let items of Object.keys(object1)) {
    /* If object1's items and object2's items are arrays, use equArrays to compare them
    if eqArrays finds the arrays to be the same values then return true, if they are not arrays
    or not the same values then skip(continue) this code */
    if (Array.isArray(object1[items]) && Array.isArray(object1[items])) {
      if (eqArrays(object1[items], object2[items]) === true) {
        return true;
      }
    } else {
      continue;
    }
    // If object1's items(color and size) dont match up with object2's items, return false
    
    if (object1[items] !== object2[items]) {
      return false;
    }
  }
  // For everything else (if they are the same), return true.
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false