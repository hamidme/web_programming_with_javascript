/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function() {
        if (umbrella.isClose === false) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = false;
            return "Julia close the umbrella!";
        }
    },
};
console.log(umbrella.close());
**************************************************************************************
/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here
var breakfast = {
    name : "The Lumberjack",
    price : "$9.95",
    ingredients : ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
**************************************************************************************
/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function accountSummary() {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
    }
};

console.log(savingsAccount.printAccountSummary());
***********************************************************************************************
/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name : "Abdulhamid Abdulwaasi",
    friends : 45,
    messages : ["Assalaamu alaikum", "my good friend", "How're you today"],
    postMessage : function (message){
        facebookProfile.messages.push(message);
        return facebookProfile.messages;
    },
    
    deleteMessage : function (index){
        facebookProfile.messages.splice(index,1);
        return facebookProfile.messages;
    },
    
    addFriend : function(){
      facebookProfile.friends+=1;
      return facebookProfile.friends;
    },
    
    removeFriend : function(){
      facebookProfile.friends-=1;
      return facebookProfile.friends;
    },
};
*******************************************************************************************
/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function(donut){
  var item = donut.type;
  var price = donut.cost;
  console.log(item + " donuts cost $" + price + " each");
});
 //OR
donuts.forEach(function(donut,x){
  var item = donuts[x].type;
  var price = donuts[x].cost;
  console.log(item + " donuts cost $" + price + " each");
});


