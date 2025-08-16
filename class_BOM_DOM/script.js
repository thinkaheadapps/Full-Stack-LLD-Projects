// 
// Create a new <div> element
const newDiv = document.createElement('div');

// Add some text content to the div
newDiv.textContent = 'Hello, I am a new div!';

// Add a class name or style
newDiv.className = 'highlight';
newDiv.style.color = 'blue';
newDiv.style.fontSize = '20px';

// Append the new div to an existing element
document.getElementById('container').appendChild(newDiv);


//  window.console.log('Hello World!');
//  console.log('This is a test message.');

//  console.log(document);
//  console.log(document.body);
//  console.log(document.head); 
//  console.log(document.title);
// document.body.style.backgroundColor = 'green';
// document.title = 'My New Title';
//location.href = 'https://medium.com/@raidivya';

// Uncomment the line below to see the heading element in the console
//console.log(document.getElementById('main-heading'));

// location.href = 'https://medium.com/@raidivya';
// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.protocol);
// console.log(location.search);
// console.log(location.hash);

/*
Get the element with id "heading" from the DOM
This will return null if the element does not exist.
*/
let heading = document.getElementById("heading");
console.log(heading); // This will log the heading element or null if it doesn't exist


/**
 * get element by class name
 */
let headings = document.getElementsByClassName("headingClass");
console.log(headings); // This will log a live HTMLCollection of elements with the class "headingClass"     

/**
 * Get elements by paragraph tag name
 */
let parahs = document.getElementsByTagName("p");
console.log(parahs); // This will log a live HTMLCollection of all <p> elements in the document
