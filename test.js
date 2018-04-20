Test.describe('makeExchange function', () => {
  Test.it('should return ERROR object if currency can\'t be exchanged', () => {
    Test.assertDeepEquals(makeExchange(1), {error: "Sorry! We don't have coins for exchange"});
    Test.assertDeepEquals(makeExchange(16), {error: "Sorry! We don't have coins for exchange"});
    Test.assertDeepEquals(makeExchange(26), {error: "Sorry! We don't have coins for exchange"});
    Test.assertDeepEquals(makeExchange(1001), {error: "Sorry! We don't have coins for exchange"});
  });

  Test.it('should return empty object if passed currency in is 0', () => {
    Test.assertDeepEquals(makeExchange(0), {});
  });

  Test.it('should return amount of half-dollars correctly', () => {
    Test.assertDeepEquals(makeExchange(50), {"H":1});
    Test.assertDeepEquals(makeExchange(500), {"H":10});
    Test.assertDeepEquals(makeExchange(102), {"H":2,"P":1});
  });

  Test.it('should return amount of half-dollars correctly', () => {
    Test.assertDeepEquals(makeExchange(50), {"H":1});
    Test.assertDeepEquals(makeExchange(500), {"H":10});
    Test.assertDeepEquals(makeExchange(102), {"H":2,"P":1});
  });

  Test.it('should return amount of quarters correctly', () => {
    Test.assertDeepEquals(makeExchange(25), {"Q":1});
    Test.assertDeepEquals(makeExchange(75), {"H":1,"Q":1});
    Test.assertDeepEquals(makeExchange(27), {"Q":1,"P":1});
  });

  Test.it('should return amount of dimes correctly', () => {
    Test.assertDeepEquals(makeExchange(10), {"D":1});
    Test.assertDeepEquals(makeExchange(35), {"Q":1,"D":1});
    Test.assertDeepEquals(makeExchange(12), {"D":1,"P":1});
  });

  Test.it('should return amount of nickels correctly', () => {
    Test.assertDeepEquals(makeExchange(5), {"N":1});
    Test.assertDeepEquals(makeExchange(15), {"D":1,"N":1});
    Test.assertDeepEquals(makeExchange(7), {"N":1,"P":1});
  });

  Test.it('should return amount of pennies correctly', () => {
    Test.assertDeepEquals(makeExchange(2), {"P":1});
    Test.assertDeepEquals(makeExchange(12), {"D":1,"P":1});
    Test.assertDeepEquals(makeExchange(4), {"P":2});
  });

  Test.it('should return object with exchanged money correctly', () => {
    Test.assertDeepEquals(makeExchange(44), {"Q":1,"D":1,"N":1,"P":2});
    Test.assertDeepEquals(makeExchange(92), {"H":1,"Q":1,"D":1,"N":1,"P":1});
  });

  Test.it('should return object with exchanged money correctly 1', () => {
    Test.assertDeepEquals(makeExchange(142), {"H":2,"Q":1,"D":1,"N":1,"P":1});
    Test.assertDeepEquals(makeExchange(144), {"H":2,"Q":1,"D":1,"N":1,"P":2});
  });

  Test.it('should return object with exchanged money correctly 2', () => {
    Test.assertDeepEquals(makeExchange(147), {"H":2,"Q":1,"D":2,"P":1});
    Test.assertDeepEquals(makeExchange(52), {"H":1,"P":1});
  });

  Test.it('should return object with exchanged money correctly 3', () => {
    Test.assertDeepEquals(makeExchange(55), {"H":1,"N":1});
    Test.assertDeepEquals(makeExchange(60), {"H":1,"D":1});
  });

  Test.it('should return object with exchanged money correctly 4', () => {
    Test.assertDeepEquals(makeExchange(62), {"H":1,"D":1,"P":1});
    Test.assertDeepEquals(makeExchange(65), {"H":1,"D":1,"N":1});
  });

  Test.it('should return exchanged money correctly (interesting case)', () => {
    Test.assertDeepEquals(makeExchange(6), {"P":3});
    Test.assertDeepEquals(makeExchange(66), {"H":1,"D":1,"P":3});
  });
});
