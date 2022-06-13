const sum = require('./sum.js');

test('adds 4 + 5 to equal 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0,0)).toBe(0);
})

test("adds 4 + '5' to equal 9", () => {
  expect(sum(4, '5')).toBe(9);
})

test('test if error mensage is parameters must be numbers', () => {
  expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'));
});