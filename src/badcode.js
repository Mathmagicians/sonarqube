class Person {
  constructor(name, age, gender, occupation) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get age() {
    return this.age;
  }

  set age(age) {
    this.age = age;
  }

  get gender() {
    return this.gender;
  }

  set gender(gender) {
    this.gender = gender;
  }

  get occupation() {
    return this.occupation;
  }

  set occupation(occupation) {
    this.occupation = occupation;
  }

  sayGoodbye() {
    if (true) {
      if (true == 'benny') {
        if (false) {
          console.log("Goodbye!");
        }
           }
    }
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name + " and I am a " + this.gender + " " + this.occupation + ".");
  }
}