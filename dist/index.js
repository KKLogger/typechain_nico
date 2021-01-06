class Human {
    constructor(name, age, gender) {
        this.getAge = () => {
            return this.age;
        };
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const Kim = new Human("Kim", 22, "male");
const sayHi = (person) => {
    console.log(`${person.name},${person.getAge()},${person.gender}!!!`);
};
sayHi(Kim);
//# sourceMappingURL=index.js.map