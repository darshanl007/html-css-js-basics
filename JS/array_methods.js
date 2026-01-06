// -------- Array Methods in JavaScript --------

// Initial array
let foodItems = ["Idly", "Masala Dosa", "Palav", "Vada", "Roti Curry"];
console.log(foodItems);

// push() → adds elements at the end
foodItems.push("Gobi Manchurian", "Paneer", "Burger");
console.log(foodItems);

// pop() → removes last element
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("Deleted :", deletedItem);

// toString() → converts array to string
console.log(foodItems.toString());

let marks = [85, 90, 74, 89, 87];
console.log(marks);
console.log(marks.toString());

// concat() → merges arrays
let kannada_heros = ["Darshan", "Sudeep", "Yash"];
let tamil_heros = ["Vijay", "Surya", "Ajith"];
let telugu_heros = ["Prabhas", "Allu Arjun"];

console.log(kannada_heros);
console.log(tamil_heros);
console.log(telugu_heros);

let heros = kannada_heros.concat(tamil_heros, telugu_heros);
console.log(heros);

// shift() → removes first element
let val = foodItems.shift();
console.log("Deleted :", val);
console.log(foodItems);

// unshift() → adds element at the beginning
foodItems.unshift("Tatte Idly");
console.log(foodItems);

// slice() → does NOT modify original array
console.log(foodItems.slice(2));      // from index 2 to end
console.log(foodItems.slice(0, 4));   // from index 0 to 3

// splice() → modifies original array
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
// [1, 2, 3, 4, 5, 6, 7]

// replace elements
arr.splice(2, 2, 103, 104);
console.log(arr); // [1, 2, 103, 104, 5, 6, 7]

// add element
arr.splice(2, 0, 102);
console.log(arr); // [1, 2, 102, 103, 104, 5, 6, 7]

// delete elements
arr.splice(3, 2);
console.log(arr); // [1, 2, 102, 5, 6 ,7]

// replace single element
arr.splice(3, 1, 101);
console.log(arr); // [1, 2, 102, 101, 6, 7]
