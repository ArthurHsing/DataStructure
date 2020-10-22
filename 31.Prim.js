const INF = Number.MAX_SAFE_INTEGER;
const minKey = (key, visited) => {
  let min = INF;
  let minIndex = -1;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i] && key[i] < min) {
      min = key[i];
      minIndex = i;
    }
  }
  return minIndex;
}
const prim = (graph) => {
  const key = []; //用来保存到父节点的距离
  const parent = [];  //用来保存父节点是谁
  const visited = []; //用来保存某个点是否已经加入了最小生成树中
  const length = graph.length;
  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  parent[0] = -1;
  key[0] = 0;
  for (let i = -1; i < length - 1; i++) {
    const u = minKey(key, visited);
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (!visited[v] && graph[u][v] && graph[u][v] < key[v]) {
        key[v] = graph[u][v];
        parent[v] = u;
      }
    }
  }
  return { parent, key };
}
const graph = [[0, 2, 4, 0, 0, 0], [2, 0, 2, 4, 2, 0], [4, 2, 0, 0, 3, 0], [0, 4, 0, 0, 3, 2], [0, 2, 3, 3, 0, 2], [0, 0, 0, 2, 2, 0]];
const result = prim(graph);
console.dir(result);