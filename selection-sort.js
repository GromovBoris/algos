// СОРТИРОВКА ВЫБОРОМ
// O(n ^ 2)/2;

let arr = [1, 6, 0, -43, 8, 4, 6, 3, 15, 7, 7, 9, -4, 8, 65, 34, 7, 12, 6];
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      count += 1;
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort(arr), arr.length, count);
