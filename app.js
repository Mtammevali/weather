document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch( city ){
    let key= '0e33b479efab190febe3eabb18166e14' ;
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp){
        return resp.json()
    })
        .then(function(data){
            console.log(data);
            drawWeather(data);
        })
        .catch(function () {

        });
}
function cityWeather(e){
    weatherDataFetch("Tartu");
}
function drawWeather( data) {
    let celsius = Math.round(parseFloat(data.main.temp)-273.15);
    let description = data.weather[0].description;
    document.querySelector(`#location`).innerHTML =data.name;

    document.querySelector(`#temp`).innerHTML =celsius + `&deg;`;
    document.querySelector(`#description`).innerHTML =description;
}