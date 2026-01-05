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
    console.log("x = ",x);
    x++;
} while (i <= 5);

let y = 1;
do {
    console.log("y = ", y);
    y++;
} while (y <= 10);

console.log("--- do-while loop ends ---");
