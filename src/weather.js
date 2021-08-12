function displayTemperature(response) {
  console.log(response.data);
  let temperature = (document.querySelector("#temperature").innerHTML =
    Math.round(response.data.main.temp));
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let feelsLikeElement = document.querySelector("#feels-like");
  let windElement = document.querySelector("#wind");
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "06c815873f95de2eb641338b25fec569";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Aspen&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
