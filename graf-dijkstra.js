// алгоритм дейкстры для поиска кратчайшего пути

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  //  кратчайшие пути
  const costs = {};
  // проверенные узлы
  const processed = [];
  //   соседние вершины рассматриваемого узла
  const neighbors = {};
  //   for (let key in graph) {
  //     console.log(graph[key]);
  //   }
  //   создаем объект ключией и запускаем форич для каждой ноды
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      // если нода не равна start то создаем переменную куда кладем расстояние от start до нее либо bigint если нет прямой связи
      let value = graph[start][node];
      costs[node] = value || 1000000;
    }
  });
  //   console.log(costs, processed);

  //   let node = findNodeLowestCost(costs, processed);
  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}

//   console.log(costs);}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 1000000;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    // console.log(lowestNode);
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

console.log(shortPath(graph, "a", "g"));
