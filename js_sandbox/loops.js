// for loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my fav number");
    continue; // skip to next iteration
  }

  if (i === 5) {
    console.log("stop loop");
    break;
  }

  console.log("Number " + i);
}

// while loop
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// do while (always runs at least 1 time)
let z = 0;

do {
  console.log("hello " + z);
  z++;
} while (z < 10);

// loop through array
const cars = ["ford", "chev", "honda", "toyota"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// foreach
cars.forEach(function (car, index, array) {
  console.log(car);
});

// map (returns diff array)
const users = [
  { id: 1, name: "john" },
  { id: 2, name: "jake" },
  { id: 3, name: "tony" },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

// for in loop (loops through properties/keys)
const user = {
  firstName: "Elliott",
  lastName: "Butt",
  age: 32,
};

for (let key in user) {
  console.log(key);
}

// for of loop (loops through values of iterable)
