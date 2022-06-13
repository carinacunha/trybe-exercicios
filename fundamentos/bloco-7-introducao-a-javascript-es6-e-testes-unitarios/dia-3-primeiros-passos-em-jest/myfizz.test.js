const myFizz = require('./myfizz.js');

test('Number is disible by 3 and 5', () => {
  expect(myFizz(15)).toBe('fizzbuzz');
  expect(myFizz(9)).toBe('fizz');
  expect(myFizz(5)).toBe('buzz');
  expect(myFizz(4)).toBe(4);
  expect(myFizz('7')).toBe(false);
})