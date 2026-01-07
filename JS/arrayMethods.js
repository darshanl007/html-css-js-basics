// -------------- Array Methods ---------------

// map() – add 5 to each element
let arr = [10, 20, 30, 40];

let result = arr.map(num => num + 5);
console.log(result); // [15, 25, 35, 45]

console.log("----------------------");

// Multiply elements by 2
let numbers = [1, 2, 3, 4, 5, 6];

let doubled = numbers.map(num => num * 2);

console.log(numbers); // original array (unchanged)
console.log(doubled); // new array

console.log("------------------------");

// Convert names to uppercase
let names = ["darshan", "rahul", "manoj", "bharath"];

let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

console.log("------------------------------");

// map with objects (Real-World Example)
let users = [
    { userName: "Darshan", age: 24 },
    { userName: "Likith", age: 23 }
];

let userNames = users.map(user => user.userName);
console.log(userNames);

console.log("-------------------------------");

// filter() - get even numbers
let array = [1, 2, 3, 4, 5, 6, 7, 8];

let evenArray = array.filter((num) => {
    return num % 2 == 0;
});
console.log(evenArray);

// Filter marks above 85
let marks = [88, 83, 70, 90, 75, 99, 85, 93];

let topStudents = marks.filter(mark => mark > 85);
console.log(topStudents);


