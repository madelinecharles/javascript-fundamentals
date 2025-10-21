"use strict";

//I'm practicing making comments here

/* this is a multi-
line comment*/

console.log("hello, Madeline!");
["one", "two"].forEach(alert);


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
let favoriteColor = prompt('What is your favorite color?', "green");
alert(`You like the color ${favoriteColor}!`);

//confirm
let isFrog = confirm("Are you by chance a Frog?");
alert (isFrog);

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








