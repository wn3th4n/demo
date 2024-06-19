let array = [
  { id: 1, data: 10 },
  { id: 2, data: 30 },
  { id: 3, data: 40 },
  { id: 4, data: 0 },
  { id: 5, data: -10 },
];

let newArr = array.filter((item) => item.data > 0).reverse();

console.log(newArr);
