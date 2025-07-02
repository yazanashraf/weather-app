const apiKey = "6505fdbf25323315b86091b2d35701fe";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();
    if(response.status == 200){
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        document.querySelector(".weather-icon").src = `images/${(data.weather[0].main)}.png`;
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block"; 
    }else {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.onclick = function () {
    checkWeather(searchBox.value);
    searchBox.value = "";
}