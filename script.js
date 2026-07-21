console.log("Running script.js");

//Constants
const OUTPUT = document.getElementById ("JavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");

//Variables
let userName; // String (NAME_FIELD.value);
let userMoney; // Number (MONEY_FIELD.value);
let detailsBox; 
let orderBox; 
let receiptBox; 

//Functions

function showDetails() {
    //Show details
    detailsBox = document.getElementById (detailsBox);
    orderBox = document.getElementById (orderBox);
    console.log("Show details");
    orderBox.style.display = "none";
    receiptBox.style.display = "none";
    detailsBox.style.display = "block";
    TITLE.innerHTML = "Details";

}

function showOrder() {
    //Show order
    orderBox = document.getElementById (orderBox);
    receiptBox = document.getElementById (receiptBox);
    console.log("Show order");
    /**
    orderBox.style.display ="block";
    receiptBox.style.display ="none";
    detailsBox.style.display ="none";
    
    TITLE.innerHTML = "Order";**/

}

function showReceipt() {
    //Show receipt
    detailsBox = document.getElementById (detailsBox);
    receiptBox = document.getElementById (receiptBox);
    console.log("Show receipt");
    orderBox.style.display="none";
    receiptBox.style.display="block";
    detailsBox.style.display="none";
    TITLE.innerHTML = "Receipt";

}

function details(){
    let userName; // String (NAME_FIELD.value);
    console.log
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
            OUTPUT.innerHTML += "<p>Order for " + userName + ".</p>";
            OUTPUT.innerHTML +="<p>You can afford this order. <br> You will get $" + change + " change. </p> ";
        } else {
            OUTPUT.innerHTML += "<p>Order for " + userName + ".</p>";
            OUTPUT.innerHTML += "<p>Sorry you can't afford this order.</p>";
        }
}

function calculateChange (_money, _price) {
    change = userMoney - 4;
    return change;
}

//Output / Main code

//Console output
console.log ("Testing pages console");