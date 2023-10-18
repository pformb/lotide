// asssertObjectEqual.test.js
const assertObjectsEqual = require('../assertObjectsEqual');


// Test Code:
assertObjectsEqual({1: [2]}, {1: [2]});
assertObjectsEqual({1: [2]}, {1: [3]});
assertObjectsEqual({ size: "medium", color: "red", sleeveLength: "long" }, { colors: ["red", "blue"], size: "medium" });