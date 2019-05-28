'use strict';

let arithmetic = module.exports = {};

let numberVerify = (a,b) => {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
}

arithmetic.add = function(a,b) {
  return numberVerify(a,b) === null ? null: a+b;
};

arithmetic.subtract = function (a,b) {
  return numberVerify(a,b) === null ? null: a-b;
};

arithmetic.multiply = function (a,b) {
  return numberVerify(a,b) === null ? null: a*b;
};

arithmetic.divide = function (a,b) {
  return numberVerify(a,b) === null ? null: a/b;
};