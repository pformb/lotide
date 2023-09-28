// countOnly.js
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// Count the names that are marked true in itemsToCount(object) in allItems(array)
const countOnly = function(allItems, itemsToCount) {
// Declare a variable of an empy object
  const results = {};
  // Loop through array and name each element "item"
  for (const item of allItems) {
    // If item is found in itemsToCount(object) do the following:
    if (itemsToCount[item]) {
    // If item is found in results already
      if (results[item]) {
        // Add 1 to its total count
        results[item] += 1;
      } else {
        // If item is not found in results object, add item to results and give it a count of 1.
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



