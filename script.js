console.log("Running script.js")

//Constants
const OUTPUT = document.getElementById ("JavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");

//Variables
let userName = "Beatrix";

//Functions
function order(){
    userName = NAME_FIELD.value
}

function receipt(){
    OUTPUT.innerHTML = userName
}

//Output / Main code


//Console output
console.log ("Testing pages console")