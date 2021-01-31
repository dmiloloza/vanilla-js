// import {apiKey} from "./api";

window.addEventListener('load', () => {
  let latitude;
  let longitude;

  let locationTimezone = document.querySelector('.location-timezone');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let temperatureDescription = document.querySelector('.temperature-description');

  //TODO
  let icon = document.querySelector('image');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(location => {
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;

      fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey} &q=${latitude},${longitude}`)
        .then(response => {
          return response.json();
        })
        .then(weatherData => {
          console.log(weatherData);
          const {temp_c, condition} = weatherData.current;
          //set DOM elements from the API
          locationTimezone.textContent = weatherData.location.name;
          temperatureDegree.textContent = temp_c;
          temperatureDescription.textContent = condition.text;
          //set icon
          //TODO
          icon.setAttribute() = condition.icon
          console.log(icon);
        }).catch(err => {
        console.error(err)
      })
    })
  }
});
