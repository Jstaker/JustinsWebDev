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



function adjustSeverity(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

//weather API for dynamic weather information
const path = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=32da1ad47e5892254b0ea3b138b544bb";



fetch(path)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = jsObject.list[0].main.temp;
    document.getElementById('high').textContent = jsObject.list[0].main.temp_max;
    document.getElementById('feels-like').textContent = jsObject.list[0].main.feels_like;
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.list[0].wind.speed;

});