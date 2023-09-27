// letterPositions
const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }
    if (results.hasOwnProperty(letter)) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));