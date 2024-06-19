function first(param) {
  if(typeof param === 'function') {
    param();
    return;
  }
    console.log(1);
}

function second(index) {
    console.log(index);XMLDocument;
}
first();
second();


//------------------
/*
    param[0] -> value
    param[1] -> index
    param[2] -> array
*/

Array.prototype.myMap = function (callback) {
  let output = [], arrayLength = this.length;

  // console.log(this)
  for (let i = 0; i < arrayLength; i++) {
    var results = callback(this[i], i, this);
    output.push(results);
  }
  return output;
};

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]
