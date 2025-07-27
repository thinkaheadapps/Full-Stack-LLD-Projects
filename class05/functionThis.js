// const user = {
//     name: "John",
//     prise: 1999,
//     welcomeMesaage: function() {
//         console.log(`${this.name}, welcome to our site!`);
//         console.log(this);
//     }
// }

//  user.welcomeMesaage();
//  user.name = "Alice  Smith";
//  user.welcomeMesaage();

//console.log(this);

// function two() {
//     console.log(this);
// }
// two();


// function one() {
//     let userName = "Alice";
//     console.log(`${userName}`);
//     console.log(`${this.userName}`);
// }
// one();

// let one = () => {
//     let userName = "Alice";
//     console.log(`${userName}`);
//     console.log(`${this.userName}`);
// }
// one();

//implicite and explicite return. No need to write return in arrow functions.

function sum(a, b) {
    return a + b;
}

let result = sum(2, 3); // returns 5
console.log(result);

let arrowSum = (a, b) => {
    return a + b;
};

// let arrowSumImp = (a, b) => (a + b); // implicit return
// console.log(arrowSumImp(2, 3)); // returns 5

let arrowSumImp = (a, b) => (a + b);
console.log(arrowSumImp(2, 3)); // returns undefined

// arrowSum{username: "Alice", age: 25};
// console.log(first)

// const addTwoNum = (num1, num2) => num1 + num2
// console.log(addTwoNum(40,50));

const addTwoNum = (num1, num2) => ({userName :"TempName"})
console.log(addTwoNum(40,50));



// let r = arrowSum(2, 3); // returns 5
// console.log(r);








//explicite return - return value is returned explicitly using the return statement.

//consol.log dos not work after return statement.




