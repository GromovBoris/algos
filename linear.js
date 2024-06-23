// ЛИНЕЙНЫЙ ПОИСК ЦИКЛОМ
// O(n)

let count = 0;
let arr = [1, 6, 8, 4, 6, 3, 7, 7, 9, 8, 65, 34, 7, 6];

function linearSearch(arr, el) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === el) {
      answer.push(i);
    }
  }
  return answer.length > 0 ? answer : "not found";
}

console.log(linearSearch(arr, 7), count);
