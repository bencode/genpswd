const { range, charRange, rand, flatten } = require('./utils');

test('range', () => {
  expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
});

test('charRange', () => {
  expect(charRange('a', 'd')).toEqual(['a', 'b', 'c', 'd']);
});

test('rand', () => {
  expect(rand(10) < 10).toBe(true);
});

test('flatten', () => {
  const list = [
    ['a', 'b', 'c'],
    ['A', 'B', 'C']
  ];
  expect(flatten(list)).toEqual(['a', 'b', 'c', 'A', 'B', 'C']);
});

