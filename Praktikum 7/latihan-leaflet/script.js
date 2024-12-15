const map = L.map('map').setView([-6.352933, 106.8324], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markerKampusB = L.marker([-6.352879, 106.832482]).addTo(map);
const markerKampusA = L.marker([-6.362659, 106.844334]).addTo(map);

const circleKampusUI = L.circle([-6.366714, 106.826449], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 700,
}).addTo(map);
