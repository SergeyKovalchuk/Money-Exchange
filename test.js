const assert = require('assert');
const makeExchange = require('./src/index.js');

describe('makeExchange function', () => {
  it('should return ERROR object if currency can\'t be exchanged', () => {
    assert.deepEqual(makeExchange(1), {error: "Sorry! We don't have coins for exchange"});
    assert.deepEqual(makeExchange(16), {error: "Sorry! We don't have coins for exchange"});
    assert.deepEqual(makeExchange(26), {error: "Sorry! We don't have coins for exchange"});
    assert.deepEqual(makeExchange(1001), {error: "Sorry! We don't have coins for exchange"});
  });

  it('should return empty object if passed currency in is 0', () => {
    assert.deepEqual(makeExchange(0), {});
  });

  it('should return amount of half-dollars correctly', () => {
    assert.deepEqual(makeExchange(50), {"H":1});
    assert.deepEqual(makeExchange(500), {"H":10});
    assert.deepEqual(makeExchange(102), {"H":2,"P":1});
  });

  it('should return amount of half-dollars correctly', () => {
    assert.deepEqual(makeExchange(50), {"H":1});
    assert.deepEqual(makeExchange(500), {"H":10});
    assert.deepEqual(makeExchange(102), {"H":2,"P":1});
  });

  it('should return amount of quarters correctly', () => {
    assert.deepEqual(makeExchange(25), {"Q":1});
    assert.deepEqual(makeExchange(75), {"H":1,"Q":1});
    assert.deepEqual(makeExchange(27), {"Q":1,"P":1});
  });

  it('should return amount of dimes correctly', () => {
    assert.deepEqual(makeExchange(10), {"D":1});
    assert.deepEqual(makeExchange(35), {"Q":1,"D":1});
    assert.deepEqual(makeExchange(12), {"D":1,"P":1});
  });

  it('should return amount of nickels correctly', () => {
    assert.deepEqual(makeExchange(5), {"N":1});
    assert.deepEqual(makeExchange(15), {"D":1,"N":1});
    assert.deepEqual(makeExchange(7), {"N":1,"P":1});
  });

  it('should return amount of pennies correctly', () => {
    assert.deepEqual(makeExchange(2), {"P":1});
    assert.deepEqual(makeExchange(12), {"D":1,"P":1});
    assert.deepEqual(makeExchange(4), {"P":2});
  });

  it('should return object with exchanged money correctly', () => {
    assert.deepEqual(makeExchange(44), {"Q":1,"D":1,"N":1,"P":2});
    assert.deepEqual(makeExchange(92), {"H":1,"Q":1,"D":1,"N":1,"P":1});
  });

  it('should return amount of trapped water correctly 1', () => {
    assert.deepEqual(makeExchange(142), {"H":2,"Q":1,"D":1,"N":1,"P":1});
    assert.deepEqual(makeExchange(144), {"H":2,"Q":1,"D":1,"N":1,"P":2});
  });

  it('should return amount of trapped water correctly 2', () => {
    assert.deepEqual(makeExchange(147), {"H":2,"Q":1,"D":2,"P":1});
    assert.deepEqual(makeExchange(52), {"H":1,"P":1});
  });

  it('should return amount of trapped water correctly 3', () => {
    assert.deepEqual(makeExchange(55), {"H":1,"N":1});
    assert.deepEqual(makeExchange(60), {"H":1,"D":1});
  });

  it('should return amount of trapped water correctly 4', () => {
    assert.deepEqual(makeExchange(62), {"H":1,"D":1,"P":1});
    assert.deepEqual(makeExchange(65), {"H":1,"D":1,"N":1});
  });
});
