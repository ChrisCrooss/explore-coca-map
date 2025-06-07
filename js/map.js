
var map = L.map('map').setView([-0.4629, -76.9862], 13); // Centered on El Coca

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> contributors'
}).addTo(map);

// Example marker
L.marker([-0.4629, -76.9862]).addTo(map)
    .bindPopup('Welcome to El Coca!')
    .openPopup();
// 1. Yasuní National Park Entrance
L.marker([-1.067, -75.900]).addTo(map)
  .bindPopup("<b>Yasuní National Park</b><br>Explore one of the most biodiverse places on Earth with local eco-guides.");

// 3. Cuyabeno Wildlife Reserve Entry
L.marker([-0.0128, -76.1330]).addTo(map)
  .bindPopup("<b>Cuyabeno Reserve</b><br>Community-based lodges and jungle canoe tours.");

// 4. Centro de Interpretación de la Amazonía
L.marker([-0.4645, -76.9857]).addTo(map)
  .bindPopup("<b>Amazonía Interpretation Center</b><br>Learn about indigenous cultures and local biodiversity.");

// 5. Observation Tower at Sacha Lodge
L.marker([-0.4750, -76.7236]).addTo(map)
  .bindPopup("<b>Sacha Lodge Canopy Tower</b><br>Birdwatching from 30m above the rainforest floor.");

L.marker([-0.4629, -76.9862]).addTo(map)
  .bindPopup(`
    <div style="font-family:sans-serif; font-size:14px; max-width:250px">
      <h3 style="margin:0; font-size:16px;">Parque Central El Coca</h3>
      <p style="margin:4px 0;">Start your eco-adventure in the heart of El Coca. Visit local shops, meet your guide, or relax before heading to the jungle.</p>
      <img src="images/parque-coca.jpg" alt="Parque Central" style="width:100%; border-radius:6px;" />
    </div>
  `);
