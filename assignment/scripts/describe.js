// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We created a variable called name and set it to 'Dane'
// We than create a conditional that says if name equals Mary console log 'Hi, Mary!'
// Otherwise we console log 'How do you do?'
// the name variable is not 'Mary' so we console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// created 2 variables named secret and one named code set to 123
// we than made a conditional that states if code is exactly equal to 123 
// than secret is set to 'super' and the value of code is multiplied by 2
// we made another conditional that states if code is greater than 250
// secret is set to 'duper'. We than console log secret.
//  the code is equal to 123 so we set secret = 'super' we than multiply 123 by 2
// which is 246 and not greater than 250. console.log secret would return 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//  we create a boolean variable named isStudent and set it to true.
//  we than create 2 other variables called age set to 34 and zip set to 55407
//  we than create a conditional that states if isStuden is true and zip is greater than 88000 we console log `You're a student on the West Coast!`
//  we add a condition that states if isStudent is false or age is less than 30 we console log 'What are your hobbies?'
//  we add another condition that states if isStudent is true we console log 'Welcome to Prime!'
//  we add a final condition if all of the prior conditions are not true we console log 'How about the weather?'
// console.log would return 'Welcome to Prime!

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - the variables for colorOne and colorTwo are set incorrectly. colorOne should be set to blue and colorTwo should be set to Red
// also the code in the conditional should add colorTwo = 'purple'

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - in the conditional || designates "or" but the directions say "and" so it should be changed to if (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - the directions state that age should be greater than or equal to min age so the conditional should be set to if(age >= minAge) to reflect that.
// also it is currently set to console log 'no entry' if true so the code for the if and else statement need to be flipped.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

