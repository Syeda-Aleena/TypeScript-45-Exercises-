//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// Creating a array with 5 values
let userNames = ["Sadaf", "Aqsa", "Asharib", "Admin", "Ubaid"];

// Remove all values from our array now our array is empty
userNames = []

// If statement for checking lenght of our array is empty?
if (userNames.length === 0) {
    console.log("Your array is empty we need to find find some users!")
} else {
    // If array is not empty use forEach loop on array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
        } else {
            console.log(`Hello ${oneUser}, thank you logging in again.`)
        }
    })
}