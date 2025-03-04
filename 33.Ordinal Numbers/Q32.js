// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Creating array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalEnding));
}
