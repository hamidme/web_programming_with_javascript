/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=20) {
    // check divisibility
    if((x%3 ===0) && (x%5===0)){
        console.log("JuliaJames");
    } else if (x%3 === 0){
        console.log("Julia");
    } else if (x%5 === 0) {
        console.log("James");
    } else {
        console.log(x);
    }
    // print Julia, James, or JuliaJames
    // increment x 
    x+=1;
}
///////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >=1) {
    // check value of num
    if (num !=1 && num !=2){
        console.log(String(num) + " bottles of juice on the wall! Take one down, pass it around... " + String(num-1) +  " bottles of juice on the wall!");
    } else if (num === 2){
        console.log(String(num) + " bottles of juice on the wall! Take one down, pass it around... " + String(num-1) + " bottle of juice on the wall!");
    } else{
        console.log(String(num) + " bottle of juice on the wall! Take one down, pass it around... " + String(num-1) + " bottles of juice on the wall!");
    }
    // print lyrics using num
    
    // don't forget to check pluralization on the last line!
    // decrement num
    num-=1;
}
///////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
countdown = 60;
while(countdown >= 0){
    if(countdown!=50 && countdown!==31 && countdown!==16 && countdown!==10 && countdown!==6 && countdown!==0){
        console.log("T"+ String(-countdown) + " seconds");
    } else if(countdown === 50){
        console.log("Orbiter transfers from ground to internal power");
    } else if(countdown === 31){
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if(countdown === 16){
        console.log("Activate launch pad sound suppression system");
    } else if(countdown === 10){
        console.log("Activate main engine hydrogen burnoff system");
    } else if(countdown === 6){
        console.log("Main engine start");
    } else if(countdown === 0){
        console.log("Solid rocket booster ignition and liftoff!");
    }
    
    countdown-=1;
}
