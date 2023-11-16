const name = "Ell Butt";
console.log(typeof name);

const age = 45;
console.log(typeof age);

const hasKids = true;
console.log(typeof hasKids);

const car = null;
console.log(typeof car); // actually returns object.. this is a bug

let test;
console.log(typeof test);

const sym = Symbol();
console.log(typeof sym);

// Reference Types
const hobbies = ["movies", "music"];
console.log(typeof hob);

const address = {
  city: "Boston",
  state: "MA",
};

console.log(typeof address);

const today = new Date();
console.log(typeof today); // is an object
