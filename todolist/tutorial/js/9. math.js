// math object

//1. Math.pi
console.log(Math.PI);

//2. Math.round()
console.log(Math.round(3.4));

//3. Math.ceil()
console.log(Math.ceil(3.4));

//4. Math.floor()
console.log(Math.floor(3.4));

//5. Math.sqrt()
console.log(Math.sqrt(9));

//6. Math.abs()
console.log(Math.abs(-5));

//7. Math.pow()
console.log(Math.pow(2, 3));

//8. Math.min()
console.log(Math.min(2, 5, 8, 1));

//9. Math.max()
console.log(Math.max(2, 5, 8, 1));

//10. Math.random()
console.log(Math.random());

//11. Math.sin()
console.log(Math.sin(45));

//12. Math.cos()
console.log(Math.cos(45));

//13. Math.tan()
console.log(Math.tan(45));

//14. Math.asin()
console.log(Math.asin(0.5));

//15. Math.acos()
console.log(Math.acos(0.5));

//16. Math.atan()
console.log(Math.atan(0.5));

//17. Math.exp()
console.log(Math.exp(2));

//18. Math.log()
console.log(Math.log(10));

//19. Math.log10()
console.log(Math.log10(10));

function getRandomItem(arr) {
  if (arr && arr.length) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  return null;
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const randomNumber = getRandomItem(numbers);
console.log(randomNumber); // Output: 3
