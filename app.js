let cityInput = document.querySelector('#input-city');
let cityOutput = document.querySelector('#output-city');
let btnCitySearch = document.querySelector('#btn-city');
let temperature = document.querySelector('#temp');
let description = document.querySelector('#descrip');
let city = document.querySelector('#city');
let country = document.querySelector('#country');
let clouds = document.querySelector('#clouds');
let windSpeed = document.querySelector('#wind-speed');
let icon = document.querySelector('#icon');
let humidity = document.querySelector('#humidity');

// let urlWhole = "http://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=4736c416d23b5f1318fdf16618c9b5ff";
let appId = '4736c416d23b5f1318fdf16618c9b5ff';

let url = "http://api.openweathermap.org/data/2.5/weather?q=";



function constructUrl(city) {
    return url + city + "&units=metric&appid=" + appId;
}

btnCitySearch.addEventListener('click', function searchCity() {
    console.log(cityInput.value);
    console.log('click');
    // cityOutput.innerText = cityInput.value;
    fetch(constructUrl(cityInput.value)).then(function getResponse(response) {
        return response.json();
    }).then(function getJson(json) {
        // console.log(json);
        cityOutput.innerText = json.main.temp;
    });
});