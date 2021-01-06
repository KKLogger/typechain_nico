class Human {
  public name: string;
  private age: number;
  public gender: string;
  public getAge = (): number => {
    return this.age;
  };
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const Kim = new Human("Kim", 22, "male");

const sayHi = (person: Human): void => {
  console.log(`${person.name},${person.getAge()},${person.gender}!!!`);
};

sayHi(Kim);
