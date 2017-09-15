function myMap1() {
  var myLatLng = {lat: 33.4481966, lng: -112.0752215};
  var myLatLng2 = {lat: 32.7084971, lng: -117.1574689};

  var map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 17,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'John Smith'
  });

    var map = new google.maps.Map(document.getElementById("map1"), map);
    map.setMapTypeId('hybrid');

$("#show-map1").click(function() {
  map.setCenter(new google.maps.LatLng(33.4481966, -112.0752215));
});

$("#show-map2").click(function() {
  map.setCenter(new google.maps.LatLng(32.7084971, -117.1574689));
  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Jane Smith'
  });
});
}