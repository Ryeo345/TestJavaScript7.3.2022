//values can be stored in a variable
//use the assignment operator =

let myNum = 5;
console.log(myNum);

// let keyword stores the assigned value in a variable. The variable can be reassigned */

let mood = 'happy';
mood = 'overjoyed';

console.log(mood);

// the const keyword stores the assigned value in a constant variable that cannot be reassigned

const favoriteBootcamp = 'Fullstack';

// the variable will be constant so if we reassign the value of the variable, an error will generate

// favoriteBootcamp = 'somewhere else';
// TypeError: Assignment to constant variable.

// Expressions are 'any valid unit of code that resolves to a value' (MDN)

console.log(15);

console.log(9 === 10);

console.log('happy' + ' ' + 'together')

let sum = 10 + 5;
console.log(sum);

// order of operations ( JS version operator precedence )
let notSure = 10 + 5 * 10;
console.log(notSure);

notSure = 10 * 10 / (5 * 5);
console.log(notSure);

notSure = 10 * 10 / 5 * 5;
console.log(notSure);

// In JS expression wrapped in parentheses will be evaluated first
notSure = false === (10 !== 10);
console.log(notSure);

//google MDN operator precedence when you need it

// typeof 10 has higher precedence than 10 === 10;
notSure = typeof 10 === 10;
console.log(notSure);

//shortcut syntax
// the += operator sums and reassigns
// -=, *=, /= all work all work the same way
/*
let sum = 0;
sum += 5; sum = sum + 5;
sum += 10; sum = sum + 10;
 */

// the ++ operator increments by 1 and reassigns

myNum = 0;
myNum++;

console.log('Fullstack is #', myNum);

// the -- operator decrements by 1 and reassigns
myNum = 3;
myNum--;
myNum--;

console.log('Fullstack is #', myNum);

// PART 2 TDD Test driven development
