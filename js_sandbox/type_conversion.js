let val;

// Num to String
val = String(5);
val = String(4 + 4);

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// Strings to Numbers
val = Number("5");
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number("Hello"); // NaN
val = Number([1, 2, 3, 4]); // NaN

val = parseInt("100.30"); // parses as int only
val = parseFloat("100.31");

console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2)); // to two decimals

// Type coercsion

const val1 = 5;
const val2 = "6";
const sum = val1 + val2;

console.log(sum); // Outputs 56, converts to string
console.log(typeof sum);
