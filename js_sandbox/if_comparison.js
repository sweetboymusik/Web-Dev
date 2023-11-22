const id = "100";

// equal to
if (id == 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// not equal to
if (id != 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// === to check value AND type (!== as well)
// use this when in doubt
// basically just use it always
// use by default
if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// test if undefined
if (typeof id != undefined) {
  console.log(`The ID is ${id}`);
} else {
  console.log("NO ID");
}

// > < (<= >=)
if (id >= 200) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// IF ELSE

const color = "yello";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("color is not red or blue");
}

// logical operator
const name = "Steve";
const age = 20;

// && and
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("adult");
}

// || or
if (age < 16 || age > 65) {
  console.log("can not run in the race");
} else {
  console.log("can run");
}

// ternary operator
console.log(id === 100 ? "CORRECT" : "INCORRECT");
