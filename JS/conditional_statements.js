//Conditional Statements
//1. if
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

//2. if..else

let number = 4;
if (number % 2 == 0) {
    console.log(number, " is Even");
} else {
    console.log(number, " is Odd");
}

//3. if..else if..else
let marks = 87;
if (marks >= 85) {
    console.log("Distinction");
} else if (marks >= 70) {
    console.log("First Class");
} else if (marks >= 35) {
    console.log("Second Class");
} else {
    console.log("Fail");
}