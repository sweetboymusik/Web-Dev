// create some arrays
const numbers = [46, 57, 23, 99, 2, 1];
const numbers2 = new Array(22, 94, 20, 11, 18);
const fruit = ["apple", "banana", "orange"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

val = numbers.length; // get length
val = Array.isArray(numbers); // check if is array
val = numbers[3]; // get single value (0 based)
numbers[2] = 100; // insert into array
val = numbers.indexOf(57); // get index of value

// mutating arrays
numbers.push(250); // add on to end
numbers.unshift(120); // add on to front
numbers.pop(); // take off from end
numbers.shift(); // take off from front
numbers.splice(1, 1); // splice values (index, end index)
numbers.reverse(); // reverse

val = numbers.concat(numbers2); // concat arrays
val = fruit.sort(); // sort array
val = numbers.sort(function (x, y) {
  return x - y;
});

function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
