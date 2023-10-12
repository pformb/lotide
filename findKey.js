const findKey = function(object, callback) {
  // We use Object.entries(object) to get an array of key-value pairs from the object
  for (const [key, value] of Object.entries(object)) {
    /* Inside the loop, we check if the callback function returns true for the current value
    If it does, we return the key immediately. */
    if (callback(value)) {
      return key;
    }
  }
  // If the loop completes without finding a matching key, return undefined.
  return undefined;
};

module.exports = findKey;

