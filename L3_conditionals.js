/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if (number === 2) {
    console.log('even');
} else {
    console.log('odd');
}

////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: Musical Groups (3-3)

*/
// change the value of `musicians` to test your conditional statements
var musicians = 1;

if (musicians === 1){
    console.log('solo');
} else if (musicians === 2){
    console.log('duet');
} else if (musicians === 3){
    console.log('trio');
} else if (musicians === 4){
    console.log('quartet');
} else {
    console.log("this is a large group");
} 

//////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance === true && isActive === false){
    console.log(" Your account is no longer active.");
}

/////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "bowl";
var toppings = "sprinkles";


// Add your code here
if ((flavor === "chocolate" || flavor === "vanilla") && (toppings === "sprinkles" || toppings === "peanuts") && (vessel === "cone" || vessel === "bowl") ){
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}

////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 26;
var shirtLength = 33;
var shirtSleeve = 9.63;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)){
    console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)){
    console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)){
    console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
    console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
    console.log("2XL");
} else if ((shirtWidth === 28) && (shirtLength === 34) && (shirtSleeve === 10.13)){
    console.log("3XL");
} else {
    console.log("N/A");
}
 //////////////////////////////////////////////////////////////////////////////////////////////
 /*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "a Doctoral degree";

// set the value of this based on a person's education
var salary ="$84,396";

// your code goes here
switch(education){
    case "no high school diploma":
        salary="$25,636";
        break;
    case "a high school diploma":
        salary="$35,256";
        break; 
    case "an Associate's degree":
        salary="$41,496";
        break;
    case "a Bachelor's degree":
        salary="$59,124";
        break;
    case "a Master's degree":
        salary="$69,732";
        break;
    case "a Professional degree":
        salary="$89,960";
        break;
    case "a Doctoral degree":
        salary="$84,396";
}
console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year");

