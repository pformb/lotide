const assert = require('chai').assert;
const eqObjects = require('../eqObjects')

describe("#eqobjects", () => {
  it(`returns true for { color: "red", size: "medium" }, { size: "medium", color: "red" }`, () => {
    assert.deepEqual(eqObjects({ color: "red", size: "medium" }, { color: "red", size: "medium" }), true);
  });
  it(`returns false for { size: "medium", color: "red", sleeveLength: "long" }, { colors: ["red", "blue"], size: "medium" }`, () => {
    assert.deepEqual(eqObjects({ size: "medium", color: "red", sleeveLength: "long" }, { colors: ["red", "blue"], size: "medium" }), false);
  });
});
