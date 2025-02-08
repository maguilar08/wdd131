// Function to format date and time
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${month}/${day}/${year}, ${hours}:${minutes}:${seconds}`;
}

// Get the last modification date of the document
const lastModified = new Date(document.lastModified);

// Format the date and time
const formattedDate = formatDate(lastModified);

// Display the formatted date and time in the paragraph with id "last-modified"
document.getElementById('last-modified').innerText = `Last modification: ${formattedDate}`;

const year = new Date().getFullYear();

document.getElementById('currentyear').textContent = year;

//-------------------------------------------------------------------------------------------

//windChill

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        // Wind chill calculation formula for metric units
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

function updateWeatherDetails() {
    const temp = 10; // Static temperature value (°C)
    const windSpeed = 5; // Static wind speed value (km/h)

    const windChillElement = document.getElementById("windChill");
    windChillElement.textContent = calculateWindChill(temp, windSpeed);
}
updateWeatherDetails();