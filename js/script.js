//! Temp Convertor Website:
//  1. Project Setup

 
//? 2. HTML Structure

/*
//TODO Title: Create a title and a header for your temperature converter page.
*/
//*TODO Input Fields:
//* Add an input field where users can enter a temperature value.
//* Include dropdown menus for selecting the temperature units (e.g., Celsius, Fahrenheit, Kelvin) for both the original and target units.
//* Buttons: Add a button that will trigger the conversion process.
//* Result Display: Include an area on the page where the conversion result will be displayed.
//? 3. Styling with Bootstrap
//* Responsive Design: Use Bootstrap's grid system to make your layout responsive.
//* Form Styling: Apply Bootstrap classes to style your input fields, dropdowns, and buttons.
//* Custom Styles: Optionally, add custom styles in your styles.css to enhance the look and feel of the page.
//? 4. JavaScript Logic
//* DOM Manipulation:
//* Select the necessary elements (e.g., input fields, dropdowns, buttons, result display) using JavaScript.
//* Conversion Functions:
//* Write functions that handle the conversion logic between Celsius, Fahrenheit, and Kelvin.
//* Event Handling:
//* Implement event listeners that trigger the conversion when the user interacts with the page (e.g., clicking the "Convert" button).
//* Result Display:
//* Update the result area of the page with the converted temperature.
//! 5. Bonus Features (Optional)
//* Input Validation: Ensure that the user inputs valid temperature values.
//* Unit Conversion Validation: Prevent unnecessary conversions, such as converting from Celsius to Celsius.
//* Additional Features: Consider adding features like converting to multiple units simultaneously or a reset button to clear the inputs and results.
 
let fahrenheitInput = document.getElementById('fahrenheit');

let celsiusInput = document.getElementById('celsius');

let kelvinInput = document.getElementById('kelvin');

let btn = document.getElementById('buttonClear');
let submit1 = document.getElementById('buttonSubmit1');
let submit2 = document.getElementById('buttonSubmit2');
let submit3 = document.getElementById('buttonSubmit3');

let temperatureInput = document.querySelectorAll("div.converter input");


 




submit1.addEventListener("click", tempConversion)
 
function tempConversion(){

if(temperatureInput[0] === fahrenheitInput && fahrenheitInput.value != ''){

 let farenheitTemp = fahrenheitInput.value;
 let celsiusTemp = (farenheitTemp - 32) * (5/9);
 let kelvinTemp = (farenheitTemp - 32) * (5/9) + 273.15;
 
 celsiusInput.value = celsiusTemp.toFixed(2);
 kelvinInput.value = kelvinTemp.toFixed(2);
}
 

  else if (temperatureInput[1] === celsiusInput && celsiusInput.value != ''){
  let celsiusTemp = celsiusInput.value;
  let  farenheitTemp= (celsiusTemp * (9/5)) + 32;
  let kelvinTemp = celsiusTemp + 273.15;
  
  fahrenheitInput.value = farenheitTemp.toFixed(2);
  kelvinInput.value = kelvinTemp;
 }
  
 
 
 
 else if (temperatureInput[2] === kelvinInput && kelvinInput.value != ''){
  let kelvinTemp = kelvinInput.value;
  let farenheitTemp = (kelvinTemp - 273.15) * (9/5) + 32;
  let celsiusTemp = (kelvinTemp - 273.15);
  
  celsiusInput.value = celsiusTemp.toFixed(2);
  fahrenheitInput.value = farenheitTemp.toFixed(2);
 }
   
}
  

btn.addEventListener("click", function(){
 fahrenheitInput.value ="";
 celsiusInput.value = "";
 kelvinInput.value = "";

})
