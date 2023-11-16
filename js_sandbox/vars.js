// let
let firstName;

firstName = "Elliott";
console.log(firstName);

firstName = "Stacey";
console.log(firstName);

firstName = 2;
console.log(firstName);

// const
const lastName = "Butt";
console.log(lastName);
// lastName = "hello"; this doesn't work

const person = {
  fName: "Elliott",
  lName: "Cooper",
  age: 32,
  gender: "male",
};

console.log(person);
person.age = 52; // this works

console.log(person);

const nums = [1, 2, 3, 4, 5];
nums.push(20); // this works
console.log(nums);
// nums = [10, 2034, 304, 3]; this doesn't work
