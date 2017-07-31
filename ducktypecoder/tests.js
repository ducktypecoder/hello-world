var sayMyName = require('./src/say-my-name');

it('says my name', () => {
  const name = 'bob';
  expect(sayMyName(name)).toEqual(name);
});
