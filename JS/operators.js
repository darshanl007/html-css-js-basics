//Arithmetic Operators
console.log("---Arithmetic Operators---")
let a = 5;
let b = 2;

console.log("a = ", a, "& b = ", b);
console.log("a + b =", a + b); // 7
console.log("a - b =", a - b); // 3
console.log("a * b =", a * b); // 10
console.log("a / b =", a / b); // 2.5

//Modulus
console.log("a % b =", a % b); // 1

//Exponentiation
console.log("a ** b =", a ** b); // 25

//Unary Opeartors : Increment ++, Decrement --
console.log("--Unary Operators--");
a = a + 1;
console.log("a =", a); // 6

//Increment
console.log("a++ =", a++); // 6
console.log("a =", a); // 7
console.log("++a =", ++a); // 8

//Decrement
console.log("a-- =", a--); // 8
console.log("a =", a); // 7
console.log("--a =", --a); // 6 

//Assignment Operators
console.log("--Assignment Operators--");
a = 5;
b = 2
console.log("a = ", a, "& b = ", b);
console.log("a += 4 =>", a += 4); // 9
console.log("a -= 4 =>", a -= 4); // 5
console.log("a *= 4 =>", a *= 4); // 20
console.log("a /= 4 =>", a /= 4); // 5
console.log("a %= 4 =>", a %= 2); // 1
console.log("a **= 4 =>", a **= 4) // 1

//Comparison Operators
console.log("--Comparison Opeartors");
a = 5;
b = 2;
console.log("a = ", a, "& b = ", b);
console.log("a == b", a == b); // false
console.log("a != b", a != b); // true

// If b = "5" (String)
b = "5";
console.log("a == b", a == b); // true

// == opearator doesn't check for data type

//For that we have === (Checks equal to and type)
console.log("a === b", a === b); // false
console.log("a !== b", a !== b); // true

a = 5; b = 5
console.log("a > b", a > b); // false
console.log("a >= b", a >= b); // true

a = 5; b = 2;
console.log("a < b", a < b); // false
console.log("a <= b", a <= b); // false

//Logical Opearators
console.log("--Logical Operators--")
// AND --> If two conditions are true then its true and rest of all false
a = 5;
b = 6;
console.log("cond1 && cond2 =>", a == b && a === b); // false

// OR --> If two conditions are false then its false and rest of are true
console.log("cond1 || cond2 =>", a == b || a <= b); // true

//NOT(!) --> (true -> false)  (false -> true)
console.log("!(5>6) =", !(5 > 6)); // true





