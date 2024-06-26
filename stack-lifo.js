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

function calculate(expression) {
  const stack = [];
  const arr = expression.split(" ");
  while (arr.length) {
    const el = arr.pop();
    const numberedEl = Number(el);
    if (!isNaN(numberedEl)) {
      stack.push(numberedEl);
      continue;
    }
    let firstNum = stack.pop();
    let secondNum = stack.pop();
    let result;
    switch (el) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      case "/":
        result = firstNum / secondNum;
        break;
    }
    stack.push(result);
  }
  console.log(stack[0]);
  //   console.log(stack);
}

calculate("+ 3 5"), 8;
calculate("* + 2 2 3"), 12;
calculate("/ + 3 5 * 2 2"), 2;
