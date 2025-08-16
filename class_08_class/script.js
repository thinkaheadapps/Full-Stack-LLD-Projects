// const student = {
//     fullName: "Divya",
//     marks: 90,
//     age: 20,
//     printMarks: function() {
//         console.log(`Marks: ${this.marks}`);
//     }
// };
// console.log(student);
// student.printMarks();


const employee = {
    calcTax: function() {
        console.log("tax rate is 10%");
    },
}

const myEmployee ={
    salary: 4000,
    // calcTax: function() {
    //     console.log("tax rate is 20%");
    // },
}

myEmployee.__proto__ = employee; 
const myEmployee2 = {
    salary: 5000,
    calcTax: function() {
        console.log("tax rate is 30%");
    },
}

const myEmployee3 = {
    salary: 8000,
    calcTax: function() {
        console.log("tax rate is 40%");
    },
}

myEmployee2.__proto__ = employee;
myEmployee3.__proto__ = employee;










