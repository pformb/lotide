const eqArrays = require('./eqArrays')

// Create function to test eqArrays and if does return true, console log PASS, if not FAIL
const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed`);
  } else {
    console.log(`✅✅✅ Assertion Passed`);
  }
};



module.exports = assertArraysEqual;

