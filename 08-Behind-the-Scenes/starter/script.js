'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      const output = 'NEW OUTPUT';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));

    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
*/ ////////////////////////////////////////////////////////////////////////////////////////////

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(me);
console.log(friend);
*/ ////////////

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before merriage:', jessica);
console.log('After merriage:', marriedJessica);

// copying objects
const jessica2 = {
  firstName: 'Jessica2',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before merriage:', jessica2);
console.log('After merriage:', jessicaCopy);
