const assert = require('chai').assert;
const countLetters = require('../countLetters')

describe("#countLetters", () => {
  it("returns { e: 3, g: 1, h: 4, i: 2, l: 1, n: 1, o: 2, s: 2, t: 2, u: 2 } for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters('lighthouse in the house'), { "e": 3, "g": 1, "h": 4, "i": 2, "l": 1, "n": 1, "o": 2, "s": 2, "t": 2, "u": 2 });
  });
  it("returns { d: 1, o: 1, g: 2, y: 1 } for 'doggy'", () => {
    assert.deepEqual(countLetters('doggy'), { d: 1, o: 1, g: 2, y: 1 });
  });
});

