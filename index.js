"use strict";

//I'm practicing making comments here

/* this is a multi-
line comment*/

// console.log("hello, Madeline!");
// ["one", "two"].forEach(alert);


let hello = "Bonjour"
let message;
message = hello;

console.log(message);

//Working with Variables exercises:

let admin, userName;
userName = "Madeline";
admin = userName;
console.log( admin );

let planetName = "Earth";
let currentUserName = "Madeline";

//Embedded string
console.log(`hello, ${userName}!`);
console.log(`the result is ${1+2}`);

//Boolean
let isGreater = 4 > 1;
console.log( isGreater );

//typeof 
console.log (typeof admin);

//prompt
// let favoriteColor = prompt('What is your favorite color?', "green");
// alert(`You like the color ${favoriteColor}!`);

// //confirm
// let isFrog = confirm("Are you by chance a Frog?");
// alert (isFrog);

//Type Conversions

//convert boolean to string
let value = false;
console.log (typeof value); //boolean

value = String(value);
console.log (typeof value); //now it says string

//Math!

//unary + converts strings into numbers
console.log(+true); //1
console.log(+""); //0

//binary + merges strings
let apples = "2";
let oranges = "3";
console.log ( apples + oranges); //23
console.log ( +apples + +oranges); //5

//turn a string into a number
let a = +prompt("one", 1); //1

//Comparisons
console.log ( 2 === 1 ); //false
console.log ( 2 !== 1 ); //true

// Conditional
// if (year == 2015) {
//   console.log( "That's correct!" );
//   console.log( "You're so smart!" );
// }

// Multiple question marks

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

let result = prompt('What is the official name of Java Script?', '');
let happyMessage = ( result === 'ECMAScript' ) 
? 'Right!'
: 'You don\'t know? "ECMAScript"!';
console.log (happyMessage);

//turned into if/else:
result = prompt( 'What is the official name of JavaScript?', '');

if (result === 'ECMAScript') {
    console.log ('Right!');
} else {
    console.log ( 'You don\'t know? "ECMAScript"!');
}

//Number exercise
result = Number(prompt ( 'Guess a number', 0 ));

if ( result > 0 ) {
    console.log ( 1 );
} else if ( result < 0 ) {
    console.log ( -1 );
} else {
    console.log ( 0 );
}

//More Ternary
result = (a + b < 4) ? 'Below' : 'Over';

