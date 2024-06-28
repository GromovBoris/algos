function queueTime(custumers, n) {
  if (!custumers.length) {
    return 0;
  }
  const queue = [...custumers];
  const tills = Array(Math.min(n, queue.length)).fill(0);
  while (queue.length) {
    const customer = queue.shift();
    const minTillId = tills.indexOf(Math.min(...tills));
    tills[minTillId] += customer;
  }
  console.log(Math.max(...tills));
}

queueTime([10, 2, 3, 3], 2), 10;
queueTime([1, 2, 3, 4], 1), 10;
queueTime([2, 2, 3, 3, 4, 4], 2), 9;
queueTime([1, 2, 3, 4, 5], 100), 5;
