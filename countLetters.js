const countLetters = function(string) {
  // Delcare a variable called results as an empty object.
  const results = {};
  // Loop through string and declare a variable called letter as each individual character or whitespace
  for (let letter of string) {
    // If letter is a whitespace, skip (continue) which means dont count it or add it to result object
    if (letter === " ") {
      continue;
    }
    // If letter is found in results already 
    if (results[letter]) {
      // add 1 to the count of the letter that is already found in results. 
      results[letter] += 1;
      // If letter is not found in results 
    } else {
      // Add that letter to results and assign it a count of 1
      results[letter] = 1;
    }
  }
  return results;

};

module.exports = countLetters;

