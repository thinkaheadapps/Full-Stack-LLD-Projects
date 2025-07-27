// function calculateThreeSum(x , y, z) {
//   return x + y + z;   
// }

// let temR = calculateThreeSum(10, 20, 3); // 6
// console.log(temR);

// const calculateThreeSumArrow = (x, y, z=60) => {
//     console.log( x + " " + y + " " + z);
// }
// calculateThreeSumArrow(30,50);

// const makeUser = (firstName, lastName) => ({ first: firstName, last: lastName });
// console.log(makeUser("TestUser", "Name"));

const objWithThis ={
    name: "Divya",
    printName: function() {
        return this.name;
    }
}
console.log(objWithThis.printName()); // Divya

const objWithThisArrow = {
    name: "Inside Scope",
    printName: () => {
        console.log(this);
        console.log(this.name); // undefined
         // Arrow functions do not have their own 'this' context
         // They inherit 'this' from the parent scope, which is the global object in this case
         // Hence, 'this.name' is undefined
         // If you want to access the object's property, use a regular function instead
         //
        //return this.name;
         // 'this' does not refer to objWithThisArrow
    }
}
console.log(objWithThisArrow.printName()); // undefined




