const capitalize = require('../src/capitalize');

it('capitalizing arthur', () => {
  expect(capitalize('arthur')).toBe('ARTHUR');
});

it('capitalizing matheus', () => {
  expect(capitalize('matheus')).toBe('MATHEUS');
});

it('capitalizing wHaTs Up', () => {
  expect(capitalize('wHaTs Up')).toBe('WHATS UP');
});

it('capitalizing SILVA', () => {
  expect(capitalize('SILVA')).toBe('SILVA');
});