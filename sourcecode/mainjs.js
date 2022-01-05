function noInput(){
    alert("Please make sure that you have inputted all of the values, otherwise the program would not work");
    errorMessage("Error, no input");
}

function calculate(){
    var age = document.getElementById("age").value;
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var rd = document.getElementById("rd")
    var activity = document.getElementById("list");
    var calories = document.getElementById("calories"); 
    
    if (age.value === null || weight.value === null || height.value === null || rd === null || list.value === null){
        noInput();
    }
    else{
        alert(age);
    }
}