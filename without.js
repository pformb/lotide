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

module.exports = without;



