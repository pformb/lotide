const eqArrays = require('./eqArrays');

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
    or not the same values return false */
    if (Array.isArray(object1[items]) && Array.isArray(object2[items])) {
      if (eqArrays(object1[items], object2[items]) === true) {
        return true;
      } else {
      return false;
    }
    // If object1's items dont match up with object2's items, return false
  } else { 
    if (object1[items] !== object2[items]) {
      return false;
    }
  }
}
  // For everything else (if they are the same), return true.
  return true;
};


module.exports = eqObjects;

