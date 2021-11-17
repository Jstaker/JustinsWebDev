

let prestonId = 5604473;

const apiKey = "32da1ad47e5892254b0ea3b138b544bb";

//use fetch command
const path = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=32da1ad47e5892254b0ea3b138b544bb";



fetch(path)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
});