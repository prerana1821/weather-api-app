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
let time = document.querySelector('#time');
let date = document.querySelector('#date');


let appId = '4736c416d23b5f1318fdf16618c9b5ff';
let url = "http://api.openweathermap.org/data/2.5/weather?q=";
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let condition;
let statusCod;
let finalCity;


function constructUrl(city) {
    return url + city + "&units=metric&appid=" + appId;
}

btnCitySearch.addEventListener('click', function searchCity() {
    console.log(cityInput.value);
    finalCity = cityInput.value;
    console.log('click');
    let today = new Date();
    let timeOutput = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);
    time.innerText = timeOutput;
    let dateOutput = days[today.getDay()] + ", " + monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
    console.log(date);
    date.innerText = dateOutput;
    // cityOutput.innerText = cityInput.value;
    if (cityInput.value === '') {
        alert('Please Enter some Text!');
    } else {
        fetch(constructUrl(cityInput.value)).then(function getResponse(response) {
            return response.json();
        }).then(function getJson(json) {
            console.log(json);
            // cityOutput.innerText = json.main.temp;
            temperature.innerText = json.main.temp + "°c";
            description.innerText = json.weather[0].description;
            city.innerText = json.name;
            country.innerText = json.sys.country;
            clouds.innerText = json.clouds.all + " %";
            windSpeed.innerText = json.wind.speed + " mhp";
            humidity.innerText = json.main.humidity + " %";
            condition = json.weather[0].id;
            statusCod = json.cod;
            console.log(statusCod);
        }).catch(function errorHandling(error) {
            console.log(statusCod);
            if (statusCod === "404") {
                alert('Please Enter a City Name');
            } else {
                console.log(error);
                alert('Please Enter a Valid City Name');
            }
        });
    }

    if (condition < 300) {
        icon.innerHTML = '<img id="icon" src="images/storm.svg" alt="Thuderstrom">';
    } else if (condition < 505) {
        icon.innerHTML = '<img id="icon" src="images/rainy.svg" alt="Rain">';
    } else if (condition === 515) {
        icon.innerHTML = '<img id="icon" src="images/snowflake.svg" alt="Show">';
    } else if (condition < 600) {
        icon.innerHTML = '<img id="icon" src="images/rain.svg" alt="Shower Rain">';
    } else if (condition < 700) {
        icon.innerHTML = '<img id="icon" src="images/snowflake.svg" alt="Show">';
    } else if (condition < 800) {
        icon.innerHTML = '<img id="icon" src="images/haze.svg" alt="Mist">';
    } else if (condition === 800) {
        icon.innerHTML = '<img id="icon" src="images/sun.svg" alt="Clear Sky">';
    } else {
        icon.innerHTML = '<img id="icon" src="images/clouds.svg" alt="Scattered Clouds">';
    }
});


// *Weekly 


















// let icon = document.querySelector('#icon');

// var today = new Date();
// console.log(today);
// VM1107: 1 Tue Dec 01 2020 02: 28: 42 GMT + 0530(India Standard Time)
// let urlWhole = "http://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=4736c416d23b5f1318fdf16618c9b5ff";