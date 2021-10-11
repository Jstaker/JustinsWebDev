//toggle menu on mobile view
var day = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
var month = new Array(
    "January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"
    );

const year = new Date().getFullYear();
const lastUpdated = new Date(document.lastUpdated);
var x = lastUpdated.getDay();
var x = day[x];
var y = lastUpdated.getMonth();
var y = month[y];

var lastUpdatedFormat = x + ', ' + lastUpdated.getDate() + ' ' + y + " " + lastUpdated.getFullYear();

// Display copyright year and date last modified to footer of HTML document.
document.getElementById("dateFormat").textContent = lastUpdatedFormat;
document.getElementById("copyrightYear").textContent = year;
