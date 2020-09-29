import Stack from './4.Stack_weakmap.js'
function decimalToBinary(decimalNumber) {
  const type = typeof decimalNumber;
  if (type !== 'number') {
    throw new TypeError(`Required parameter is type "number" but has received "${type}"`);
  }
  const stack = new Stack();
  while (decimalNumber > 0) {
    let remainder = Math.floor(decimalNumber % 2);
    stack.push(remainder);
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  let resultStr = '';
  while (!stack.isEmpty()) {
    resultStr += stack.pop().toString();
  }
  return resultStr;
}

console.log(decimalToBinary(9));