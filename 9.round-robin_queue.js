import { Queue } from './7.Queue.js';
function hotPotato(elementList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for (let i of elementList) {
    queue.enqueue(i);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    const eliminated = queue.dequeue();
    eliminatedList.push(eliminated);
    console.log(`${eliminated}被淘汰了.`);;
  }
  const winner = queue.dequeue();
  console.log(`${winner}是胜利者.`);
  return {
    eliminatedList,
    winner
  }
}

// console.log(hotPotato([1, 2, 3, 4, 5, 6, 7, 8], 9));
hotPotato(['arthur', 'hsing', 'demon', 'lt', 'cqupt', 'chongqing'], 7);