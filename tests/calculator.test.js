const calculator = require('../src/calculator');

it('Adds 2 + 3 to be 5', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

it('Adds 2 + \'3\' to be 5', () => {
  expect(calculator.add(2, '3')).toBe(5);
});

it('Subtract 7 - 9 to be 2', () => {
  expect(calculator.subtract(7, 9)).toBe(-2);
});

it('Divide 25 / 5 to be 5', () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

it('Divide 2 / 0 to be Error', () => {
  expect(() => calculator.divide(2, 0)).toThrow('Cannot divide by zero');
});

it('Multiply 3 * 3 to be 9', () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

it('Multiply @ * 2 to be NaN', () => {
  expect(calculator.multiply('@', 2)).toBeNaN();
});