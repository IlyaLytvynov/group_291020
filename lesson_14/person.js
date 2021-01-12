class Person {
  constructor(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.gender = gender;
  }

  greeting() {
    // контекст вызова this
    // this ВСЕГДА ОБЬЕКТ
    console.log('Hello my name ' + this.fullName);
  }
}

export { Person };
