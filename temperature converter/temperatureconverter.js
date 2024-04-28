const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const convertBtn = document.getElementById('convert');

let celsiusValue, fahrenheitValue, kelvinValue;

const convert = () => {
    celsiusValue = parseFloat(celsius.value);
	fahrenheitValue = parseFloat(fahrenheit.value);
	kelvinValue = parseFloat(kelvin.value); 
    if (!isNaN(celsiusValue)) { 
        kelvinValue = celsiusValue + 273.15;
        fahrenheitValue = (9 / 5 * celsiusValue) + 32;
        kelvin.value = kelvinValue.toString();
        fahrenheit.value = fahrenheitValue.toString();
    } 
	else {
        kelvin.value = '';
        fahrenheit.value = '';
	}
	
    if (!isNaN(fahrenheitValue)) {
        celsiusValue = (fahrenheitValue - 32) * 5 / 9;
        kelvinValue = (fahrenheitValue - 32) * 5 / 9 + 273.15;
        celsius.value = celsiusValue.toString();
        kelvin.value = kelvinValue.toString();
    } else {
        celsius.value = '';
        kelvin.value = '';
    }
	
	if (!isNaN(kelvinValue)) {
		celsiusValue = kelvinValue - 273.15;
		fahrenheitValue = (kelvinValue - 273.15) * 1.8 + 32;
		celsius.value = celsiusValue.toString();
		fahrenheit.value = fahrenheitValue.toString();
	}
	else {
		celsius.value = '';
		fahrenheit.value = '';
	}
}

convertBtn.addEventListener('click', () => {
    convert();
});
