// Log To Console

console.log("Hello World");

var name = "John Doe";
let name2 = "Abhishek";

val = parseInt(100.3);
val = parseFloat(100.3);
console.log(val.toFixed(2));

//Random numbers between 1 and 20
val = Math.floor(Math.random() * 20 + 1);

// Template Litereals
const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

// Without template strings (es5)
html =
  "<ul>" +
  "<li>Name: " +
  name +
  "</li>" +
  "<li>Age: " +
  age +
  "</li>" +
  "<li>Job: " +
  job +
  "</li>" +
  "<li>City: " +
  city +
  "</li>" +
  "</ul>";

function hello() {
  return "hello";
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
`;

// ternary operator
const id = 100;
console.log(id === 100 ? "Correct" : "Incorrect");

//switch case operator
const color = "red";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

// Function Expressions

const square = function (x = 3) {
  return x * x;
};

console.log(square());

// Immidiately invokable function expressions- IIFEs
(function (name) {
  console.log("Hello " + name);
})("Brad");

// Property methods

const todo = {
  add: function () {
    console.log("Add todo");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete Todo");
};

// todo.add();
// todo.edit(5);
todo.delete();

cars = ["Ford", "Chevy", "Honda", "Toyota"];

// iterating via for loop

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// iterating via forEach method

cars.forEach(function (car, index) {
  console.log(`${index} : ${car}`);
});

//Map

const Users = [
  { id: 1, name: "John" },
  { id: 2, name: "Brad" },
  { id: 3, name: "Karen" },
];

const ids = Users.map(function (user) {
  return user.id;
});

//Confirm

if (confirm("Are you sure")) {
  console.log("Yes");
} else {
  console.log("No");
}

/*if the value of var is updated in a block the it gets updated in the global scope as well but not same
for function scope 
the value of let and const does not change outside the block or function scope
*/
