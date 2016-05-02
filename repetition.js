
// Javascript 

// Array

//#1

var weekdays = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"];

// Hämta ur vår array på fäljande sätt

console.log("Exempel 1. Första veckodagen " + weekdays[0]);
// spara i en variebel

var favoriteDay = weekdays[4];

console.log("Exempel 2. Favorite day" + favoriteDay);

var months = [];
months[0] = "Januari";
months[1] = "Februari";
months[2] = "Mars";
months[3] = "April";
months[4] = "May";

var favoriteThings = [1997, "Somthing wars 64", true, "IT", 3.14159];
console.log("Exempel 4. Jag har " + favoriteThings.length + " favorit saker");

favoriteThings.push("Teaching");

console.log(favoriteThings);

//Objekt

//Exempel 7
var car = {color: "ful", hasAWheel: true, numberOfSeats: 4};
// Attribut(key) och ett värde (value)
// color är attribut/key
// "ful" är värdet
console.log();
