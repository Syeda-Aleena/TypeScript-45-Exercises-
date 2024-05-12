// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// Creating a variable
let age: number = 22


// Creating a program for determining the stage of life using if-else chain
if (age < 2) {
 console.log("You are a baby.");
}
else if (age >= 2 && age < 4) {
 console.log("You are a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("You are a kid.");
}
else if (age >= 13 && age < 20) {
 console.log("You are a teenager.");
} 
else if (age >= 20 && age < 65) {
    console.log("You are an adults.");
}
else if (age >= 65) {
    console.log("You are elders");
}
