let count = 0;
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function linearSearch(arr, el) {
  let start = 0;
  let end = arr.length;
  let found = false;
  let pos = -1;

  while (found === false && start <= end) {
    count += 1;
    let middle = Math.floor((start + end) / 2);
    // console.log(middle);
    if (arr[middle] === el) {
      (found = true), (pos = middle);
      break;
    }
    if (el < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return pos;
}

console.log(linearSearch(arr, 4), count);
