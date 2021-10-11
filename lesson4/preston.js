function toggleMenu() {
    document.getElementsByClassName("weather-nav")[0].classList.toggle("responsive");
}


//date
var day = new Array(
    "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
);

var month = new Array(
    "January","February","March","April","May","June","July","August","Sepetember","October","November","December"
);

const year = new Date().getFullYear();
const lastUpdated = new Date(document.lastUpdated);
var x = lastUpdated.getDay();
var x = day[x];
var y = lastUpdated.getMonth();
var y = month[y];

var lastUpdatedFormat=x+", "+lastUpdated.getDate()+", "+y+" "+lastUpdated.getFullYear();

document.getElementById("toDate").textContent=lastUpdatedFormat;
