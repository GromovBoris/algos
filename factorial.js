const factorialR = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorialR(n - 1);
};

console.log(factorialR(10));

function factorialI(n) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }
  return result;
}

console.log(factorialI(4));
