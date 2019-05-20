'use strict';

const arithmetic = require('../lib/arithmetic.js');

test('should return sum of two numbers', () => {
  let actual = arithmetic.add(1, 2),
    expectedValue = 3;
  expect(actual).toBe(expectedValue);
});

test('should return difference of two numbers', () => {
  let actual = arithmetic.subtract(2, 1), 
    expectedValue = 1;
  expect(actual).toBe(expectedValue);
});

test('should return product of two numbers', () => {
  let actual = arithmetic.multiply(2, 1), 
    expectedValue = 2;
  expect(actual).toBe(expectedValue);
});

test('should return quotient of two numbers', () => {
  let actual = arithmetic.divide(10, 5), 
    expectedValue = 2;
  expect(actual).toBe(expectedValue);
});