// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Sadaf", "Muskan", "Aqsa", "Ubaid"];
var notCome = guestList[0];
console.log(notCome, "not coming today");
guestList.splice(0, 1, "Afshan");
console.log("Good news ! We have found a bigger table for our dinner");
guestList.unshift("Emaan");
guestList.push("Hamza");
var midguest = Math.floor(guestList.length / 2);
guestList.splice(midguest, 0, "Asharib");
console.log("Updated list of our guests");
// sending invitation message to our guests one by one with thier names
guestList.forEach(function (oneguest) {
    return console.log("Hello ".concat(oneguest, ", would you like to dinner with me?"));
});
// inform that only two guests are invited for the dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with");
// using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " i can't invite you for the dinner"));
}
// sending invitations to the last two guests on the list
console.log("Invitations to the last two guests");
guestList.forEach(function (lastTwo) {
    return console.log("Luckily ".concat(lastTwo, ", you are still invited to the dinner"));
});
// remove last two guests from the list 
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
