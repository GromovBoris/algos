// БЫСТРАЯ СОРТИРОВКА
// O(log2n * n);

let arr = [
  1, -6, 0, -543, 5, 6, 23, 7, 345, 8, 4, 6, 3, 15, 7, 7, 9, -4, 8, 65, 34, 7,
  12, 6, 3,
];
let count = 0;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let centerIndex = Math.floor(arr.length / 2);
  let index = arr[centerIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (i === centerIndex) continue;
    if (arr[i] < index) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), index, ...quickSort(greater)];
}

console.log(quickSort(arr), count);
