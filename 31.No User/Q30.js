//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var userNames = ["Sadaf", "Aqsa", "Asharib", "Admin", "Ubaid"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty we need to find find some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you logging in again."));
        }
    });
}
