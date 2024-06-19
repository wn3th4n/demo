var obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
  getName: function () {
    return this.name;
  },
};
obj.greet();
console.log(obj.getName());

//object constructor
function user(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var user1 = new user("John", "nguyen", "azx");
var user2 = new user("Jane", "dang", "zxc");

user1.concac = true;
user2.cailon = true;

console.log(user1.constructor === user); // true
console.log(user1.getName());
console.log(user1);
console.log(user2);

//object prototype
user.prototype.job = "IT";
user.prototype.getJob = function () {
  return this.job;
};

console.log(user1.getJob());

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
