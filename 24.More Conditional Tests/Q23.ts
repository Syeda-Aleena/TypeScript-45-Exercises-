// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Define variables 
let apple: String = "apple";
let uppercaseApple: string = "APPLE";
let ten: number = 10;
let twenty: number = 20;
let fruits =["Apple", "Banana", "Cherry"];


// Test for equality and inequality with strings
console.log("\nIs apple is equal to apple?");
console.log(apple == "apple");

console.log("Is apple is not equal to apple?");
console.log(apple != "apple");

// Tests using lowercase function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");

// Numerical Tests
// Equals to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

// Not equals to
console.log("\nIs ten is not equal to twenty")
console.log(ten != twenty);

// Greater than
console.log("\nIs ten is greater than zero");
console.log(ten > 0);

// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10 );

// Greater than or equal to
console.log("\nIs ten is greater than or equals to 5?");
console.log(ten >= 5);

// Less than or equal to 
console.log("\nTwenty is less than or equals to 10");
console.log(twenty <= 10);

// Tests using "and" & "or" operators
// Using && (and)
console.log("\nTwenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\nTwenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// Using || (or)
console.log("\n20 is greater than 50 or 20 is equals to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater than 50 or 20 is not equals to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an items is include in array
console.log("\nIs cherry include in my fruits array");
console.log(fruits.includes("Cherry"));

console.log("\nIs cherry not include in my fruits array");
console.log(!fruits.includes("Cherry"));