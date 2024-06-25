// БИНАРНЫЙ ПОИСК РЕКУРСИЕЙ
// O(logn)

let count = 0;
let arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function recurciveBinarySearch(arr, el, start, end) {
  let middle = Math.floor((start + end) / 2);
  count += 1;
  if (el === middle) {
    return middle;
  }
  if (el < arr[middle]) {
    return recurciveBinarySearch(arr, el, 0, middle - 1);
  } else {
    return recurciveBinarySearch(arr, el, middle + 1, end);
  }
}

console.log(recurciveBinarySearch(arr, 16, 0, arr.length), count);
