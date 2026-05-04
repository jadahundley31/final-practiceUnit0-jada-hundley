// This is code showing user input 
const readline = require('readline-sync');

let name = readline.question("What is your name? ");
//console.log(name);

let travelStyle = readline.question("Do you prefer relaxing or adventure? ");
//console.log(travelStyle);

let vacationSpots = ["Castlewood", "Chateau", "Ozarks"];

if (travelStyle === "adventure") {
    console.log("Here are some recommended destinations: ");
    for (let i = 0; i < vacationSpots.length; i++) {
        console.log("- " + vacationSpots[i]);
    }// loops through an array of vacation spots
}else if (travelStyle === "relaxing") {
    console.log("Here are some recommended destinations: ");
    for (let i = 0; i < vacationSpots.length; i++) {
        console.log("- " + vacationSpots[i]);
    }
} else {
    console.log("We'll find something unique for you!");
}//conditional statement based off the answers the user gives

//The Profile will be filled with variables of different data types
let userName = name;
let emptyHobbyList = []; //hobby has an empty array, to be filled later
let ageOfUser = 30; //a number value

emptyHobbyList = Array(1).fill(travelStyle);//filled array with user's answer
let filledHobbyList = emptyHobbyList;

let greeting = `Welcome back ${userName}! hobbies so far are: ${filledHobbyList}`;//using a template literals
console.log(greeting)





