console.log('Celsius and Farenheit Conversion');

let inputCelsiusOrFarenheit =  prompt('Enter C for Celsius or F for Farenheit :');
let inputDegrees = parseInt(prompt('Enter degrees:'));

if (isNaN(inputDegrees)) {
    console.log('You entered wrong data!');
}
else { 
    if (inputCelsiusOrFarenheit.toLowerCase() === "c") {
        console.log(`${inputDegrees}°C are : ${celsiusToFarenheit(inputDegrees)}°F`); 
    } 
    else if (inputCelsiusOrFarenheit.toLowerCase() === "f") {
        console.log(`${inputDegrees}°F are ${farenheitToCelsius(inputDegrees)}°C`);
    }  
    else {
        console.log('You entered wrong data!');
    }
}

function celsiusToFarenheit() {
    let farenheit = inputDegrees * 1.8 + 32;
    return farenheit;
}

function farenheitToCelsius() {
    let celsius = (5 / 9) * (inputDegrees - 32);
    return celsius;
}
