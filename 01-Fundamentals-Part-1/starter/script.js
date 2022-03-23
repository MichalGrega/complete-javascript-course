/*
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415

//Comments
*/

/* DATA TYPES
// console.log(true);

// Boolean value
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// Reassigning the variable without let keyword
javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

// Undefined - variable without a value
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// type of null is object - javascript bug. Not corrected for legacy reasons
console.log(typeof null);
*/

/*Let const and var
//reassigning or we mutate the variable
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

// Without declaring JavaScript creates global variable. Bad Idea.
lastNmae = 'Schmedtmann;'
console.log(lastName);
*/

// OPERATORS

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4; //x = x * 4
x++; //x = x + 1
x--; //x = x - 1
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // <, >, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);