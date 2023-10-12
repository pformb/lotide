// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
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

module.exports = countOnly;



