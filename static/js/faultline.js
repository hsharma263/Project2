var fault = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

d3.json(fault).then(function (data) {
  createFeatures(data.features);
});

function createFeatures(faultlineData) {

  function onEachFeature(feature, layer) {
  }

  var faultLine = L.geoJSON(faultlineData, {
    onEachFeature: onEachFeature
  });

  createMap(faultLine);
}

function createMap(faultline) {

  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })


  var baseMaps = {
  };

  var overlayMaps = {
    FaultLines: faultline
  };


  var myMap = L.map("map", {
    center: [
      0,0
    ],
    zoom: 3,
    layers: [street, faultline]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}
