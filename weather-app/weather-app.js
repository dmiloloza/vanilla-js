import apiKey from "./api.js";

window.addEventListener('load', () => {
  let latitude;
  let longitude;

  let locationTimezone = document.querySelector('.location-timezone');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let temperatureDescription = document.querySelector('.temperature-description');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(location => {
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;

      fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`)
        .then(response => {
          return response.json();
        })
        .then(weatherData => {
          const {temp_c, condition} = weatherData.current;
          //set DOM elements from the API
          locationTimezone.textContent = weatherData.location.name;
          temperatureDegree.textContent = temp_c;
          temperatureDescription.textContent = condition.text;
          //set icon
          document.getElementById('icon').src= condition.icon
        }).catch(err => {
        console.error(err)
      })
    })
  }
});
