// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let userNames = ["Sadaf", "Aqsa", "Asharib", "Admin", "Ubaid"];

// Using forEach loop on array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
       console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you logging in again.`)
    }
});
