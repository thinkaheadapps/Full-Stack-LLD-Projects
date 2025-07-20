class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;

    }
    sayHi() {
        console.log(`I am $(this.name)`)
    }

    sayBye() {
        console.log()
    }
}