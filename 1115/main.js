// API key
const API_KEY = "8d8bc42c59547cc73b31b6649a9a6bce";

navigator.geolocation.getCurrentPosition(onGeoLocation, onGeoError);

function onGeoLocation(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // URL 처리
    fetch (url)
        .then((response) => response.json())
        .then((data) => {
            const weatherImg = document.querySelector("#weather .wImg");
            const weather = document.querySelector("#weather .temp");
            const tempHigh = document.querySelector("#weather .tempHigh")
            const tempLow = document.querySelector("#weather .tempLow")
            const info = document.querySelector("#weather .info");
            const city = document.querySelector("#weather .city");
            // HTML 태그에 데이터 넣기
            console.log(data);
            weatherImg.src = "./mist_icon.png";
            weather.innerHTML = `${Math.ceil(data.main.temp)}°C`;
            tempHigh.innerHTML = `▲ ${Math.ceil(data.main.temp_max)}°C`;
            tempLow.innerHTML = `▼ ${Math.ceil(data.main.temp_min)}°C`;
            info.innerHTML = `${data.weather[0].main}`;
            city.innerHTML = data.name;
        })
}
function onGeoError(){
    console.log("에러가 났습니다.");
}