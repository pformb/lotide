const findKeyByValue = function(object, value) {
// loop through keys and assign keys to variable category
  for (const category of Object.keys(object)) {
    // if given value(tvShow) is found in the object(bestTVShowsByGenre) by loop
    if (value === object[category]) {
      // return category(genre)
      return category;
    }
  }
};

module.exports = findKeyByValue;



  
  
  
  
  
  









