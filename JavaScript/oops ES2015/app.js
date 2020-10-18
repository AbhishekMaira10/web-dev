// Person COnstructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const abhishek = new Person("Abhishek Maira", '05-14-1999');
console.log(abhishek.calculateAge());