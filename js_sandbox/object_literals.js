const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "miami",
    state: "FL",
  },
  getBirthyear: function () {
    return 2023 - this.age; // need to use this due to scope of age
  },
};

let val;

val = person; // object
val = person.firstName; // get specific val
val = person["firstName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthyear();

console.log(val);

const people = [
  { name: "John", age: 40 },
  { name: "Mike", age: 10 },
  { name: "Nancy", age: 55 },
];

for (let index = 0; index < people.length; index++) {
  console.log(people[index].name);
}
