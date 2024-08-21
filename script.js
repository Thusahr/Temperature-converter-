function convertTemperature() {
    const input = document.getElementById("temperatureInput").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById("result");

    // Validate that input is a number
    const temperature = parseFloat(input);
    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemp;
    let convertedUnit;

    if (unit === "Celsius") {
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (unit === "Fahrenheit") {
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
    } else if (unit === "Kelvin") {
        convertedTemp = temperature - 273.15;
        convertedUnit = "Celsius";
    }

    // Handle conversion to Kelvin from Celsius and Fahrenheit
    if (unit === "Celsius") {
        convertedTemp = `${convertedTemp.toFixed(2)} °F / ${(temperature + 273.15).toFixed(2)} K`;
    } else if (unit === "Fahrenheit") {
        convertedTemp = `${convertedTemp.toFixed(2)} °C / ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K`;
    } else if (unit === "Kelvin") {
        convertedTemp = `${convertedTemp.toFixed(2)} °C / ${(temperature - 273.15) * 9/5 + 32} °F`;
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemp}`;
}
