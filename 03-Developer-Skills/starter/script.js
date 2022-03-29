// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log('29');
*/

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 'error', 9, 13, 20, 15, 14, 9, 5];

const calcTempAmplitude = temperatures => {
  temperatures = temperatures.filter(temp => typeof temp === 'number');
  let maxTemp = Math.max(...temperatures);
  let minTemp = Math.min(...temperatures);
  return maxTemp - minTemp;
};

console.log(calcTempAmplitude(temperatures1));

const calcTempAmplitudeNew = (t1, t2) => {
  let temps = t1.concat(t2);
  temps = temps.filter(temp => typeof temp === 'number');
  let maxTemp = Math.max(...temps);
  let minTemp = Math.min(...temps);
  return maxTemp - minTemp;
};

console.log(calcTempAmplitudeNew(temperatures1, temperatures2));
