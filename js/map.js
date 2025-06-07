
var map = L.map('map').setView([-0.4629, -76.9862], 13); // Centered on El Coca

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example marker
L.marker([-0.4629, -76.9862]).addTo(map)
    .bindPopup('Welcome to El Coca!')
    .openPopup();
