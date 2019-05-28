'use strict';

let hello = module.exports = {};

hello.sayHello = (name) => {
  if( typeof name != 'string') {return null;}
  return `Hello ${name}`;

};