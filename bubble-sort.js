// ПУЗЫРЬКОВАЯ СОРТИРОВКА
// O(n ^ 2);

let arr = [
  1, 6, 0, -43, 8, 4, 6, 3, 15, 7, 7, -45, 5, 87, 34, -4, -75, 34, 6, 785, 2345,
  543, 2345, -2345, -65, -3, 4356,
];
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        // console.log(`Меняем ${arr[j]} и ${arr[j + 1]}`);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // console.log(arr);
      }
      count += 1;
    }
  }
  return arr;
}

console.log(bubbleSort(arr), count);
