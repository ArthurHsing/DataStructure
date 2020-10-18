const INF = Number.MAX_SAFE_INTEGER;
const minDistance = (dist, visited) => {
  let min = INF;
  let minIndex = -1;
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return minIndex;
};
export const dijkstra = (graph, src) => {
  const dist = [];
  const visited = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    dist[i] = INF; //距离初始化为无限大
    visited[i] = false; //记录那些节点被访问过，先初始化为所有节点都没有被访问过
  }
  dist[src] = 0;  //把源点的距离设置为0（自己到自己的距离）
  for (let i = 0; i < length - 1; i++) {
    const u = minDistance(dist, visited); //传入距离数组，和访问记录数组，找出没被访问过的顶点的最小距离，返回值为这个顶点的index
    visited[u] = true;  //把这个顶点设置为访问过
    for (let v = 0; v < length; v++) {  //然后继续遍历所有的顶点，index为v
      //如果顶点v没被访问过&&顶点u到顶点v是相邻的&&源点到顶点u的距离不是INF&&并且源点到u的距离+u到v的距离小于v的初始化距离（后面两个判断好像卵用没有）
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v];
      }
      // //如果顶点v没被访问过&&顶点u到顶点v是相邻的&&源点到顶点u的距离不是INF&&并且源点到u的距离+u到v的距离小于v的初始化距离（后面两个判断好像卵用没有）
      // if (!visited[v] && graph[u][v] !== 0) {
      //   dist[v] = dist[u] + graph[u][v];
      // }
    }
  }
  return dist;
};
const graph = [[0, 2, 4, 0, 0, 0], [0, 0, 2, 4, 2, 0], [0, 0, 0, 0, 3, 0], [0, 0, 0, 0, 0, 2], [0, 0, 0, 3, 0, 2], [0, 0, 0, 0, 0, 0]];
console.log(dijkstra(graph, 0));
