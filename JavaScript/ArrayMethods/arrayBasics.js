let fruit = ["Apple","Banana", "Cherry", "Date"
, "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"];

Array.spice(fruit, 2, 3, "Mango", "Nectarine");

console.log("Array Methods in JavaScript");

//Create an empty Array
let a = []
console.log(a); //Output: []

//Creating array with values
let b = [1, 2, 3, 4, 5] 
console.log(b);

let c = [1  , "Banana",3, "Cherry", "Date"]
console.log(c);

let x = new Array(10,20,30)
console.log(x); //Output: [10, 20, 30]

console.log(x[0]); //Output: 10

let n = x.length;
let lastElement = x[n-1];
console.log(lastElement); //Output: 30


//Adding elements to an array - push and unshift methods
let y    = [1, 2, 3];
y.push(4); // Adds 4 to the end
console.log(y); //Output: [1, 2, 3, 4]

y.unshift(10); // Adds 10 to the beginning
console.log(y); //Output: [10, 1, 2, 3, 4]

//Removing elements of the array - pop and shift methods

let z = ["HTML", "JAVA ","JavaScript ", "Python"];
let temp1 = z.pop(); // Removes the last element
console.log(temp1); //Output: Python
console.log(z); //Output: ["HTML", "JAVA ", "JavaScript "]

let temp2 = z.shift(); // Removes the first element
console.log(temp2); //Output: HTML
console.log(z); //Output: ["JAVA ", "JavaScript "]

//Remove 2nd element from the array
z.splice(1, 2)
console.log(z); //Output: ["JAVA "]

for loop to iterate through an array
let arr = ["Apple", "Banana", "Cherry", "Date"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let t = new Array(10,20,30);
console.log(t);
for(let i = 0 ;i< x.length; i++){
console.log(t[i]);
}

//Array Concatenation
let arr3 = ["Apple", "Banana"];
let arr4 = ["Cherry", "Date"];

//concat - method to merge two arrays
let array5 = arr3.concat(arr4);
console.log(array5); //Output: ["Apple", "Banana", "Cherry", "Date"]

//Conversion of array to string
let arr6 = ["Apple", "Banana", 1 ,2, null];
let str = arr6.toString();
console.log(str); //Output: "Apple,Banana,1,2,null"

//check the type of the array
console.log(typeof arr6); //Output: "object"


