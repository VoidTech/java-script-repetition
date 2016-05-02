
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

// Annat exempel

var computer = {color: "grey", brand: "Mac"};

//metod 2
var student = {};
student.name = "Anton";
student.favoriteTeam = "AIK";

//metod 3
var anotherStudent = new Object{};
anotherStudent["name"] = "Oskar";
anotherStudent["favoriteTeam"] = "HIF";

console.log("Den första studenten heter " + student.name);
console.log("Den andra studenten heter " + anotherStudent["name"]);

// Objekt i arrayer

var students = {student, anotherStudent};

console.log("Första studenten i array: " + students[0].name);
console.log("Andra studenten i array: " + students[1]["name"]);

// array i array

var favoriteGames = [["Super mario bros 1","Duck Hunt"],["Wii Sports Resort","Zelda twilight princess"]];

console.log("Andra spelet i första listan" + favoriteGames[0][1]);

// Array i objekt
var superMario64  = {title:"Super Mario 64",countries:["Sverige","USA"],characters:["Mario","Toad","Peach"]};
console.log("Andra landet är " + superMario64["countries"][1]);

// Objekt i objekt