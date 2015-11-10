/*Initialiserer kartet*/
function initMap() {
  var myLatLng = {lat: 63.429272, lng: 10.388645};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng
  });
  
/*Lager en marker med hoved-over tittel*/
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Noah's papir"
  });
}