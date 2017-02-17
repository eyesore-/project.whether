angular.module('whether.services', [])

.factory('Location', function () {
  return {
    geolocate: function (callback) {
      let success = function (position) {
        callback(position.coords.latitude, position.coords.longitude)
      }
      let error = function () {
        console.error('ERROR: Unable to retrieve location')
      }
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }
})
