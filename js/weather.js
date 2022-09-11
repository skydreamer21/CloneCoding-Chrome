const API_KEY = "02fbbe42ccf4abcf5d4e1822a1596085";

function printWeather(city, temperature, weather) {
    const weatherInfo = document.querySelector("#weatherInfo");
    const cityContainer = weatherInfo.querySelector(":nth-child(1)");
    const tempContainer = weatherInfo.querySelector(":nth-child(2)");
    const weatherContainer = weatherInfo.querySelector(":nth-child(3)");
    cityContainer.innerText = city;
    tempContainer.innerText = temperature;
    weatherContainer.innerText = weather;
}

function geoSuccess(pos) {
    console.dir(pos);
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` // 단위로 미터법을 사용
    fetch(url).then((response) => response.json()).then((data) => {
        console.dir(data);
        const city = data.name;
        const temperature = data.main.temp;
        const weather = data.weather[0].main;
        printWeather(city, temperature, weather);
    });
}

function geoFail(err) {
    alert("Can't Access to your location. No weather Info");
    console.dir(err);
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);