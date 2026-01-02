var a = 20;
var a = 30;
var a = 50;
console.log(a);

//----------------

let age = 20;
// let age = 45; Cannot redeclare block-scoped variable 'age'.
age = 22;
age = 24;
console.log(age);

let pi;
console.log(pi);
pi = 3.14;
console.log(pi);

//----------------

// const sal; 'const' declarations must be initialized.
const sal = 20000;
console.log(sal);

// sal = 25000;
// console.log(sal); // Uncaught TypeError: Assignment to constant variable. (cannot be redeclared and initialized)

//=====================================================

// var example (function-scoped)
  var x = 10;
  if (true) {
    var x = 20;   // same variable
    console.log("Inside block (var):", x);
  }
  console.log("Outside block (var):", x);

  // let example (block-scoped)
  let y = 10;
  if (true) {
    let y = 20;   // different variable
    console.log("Inside block (let):", y);
  }
  console.log("Outside block (let):", y); 

  // const example (block-scoped & constant)
  const z = 30;
  console.log("Const value:", z);

  // z = 40; // Error Assignment to constant variable