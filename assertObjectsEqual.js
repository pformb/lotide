// assertObjectsEqual
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
// Modify our function to use the util library's inspect function to make console log more accurate
  const inspect = require('util').inspect;
  // If eqObject function's actual is the same as expected, console log Assert Pass
  if (eqObjects(actual, expected)) {
    console.log(`Assert Passed: ✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
    // If not, console log Assert Fail
  } else {
    console.log(`Assert Failed: 🛑🛑🛑 ${inspect(actual)} != ${inspect(expected)}`);
  }
  
};
module.exports = assertObjectsEqual;
  

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertObjectEqual(shirtObject , anotherShirtObject);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertObjectEqual(shirtObject , longSleeveShirtObject);



