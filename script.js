console.log("Running script.js");

//Constants
const OUTPUT = document.getElementById ("JavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");

//Variables
let userName = String (NAME_FIELD.value);
let userMoney = Number (MONEY_FIELD.value);
let chocStrawberry = 3;
let chocVanilla = 3;
let chocChocolate = 3;
let vanStrawberry = 3;
let vanVanilla = 3;
let vanChocolate = 3;
let detailsBox = document.getElementById ("detailsBox");
let orderBox = document.getElementById ("orderBox");
let receiptBox = document.getElementById ("receiptBox");

//Functions

function showDetails() {
    //Show details
    console.log("Show details");
    order.style.display="none";
    receipt.style.display="none";
    details.style.display="block";
    TITLE.innerHTML = "Details"

}

function showOrder() {
    //Show details
    console.log("Show order");
    order.style.display="block";
    receipt.style.display="none";
    details.style.display="none";
    TITLE.innerHTML = "Details"

}

function showReceipt() {
    //Show details
    console.log("Show receipt");
    order.style.display="none";
    receipt.style.display="block";
    details.style.display="none";
    TITLE.innerHTML = "Details"

}

function details(){

}

function order(){

}

function display (_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}

function receipt(){
    let userMoney = Number (MONEY_FIELD.value);
    OUTPUT.innerHTML = userName;
    change = userMoney - 3;
    display(chocStrawberry, 3);
    display(chocVanilla, 3);
    display(chocChocolate, 3);
    display(vanStrawberry, 3);
    display(vanVanilla, 3);
    display(vanChocolate, 3);
    if (userMoney >= 3) {
            calculateChange(userMoney, 3); 
            OUTPUT.innerHTML += "<p>Your name is " + userName + ".</p>";
            OUTPUT.innerHTML +="<p>You can afford this order. <br> You will get $" + change + " change. </p> ";
        } else {
            OUTPUT.innerHTML += "<p>Your name is " + userName + ".</p>";
            OUTPUT.innerHTML += "<p>Sorry you can't afford this order. <br> You will get no change. </p> ";
        }
}

function calculateChange (_money, _price) {
    change = userMoney - 4;
    return change;
}

//Output / Main code

//Console output
console.log ("Testing pages console");