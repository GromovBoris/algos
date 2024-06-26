const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 215,
      },
    ],
  },
];

const treeSum = (tree) => {
  if (!tree.length) {
    return 0;
  }
  let sum = 0;
  let stack = [];

  tree.forEach((el) => {
    stack.push(el);
  });

  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (node.c) {
      node.c.forEach((el) => stack.push(el));
    }
  }
  return sum;
};

console.log(treeSum(tree));
