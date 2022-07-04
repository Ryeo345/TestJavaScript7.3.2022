console.log(typeof 5);
console.log(typeof 2.55);
console.log(typeof -1000);

/* +,-,*,/ are operators */
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);

/* modulus operator %, this operator divides two numbers and returns the remainder */

console.log(10 % 5);
console.log(11 % 5);

/* === strictly equals operator to compare numbers used to return a boolean value (true or false) */
/* !== strictly not equals operator "" */

console.log(10 === 10);
console.log(10 === 11);
console.log (10 !== 10);
console.log (10 !== 11);

// <, <=, >, >= used to return a boolean value

console.log(9 < 10);
console.log(9 > 10);
console.log(9 <= 10);
console.log(9 >= 10);

// only two values have the boolean type

console.log(typeof true);
console.log(typeof false);

//typeof returns a string of the type

/* string types can we created with single and double quotes*/
console.log(typeof 'happy');
console.log(typeof "also happy");
// strings are a string of characters
// access a character using bracket notation
// the 'first' character has an index of 0
console.log('happy'[0]);
console.log('happy'[1]);

/*all strings have a .length property*/
console.log('happy'.length);

// to get the last character of the string you need to use .length -1
console.log("to get the last character of the string you need to use .length -1");
console.log('happy'['happy'.length-1]); //returns y

// concatenation
// + operator to connect two strings or more together

console.log('happy' + ' ' + 'together');

// === and !== work with strings too
console.log('same' === 'same');
console.log('same' !== 'different');

/* a string will never be strictly equal to a value of a different type*/

console.log('true'=== true); //false
console.log('10' === 10); //false

//STRING METHODS
/*-a method is an action that can be performed on a value
  -different types have different built-in methods
  -to call a method:
     <value>.<name of method>(<args, if any>) */

//toUpperCase string method remember to call the function with the () at the end of toUpperCase
console.log('so happy'.toUpperCase());

//toLowerCase
console.log('SHHH BE QUIET'.toLowerCase());
