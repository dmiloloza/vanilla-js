import {apiKey} from "./api";

window.addEventListener('load', () => {
  let latitude;
  let longitude;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(location => {
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;

      const api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
    })
  }
});

//https://www.weatherapi.com/my/
//api key= 34da07b1761b47f7a93101023213101
