const INF = Number.MAX_SAFE_INTEGER;
const initializeCost = graph => {
  const cost = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    cost[i] = [];
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 0) {
        cost[i][j] = INF;
      } else {
        cost[i][j] = graph[i][j];
      }
    }
  }
  return cost;
};
export const kruskal = graph => {
  const { length } = graph;
  const route = {};
  const visited = [];
  let ne = 0;
  let u;
  let v;
  const cost = initializeCost(graph);
  while (ne < length - 1) {
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min && (!visited[i] || !visited[j])) {
          min = cost[i][j];
          u = i;
          v = j;
        }
      }
    }
    visited[u] = visited[v] = true;
    route[`${u}-${v}`] = cost[u][v];
    ne++;
  }
  return route;
};

const graph = [[0, 0, 3, 0], [0, 0, 1, 0], [3, 1, 0, 2], [0, 0, 2, 0]];
const result = kruskal(graph);
console.dir(result);