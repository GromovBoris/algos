// MAP он же словарь или карта, хранит в себе пары key:value, ключи могут быть любым типом в отличие от объекта, где только строки/символы
// Длина объекта может быть получена только перебором свойства, а у MAP есть свойство size
// Перебрать объект можно с помощью for-in или Object.keys(), перебрать карту можно форичем, for of и entries()

// SET позволяет хранить уникальные значения любого типа, каждое значение может быть добавлено только однажды
// для доступа в MAP используем get(key), для доступа в SET has(value)
// перебирать SET можно как и MAP через forEach и for of, удаление элементов через delete(key) MAP и delete(value) SET

// MAP
const myMap = new Map();

myMap.set("Boris", "Gromov");

const newKey = { id: 16 };
myMap.set(newKey, 23453245n);

console.log(myMap.get("Boris"));
console.log(myMap.get(newKey));
console.log(myMap);

// SET
const mySet = new Set();

console.log(mySet.add("Boris"));
console.log(mySet.add(5));
console.log(mySet.add("Boris"));
console.log(mySet.add(14));
console.log(mySet.add(4));
console.log(mySet.add(5));

console.log(mySet);
