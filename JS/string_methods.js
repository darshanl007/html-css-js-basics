// String Methods in JavaScript

let str = "Hello JavaScript";

// 1. Convert to Upper Case
let upperCaseStr = str.toUpperCase();
console.log(str);            // Hello JavaScript
console.log(upperCaseStr);   // HELLO JAVASCRIPT

// 2. Convert to Lower Case
let lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr);   // hello javascript

// 3. Trim - Removes whitespace from start and end
let sentence = "           Hello      Good   Morning                 ";
let trimmedSentence = sentence.trim();
console.log(trimmedSentence); // Hello      Good   Morning

// 4. Slice - Extract part of string
let fullName = "Darshan Lokesh";
console.log(fullName.slice(1, 11)); // arshan Lok

// 5. Concatenate Strings
let greeting = "Hello ";
let message = "Good Evening";
console.log(greeting.concat(message)); // Hello Good Evening

// 6. Replace - Replaces first occurrence
let word = "hello";
console.log(word.replace("h", "y")); // yello

// 7. charAt() - Get character at index
console.log(word.charAt(2)); // l
