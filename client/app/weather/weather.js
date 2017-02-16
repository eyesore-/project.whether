angular.module('whether.weather', [])

.controller('WeatherController', function ($scope, $http, Location) {
  $scope.data = {};

  function getWeather (lat, lon) {
    let key = 'eebe3600259ca09c03f6e33ad9e2c6e1';
    let uri = `https://api.darksky.net/forecast/${key}`;
    return $http
      .jsonp(`${uri}/${lat},${lon}?exclude=minutely,flags&callback=JSON_CALLBACK`)
        .success( function(response) {
          response.offset = gmtOffset(response.offset);
          console.log('WEATHER', response);
          $scope.data.weather = response;
        });
  }

  function getLocation (lat, lon) {
    let key = 'AIzaSyCziMqLH9SOOlx-xisQInYRQhzQT0sIGDc';
    let uri = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    return $http({
      method: 'GET',
      url: `${uri}${lat},${lon}&key=${key}`
    })
      .then( function (response) {
        console.log('LOCATION', response.data.results[0].address_components);
        $scope.data.location = response.data.results[0].address_components[2];
      });
  }

  function gmtOffset(offset) {
    let time = offset.toString().split('.');
    let hour = (Math.abs(offset) < 10) ? '0' + Math.abs(time[0]) : time[0];
    let minute = (time[1]) ? time[1] * 6 : '00';
    return (offset < 0 ? '-' : '+') + hour + minute.toString().substr(0, 2);
  }

  function init (lat, lon) {
    getLocation(lat, lon);
    setTimeout( function() { getWeather(lat, lon); }, 750);
  }

  Location.geolocate(init);
});
