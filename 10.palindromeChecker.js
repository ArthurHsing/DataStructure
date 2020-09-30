import { Deque } from './8.Deque.js'
function palindromChecker(aString) {
  if (aString === null || aString === undefined || (aString !== null && aString.length === 0)) {
    return false;
  }
  const lowercaseString = aString.toLocaleLowerCase().split(' ').join('');
  const dq = new Deque();
  for (let i of lowercaseString) {
    dq.addBack(i);
  }
  while (dq.size() > 1) {
    const front = dq.removeFront();
    const back = dq.removeBack();
    if (front !== back) {
      return false;
    }
  }
  return true;
}
console.log(palindromChecker('Step on no pets'));