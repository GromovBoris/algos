// СОРТИРОВКА ВЫБОРОМ
// O(n ^ 2)/2;

let arr = [
  1, 6, 0, -43, 8, 4, 6, 3, 15, 7, 7, -45, 5, 87, 34, -4, -75, 34, 6, 785, 2345,
  543, 2345, -2345, -65, -3, 4356,
];
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

console.log(selectionSort(arr), count);
