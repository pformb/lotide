// Test Functions:

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

const assertArraysEqual = function(eqArrays) {
  if (eqArrays !== true) {
    console.log(`🛑🛑🛑`);
  } else {
    console.log(`✅✅✅`);
  }
};

/* Function that takes a source array and an array with values to remove.  If any of the values
from itemsToRemove are found in source, return newArray with out values. */
const without = function(source, itemsToRemove) {
  /* Declare a new array which equals source.filter (a method to filter out what you want) 
  inside the filter method we are asking the new array to = everything that is NOT found 
  inside itemsToRemove.  We use the .includes method to with the ! (bang) operator to identify what 
  is NOT inside itemsToRemove. 
  */
  const newArray = source.filter((i) => !itemsToRemove.includes(i));
  return newArray;
};

// Test code:
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));


console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));



