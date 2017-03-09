angular.module('whether.services', [])

.factory('Location', function () {
  return {
    geolocate: function (callback) {
      function success (position) {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        callback(lat, lon)
      }
      function error () {
        console.error('ERROR: Unable to locate')
      }
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }
})
