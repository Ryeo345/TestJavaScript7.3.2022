// Control Flow
// if/else/if else
// logical operators

// code runs from top to bottom

console.log ('first!');
console.log ('second!');

// sometimes we do not want our code to run in order and sometimes we don't want the code to run at all

// if (condition) {
// }
if (true) {
    console.log('in the if');
}

console.log('can i see you?');

if (false) { // since the condition is false, this if statement will not run
    console.log('sorry, no');
}
if (true) { // the condition is true so the codeblock will run the if statement
    console.log('i\'ll be there!');
}

// else clause
/* the code in an else block will run only if the expression in the if evaluates to false
 */

if (false) {
    console.log('in the if');
}
else {
    console.log('in the else');
}

// else if clause
/* the code in an else if clause has its own condition and only runs if the condition
evaluates to true
 */

if (false) {
    console.log('in the if');
}
else if (true) {
    console.log('in the else if');
}

/*
if (condition) {
    code block;
}
else if(condition) {
    code block;
}
else {
code block;
}
 */

// logical operators
// && is the logical 'and' operator
/* it will return true if placed between two boolean values and both are true */
// both conditions are false then its false

if (true && true) {
    console.log('in the first if');
}

if (true && false) {
    console.log('in the second if');
}

// || is the logical 'or operator
/* it will return true if placed between two boolean values and either is true */
// both true is true
// both false is false
if (false || true) {
    console.log('in the first if');
}

if (false || false) {
    console.log('in the second if');
}




