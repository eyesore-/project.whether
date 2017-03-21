angular.module('whether.services', [])

.factory('Location', function () {
  return {
    geolocate: function (callback) {
      navigator.geolocation.getCurrentPosition(success, error)
      function success (position) {
        const localStorage = window.localStorage
        localStorage.setItem('lat', position.coords.latitude)
        localStorage.setItem('lon', position.coords.longitude)
        callback(localStorage.lat, localStorage.lon)
      }
      function error (error) {
        throw new Error(`ERROR ${error.code}: ${error.message}`)
      }
    }
  }
})
