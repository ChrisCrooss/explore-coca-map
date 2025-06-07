
var map = L.map('map').setView([-0.4629, -76.9862], 13); // Centered on El Coca

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example marker
L.marker([-0.4629, -76.9862]).addTo(map)
    .bindPopup('Welcome to El Coca!')
    .openPopup();
// 1. Yasuní National Park Entrance
L.marker([-1.067, -75.900]).addTo(map)
  .bindPopup("<b>Yasuní National Park</b><br>Explore one of the most biodiverse places on Earth with local eco-guides.");

// 2. Parque Central de El Coca
L.marker([-0.4629, -76.9862]).addTo(map)
  .bindPopup("<b>Parque Central El Coca</b><br>Start your adventure in the heart of the city.");

// 3. Cuyabeno Wildlife Reserve Entry
L.marker([-0.0128, -76.1330]).addTo(map)
  .bindPopup("<b>Cuyabeno Reserve</b><br>Community-based lodges and jungle canoe tours.");

// 4. Centro de Interpretación de la Amazonía
L.marker([-0.4645, -76.9857]).addTo(map)
  .bindPopup("<b>Amazonía Interpretation Center</b><br>Learn about indigenous cultures and local biodiversity.");

// 5. Observation Tower at Sacha Lodge
L.marker([-0.4750, -76.7236]).addTo(map)
  .bindPopup("<b>Sacha Lodge Canopy Tower</b><br>Birdwatching from 30m above the rainforest floor.");
