//Built by Nicholas Whiteley on 2/5/23
//DOM Manipulation
//Document.getElementById() retrieves an HTML element with a specified ID attribute and returns it as a JavaScript object. You can then manipulate this object using JavaScript methods and properties.
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let lengthEl1 = document.getElementById("length1-el")
let lengthEl2 = document.getElementById("length2-el")

//Assigning variables
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =   2.20462
const footToMeter =  0.3048
const gallonToLiter = 3.78541 
const poundsToKilo = 0.45359237 


//Function for when the button is clicked, convert the input value into different conversions
convertBtn.addEventListener("click", function() {
//Assigning the input value to a variable
    let baseValue = inputEl.value
    
//Using a template literal, Get the user input and times by the value of the meterToFeet variable and the same with the footToMeter variable and display the answers in the html paragraph element. 
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * footToMeter).toFixed(3)} meters ` 
    
//Using a template literal, Get the user input and times by the value of the literToGallon variable and the same with the gallonToLiter variable and display the answers in the html paragraph element. 
    lengthEl1.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters ` 
    
//Using a template literal, Get the user input and times by the value of the kiloToPound variable and the same with the poundsToKilo variable and display the answers in the html paragraph element. 
    lengthEl2.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | 
    ${baseValue} pounds = ${(baseValue * poundsToKilo).toFixed(3)} kilos ` 
})

