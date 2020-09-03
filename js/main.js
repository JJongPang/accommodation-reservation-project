const currentLocation = document.querySelector(".location__current");

navigator.geolocation.getCurrentPosition(function (pos) {
  var latitude = pos.coords.latitude;
  var longitude = pos.coords.longitude;
  currentLocation.innerHTML = latitude + ", " + longitude;
});
