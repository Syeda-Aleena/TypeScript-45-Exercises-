// Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries to visit // Original order
var counteriesToVisist = ["Chile", "Denmark", "England", "Bolivia", "America"];
console.log("Original Order:", counteriesToVisist);
// Print the array in Alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], counteriesToVisist, true).sort());
// Show that your array is still in its original order by printing it.
console.log("Still in original order:", counteriesToVisist);
// Print the array in reverse order without modifying the actual array list
console.log("Reverse order:", __spreadArray([], counteriesToVisist, true).reverse());
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
