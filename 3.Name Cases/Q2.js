"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// lower case
let personName = "Syeda Aleena";
console.log("lowercase:", personName.toLowerCase());
// UPPER CASE
console.log("uppercase:", personName.toUpperCase());
// Title Case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toLocaleUpperCase()));
