const map = L.map('map').setView([-6.3550, 106.8346], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const geojsonMarkerOptions = {
  radius: 8,
  fillColor: '#ff7800',
  color: '#000',
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

function onEachFeature(feature, layer) {
  if (feature && feature.properties) {
    const kampus = feature.properties.kampus || "kampus tidak tersedia";
    const kota = feature.properties.kota || "kota tidak tersedia";
    const longitude = feature.geometry.coordinates[0] || "Longitude tidak tersedia";
    const latitude = feature.geometry.coordinates[1] || "Latitude tidak tersedia";

    layer.bindPopup(
      `<b>${kampus}</b></br>${kota}</br></br>latitude: ${latitude}</br>longitude: ${longitude}`
    );
  } else {
    console.warn("Feature tanpa properti ditemukan:", feature);
  }
}

function pointToLayer(feature, latlng){
  return L.circleMarker(latlng, geojsonMarkerOptions);
}

L.geoJSON(geojson, {
  pointToLayer: pointToLayer,
  onEachFeature: onEachFeature,
}).addTo(map);
