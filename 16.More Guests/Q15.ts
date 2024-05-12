// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

let guestList = ["Sadaf", "Muskan", "Aqsa", "Ubaid"];

let notCome = guestList[0];

console.log(notCome, "not coming today");

guestList.splice(0, 1, "Afshan");

console.log("Good news ! We have found a bigger table for our dinner");

guestList.unshift("Emaan");

guestList.push("Hamza");

let midguest: number = Math.floor(guestList.length / 2);

guestList.splice(midguest, 0, "Asharib");

console.log("Updated list of our guests");

guestList.forEach((oneguest) =>
  console.log(`Hello ${oneguest}, would you like to dinner with me?`)
);
