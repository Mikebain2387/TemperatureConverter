submit1.addEventListener("click", function() {
 let farenheitTemp = fahrenheitInput.value;
 let celsiusTemp = (farenheitTemp - 32) * (5/9);
 let kelvinTemp = (farenheitTemp - 32) * (5/9) + 273.15;
 
 celsiusInput.value = celsiusTemp.toFixed(2);
 kelvinInput.value = kelvinTemp.toFixed(2);
 })
 
 submit2.addEventListener("click", function() {
  let celsiusTemp = celsiusInput.value;
  let  farenheitTemp= (celsiusTemp * (9/5)) + 32;
  let kelvinTemp = celsiusTemp + 273.15;
 
  fahrenheitInput.value = farenheitTemp.toFixed(2);
  kelvinInput.value = kelvinTemp;
  })
 
 
 
 
   submit3.addEventListener("click", function() {
    let kelvinTemp = kelvinInput.value;
    let farenheitTemp = (kelvinTemp - 273.15) * (9/5) + 32;
    let celsiusTemp = (kelvinTemp - 273.15);
    
    celsiusInput.value = celsiusTemp.toFixed(2);
    fahrenheitInput.value = farenheitTemp.toFixed(2);
    })