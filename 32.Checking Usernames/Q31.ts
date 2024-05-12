// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.


// Array of current users
let current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];

// Array of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

// Loop through new users to check for usernames availability
new_users.forEach(new_one_user => {

    // Making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print different messages using if-else statements
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`)
    } else {
        console.log(`This username ${new_one_user} is available`)
    }
})