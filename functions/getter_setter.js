const person = {
  firstName: "Arka",
  lastName: "Sourav",
  age: 25,

  getMyAge() {
    return person.age;
  },

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

//getMyAge is a fn, but .fullName is a property
console.log(person.getMyAge()); //--> 25
console.log(person.fullName); //--> Arka Sourav

person.fullName = "Ram Kumar";
console.log(person); //--> {firstName: 'Ram', lastName: 'Kumar', age: 25, getMyAge: ƒ}
