// Simple function
function myFunction() {
    console.log("Welcome to JavaScript World!");
    console.log("I am learning Functions in JS...");
}
myFunction();
myFunction();

console.log("--------------------------");

// Function with parameter
function myFunction1(msg) { // parameter -> input
    console.log(msg);
}
myFunction1("Hello Good Evening"); // argument
myFunction1("I Love JavaScript");

console.log("---------------------------");

// Function with multiple parameters
function myFunction2(msg, num) {
    console.log(msg, num);
}
myFunction2("Hello", 12);

// Function with parameters (no return)
function addition(a, b) {
    console.log(a + b);
}
addition(10, 20);

console.log(`----------------------------`);

// Function with return value
function sum(x, y) {
    let s = x + y;   // declared variable properly
    return s;
}
let val = sum(5, 8);
console.log(val);

console.log(`----------------------------`);

// Function Expression
const square = function (n) {
    return n * n;
};
console.log(square(6));

console.log(`----------------------------`);
// Arrow Function (single line)
const printHello = () => console.log("Hello");
printHello();

// Arrow Function with return
const arrowSum = (a, b) => {
    return a + b;
};
console.log(arrowSum(2, 3));

// Arrow Function without return (just print)
const arrowMul = (x, y) => {
    console.log(x * y);
};
arrowMul(4, 5);

console.log("-----------------------------");

// -------- Call Back Function using forEach ------------

// Array of numbers
let arr = [1, 2, 3, 4, 5];

// -------------------------------
// Example 1: Print only values
// -------------------------------
// printVal is a callback function
// forEach() is a higher order method

arr.forEach(function printVal(val) {
    console.log(val); 
});

// -------------------------------
// Example 2: Print value with index
// -------------------------------
// Arrow function as callback
// val -> current element
// idx -> index of element

arr.forEach((val, idx) => {
    console.log(`${val} -> ${idx}`);
});

console.log("------------------------------");

// -------------------------------
// Example 3: String array operations
// -------------------------------
// Convert each string to uppercase
// Also print index and full array

let str = ["bangalore", "pune", "chennai", "hyderabad"];

str.forEach((val, idx, array) => {
    console.log(val.toUpperCase(), idx, array);
});

console.log("----------------------------------");

// Normal function (Callback Function)
function greet(name) {
    return "Hello " + name;
}

// Higher Order Function
// It accepts another function as a parameter
function welcome(callback) {
    console.log(callback("Darshan"));
}

// Passing function as an argument
welcome(greet);

console.log("-----------------------------------");

// Normal function (Callback Function)
function greetMessage(message) {
    return "Darshan " + message;
}

// Higher Order Function
function thankYou(callback) {
    console.log(callback("Good Bye"));
}

// Passing function as an argument
thankYou(greetMessage);

console.log("----------------------------");

// Anonymous Function with setTimeout()

setTimeout(function() {
    console.log("This line executes after 3 seconds");
}, 3000);

// Anonymous Function with setInterval()

setInterval(() => {
    console.log("Runs after every 4 seconds");
}, 4000);

