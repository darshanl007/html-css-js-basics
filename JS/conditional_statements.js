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

//3. if..else if..else (else if)
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

//4. Nested if
let username = "admin";
let password = "1234";

if (username == "admin") {
    if (password == "admin@123") {
        console.log("Login Successful");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid User");
}

//5. Switch case
let a = 10;
let b = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("Invalid operator");
}

//6. Ternary Operator
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome Back!" : "Please Login");