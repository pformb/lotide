# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pformb/lotide`

**Require it:**

`const _ = require('@pformb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Extracts letters from a string and puts them into a object as the keys. Then, counts the number of times that letter is found in a string and adds them as the value of the keys.
* `countOnly(allItems, itemsToCount)`: Counts the items that are marked true in itemsToCount(object) in allItems(array).
* `findKey(object, callback)`: Search for key by callback function.
* `findKeyByValue(object, value)`: Search for key by value.
* `flatten(array)`: Takes the values from an array and the values inside nested arrays inside that array and pushes them to a new single array with only values inside (no nested arrays). 
* `head(array)`: Returns the value at 0 index position in an array.
* `letterPositions(sentence)`: Moves string letters into an object where the key is the letter and the value is the index position(s) that letter is found in the string. 
* `map(array, callback)`: Uses a callback function to determine which values in an array are pushed to new array.
* `middle(array)`: Returns the middle value(s) inside of an array.
* `tail(array)`: Returns all values except the 0 index position in an array.
* `takeUntil(array, callback)`: Pushes values from a provided array to a new array until the callback provided returns a truthy value.
* `without(source, itemsToRemove)`: Takes a source array and an array with values to remove. If any of the values from itemsToRemove are found in source, return newArray with out values those values.