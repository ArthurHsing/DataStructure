import Stack from './4.Stack_weakmap.js';
function baseConverter(decimalNumber, base) {
  const stack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while (decimalNumber > 0) {
    const remainder = Math.floor(decimalNumber % base);
    stack.push(remainder);
    decimalNumber = Math.floor(decimalNumber / base);
  }
  let resultStr = '';
  while (!stack.isEmpty()) {
    resultStr += digits[stack.pop()];
  }
  return resultStr;
}

console.log(baseConverter(985, 12));