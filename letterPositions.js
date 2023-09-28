// letterPositions

// Function to find the letters in a sentence string and their index positions, put them into an object. 
const letterPositions = function(sentence) {
  // Delcare a variable called results which is an empty object 
  let results = {};
  // Loop through sentence string 
  for (let i = 0; i < sentence.length; i++) {
    // Declare a variable called letter which is the sentence index position
    const letter = sentence[i];
    // If letter is a white space then skip (continue) dont do anything with it
    if (letter === " ") {
      continue;
    }
    /* Use hasOwnProperty(returns true if the specified property is a direct property of the object)
     to see if the letter exists already in results, if it does, push the index into letter in object */
    if (results.hasOwnProperty(letter)) {
      results[letter].push(i);
      // If letter doesnt exist 
    } else {
      // Create a property in results and assign its value the index position in an array
      results[letter] = [i];
    }
  }
  return results;
};

// Test code:
console.log(letterPositions("lighthouse in the house"));