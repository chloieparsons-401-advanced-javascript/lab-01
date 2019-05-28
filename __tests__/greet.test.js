'use strict';

const greet = require('../lib/greet.js');

describe('/lib/greet.js', () => {

  it('does not allow non-strings', () => {
    let message = greet.sayHello(1);
    expect(message).toBeNull();
  });

  it('does not allow non-strings', () => {
    let message = greet.sayHello([]);
    expect(message).toBeNull();
  });

  it('does not allow non-strings', () => {
    let message = greet.sayHello({});
    expect(message).toBeNull();
  });
  
  it('does not allow non-strings', () => {
    let message = greet.sayHello(null);
    expect(message).toBeNull();
  });

  it('returns hello world with world as first argument', () => {
    let message = greet.sayHello('world');
    expect(message).toBe('Hello world');
  });
});