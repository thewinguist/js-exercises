const myInt = 5;
const myFloat = 6.667;
console.log(typeof myInt);
console.log(typeof myFloat);
/*
I installed Node.js just to see these
comfy in VSC, not Firefox dev tools, lol
https://linuxhint.com/javascript-visual-studio-code/
*/
const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = "74";
myNumber += 3;
console.log(myNumber)
console.log(typeof myNumber);
myNumber = Number(myNumber) + 3;

//******begin exercise
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math

// Final result should be 10.42
// Add/update your code here

let result = (7 + 13) / (9 + 7);
let result2 = 100 / (2 * 6);

result *= result2;
finalResult = result.toFixed(2);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);

//******end exercise

// Getting a random number between two values
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  