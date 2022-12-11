console.log('Price of 30 Phones with tax rate.');

var priceOfOnePhone = 119.95;
var priceOf30Phones = (30 * priceOfOnePhone);
var taxRate = (priceOf30Phones / 100) * 5;
var totalPrice = priceOf30Phones + taxRate;

console.log(`Price Of 1 Phone is : ${priceOfOnePhone} $`);
console.log(`Price Of 30 Phones is : ${priceOf30Phones} $`);
console.log('Tax rate is 5% .');
console.log(`Total sum of 30 Phones with 5 % tax rate is : ${totalPrice} $`);
