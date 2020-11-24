const find = (i, parent) => {
  while (parent[i]) {
    i = parent[i];
  }
  return i;
}

const union = (u, v, parent) => {
  if (u !== v) {
    parent[v] = u;
    return true;
  }
  return false;
}

const INF = Number.MAX_SAFE_INTEGER;
const initializeCost = graph => {
  const cost = [];
  const { length } = graph;
  const parent = [];
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
  const parent = [];
  let ne = 0;
  let u;
  let v;
  const cost = initializeCost(graph);
  while (ne < length - 1) {
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          u = i;
          v = j;
        }
      }
    }
    if (union(find(u, parent), find(v, parent), parent)) {
      route[`${u}-${v}`] = cost[u][v];
      ne++;
    }
    cost[u][v] = cost[v][u] = INF;
  }
  return route;
};

// const graph = [[0, 0, 3, 0], [0, 0, 1, 0], [3, 1, 0, 2], [0, 0, 2, 0]];
const graph = [[0, 2, 4, 0, 0, 0], [2, 0, 2, 4, 2, 0], [4, 2, 0, 0, 3, 0], [0, 4, 0, 0, 3, 2], [0, 2, 3, 3, 0, 2], [0, 0, 0, 2, 2, 0]];
const result = kruskal(graph);
console.dir(result);