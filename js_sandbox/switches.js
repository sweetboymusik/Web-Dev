// use switches if you have a lot of cases
// must break after each case
// use a defaul case at the end if needed

const color = "red";

switch (color) {
  case "red":
    console.log("red");
    break;
  case "blue":
    console.log("blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(day);
