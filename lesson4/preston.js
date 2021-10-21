//toggle menu
function toggleMenu() {
    document.getElementsByClassName("weather-nav")[0].classList.toggle("responsive");
}


//display last updated
var weekday = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
var months = new Array(
    "January", "February","March", "April", "May", "June", "July", "August", "September","October", "November", "December"
    );
const year = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
var day = lastModified.getDay();
var day = weekday[day];
var month = lastModified.getMonth();
var month = months[month];

var lastModifiedFormatted = day + ', ' +  month + " " + lastModified.getDate() + " " + lastModified.getFullYear();

// Display copyright year and date last modified to footer of HTML document.
document.getElementById("dateLastModified").textContent = lastModifiedFormatted;

//display pancake day on saturday
if (weekday == "Friday"){
    document.getElementById("pancakes").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("pancakes").style.display = "block";
}else{
    document.getElementById("pancakes").style.display = "none";
}


//wind chill
function buildWC(speed, temp) {
    let wcTemp = document.getElementById('windchill');

    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
    wc = Math.floor(wc);

    wc = (wc > temp)?temp:wc;
    wcTemp.innerHTML = wc;

}
let speed = document.querySelector("speed").innerHTML;
let temp = document.querySelector("temp").innerHTML;

buildWC(speed, temp);

