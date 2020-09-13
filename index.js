function reverseInputValue(inputValue) {
  const result = {};
  const keyArray = JSON.stringify(inputValue).match(/[A-Za-z]+/g).reverse();
  const keyArrayLength = keyArray.length;
  let currentTarget = result;
  for (let idx = 0; idx < keyArrayLength - 1; idx += 1) {
    const currentKey = keyArray[idx];
    if (idx === keyArrayLength - 2) {
      currentTarget[currentKey] = keyArray[idx + 1];
    } else {
      currentTarget[currentKey] = {};
      currentTarget = currentTarget[currentKey];
    }
  }
  return result;
}

module.exports = reverseInputValue;