const gen = require('./gen');


test('gen', () => {
  expect(gen(8, { lower: true, number: true }).length).toBe(8);
});
