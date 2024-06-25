const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

// console.log(graph);

function breadthSearch(graph, start, end) {
  let count = 0;
  let way = false;
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    console.log(queue);
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      count += 1;
      way = true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return [way, count];
}

console.log(breadthSearch(graph, "a", ""));
