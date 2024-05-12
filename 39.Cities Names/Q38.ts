// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function city_country(city: string, country: string ) : string {
   return `${city} , ${country}`;
}

// Calling a function and print the return value
city_country("Karachi", "Pakistan");
console.log(city_country("Karachi", "Pakistan"));

city_country("Tokyo", "Japan");
console.log(city_country("Tokyo", "Japan"));

city_country("Berlin", "Germany");
console.log(city_country("Berlin", "Germany"));