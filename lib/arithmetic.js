'use strict';

let arithmetic = module.exports = {};

let numberVerify = (a,b) => {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
};

arithmetic.add = (a,b) => {
  return numberVerify(a,b) === null ? null: a+b;
};

arithmetic.subtract = (a,b) => {
  return numberVerify(a,b) === null ? null: a-b;
};

arithmetic.multiply = (a,b) => {
  return numberVerify(a,b) === null ? null: a*b;
};

arithmetic.divide = (a,b) => {
  return numberVerify(a,b) === null ? null: a/b;
};