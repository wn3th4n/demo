# React ES6

ES6 stands for ECMAScript 6.

ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

## React uses ES6, and you should be familiar with some of the new features like:

> Classes,
> Arrow Functions,
> Variables (let, const, var),
> Array Methods like .map(),
> Destructuring,
> Modules,
> Ternary Operator,
> Spread Operator,
> Template Literals,
> Default Parameters,
> Rest Parameters,
> Enhanced Object Literals,
> Promises,
> Generators,
> Async/Await,
> and more.

### Classes

Classes are a new way to define objects in JavaScript. They are similar to the classes in other languages like Java or C#.

```jsx
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John");
john.sayHello();
```

### Arrow Functions

Arrow functions are a new way to define functions in JavaScript. They are similar to the lambda functions in other languages like Python or Ruby.

```jsx
const sayHello = () => {
  console.log("Hello");
};

sayHello();
```

### Variables (let, const, var)

Variables are a new way to define variables in JavaScript. They are similar to the variables in other languages like Java or C#.

```jsx
let name = "John";
const age = 30;
var isStudent = true;
```

### Array Methods like .map()

Array methods are a new way to work with arrays in JavaScript. They are similar to the array methods in other languages like Java or C#.

```jsx
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
```

### Destructuring

Destructuring is a new way to assign values from objects or arrays to variables.

```jsx
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;
```

### Modules

Modules are a new way to organize and share code in JavaScript.

```jsx
module.exports = {
  name: "John",
  age: 30,
  city: "New York",
};
```

### Ternary Operator

The ternary operator is a new way to write conditional statements in JavaScript.

```jsx
const isStudent = age > 18 ? "Yes" : "No";
```

### Spread Operator

The spread operator is a new way to spread elements from arrays or objects to other variables or functions.

```jsx
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [...numbers, ...numbers];
```

### Template Literals

Template literals are a new way to write strings in JavaScript.

```jsx
const name = "John";
const message = `Hello, my name is ${name}`;
```

### Default Parameters

Default parameters are a new way to set default values for function parameters.

```jsx
function greet(name = "John") {
  console.log(`Hello, ${name}`);
}

greet();
```

### Rest Parameters

Rest parameters are a new way to collect remaining function parameters into an array.

```jsx
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

### Async/Await

Async/Await is a new way to handle asynchronous operations in JavaScript.

```jsx
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

### Enhanced Object Literals

Enhanced object literals are a new way to define and initialize objects in JavaScript.

```jsx
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
```

### Promises

Promises are a new way to handle asynchronous operations in JavaScript.

```jsx
  const promise = new Promise((resolve, reject) => {
    if (/* success */) {
      resolve('Success');
    } else {
      reject('Failure');
    }
  });

  promise.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
```

### Generators

Generators are a new way to handle asynchronous operations in JavaScript.

```jsx
function* fetchData() {
  yield fetch("https://api.example.com/data");
  yield fetch("https://api.example.com/data2");
}

const iterator = fetchData();
const response1 = iterator.next().value;
const response2 = iterator.next().value;
```
