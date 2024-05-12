// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
   console.log("Making asandwich with the following items: \n");

   items.forEach(singleItem => console.log("-" + singleItem));

   console.log("\nNow enjoy sandwich");
}

// Call the function 3 times with 3 differents number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Lettuce");

makeSandwich("Bread" , "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");

