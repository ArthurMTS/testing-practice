const analysis = require('../src/analysis');

it('Zero elements array', () => {
  expect(analysis([])).toEqual({
    average: NaN,
    max: undefined,
    min: undefined,
    length: 0,
  });
});

it('One element array', () => {
  expect(analysis([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1
  });
});

it('Six elements array', () => {
  expect(analysis([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});