const assert = require('chai').assert;
const flatten = require('../flatten')

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [6, 5, 4, 3, 2, 1] for [[6, 5], [4, 3], [2, 1]]", () => {
    assert.deepEqual(flatten([[6, 5], [4, 3], [2, 1]]), [6, 5, 4, 3, 2, 1]);
  });
});