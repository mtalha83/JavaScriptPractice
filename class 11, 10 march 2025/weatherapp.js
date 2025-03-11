
let apiKey = "d0182f5f4ad6437fb1993002251103"; 
let baseURL = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=";
let searchCity = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
searchCity.value = "karachi";
weatherUpdates(searchCity.value);

async function weatherUpdates(city) {
    let apiURL = baseURL + city + "&aqi=no";
    let response = await fetch(apiURL);
    let data = await response.json();
    // console.log(data);

    document.querySelector(".cityName").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°c";
    document.querySelector(".windSpeed").innerHTML = "Wind Speed: " + data.current.wind_kph + " km/h";
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.current.humidity + "%";
    document.querySelector(".cloudCondition").innerHTML = "Condition: " + data.current.condition.text;
    
}
searchButton.addEventListener("click", ()=>{
    weatherUpdates(searchCity.value);
});


