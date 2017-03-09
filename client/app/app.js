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

// require('./controllers/weather.js')
// require('./services/services.js')
