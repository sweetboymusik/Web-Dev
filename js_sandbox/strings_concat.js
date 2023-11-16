const firstName = "William";
const lastName = "Johnson";
const age = 32;
const str = "Hello my name is Elliott";
let val;

val = firstName + lastName;

// concat
val = firstName + " " + lastName;

// append
val = "Elliott ";
val += "Butt";

val = "Hello, my name is " + firstName + " and I am " + age;

// escape
val = "That\"s awesome, I can't wait";

// length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Chane case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt("1");

// get last char
val = firstName.charAt(firstName.length - 1); // common formula

// substrings
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3); // can't do with the substring method

// split
val = str.split(" ");

// replace
val = str.replace("Elliott", "Stacey");

// includes
val = str.includes("Hello"); // returns true or false

console.log(val);
