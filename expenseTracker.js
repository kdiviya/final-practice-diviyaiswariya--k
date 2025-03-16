//Expense Tracker Application

let userInput = require('readline-sync');
//Building the following empty arrays for each categories
let fuel = [];
let grocery = [];
let medical = [];
//Building the multidimensional array which covers other than fuel, groceries, medical & payments
let miscellaneous =[];
//Declare the string datatype
let userChoice = '';
//Declare the number datatype
let totalFuel = 0;
let totalGrocery = 0;
let totalMedical = 0;
let totalMisc = 0;
let totalExpense = 0;
//Declare the const datatype which ensure that the values cannot ne changed in the code.
const fuelMax = 200;
const medicalMax  = 400;
const groceryMax = 700;
const miscMax = 1000;


//Used the do-while to execute the following block of code once even if the condition is 'N'
do {
let expenseName = userInput.question("Enter the expense name? ");
let expenseAmount = userInput.question("Enter the expense amount? ");

let lowerCase = expenseName.toLowerCase(); //used.toLowerCase to convert the string into lowercase.

//used the if-else statements to add the element in the corressponding array
if (lowerCase.includes('fuel')) {
// Add expense name & amount to the fuel array if the user enter the expense name is fuel
    fuel.push(expenseName, expenseAmount); } //used the push() to add the elements in the fuel array.

else if (lowerCase.includes('grocery')) {
// Add expense name & amount to the grocery array if the user enter the expense name is grocery
    grocery.push(expenseName, expenseAmount); //used the push() to add the elements in the grocery array.
}

else if (lowerCase.includes('medical')) {
// Add expense name & amount to the medical array if the user enter the expense name is medical  
    medical.push(expenseName, expenseAmount); //used the push() to add the elements in the medical array.
}
else {
// Add expense name & amount to the miscellaneous array if any of the condition is not satisfied.   
    miscellaneous.push(expenseName, expenseAmount); //used the push() to add the elements in the miscellaneous array.
}

userChoice = userInput.question("Do you want to enter other expense, enter Y/N? ");
} while (userChoice.toUpperCase() === 'Y'); // Continue if user enters 'Y' and also used "===" to avoid impilcit conversion

if (fuel){ //check the truthy values in the fuel array to calculate the expenses.
// Loop through the fuel array to sum up the amounts
for (let i = 1; i < fuel.length; i = i + 2){
    totalFuel = totalFuel + parseFloat(fuel[i]); // Convert string amount to decimals using parsefloat() method for explict type conversion
}
console.log("Total Fuel expenses: $", totalFuel.toFixed(2));
//use the relational operator to check the condition
if (totalFuel > fuelMax) { //Use the constant variable to alert the user that they have reached the maximum limit.
    console.log("You are exceeded your maximum fuel expenses");
}
}

if (grocery){ //check the truthy values in the grocery array to calculate the expenses.
// Loop through the grocery array to sum up the amounts
for (let i = 1; i < grocery.length; i = i + 2){
    totalGrocery = totalGrocery + parseFloat(grocery[i]); // Convert string amount to decimals using parsefloat() method for explict type conversion
}
console.log("Total Grocery expenses: $", totalGrocery.toFixed(2));
//use the relational operator to check the condition
if (totalGrocery > groceryMax) { //Use the constant variable to alert the user that they have reached the maximum limit.
    console.log("You are exceeded your maximum grocery expenses");
}
}


if (medical){ //check the truthy values in the medical array to calculate the expenses.
    // Loop through the medical array to sum up the amounts
    for (let i = 1; i < medical.length; i = i + 2){
        totalMedical = totalMedical + parseFloat(medical[i]); // Convert string amount to decimals using parsefloat() method for explict type conversion
    }
    console.log("Total Medical expenses: $", totalMedical.toFixed(2)); //used toFixed(2) to limit the number of deciamls to 2.
    //use the relational operator to check the condition
if (totalMedical > medicalMax) { //Use the constant variable to alert the user that they have reached the maximum limit.
    console.log("You are exceeded your maximum medical expenses");
}
}

if (miscellaneous){ //check the truthy values in the miscellaneous array to calculate the expenses.
        // Loop through the miscellaneous array to sum up the amounts
        for (let i = 1; i < miscellaneous.length; i = i + 2){
            totalMisc = totalMisc + parseFloat(miscellaneous[i]); // Convert string amount to decimals using parsefloat() method for explict type conversion
        }
        console.log("Total Miscellaneous expenses: $", totalMisc.toFixed(2)); //used toFixed(2) to limit the number of deciamls to 2.
          //use the relational operator to check the condition
if (totalMisc > miscMax) { //Use the constant variable to alert the user that they have reached the maximum limit.
    console.log("You are exceeded your maximum miscellaneous expenses");
}
}
totalExpense = totalFuel + totalGrocery + totalMedical + totalMisc;
console.log("your Total expense is: $");


