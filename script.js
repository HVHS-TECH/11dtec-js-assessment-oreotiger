console.log("Running script.js");

//Constants
const OUTPUT = document.getElementById("JavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");
const CHOC_DONUT = document.getElementById("chocolateDonut");
const TEST = document.getElementById("receiptBox");
const DETAILS_BOX = document.getElementById('detailsBox');
const ORDER_BOX = document.getElementById('orderBox');
const RECEIPT_BOX = document.getElementById('receiptBox');

//Variables
let userName;
let userMoney;
let detailsBox;
let orderBox;
let receiptBox;
let cost = 5
let customerOrder = [];

//Functions

//Pink drink age confirmation
function agePink() {
  text = "Please confirm you are 16 or older.";
  if (confirm(text) == true) {
    pinkDrink();
  } else {
    text = "You are not old enough to purchase this item.";
  }
}

//Pink drink added to order
function pinkDrink() {
    console.log("pink drink has been clicked");
    customerOrder.push(" Pink Energy Drink");
    OUTPUT.innerHTML = customerOrder;
}

//Light pink drink age confirmation
function ageLightPink() {
  text = "Please confirm you are 16 or older.";
  if (confirm(text) == true) {
    lightPinkDrink();
  } else {
    text = "You are not old enough to purchase this item.";
  }
}

//Light pink drink added to order
function lightPinkDrink() {
    console.log("light pink drink has been clicked");
    customerOrder.push(" Light Pink Energy Drink");
    OUTPUT.innerHTML = customerOrder;
}

//Purple drink age confirmation
function agePurple() {
  text = "Please confirm you are 16 or older.";
  if (confirm(text) == true) {
    purpleDrink();
  } else {
    text = "You are not old enough to purchase this item.";
  }
}

//Purple drink added to order
function purpleDrink() {
    console.log("purple drink has been clicked");
    customerOrder.push(" Purple Energy Drink");
    OUTPUT.innerHTML = customerOrder;
}

//Adds/removes boxes in container
function addRemoveDiv(_Remove,_Add) {
    _Remove.remove();
    _Add.style.display = "grid";
}

//Shows details in console log
function details() {
    userName = NAME_FIELD.value;
    userMoney = MONEY_FIELD.value
    console.log(userName, userMoney)
}

//Chocolate donut added to order
function chocolate() {
    console.log("chocolate has been clicked");
    customerOrder.push(" Chocolate Donut");
    OUTPUT.innerHTML = customerOrder;
}

//Caramel donut added to order
function caramel() {
    console.log("caramel has been clicked");
    customerOrder.push(" Caramel Donut");
    OUTPUT.innerHTML = customerOrder;
}

//Vanilla donut added to order
function vanilla() {
    console.log("vanilla has been clicked");
    customerOrder.push(" Vanilla Donut");
    OUTPUT.innerHTML = customerOrder;
}

//Display the receipt
function receipt() {
    userName = NAME_FIELD.value;
    userMoney = MONEY_FIELD.value;
    calculateChange();
    if (change >= 0) {
        calculateChange();
        OUTPUT.innerHTML += "<p>Order for " + userName + ".</p>";
        OUTPUT.innerHTML += "<p>Your order costs " + order1 + ". </p>"
        OUTPUT.innerHTML += "<p>You have " + userMoney + ".</p>"
        OUTPUT.innerHTML += "<p>You can afford this order. <br> You will get $" + change + " change. </p> ";
        OUTPUT.innerHTML += "<p>Thank you for shopping at Digital Donuts </p>"
    } else {
        OUTPUT.innerHTML += "<p>Order for " + userName + ".</p>";
        OUTPUT.innerHTML += "<p>Your order costs " + order1 + ". </p>"
        OUTPUT.innerHTML += "<p>You have " + userMoney + ".</p>"
        OUTPUT.innerHTML += "<p>Sorry you can't afford this order.</p>";
        OUTPUT.innerHTML += "<p>Thank you for shopping at Digital Donuts </p>"
    }
}

//Finds out the amount of change for user
function calculateChange() {
    userMoney = MONEY_FIELD.value;
    order1 = customerOrder.length * 5
    console.log(order1)
    change = userMoney - order1;
    return change;
}



//Console output
console.log("Testing pages console");