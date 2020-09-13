const reverseInputValue = require('./index');
const data = require('./data.json');

test('inputValue is equal ouputValue', () => {
  const { inputValue, outputValue } = data.test1;
  expect(reverseInputValue(inputValue)).toEqual(outputValue);
});