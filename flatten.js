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

const flatten = function(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]) 
    } else {
      for (let j = 0; j < array[i].length; j++) {
      newArray.push(array[i][j])
      }
    }
  }
return newArray
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))

