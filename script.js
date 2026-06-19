console.log("Running script.js")

//Constants
const OUTPUT = document.getElementById ("JavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");

//Variables
let userName = "Beatrix";
let chocStrawberry = "3";
let chocVanilla = "3";
let chocChocolate = "3";
let vanStrawberry = "3";
let vanVanilla = "3";
let vanChocolate = "3";


//Functions
function order(){
    userName = NAME_FIELD.value;
    OUTPUT.innerHTML = userName;
}

function receipt(){
    userName = NAME_FIELD.value
    OUTPUT.innerHTML = userName;
}

//Output / Main code
displayProduct(chocStrawberry, 3)
displayProduct(chocVanilla, 3)
displayProduct(chocChocolate, 3)
displayProduct(vanStrawberry, 3)
displayProduct(vanVanilla, 3)
displayProduct(vanChocolate, 3)

//Console output
console.log ("Testing pages console")