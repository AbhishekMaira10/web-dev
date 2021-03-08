class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

// const mary = new Person("Mary", "Johnson", "05-14-1999");
// console.log(mary.greeting());

// console.log(Person.addNumbers(1, 2));

// Sub clasess

class Customer extends Person {
  constructor(firstName, lastName, dob, phone, membership) {
    super(firstName, lastName, dob);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "07-07-1977", "555-666-444", "Standard");
console.log(john);