//data
var courses = ["javascript", "PHP", "csharp"];

/*
    param[0] -> value
    param[1] -> index
    param[2] -> array
*/

//map
// return array
Array.prototype.myMap = function (callback) {
  let output = [],
    arrayLength = this.length;

  // console.log(this)
  for (let i = 0; i < arrayLength; i++) {
    var results = callback(this[i], i, this);
    output.push(results);
  }

  return output;
};

// forEach
//  1. object prototype
//  2. callback
//  3. for in
//  4. hasOwnProperty
Array.prototype.myForEach = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index))
      // kiểm tra xem có nằm trong prototype ko, nếu ko return true
      console.log("index: ", index);
  }
};

//filter
Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

Array.prototype.myFilter2 = function (callback) {
  let output = [];
  for (const item in this) {
    if (Object.hasOwnProperty.call(this, item)) {
      if (callback(this[item], item, this)) {
        output.push(this[item]);
      }
    }
  }
  return output;
};

//find
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

//findIndex
Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
};

//some
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

//every
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

//some
Array.prototype.mySome = function (callback) {
  let arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    if (callback(this[i], i, this)) return true;
  }
  return false;
};

//other code
Array.prototype.mySome = function (callback) {
  for (let index in this) {
    if (this.hasOwnProperty(index))
      if (callback(this[index], index, this)) return true;
  }
  return false;
};

//every
Array.prototype.myEvery = function (callback) {
  let arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    if (!callback(this[i], i, this)) return false;
  }
  return true;
};

// Expected results
const numbers = [1, 2, 3];

console.log(
  numbers.myFilter2(function (number) {
    return number > 2;
  })
);

console.log(
  numbers.myMap(function (number) {
    return number * 2;
  })
); // Output: [2, 4, 6]
