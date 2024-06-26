function flatten(...stack) {
  const result = [];
  while (stack.length) {
    let el = stack.shift();
    if (Array.isArray(el)) {
      stack.unshift(...el);
      continue;
    }
    result.push(el);
  }
  console.log(result);
}

flatten([1, [2], 3, [[4, 5], 6], [[7]]]);
