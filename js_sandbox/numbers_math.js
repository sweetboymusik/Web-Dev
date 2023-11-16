const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(3);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, -2);
val = Math.max(2, 33, 4, 1, 55, 6, -2);
val = Math.random(); // random decimal number

val = Math.floor(Math.random() * 20 + 1); // random num between 1 and 20

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);

console.log(val);
