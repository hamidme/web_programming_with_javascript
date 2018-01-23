/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42
console.log(1 + 5 - 2);
*****************************************************************************************
/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
 *
 *     F = C x 1.8 + 32
 *
 * Log the fahrenheit variable to the console.
 *
 */

var celsius = 12;
var fahrenheit = /* convert celsius to fahrenheit here */

console.log(/* print out result here */);
*****************************************************************************************
/*
 Create a string with the name of your favorite food. The first letter of the string should be capitalized.*
 * Programming Quiz: Favorite Food (2-3)
 */

console.log('Amala');

*****************************************************************************************
/*
 * Programming Quiz: String Equality for All (2-4)
 */

// fix the right side of the expression
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);

*****************************************************************************************
/*
 * Programming Quiz: All Tied Up (2-5)
 */

var joke = "akara odun lenu oyibo? \nOdun lenu!"
console.log(joke);

*****************************************************************************************
/*
 * Programming Quiz: Yosa Buson (2-6)
 */

var haiku = "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east.";
console.log(haiku);

*****************************************************************************************
/*
 * Programming Quiz: What's my Name? (2-9)
 */

var fullName;
fullName = 'Abdulhamid Abdulwaasi';
console.log(fullName);

*****************************************************************************************
/*
 * Programming Quiz: Out to Dinner (2-10)
 */

// your code goes here
var bill;
bill = 10.25+3.99+7.15;
var tip;
tip = bill*(15/100);
var total = bill + tip;
console.log('$'+total);

*****************************************************************************************
/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

// your code goes here
var madLib;
madLib = 'The Intro to JavaScript course is ' + adjective1 + '. ' + 'James and Julia are so '+ adjective2 + '. ' + 'I cannot wait to work through the rest of this '+ adjective3 +' content!';
console.log(madLib);
*****************************************************************************************
/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and, using string concatenation 
      and the variables above, create an awesome message.
 * 3. Print the awesomeMessage variable to the console.
 */
 
/*
 * Notes:
 * - Using the above as an example, firstName would have been assigned to
 *   "Julia", interest to "cats", and hobby to "play video games".
 * - Be sure to include spaces and periods where necessary!
 */

// Add your code here
var firstName = 'Abdulwaasi';
var interest = "kids";
var hobby = 'design';

var awesomeMessage = "Hi, my name is " + firstName + "." + " I love " + interest + "." + " In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);