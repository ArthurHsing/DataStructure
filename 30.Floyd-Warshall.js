const isFinite = (distance) => {
  return distance !== 0;
}

// 因为输入的图中，0既表示自己，也表示不相邻或者不可达，所以需要处理
const generateDistance = (graph) => {
  const dist = [];
  for (let i = 0; i < graph.length; i++) {
    dist[i] = [];
    for (let j = 0; j < graph.length; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (!isFinite(graph[i][j])) {  //将不与自己相邻的点或者不可达的点初始化为Infinity
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = graph[i][j];
      }
    }
  }
  return dist;
}

const floydWarshall = (graph) => {
  const dist = generateDistance(graph);
  const length = dist.length;
  // console.log(length);
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[k][i] + dist[i][j] < dist[k][j]) {
          dist[k][j] = dist[k][i] + dist[i][j];
        }
      }
    }
  }
  return dist;
}
const graph = [[0, 2, 4, 0, 0, 0], [0, 0, 2, 4, 2, 0], [0, 0, 0, 0, 3, 0], [0, 0, 0, 0, 0, 2], [0, 0, 0, 3, 0, 2], [0, 0, 0, 0, 0, 0]];
console.dir(floydWarshall(graph));