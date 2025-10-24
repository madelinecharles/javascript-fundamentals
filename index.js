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

//turn a string into a number
let a = +prompt("one", 1); //1

//Comparisons
console.log ( 2 === 1 ); //false
console.log ( 2 !== 1 ); //true

//Conditional
if (year == 2015) {
  console.log( "That's correct!" );
  console.log( "You're so smart!" );
}

//Multiple question marks

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

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

//More
let loginMessage = (login === 'Employee') ? 'Hello' :
    (login === 'Director') ? 'Greetings' :
    (login === '') ? 'No login' :
    '';

//Turned into if/else
if (login === 'Employee') {
    loginMessage = 'Hello';
} else if (login === 'Director') {
    loginMessage = 'Greetings';
} else if (login === '') {
    loginMessage = 'No login';
} else {
    loginMessage = '';
}

// ||OR Operator
userName || alert("Please enter your name");
//this is the same as this:
if (!userName) alert("Please enter your name");

//&& Operator
console.log( 1 && 2 && null && 3 ); // null

//Check login exercise
let openSesame = prompt('Who\'s there?', '');
if (openSesame === "Admin") {
    let pass = prompt('Password?', '');
    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '' || pass === null) {
        alert ('Canceled');
    } else {
        alert ("I don\'t know you");
    }
} else if (openSesame === '' || openSesame === null) {
    alert ('Canceled');
} else {
    alert( "I don\'t know you");
}

//Prep for the Login exercise

//Exercise 1
let ageOfUser = +prompt('How old are you?', '');
if (ageOfUser >= 18) {
    alert ("You are an adult!");
} else {
    alert ("You are a minor!");
}

//Exercise 2
let nameOfUser = prompt('What\'s your name?', '');
if (nameOfUser === '' || nameOfUser === null) {
    alert ('Canceled');
} else {
    alert (`Hello, ${nameOfUser}!`)
}

//Exercise 3
let favColor = prompt('what\'s your favorite color?', '');
if (favColor === 'red') {
    let likesApples = prompt('Do you like apples?', '');
    if (likesApples === 'yes') {
        alert('Me too!');
    } else {
        alert ('Oh, okay');
    }
} else {
    alert ('Not my favorite');
}

//Exercise 4
let likesMovies = prompt('Do you like movies?', '');
if (likesMovies === 'yes') {
    let favGenre = prompt('What\'s your favorite genre?', '');
    if (favGenre === 'comedy') {
        alert(`${favGenre} is a Great Choice!`);
    } else {
        alert('Interesting!');
    }
} else {
    alert('No movies for you then!');
}

//Exercise 5
let isWeekend= true;
let hour = 6;
if (isWeekend || hour <= 7) {
    alert('Sleep in!');
} else {
    alert('Time to get up!');
}

//Exercise 6
let enjoysMovies = prompt('Do you like watching movies?', '');
let userAge = prompt('What is your age?', '');
if (userAge <= 18) {

}