// Use eqArrays for assertArraysEqual below
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

// Create function to test eqArrays and if does return true, console log PASS, if not FAIL
const assertArraysEqual = function(eqArrays) {
  if (eqArrays !== true) {
    console.log(`🛑🛑🛑`);
  } else {
    console.log(`✅✅✅`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));