const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [array[index], array[i]] = [array[i], array[index]];
  }
  console.log(array.toString());
}
const arr = [1, 2, 3, 4, 5];
shuffle(arr);