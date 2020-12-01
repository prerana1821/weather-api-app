let btnDays = document.querySelector('btn-days');

// let urlDays = "http://api.openweathermap.org/data/2.5/forecast?q=Mumbai&cnt=40&units=metric&appid=4736c416d23b5f1318fdf16618c9b5ff";

let urlDays = "http://api.openweathermap.org/data/2.5/forecast?q=";

function constructUrlDays(city) {
    return url + city + "&cnt=40&units=metric&appid=" + appId;
}


btnDays.addEventListener('click', function searchDays() {
    fetch(constructUrlDays(finalCity)).then(function getResponseDays(response) {
        return response.json();
    }).then(function getJsonDays(json) {
        for (let i = 6; i < json.list.length; i = i + 7) {
            console.log(json);
        }
    })
});

// list[5].dt