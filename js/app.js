var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAbSRvtXdvsGl_0PI3iyjwJWtdWDBA4CsM'
});

var mapsAPIKey = googleMapsClient.key;

sourceUrl = "https://maps.googleapis.com/maps/api/js?key=" + mapsAPIKey + "&callback=initMap";