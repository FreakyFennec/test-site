var map = L.map('map').setView([51.499446, -0.09], 13);     // Coordonnées du lieu et facteur de zoom.

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Repère un point précis
var marker = L.marker([51.5, -0.09]).addTo(map);        

// Repère une zone circulaire
var circle = L.circle([51.508, -0.11], {                
    color: 'red',
    fillColor: '#f03',
    fillOpacity: '0.5',
    radius: 500
}).addTo(map);

// Repère une zone polygonale
var polygon = L.polygon([                               
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

// Ajouter un popup
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();   // (openPopup()) ouvre ce popup en premier.
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// Ajouter un popup comme un calque. Il s'affichera en premier, il n'est pas lié à un élément.
var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

// Une sorte de eventListener
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);