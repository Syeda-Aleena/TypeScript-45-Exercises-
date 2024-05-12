"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList = ["Sadaf", "Muskan", "Aqsa", "Ubaid"];
let notCome = guestList[0];
console.log(notCome, "Not coming today");
guestList.splice(0, 1, "Afshan");
guestList.forEach((newGuest) => console.log(`Hello ${newGuest}, would you like to dinner with me?`));
