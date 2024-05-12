// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Making a function
function make_shirt (size: string = "Large", printMessage: string = "I love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function with by-default values
make_shirt();

// Calling a function for a medium size
make_shirt ("Medium");

// Calling a function for different size with different message
make_shirt ("Small", "I love Biryani");