'use strict';

const greet = require('../lib/greet.js');

test('should return string with Hello, world.', () => {
  let actual = greet.hello('world'), 
    expectedValue = 'Hello, world.';
  expect(actual).toBe(expectedValue);
});

test('should return null if input is not a string', () => {
  expect(greet.hello(1)).toBeNull();
  expect(greet.hello()).toBeNull();
  expect(greet.hello({})).toBeNull();
  expect(greet.hello([])).toBeNull();
});