// ------------------ ARRAYS IN JAVASCRIPT -------------

// Create an Array (using array literal)
let students = ["darshan", "likith", "manoj", "bharath"];
console.log(students);
// Output: ["darshan", "likith", "manoj", "bharath"]

console.log(students.length);
// Output: 4


// Create an Array (using new Array constructor)
let marks = new Array(85, 90, 74, 88, 95, 75);
console.log(marks);
// Output: [85, 90, 74, 88, 95, 75]

console.log(marks.length);
// Output: 6

console.log(typeof marks);
// Output: object


// ------------ ARRAY INDEXING --------------

console.log(marks[1]);
// Output: 90

marks[0] = 100;
console.log(marks);
// Output: [100, 90, 74, 88, 95, 75]

console.log(marks[0]);
// Output: 100


// --------------- ARRAY WITH MIXED DATA TYPES --------------

let info = ["darshan", 23, "Bangalore", true];
console.log(info);
// Output: ["darshan", 23, "Bangalore", true]

info[2] = "Mangalore";
console.log(info);
// Output: ["darshan", 23, "Mangalore", true]


// ---------------- LOOPING OVER AN ARRAY ------------------

let heros = ["Darshan", "Sudeep", "Yash", "Puneeth", "Rishab", "Rakshith"];


// -------- for loop --------
for (let idx = 0; idx < heros.length; idx++) {
    console.log(heros[idx]);
}
/*
Output:
Darshan
Sudeep
Yash
Puneeth
Rishab
Rakshith
*/

console.log("--- for loop ends ---");
// Output: --- for loop ends ---


// -------- for-of loop --------
for (let hero of heros) {
    console.log(hero.toUpperCase());
}
/*
Output:
DARSHAN
SUDEEP
YASH
PUNEETH
RISHAB
RAKSHITH
*/
