const assert = require('chai').assert;
const countOnly = require('../countOnly')

describe("#countOnly", () => {
  it(`returns { 'Karl': 1 } for ['Karl', 'Salima', 'Agouhanna', 'Fang'], { 'Karl': true }`, () => {
    assert.deepEqual(countOnly(['Karl', 'Salima', 'Agouhanna', 'Fang'], { 'Karl': true }), { 'Karl': 1 });
  });
  it(`returns { 'Jason': 1, 'Fang': 1 } for ['Kavith', 'Jason', 'Salima', 'Fang', 'Joe'], { 'Jason': true, 'Fang': true }`, () => {
    assert.deepEqual(countOnly(['Kavith', 'Jason', 'Salima', 'Fang', 'Joe'], { 'Jason': true, 'Fang': true }), { 'Jason': 1, 'Fang': 1 });
  });
});
