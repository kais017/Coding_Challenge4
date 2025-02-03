// Task 1: If Statements
let purchaseAmount = 245; 
let discount = 0;
if (purchaseAmount > 100) {discount = 0.2 * purchaseAmount };  
// If the purchase amount is greate than 100, then they receive a discount of 20% off.
let finalAmount = purchaseAmount - discount;
// this calculates the final amount after the discount

console.log(`Purchase Amount: $${purchaseAmount}`);
console.log(`Final amount after discount: $${finalAmount}`);
// Logging initial purchase amount and final amount after discount if they meet the conditions. In this case the conditions are met!

// Task 2: For Loop
let sales = [100, 255, 356, 154, 237];
//declaring an array of sales

let totalSales = 0;

for (let i = 0; i < sales.length; i++) { 
    totalSales += sales[i]};
// Using a for loop to help calculate the total sales

console.log(`Total Sales: $${totalSales}`);
// logging total sales

// Task 3: While Loop for a Customer Survey
let stock = 10;
while (stock > -1) 
    { console.log(`Stock: ${stock}`); stock--; }
// decrease stock until it reaches 0
console.log("Inventory Depleted.");

// Task 4: Do... While Loop
let responses = 0;

do { console.log(`responses: ${responses}`);
responses++; 
    
} while (responses < 4);
// collect responses until it reaches 3

// Task 5: For... In Loop Employee Info
let employee = {name: "Madison", position: "Director", salary: 200000};
// declared an object with properties

for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
    };


    




