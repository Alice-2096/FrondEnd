'use strict';
//To fully enable all features of modern JavaScript, we should start scripts with "use strict".

//a semicolon is expected at the end of a statement

//To create a variable in JavaScript, use the var or let keyword.
var message = 'hello';

//copy values
let anotherMessage = message;

//constants
const myBirthday = '18.04.1982';

//JS vars are dynamically typed: We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
// no error
let myvar = 'hello';
myvar = 123456;

//let, class, return, and function are reserved names

//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
document.write(`the result is ${1 + 2}`); // the result is 3

let age = prompt('how old?', '');
alert(`your age is ${age} years old!`);

let bool = confirm('are you 30 years old?');
alert(bool);

// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
let first;
let second = 2;
document.write(first ?? second);

//a function is a value that represents and action. It can be stored in a variable
//function declaration
function sayHi() {
  // (1) create
  alert('Hello');
}
sayHi(); // Hello

//function expression
let func = sayHi; // (2) copy

func(); // Hello     // (3) run the copy (it works)!

//arrow functions
let sum = (a, b) => a + b; //assign a function as the value of a variable

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

let sayHi = () => alert('Hello!'); // () => a function without argument
