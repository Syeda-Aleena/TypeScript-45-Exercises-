//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Define variables
var alienColor = "Green";
// Using if and else-if statements
if (alienColor === "Green") {
    console.log("(Version 1) You shot down green alien you have earned 5 points");
}
else if (alienColor === "Yellow") {
    console.log("You shot down yellow alien you have earned 10 points");
}
else if (alienColor === "Red") {
    console.log("You shot down red alien you have earned 15 points");
}
// version 2
var alienColor2 = "Yellow";
if (alienColor2 === "Green") {
    console.log("You shot down green alien you have earned 5 points");
}
else if (alienColor2 === "Yellow") {
    console.log("(Version 2) You shot down yellow alien you earned 10 points");
}
else if (alienColor2 === "Red") {
    console.log("You shot down red alien you have earned 15 points");
}
// Version 3
var alienColor3 = "Red";
if (alienColor3 === "Green") {
    console.log("You shot down green alien you have earned 5 points");
}
else if (alienColor3 === "Yellow") {
    console.log("You shot down yellow alien you have earened 10 points");
}
else if (alienColor3 === "Red") {
    console.log("(Version 3) You shot down red alien you have earned 15 points");
}
