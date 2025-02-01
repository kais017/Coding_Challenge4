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
