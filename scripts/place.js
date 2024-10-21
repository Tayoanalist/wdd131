// Set the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set the last modified date
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// Function to calculate wind chill factor
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2) + " °C";
}

// Wind chill calculation logic
window.onload = function () {
    const temp = 2.5; // Static value for temperature in Celsius
    const windSpeed = 5; // Static value for wind speed in km/h

    // Check if the conditions for wind chill calculation are met
    if (temp <= 10 && windSpeed > 4.8) {
        const windChillValue = calculateWindChill(temp, windSpeed);
        const windChillElement = document.getElementById('wind-chill');
        // Check if the element exists before setting textContent
        if (windChillElement) {
            windChillElement.textContent = `${windChillValue} °C`;
        }
    } else {
        const windChillElement = document.getElementById('wind-chill');
        // Check if the element exists before setting textContent
        if (windChillElement) {
            windChillElement.textContent = "N/A";
        }
    }
};
