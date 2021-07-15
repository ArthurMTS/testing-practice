const reverseString = require('../src/reverseString');

it('Reverse reverse', () => {
  expect(reverseString('reverse')).toBe('esrever');
});

it('Reverse esrever', () => {
  expect(reverseString('esrever')).toBe('reverse');
});

it('Reverse aRtHuR mAtHeUs', () => {
  expect(reverseString('aRtHuR mAtHeUs')).toBe('sUeHtAm RuHtRa');
});

it('Reverse with numbers and special characteres', () => {
  expect(reverseString('art123!@&D')).toBe('D&@!321tra');
});