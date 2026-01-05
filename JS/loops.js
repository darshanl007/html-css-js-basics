//Loops

//1. for loop
for (let i = 1; i <= 5; i++) {
    console.log("Hello Javascript");
}

//print number from 1 to 10
console.log("Numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//print even number in 1 to 20
console.log("Even numbers")
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("--- for loop ends ---");

//2. while loop
let i = 1;
while (i <= 5) {
    console.log("i = ", i);
    i++;
}

let a = 1;
while (a <= 5) {
    console.log("Hello World");
    a++;
}

console.log("--- while loop ends ---");

//3. do-while loop
let x = 10;
do {
    console.log("x = ", x);
    x++;
} while (i <= 5);

let y = 1;
do {
    console.log("y = ", y);
    y++;
} while (y <= 10);

console.log("--- do-while loop ends ---");

//4. for-of loop
let str = "Javascript";

let size = 0;
for (let i of str) { // iterator -> characters
    console.log("i = ", i);
    size++;
}
console.log("String size is =", size);

let fruits = ["Apple", "Banana", "Mango", "Grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}

console.log("--- for-of loop ends ---");

//5. for-in loop
let student = {
    Sname: "Darshan",
    age: 23,
    cgpa: 8.23,
    isPass: true
};

for(let key in student){
    console.log(key +" : "+ student[key]);
}

console.log("--- for-in loop ends---");
