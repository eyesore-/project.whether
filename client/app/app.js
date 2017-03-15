require('../styles/style.css')

angular.module('whether', [
  'whether.services',
  'whether.weather',
  'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/controllers/weather.html',
      controller: 'WeatherController'
    })
})

.filter('floor', function () {
  return function (input) {
    return Math.floor(input)
  }
})

require('./services/services.js')
require('./controllers/weather.js')
