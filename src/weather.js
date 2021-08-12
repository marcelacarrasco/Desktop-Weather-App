function formartDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Friday", "Sat"];
  let currentDay = days[date.getDay()];
  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let currentMonth = month[date.getMonth()];
  let dateDay = date.getDate();
  return `${hours}:${minutes}, ${currentDay} ${currentMonth} ${dateDay}`;
}
function displayTemperature(response) {
  console.log(response.data);
  let temperature = (document.querySelector("#temperature").innerHTML =
    Math.round(response.data.main.temp));
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let feelsLikeElement = document.querySelector("#feels-like");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formartDate(response.data.dt * 1000);
}

let apiKey = "06c815873f95de2eb641338b25fec569";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Aspen&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
