class User {}

class user {
  greeting() {
    return "Hello";
  }
}

const godo = new user();

console.log(godo.greeting());

const chori = new user();

console.log(chori.greeting());

//constructor

class user {
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting() {
    return "Hello";
  }
}

const david = new user();

//this

class user {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana');

console.log(ana.greeting());

// setters getters

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  } 
}
const ross = new user('Ross', 37);

console.log(ross.uAge);
console.log(ross.uAge = 20);

