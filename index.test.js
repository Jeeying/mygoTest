const reverseInputValue = require('./index');
const data = require('./test.json');

test('inputValue is equal ouputValue', () => {
  const { inputValue, outputValue } = data.test1;
  expect(reverseInputValue(inputValue)).toEqual(outputValue);
});