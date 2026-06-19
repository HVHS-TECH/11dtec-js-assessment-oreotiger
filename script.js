console.log("Running script.js")

//Constants
const OUTPUT = document.getElementById ("JavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");

//Variables
let userName = "Beatrix";
let userMoney = "5"
let chocStrawberry = "3";
let chocVanilla = "3";
let chocChocolate = "3";
let vanStrawberry = "3";
let vanVanilla = "3";
let vanChocolate = "3";


//Functions

function receipt(){
    userName = NAME_FIELD.value
    OUTPUT.innerHTML = userName;
}

function display (_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>"
}

function calculateChange (_money, _price) {
    change = userMoney - 4;
    return change;
}

function order(){
    userName = NAME_FIELD.value;
    OUTPUT.innerHTML = userName;
}

//Output / Main code
change = userMoney - 3;
displayProduct(chocStrawberry, 3)
displayProduct(chocVanilla, 3)
displayProduct(chocChocolate, 3)
displayProduct(vanStrawberry, 3)
displayProduct(vanVanilla, 3)
displayProduct(vanChocolate, 3)
 if (userMoney >= 3) {
        calculateChange(userMoney, 3);
        OUTPUT.innerHTML += "<p>A chocolate bar costs $4. <br> You CAN afford a chocolate bar. <br> You will get $" + change + " change. </p></p> "
    } else {
        OUTPUT.innerHTML += "<p>A chocolate bar costs $4. <br> Sorry you CAN'T afford a chocolate bar. <br> You will get no change. </p> "
    }


//Console output
console.log ("Testing pages console")