const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// Test Code:

assertArraysEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), [ 'Lighthouse', 'Labs' ])
assertArraysEqual(tail([1, 2, 3]), [ 2, 3 ])

