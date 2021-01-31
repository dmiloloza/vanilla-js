// import {apiKey} from "./api";

//https://darkskyapp.github.io/skycons/
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

      fetch(`http://api.weatherapi.com/v1/current.json?key=34da07b1761b47f7a93101023213101&q=${latitude},${longitude}`)
        .then(response => {
          return response.json();
        })
        .then(weatherData => {
          const {temp_c, condition} = weatherData.current;
          //set DOM elements from the API
          locationTimezone.textContent = weatherData.location.name;
          temperatureDegree.textContent = temp_c;
          temperatureDescription.textContent = condition.text;
        }).catch(err => {
        console.error(err)
      })
    })
  }
});
