var addNumbers = require('./src/add-numbers');

it('adds numbers', () => {
  const num1 = 3;
  const num2 = 4;
  expect(addNumbers(num1, num2)).toEqual(7);
});
