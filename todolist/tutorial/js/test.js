//other code
Array.prototype.mySome = function (callback) {
  for (let index in this) {
    console.log(index);
    console.log(this[index]);
  }
};

const ms = [{ a: 2 }, { b: "c" }];

const arr = ["admin", "user", "customer"];
console.log(ms.mySome(function (item, index, arr) {}));
  