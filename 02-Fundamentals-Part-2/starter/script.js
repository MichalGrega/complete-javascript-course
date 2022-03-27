"use strict"; //Strict mode

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 🚗");

// const interface = "Audio";
// const private = 534;
*/

/*
function logger () {
  console.log("My name is Jonas");
};

logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
};

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(10,10));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
*/

/*
// FUnction declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);
*/

/*
//Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
};

console.log(fruitProcessor(2,3));
*/

/*
const calcAge = function(year) {
  return 2037 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement
  } else {
    console.log(`${firstName} is already retired.`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
const calcAverage = (array) => (array[0] + array[1] + array[2]) / 3;

let scoreDolphins = calcAverage([44,23,71]);
let scoreKoalas = calcAverage([65,54,49]);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win with ${avgDolphins} points!`);
  } else if (avgDolphins * 2 <= avgKoalas) {
    console.log(`Koalas win with ${avgKoalas} points!`);
  } else {
    console.log("No one wins");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage([85,54,41]);
scoreKoalas = calcAverage([23,34,27]);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);
*/

/*
function calcTip(bill){
  return bill>= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44]
const tips = bills.map(e => calcTip(e));
const totals = bills.map(e => e + calcTip(e));
*/

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Kaufmann',
  birthYear: 1991,
  age
}
*/

class Person{
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  get BMI() {
    return this.weight / (this.height * this.height);
  }

}

const mark = new Person('Mark', 78, 1.69);
const john = new Person('John', 92, 1.95);

console.log(mark.BMI > john.BMI ? `${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s BMI (${john.BMI})` : `${john.name}'s BMI (${john.BMI}) is higher than ${mark.name}'s BMI (${mark.BMI})`);
