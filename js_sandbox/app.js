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


