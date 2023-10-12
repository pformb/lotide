const assert = require('chai').assert;
const map = require('../map')

describe("#map", () => {
  it(`returns [2, 4, 6, 8, 10] for [1, 2, 3, 4, 5], num => num * 2`, () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], num => num * 2), [2, 4, 6, 8, 10]);
  });
  it(`returns [true, false, true, false] for ["Bird", "Octopus", "Bear", "Deer"], firstLetter => firstLetter[0] === 'B'`, () => {
    assert.deepEqual(map(["Bird", "Octopus", "Bear", "Deer"], firstLetter => firstLetter[0] === 'B'), [true, false, true, false]);
  });
  it(`returns [9, 36, 81, 144, 225] for [3, 6, 9, 12, 15], num => num * num`, () => {
    assert.deepEqual(map([3, 6, 9, 12, 15], num => num * num), [9, 36, 81, 144, 225]);
  });
});