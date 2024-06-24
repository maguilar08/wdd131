// getdates.js to set the modified date and year
document.addEventListener("DOMContentLoaded", function() {
    // Dynamically set current year
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Dynamically set modified date
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
    
});