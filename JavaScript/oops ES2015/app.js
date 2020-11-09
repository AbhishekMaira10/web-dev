// Person COnstructor

//Prototypes
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Calculate Age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full Name
Person.prototype.greeting = function () {
  console.log(this);
  return `Hello There ${this.firstName} ${this.lastName}`;
};

const abhishek = new Person("Abhishek", "Maira", "05-14-1999");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(abhishek.greeting());

//Prototypical Inheritance

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.mebership = membership;
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.proto return Customer()
Customer.prototype.constructor = Customer;


const customer1 = new Customer("Tom", "Smith", "9323842208", "Standard");

console.log(customer1);
console.log(customer1.greeting());


const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}


const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Johnson";