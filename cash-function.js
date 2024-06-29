function cashFunction(fn) {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log(`${cash[n]}, взяли из cash`);
      return cash[n];
    }
    let result = fn(n);
    cash[n] = result;
    console.log(`${result}, рассчитано fn`);
    return result;
  };
}

function factorial(n) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }
  return result;
}

const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(15);
cashFactorial(4);
cashFactorial(6);
cashFactorial(5);
cashFactorial(15);
cashFactorial(11);
cashFactorial(4);
