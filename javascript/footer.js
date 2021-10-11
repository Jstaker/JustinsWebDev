var day = new Array[
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
];

var month = new Array[
    "January","February","March","April","May","June","July","August","Sepetember","October","November","December"
];

const year = new Date().getFullYear();
const lastUpdated = new Date(document.lastUpdated);
var x = lastUpdated.getDay();
var x = day[x];
var y = lastUpdated.getMonth();
var y = month[y];

var lastUpdatedFormat=x+", "+lastUpdated.getDate()+", "+y+" "+lastUpdated.getFullYear();

document.getElementById("toDate").textContent=lastUpdatedFormat;
