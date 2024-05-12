// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Array of current users
var current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
// Array of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// Loop through new users to check for usernames availbility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using if-else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
