var a;
console.log("Value of a:",a);
a = 10;
console.log("Value of a:",a);
a = "abc";
console.log("value of a:",a);
a = "abcdefgh";
console.log("value of ");

var age = 30;
var name = "Divya";
var c = "Hi my name is" + name + ' and age is ' + age;
console.log("Value of c is:", c);

var d = `Hi My Name is ${name}`;
var e = `${d} and age is ${age}`
console.log("Value of d is:", d);
console.log("value of e is:",e);

var f = "Hi\n" + 
"Hello\n" +
"How are you" +
"I am good";

console.log("value of f:", f);

//Type of 
console.log("Type of name",typeof(name));
console.log("Tyope of a", typeof(a));
console.log("type of age:", typeof(age));
console.log("type of d", typeof(e));
console.log("type of f", typeof(f));

var g = [10,20,5,"abc",true,[1,2,3,"hjk", Boolean]];
console.log("type of g:", typeof(g));

var g = [20,20,"abc","efg",true,[1,2,3,"def",45]];
console.log("value of g", Array.isArray(g));



