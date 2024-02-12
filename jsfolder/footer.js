// Get the current year
var currentYear = new Date().getFullYear();

// Get the current date
var currentDate = new Date();

// Format the date as "Month Day, Year" (e.g., "February 12, 2024")
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);

// Update the copyright information in the footer
document.getElementById("copyright").innerHTML = "&copy; " + currentYear + " Rogine Calicdan. All rights reserved. | Date: " + formattedDate;