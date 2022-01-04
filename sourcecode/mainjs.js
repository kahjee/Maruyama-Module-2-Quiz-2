function printer(){
    console.log("Console test. If this function shows in console, this means the javascript functions will work.");
}

printer();

const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const activity = document.getElementById('list');
const calories = document.getElementById('calories');

function noInput(){
    alert("Please make sure that you have inputted all of the values, otherwise the program would not work");
    errorMessage("Error, no input");
}

function calculate(){
    
}

if (age || ""){
    noInput();
}

else if (age){

}