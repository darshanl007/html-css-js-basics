// Primitive Datatypes : Number, String, Boolean, Undefined, Null, BigInt, Symbol.

//Number
let price = 500;
console.log(price);
console.log(typeof(price));

//String 
let Name = "Darshan"
console.log(Name);
console.log(typeof(Name));

//Boolean
let isFollow = true;
console.log(isFollow);
console.log(typeof(isFollow));

//Undefined
let  x;
console.log(x);
console.log(typeof(x));

//Null
let y = null;
console.log(y);
console.log(typeof(y));

//BigInt
let num = BigInt(123);
console.log(num);
console.log(typeof(num));

//Symbol
let z = Symbol("Hello World!");
console.log(z);
console.log(typeof(z));

console.log("---------------------------");

//Non Primitive Datatypes : Object -> Array , Function

//Object
const student = {
    name : "Darshan",
    age : 23,
    cgpa : 8.23,
    isPass : true
};

console.log(student);
console.log(typeof(student));

console.log(student.name);
console.log(student["age"]);
console.log(student["cgpa"]);
console.log(student.isPass);    

student["age"] = student["age"] + 2;
console.log(student.age);

student["name"] = "Darshan Lokesh";
console.log(student.name);

console.log(typeof student["isPass"]);
console.log(typeof student["name"]);





