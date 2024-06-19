let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

// ---------------------

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

//--------obj---------------
const obj = { a: 1, b: { c: 2 } };
const {
  num1,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
console.log(num1); // 1
console.log(d); // 2
console.log(b); // error: `b` is not defined

const obj2 = { a: 1, b: { c: 2 } };
const { a1 } = obj2; // a is constant
let {
  b: { c: d1 },
} = obj2; // d is re-assignable
console.log(a1, b, d1);
