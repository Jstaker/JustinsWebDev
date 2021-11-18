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
const currentPath = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=32da1ad47e5892254b0ea3b138b544bb";



fetch(currentPath)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('desc').textContent = jsObject.list[0].weather[0].description;
    document.getElementById('current').textContent = Math.round(jsObject.list[0].main.temp);
    document.getElementById('humidity').textContent = Math.round(jsObject.list[0].main.humidity);
    document.getElementById('wind-speed').textContent = Math.round(jsObject.list[0].wind.speed);
    document.getElementById('feels-like').textContent = Math.round(jsObject.list[0].main.feels_like);


    //fiveday forecast
    const forecastfive = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let i = 1;
    forecastfive.forEach(forecast => {
    const day = forecast.dt_txt;
    let d = new Date(day).getDay()
    const srcset = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    document.querySelector(`#day${i}`).textContent = weekdays[d];
    document.querySelector(`#content${i}`).innerHTML = Math.round(forecast.main.temp) +"&deg;F"; 
    document.querySelector(`#img${i}`).setAttribute('src', srcset);
    document.querySelector(`#img${i}`).setAttribute('alt', forecast.weather[0].description);
       i++; 
    });
    });


