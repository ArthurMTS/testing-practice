const caesar = require('../src/caesar');

it('Text with shift 1', () => {
  expect(caesar('hello world', 1)).toBe('ifmmp xpsme')
});

it('Text with shift 25', () => {
  expect(caesar('hello world', 25)).toBe('gdkkn vnqkc')
});

it('Text with punctuation', () => {
  expect(caesar('well... shit!', 5)).toBe('bjqq... xmny!')
});