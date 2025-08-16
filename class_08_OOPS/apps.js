// class ToyotaCar {
//     // constructor() {
//     //     console.log("Toyota car created");
//     // }
//         start() {
//         console.log("Toyota car started");
//     }
//     stop() {
//         console.log("Toyota car stopped");
//     }  
//     setBrand(brand) { 
//         this.brand = brand;
// }
// }

// let myToyota = new ToyotaCar();
// myToyota.setBrand("Toyota");
// let myToyota2 = new ToyotaCar();
// let myToyota3 = new ToyotaCar();


// class Car {
   
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         console.log(`Car created: ${this.make} ${this.model} (${this.year})`);
//     }
//     getCarDetails() {
//         return `${this.year} ${this.make} ${this.model}`;
//     }
    
// }
// let myCar = new Car("Toyota", "Camry", 2020);
// let myCar2 = new Car("Honda", "Civic", 2019);
// let myCar3 = new Car("Ford", "Mustang", 2021);

class Plarent {
    hello() {
        console.log("Hello from Parent class");
    }
}

class Child extends Plarent {

}

let myChild = new Child();
