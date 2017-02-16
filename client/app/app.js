angular.module('whether', [
  'whether.services',
  'whether.weather',
  'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/weather/weather.html',
      controller: 'WeatherController'
    })
})
