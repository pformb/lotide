// findKeyByValue

// Test Function

const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// search for key(genre) by value(tvShow)
const findKeyByValue = function(object, value) {
// loop through keys(genres) and assign keys(genres) to variable category
  for (const category of Object.keys(object)) {
    // if given value(tvShow) is found in the object(bestTVShowsByGenre) by loop
    if (value === object[category]) {
      // return category(genre)
      return category;
    }
  }
};

// Test Code:

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
  
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  
  
  
  
  
  









