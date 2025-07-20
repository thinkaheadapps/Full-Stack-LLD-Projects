console.log("varibles in java script");
// variables are dynamic typed. - they can hold any type of data

// let x = 10 //x contains number here
// console.log(x)

// x = "Hello" //x now contains string
// console.log(x)  

//Rules for variables
// 1. Variable names can contain letters, numbers, underscores, and dollar signs.
// 2. Variable names must start with a letter, underscore, or dollar sign.
// 3. Variable names cannot start with a number.    

//javascript reserved ketword can not be used as variable names
//javascript is case sensitive


var x = 10 //x contains number here
console.log(x)
var x = "Hello" //x now contains string
console.log(x)
var x = null
console.log(x) //x now contains null

{
    var x = "World" //x is redeclared in a block scope
    console.log(x) //x is still accessible here
}

console.log(x) //x is still accessible outside the block


