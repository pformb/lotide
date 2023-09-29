// map

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

// Use assertArraysEqual as a Test Function:
const assertArraysEqual = function(eqArrays) {
  if (eqArrays !== true) {
    console.log(`Assert FAIL 🛑🛑🛑`);
  } else {
    console.log(`Assert PASSED ✅✅✅`);
  }
};

// Function named map that takes in an array and a callback function as parameters
const map = function(array, callback) {
  // Declare a variable called results thats an empty array
  const results = [];
  // Loop through array and call each value in array: item
  for (let item of array) {
    /* Push each item to results after running it through callback function. The callback function
    can be what ever you want it to be */
    results.push(callback(item));
  }
  return results;
};

// Test Code:

/* Declare a variable called results1 which equals the map function. The map function takes in words
as the array, and an anon function as the callback. The anon callback function in this case, uses 
word as a parameter which returns the 0 index of each word, aka the first letter. */
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']));

// Assert Test 1 - array: numbers, callback: num x2
const numbers = [1, 2, 3, 4, 5];
assertArraysEqual(eqArrays(map(numbers, num => num * 2), [2, 4, 6, 8, 10]));

// Assert Test 2 - array: animals, callback: true or false, first letter starts with B
const animals = ["Bird", "Octopus", "Bear", "Deer"];
assertArraysEqual(eqArrays(map(animals, firstLetter => firstLetter[0] === 'B'), [true, false, true, false]));

// Assert Test 3 - array: numSquared, callback: num x num
const numSquared = [3, 6, 9, 12, 15];
assertArraysEqual(eqArrays(map(numSquared, num => num * num), [9, 36, 81, 144, 225]));
