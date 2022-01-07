function noInput() {
    alert("Please make sure that you have input all of the values, otherwise the program would not work");
}

function calculate() {
    var age = document.getElementById("age");
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var mf = document.getElementById("mf")
    var activity = document.getElementById("list");
    var calories = document.getElementById("total-calories"); 

    console.log(age.value);
    console.log(height.value);
    console.log(weight.value);
    console.log(mf.value);
    console.log(activity.value)

    age = parseFloat(age.value);
    if (isNaN(age)) return noInput();

    height = parseFloat(height.value);
    if (isNaN(height)) return noInput();

    weight = parseFloat(weight.value);
    if (isNaN(weight)) return noInput();

    activity = activity.value;

    let sex = mf.elements.sex.value;
    
    calories.value = formula(weight, height, age, sex, activity);
}

function formula(weight, height, age, sex, activity) {
    let activity_mult;
    switch (activity) {
        case "s": activity_mult = 1.2; break;
        case "l": activity_mult = 1.375; break; 
        case "m": activity_mult = 1.55; break; 
        case "h": activity_mult = 1.725; break; 
    }
       
    
    let weights;
    if (sex == 'm') {
        weights = {
            bias: 66.5,
            weight: 13.75,
            height: 5.003,
            age: 6.755
        };
    } else {
        weights = {
            bias: 65.5,
            weight: 9.563,
            height: 1.850,
            age: 4.676
        };
    }
    
    let temp = weights.bias
             + weights.weight * weight
             + weights.height * height
             - weights.age * age;
    return activity_mult * temp;

function calorieoutput(){
    console.log(totalCalories);
}
}










