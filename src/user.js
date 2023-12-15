class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  sayHi() {
    return `Привет, ${this.name + this.lastName}!`;
  }



}


export { User };