/*Initialiserer kartet*/

function initMap() {
  var shop = {lat: 63.424009, lng: 10.394774};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: shop


  });
  
//Lager en marker med hoved-over tittel

  var marker = new google.maps.Marker({
    position: shop,
    map: map,
    title: "Noah's papir"
  });
}

/*FORSØK PÅ GEOLOCATION
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.923778, lng: 10.707108},
    zoom: 18
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
*/