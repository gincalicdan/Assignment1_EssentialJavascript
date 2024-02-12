// Named function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Anonymous function to convert Celsius to Kelvin
const celsiusToKelvin = function(celsius) {
    return celsius + 273.15;
};

// Function to convert temperature on button click
function convertTemperature() {
    const temperatureInput = $('#temperature-input').val();
    const celsiusResult = $('#celsius-result');
    const kelvinResult = $('#kelvin-result');

    // Clear previous results
    celsiusResult.text('');
    kelvinResult.text('');

    // Check if the input is a valid number
    if (!$.isNumeric(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    const fahrenheit = parseFloat(temperatureInput);

    // Convert Fahrenheit to Celsius using the named function
    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusResult.text(`Temperature in Celsius: ${celsius.toFixed(2)}°C`);

    // Convert Celsius to Kelvin using the anonymous function
    const kelvin = celsiusToKelvin(celsius);
    kelvinResult.text(`Temperature in Kelvin: ${kelvin.toFixed(2)}K`);
}
