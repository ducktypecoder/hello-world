var sayHello = require('./src/say-hello');

it('says hello world', () => {
  expect(sayHello()).toEqual('Hello world');
});
