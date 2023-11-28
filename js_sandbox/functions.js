// declarations
function greet(firstName = " John", lastName = "Doe") {
  // old way of setting default values
  //   if (typeof firstName === "undefined") {
  //     firstName = "John";
  //   }

  return "Hello " + firstName + " " + lastName;
}

// console.log(greet("John"));

// function expressions
const square = function (x = 3) {
  return x * x;
};

// console.log(square(8));

// immideiately invokable function expressions -IIFEs
(function (name) {
  console.log("IIFE ran" + "name");
})("Brad");

// property methods
const todo = {
  add: function () {
    console.log("Add todo..");
  },

  edit: function (id) {
    console.log("edit todo");
  },
};

todo.delete = function () {
  console.log("delete todo");
};

todo.add();
todo.edit(22);
todo.delete();

// arrow functions (this is different inside of arrow functions, does not redefine 'this' like regular functions)
let sum = (a, b) => a + b;
let isPositive = (number) => number >= 0;
let randomNumber = () => Math.random;
document.addEventListener("click", () => console.log("Click"));

class Person {
  constructor(name) {
    this.name = name;
  }
}

// callback functions
// functions passed in as an argument to another function