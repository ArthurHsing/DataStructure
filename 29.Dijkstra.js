const INF = Number.MAX_SAFE_INTEGER;
// 从当前的已知距离中，找出最短路径，返回最短路径的最后一个点
const minRoute = (dist, visited) => {
  let minIndex = -1;
  let min = INF;
  for (let i = 0; i < dist.length; i++) {
    if (!visited[i] && dist[i] <= min) {
      min = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
}

const dijkstra = (graph, source) => {
  // graph是用二维数组表示的距离矩阵，source表示从哪个点开始
  const { length: n } = graph;
  console.log(n);
  const visited = []; //用来记录访问过的点
  const distance = [];  //用来记录到每个点的最短距离
  const route = []; //用来记录到每个点的最短路径
  // 初始化visited和distance
  for (let i = 0; i < n; i++) {
    visited[i] = false; //所有的点都初始化成为没有访问过的
    distance[i] = INF;  //从源点到所有点的距离都先初始化为最大值
  }
  // 由于最开始只知道源点是谁，所以我们以源点作为切入点继续进行工作
  distance[source] = 0; //源点到源点的距离为0
  route[source] = [0];  //源点到源点的路径为[0]
  // 接下来就是从源点开始慢慢找到最短路径了
  // 最外层这个迭代只是代表迭代次数，i无实际意义
  // 为什么迭代次数要减1呢，举个例子，只有2个点A和B，那么我要求AB的最短路径难道不是只用算1次就出来了吗？以此类推，这就是减1的原因
  for (let i = 0; i < n - 1; i++) {
    const u = minRoute(distance, visited); //从当前的已知距离中，找出最短路径，返回最短路径的最后一个点
    visited[u] = true;  //找出了这个点，那么这个点就不能在以后的迭代中再找出来了，就设置它为已经被访问过，以后按这个标志判断不再访问它
    // 根据这个点，找到与它相邻的点，并记录下从源点到这些点的距离
    // 所以我们得遍历所有的点，通过距离矩阵来判断哪些点与路径中的最后一个点相邻
    for (let v = 0; v < n; v++) {
      // 如果没有访问过&&点u到点v距离不能为0（距离为0代表不相邻或者不可达或者自己）&&……………………
      // 第三个判断：如果之前也记录过源点到点v的距离了，那么现在找出来的到点v的距离应该小于之前找出来的距离
      if (!visited[v] && graph[u][v] && (distance[u] + graph[u][v]) < distance[v]) {
        distance[v] = graph[u][v] + distance[u];
        route[v] = JSON.parse(JSON.stringify(route[u]));
        route[v].push(v);
      }
    }
  }
  return { distance, route };
}
const graph = [[0, 2, 4, 0, 0, 0], [0, 0, 2, 4, 2, 0], [0, 0, 0, 0, 3, 0], [0, 0, 0, 0, 0, 2], [0, 0, 0, 3, 0, 2], [0, 0, 0, 0, 0, 0]];
console.log(dijkstra(graph, 0));