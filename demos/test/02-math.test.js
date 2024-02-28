const { subtract, divide, multiply } = require('../src/02-math');

test('Substract 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});

test('Divide 2 / 1 to equal 2', () => {
  expect(divide(2, 1)).toBe(2);
});

test('Divide 2 / 0 to equal Infinity', () => {
  expect(divide(2, 0)).toBe(Infinity);
});

test('Multiply 2 * 1 to equal 2', () => {
  expect(multiply(2, 1)).toBe(2);
});
