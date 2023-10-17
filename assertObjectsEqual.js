// assertObjectsEqual

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
    /* If object1's items and object2's items are arrays, use eqArrays to compare them
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

const assertObjectEqual = function(actual, expected) {
// Modify our function to use the util library's inspect function to make console log more accurate
  const inspect = require('util').inspect;
  // If eqObject function's actual is the same as expected, console log Assert Pass
  if (eqObjects(actual, expected)) {
    console.log(`Assert Passed: ✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
    // If not, console log Assert Fail
  } else {
    console.log(`Assert Failed: 🛑🛑🛑 ${inspect(actual)} != ${inspect(expected)}`);
  }
  
};
  

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectEqual(shirtObject , anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectEqual(shirtObject , longSleeveShirtObject);


