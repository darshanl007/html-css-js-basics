//Strings
let str = "Hello Javascript";
let str1 = "Darshan";

//String length
console.log(str.length); // 16
console.log(str1.length);// 7

//String position -> index or indices
console.log(str[2]); // l
console.log(str[6]); // J

console.log(str1[0]); // D

//Template Literals in JS
let specialString = `This is a template literal`;
specialString = `This is a template literal ${1 + 2 + 3}`;
console.log(specialString); // This is a template literal 6
console.log(typeof specialString); // string
console.log(specialString.length);; // 28

let obj = {
    product: "pen",
    price: 20,
};

console.log("The cost of", obj.product, "is", obj.price, "rupees");

console.log("--- Using template literial and string interpolation ---")

let output = `The cost of ${obj.product} is ${obj.price} rupees`;
console.log(output); // The cost of pen is 20 rupees

let Sname = "Darshan";
let role = "Java Developer";

console.log(`My name is ${Sname} and I am a ${role}`);


//escape characters
let a1 = "Hello\nJavaScript"; // next line
console.log(a1.length); // 16

let a2 = "Darshan\tLokesh"; // tab space
console.log(a2.length); // 14
