// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Creating a array
var pizza = ["Chicken Tikka", "Malai Cheese", "Fajita"];
// Using for loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
// Print a meesage outside of the for loop
console.log("Pizza is love");
