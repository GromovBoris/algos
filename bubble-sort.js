// ПУЗЫРЬКОВАЯ СОРТИРОВКА
// O(n ^ 2);

let arr = [1, 6, 0, -43, 8, 4, 6, 3, 15, 7, 7, 9, -4, 8, 65, 34, 7, 12, 6];
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      count += 1;
    }
  }
  return arr;
}

console.log(bubbleSort(arr), arr.length, count);
