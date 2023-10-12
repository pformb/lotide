const assert = require('chai').assert;
const findKey = require('../findKey')

describe("#findKey", () => {
  it(`returns 'Akaleri', 'elBulli', 'Akelarre for { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 3)`, () => {
    assert.deepEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 2), 'noma');
  });
  it(`returns "noma" for { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 2)`, () => {
    assert.deepEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 3), 'Akaleri', 'elBulli', 'Akelarre');
  });
});
