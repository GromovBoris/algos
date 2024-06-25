// ПУЗЫРЬКОВАЯ СОРТИРОВКА
// O(n ^ 2);

let arr = [1, 6, 0, -43, 8, 4, 6, 3, 15, 7, 7];
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
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
