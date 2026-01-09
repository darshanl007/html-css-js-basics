// Displays document body as an object (shows properties)
console.dir(document.body);

// Displays document body as HTML
console.log(document.body);

// Displays entire window object (BOM)
console.dir(window);

// Displays document object inside window
console.log(window.document);

console.log("----------------------------");

// Accessing child nodes of body
console.log(document.body.childNodes[1]);

console.log("-----------------------------");

// Selecting element using ID
// getElementById returns a single element
let heading = document.getElementById("myId");
console.log(heading);      // Shows HTML
console.dir(heading);      // Shows properties

console.log("-------------------------------");

// Selecting elements using class name
// Returns HTMLCollection (array-like object)
let headings = document.getElementsByClassName("myClass");
console.log(headings);
console.dir(headings);

console.log("------------------------------");

// Selecting elements using tag name
// Returns all <p> elements
let parahs = document.getElementsByTagName("p");
console.log(parahs);
console.dir(parahs);

console.log("-----------------------------");

// querySelector selects FIRST matching element
let firstElement = document.querySelector("p");
console.log(firstElement);
console.dir(firstElement);

console.log("----------------------------");

// querySelectorAll selects ALL matching elements
let allElement = document.querySelectorAll("p");
console.log(allElement);
console.dir(allElement);
