
function convert() {
    const temp = parseFloat(document.getElementById('Temperature').value);
    const unit = document.getElementById('unit1').value;

    if (isNaN(temp)) {
        alert('Please enter a valid number');
        return;
    }

    let convertedTemp;
    let convertedUnit;


    if (unit === 'Fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else  if (unit === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else {
        convertedTemp = temp - 273.15;
        convertedUnit = 'Celsius';
    }

    document.getElementById('result').innerHTML = `${convertedTemp.toFixed(2)} °${convertedUnit}`;
}



