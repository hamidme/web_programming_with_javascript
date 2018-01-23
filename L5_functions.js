/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here
function laugh(){
    var erin = "hahahahahahahahahaha!";
    return erin;
}

console.log(laugh());

////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num){
    var laughter = "ha";
    var n ="";
    for(x = 1; x <= num; x++){
    n+=laughter;
  }
  return n + "!";
}
console.log(laugh(3));
////////////////////////////////////////
//Pythonic way:
def laugh(num):
	laughter = "ha"*num
	return laughter + "!"
print(laugh(3))
*****************************************************
def laugh(num):
    laughter = "ha"
    n ="";
    for x in range(num+1):
        n+=laughter
    return n + "!";
print(laugh(3))
*********************************************************************************************
/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line

function buildTriangle(width){
  var myTriangle = "";
  for (x = 1; x <= width; x++){
    myTriangle+= makeLine(x);
  }
 return myTriangle;
}
console.log(buildTriangle(10));
*********************************************************************************************
/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(max){
    var storage = "";
    for (x = 1; x <= max; x++){
        storage += "ha";
    }
    return storage + "!";
};

console.log(laugh(10));

/*
 * Programming Quiz: Laugh (5-4)
 * Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 */

var laugh = function erin(max){
    var storage = "";
    for (x = 1; x <= max; x++){
        storage += "ha";
    }
    return storage + "!";
};

console.log(laugh(10));
*********************************************************************************************
/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
 var cry = function ekun(){
     return "boohoo!";
 };
 
 cry();

*********************************************************************************************

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function laugh(max){
    var storage = "";
    for (x = 1; x <= max; x++){
        storage += "ha";
    }
    return storage + "!";
} );
  
***************************************************************************************
