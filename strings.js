
/*
EVEN A STRING IS AN OBJECT

these both work
const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";

this is a nope (same char and unescaped)
const bigmouth = 'I've got no right to take my place…';

*/
//backticks let you insert variables, expressions AND LINE BREAKS
const name = "Chris";
const greeting = `Hello, ${name}`; //VSC says name item is obsolete, lol
console.log(greeting); // "Hello, Chris"

//concat of string + num = string
const bandname = "Front ";
const number = 242;
console.log(`${name}${number}`); // "Front 242"

/*
CONVERTING:
const myNum = Number(myString);
const myString2 = myNum2.toString();

METHODS
someString.length;
someString[0];

last char:
someString[someString.length - 1]

position of a substring:
someString.indexOf("yourSubstring")
"-1" = no such substring
*/

const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//also: .startsWith, .endsWith

//subsequent occurrences
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

const browserType2 = "mozilla";
console.log(browserType2.slice(1, 4)); // "ozi"
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods

