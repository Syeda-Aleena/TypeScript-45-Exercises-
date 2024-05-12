// Seeing the World: Think of at least five places in the world you’d like to visit.


// Making a array of countries to visit // Original order
let counteriesToVisist: string[] = ["Chile", "Denmark" , "England", "Bolivia", "America"];
console.log("Original Order:",counteriesToVisist);

// Print the array in Alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...counteriesToVisist].sort());

// Show that your array is still in its original order by printing it.
console.log("Still in original order:", counteriesToVisist)

// Print the array in reverse order without modifying the actual array list
console.log("Reverse order:", [...counteriesToVisist].reverse());

// Show that your array is still in its original order by printing it.
console.log("Still in original order:", counteriesToVisist);

// We have changed the original array order now
console.log("Original array reversed:", counteriesToVisist.reverse());

// Print the array to show that it's back to it's original order
console.log("Back to original order:", counteriesToVisist.reverse());

// Print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in alphabetical order:", counteriesToVisist.sort());

// We have changed again the original array order now in reverse order again
console.log("Original array reversed again:", counteriesToVisist.reverse());

