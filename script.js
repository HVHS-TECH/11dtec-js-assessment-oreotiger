console.log("Running script.js")

//Constants
const OUTPUT = document.getElementById ("JavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");

//Variables
let userName = "Beatrix";

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


//Console output
console.log ("Testing pages console")