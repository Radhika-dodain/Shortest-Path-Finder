// ==========================================
// 1. DATASETS: CITIES & HIGHWAY ADJACENCY LIST
// ==========================================

const CITIES = {
  "New Delhi": { lat: 28.6139, lng: 77.2090, state: "Delhi (UT)", isCapital: true },
  "Srinagar": { lat: 34.0837, lng: 74.7973, state: "Jammu & Kashmir (UT)", isCapital: true },
  "Jammu": { lat: 32.7266, lng: 74.8570, state: "Jammu & Kashmir (UT)", isCapital: true },
  "Leh": { lat: 34.1526, lng: 77.5771, state: "Ladakh (UT)", isCapital: true },
  "Shimla": { lat: 31.1048, lng: 77.1734, state: "Himachal Pradesh", isCapital: true },
  "Dehradun": { lat: 30.3165, lng: 78.0322, state: "Uttarakhand", isCapital: true },
  "Chandigarh": { lat: 30.7333, lng: 76.7794, state: "Punjab & Haryana", isCapital: true },
  "Jaipur": { lat: 26.9124, lng: 75.7873, state: "Rajasthan", isCapital: true },
  "Gandhinagar": { lat: 23.2156, lng: 72.6369, state: "Gujarat", isCapital: true },
  "Ahmedabad": { lat: 23.0225, lng: 72.5714, state: "Gujarat", isCapital: false },
  "Mumbai": { lat: 19.0760, lng: 72.8777, state: "Maharashtra", isCapital: true },
  "Pune": { lat: 18.5204, lng: 73.8567, state: "Maharashtra", isCapital: false },
  "Panaji": { lat: 15.4909, lng: 73.8278, state: "Goa", isCapital: true },
  "Bengaluru": { lat: 12.9716, lng: 77.5946, state: "Karnataka", isCapital: true },
  "Thiruvananthapuram": { lat: 8.5241, lng: 76.9366, state: "Kerala", isCapital: true },
  "Kochi": { lat: 9.9312, lng: 76.2673, state: "Kerala", isCapital: false },
  "Chennai": { lat: 13.0827, lng: 80.2707, state: "Tamil Nadu", isCapital: true },
  "Puducherry": { lat: 11.9416, lng: 79.8083, state: "Puducherry (UT)", isCapital: true },
  "Madurai": { lat: 9.9252, lng: 78.1198, state: "Tamil Nadu", isCapital: false },
  "Hyderabad": { lat: 17.3850, lng: 78.4867, state: "Telangana", isCapital: true },
  "Amaravati": { lat: 16.5747, lng: 80.3575, state: "Andhra Pradesh", isCapital: true },
  "Visakhapatnam": { lat: 17.6868, lng: 83.2185, state: "Andhra Pradesh", isCapital: false },
  "Bhubaneswar": { lat: 20.2961, lng: 85.8245, state: "Odisha", isCapital: true },
  "Raipur": { lat: 21.2514, lng: 81.6296, state: "Chhattisgarh", isCapital: true },
  "Bhopal": { lat: 23.2599, lng: 77.4126, state: "Madhya Pradesh", isCapital: true },
  "Indore": { lat: 22.7196, lng: 75.8577, state: "Madhya Pradesh", isCapital: false },
  "Nagpur": { lat: 21.1458, lng: 79.0882, state: "Maharashtra", isCapital: false },
  "Lucknow": { lat: 26.8467, lng: 80.9462, state: "Uttar Pradesh", isCapital: true },
  "Agra": { lat: 27.1767, lng: 78.0081, state: "Uttar Pradesh", isCapital: false },
  "Varanasi": { lat: 25.3176, lng: 82.9739, state: "Uttar Pradesh", isCapital: false },
  "Patna": { lat: 25.5941, lng: 85.1376, state: "Bihar", isCapital: true },
  "Ranchi": { lat: 23.3441, lng: 85.3096, state: "Jharkhand", isCapital: true },
  "Kolkata": { lat: 22.5726, lng: 88.3639, state: "West Bengal", isCapital: true },
  "Gangtok": { lat: 27.3314, lng: 88.6138, state: "Sikkim", isCapital: true },
  "Dispur/Guwahati": { lat: 26.1445, lng: 91.7362, state: "Assam", isCapital: true },
  "Shillong": { lat: 25.5788, lng: 91.8833, state: "Meghalaya", isCapital: true },
  "Itanagar": { lat: 27.0844, lng: 93.6053, state: "Arunachal Pradesh", isCapital: true },
  "Kohima": { lat: 25.6751, lng: 94.1086, state: "Nagaland", isCapital: true },
  "Imphal": { lat: 24.8170, lng: 93.9368, state: "Manipur", isCapital: true },
  "Aizawl": { lat: 23.7271, lng: 92.7176, state: "Mizoram", isCapital: true },
  "Agartala": { lat: 23.8315, lng: 91.2868, state: "Tripura", isCapital: true },
  "Daman": { lat: 20.3974, lng: 72.8328, state: "Dadra & Nagar Haveli & Daman & Diu (UT)", isCapital: true },
  "Silvassa": { lat: 20.2766, lng: 73.0083, state: "Dadra & Nagar Haveli & Daman & Diu (UT)", isCapital: false },
  "Kavaratti": { lat: 10.5669, lng: 72.6417, state: "Lakshadweep (UT)", isCapital: true },
  "Port Blair": { lat: 11.6234, lng: 92.7265, state: "Andaman & Nicobar (UT)", isCapital: true },
  "Amritsar": { lat: 31.6340, lng: 74.8723, state: "Punjab", isCapital: false }
};

const HIGHWAYS = {
  "Srinagar": { "Jammu": 260, "Leh": 420 },
  "Jammu": { "Srinagar": 260, "Amritsar": 215, "Chandigarh": 340 },
  "Leh": { "Srinagar": 420, "Shimla": 470 },
  "Shimla": { "Leh": 470, "Chandigarh": 110, "Dehradun": 230 },
  "Dehradun": { "Shimla": 230, "Chandigarh": 170, "New Delhi": 250 },
  "Amritsar": { "Jammu": 215, "Chandigarh": 230 },
  "Chandigarh": { "Jammu": 340, "Amritsar": 230, "Shimla": 110, "Dehradun": 170, "New Delhi": 245 },
  "New Delhi": { "Chandigarh": 245, "Dehradun": 250, "Jaipur": 270, "Agra": 210 },
  "Agra": { "New Delhi": 210, "Jaipur": 240, "Lucknow": 335, "Bhopal": 590 },
  "Jaipur": { "New Delhi": 270, "Agra": 240, "Gandhinagar": 540, "Ahmedabad": 620, "Indore": 510 },
  "Lucknow": { "Agra": 335, "Varanasi": 310, "Patna": 500, "Bhopal": 640 },
  "Varanasi": { "Lucknow": 310, "Patna": 250, "Ranchi": 390, "Bhopal": 720 },
  "Patna": { "Lucknow": 500, "Varanasi": 250, "Ranchi": 330, "Kolkata": 580, "Gangtok": 540, "Dispur/Guwahati": 780 },
  "Ranchi": { "Patna": 330, "Varanasi": 390, "Kolkata": 410, "Bhubaneswar": 460, "Raipur": 600 },
  "Kolkata": { "Patna": 580, "Ranchi": 410, "Bhubaneswar": 440, "Gangtok": 670, "Dispur/Guwahati": 980, "Port Blair": 1650 },
  "Gangtok": { "Patna": 540, "Kolkata": 670, "Dispur/Guwahati": 510 },
  "Dispur/Guwahati": { "Patna": 780, "Kolkata": 980, "Gangtok": 510, "Shillong": 100, "Itanagar": 330, "Kohima": 350, "Agartala": 550 },
  "Shillong": { "Dispur/Guwahati": 100, "Agartala": 450, "Aizawl": 420, "Imphal": 490 },
  "Itanagar": { "Dispur/Guwahati": 330, "Kohima": 380 },
  "Kohima": { "Itanagar": 380, "Dispur/Guwahati": 350, "Imphal": 140 },
  "Imphal": { "Kohima": 140, "Shillong": 490, "Aizawl": 400 },
  "Aizawl": { "Imphal": 400, "Shillong": 420, "Agartala": 300 },
  "Agartala": { "Aizawl": 300, "Shillong": 450, "Dispur/Guwahati": 550 },
  "Gandhinagar": { "Ahmedabad": 30, "Jaipur": 540 },
  "Ahmedabad": { "Gandhinagar": 30, "Jaipur": 620, "Indore": 400, "Daman": 365, "Mumbai": 525 },
  "Daman": { "Ahmedabad": 365, "Silvassa": 30, "Mumbai": 170 },
  "Silvassa": { "Daman": 30, "Mumbai": 160 },
  "Mumbai": { "Ahmedabad": 525, "Daman": 170, "Silvassa": 160, "Pune": 150, "Indore": 580, "Nagpur": 800, "Panaji": 590 },
  "Pune": { "Mumbai": 150, "Indore": 600, "Nagpur": 710, "Hyderabad": 560, "Bengaluru": 840, "Panaji": 470 },
  "Indore": { "Jaipur": 510, "Ahmedabad": 400, "Bhopal": 195, "Mumbai": 580, "Pune": 600 },
  "Bhopal": { "Indore": 195, "Agra": 590, "Lucknow": 640, "Varanasi": 720, "Nagpur": 350, "Raipur": 630 },
  "Nagpur": { "Bhopal": 350, "Mumbai": 800, "Pune": 710, "Raipur": 285, "Hyderabad": 500 },
  "Raipur": { "Bhopal": 630, "Nagpur": 285, "Ranchi": 600, "Bhubaneswar": 540, "Hyderabad": 780 },
  "Bhubaneswar": { "Ranchi": 460, "Kolkata": 440, "Raipur": 540, "Visakhapatnam": 440 },
  "Visakhapatnam": { "Bhubaneswar": 440, "Hyderabad": 620, "Amaravati": 350 },
  "Hyderabad": { "Nagpur": 500, "Pune": 560, "Raipur": 780, "Visakhapatnam": 620, "Amaravati": 270, "Bengaluru": 570 },
  "Amaravati": { "Hyderabad": 270, "Visakhapatnam": 350, "Chennai": 450, "Bengaluru": 650 },
  "Panaji": { "Mumbai": 590, "Pune": 470, "Bengaluru": 590 },
  "Bengaluru": { "Pune": 840, "Panaji": 590, "Hyderabad": 570, "Amaravati": 650, "Chennai": 350, "Kochi": 530 },
  "Chennai": { "Amaravati": 450, "Bengaluru": 350, "Puducherry": 150, "Madurai": 460, "Port Blair": 1350 },
  "Puducherry": { "Chennai": 150, "Madurai": 330 },
  "Madurai": { "Chennai": 460, "Puducherry": 330, "Kochi": 270, "Thiruvananthapuram": 260 },
  "Kochi": { "Bengaluru": 530, "Madurai": 270, "Thiruvananthapuram": 200, "Kavaratti": 400 },
  "Thiruvananthapuram": { "Kochi": 200, "Madurai": 260 },
  "Port Blair": { "Chennai": 1350, "Kolkata": 1650 },
  "Kavaratti": { "Kochi": 400 }
};

// ==========================================
// 2. APP STATE
// ==========================================

let map;
let markers = {};
let networkLayers = [];
let activePathLayer = null;
let activePathMarkers = [];

let sourceCity = null;
let destinationCity = null;

let modalTargetType = 'source'; // 'source' or 'destination'

// ==========================================
// 3. DIJKSTRA'S SHORTEST PATH ALGORITHM
// ==========================================

function runDijkstra(startNode, endNode) {
  const distances = {};
  const prev = {};
  const visited = new Set();
  const nodes = Object.keys(CITIES);

  // Initialize
  nodes.forEach(node => {
    distances[node] = Infinity;
    prev[node] = null;
  });
  distances[startNode] = 0;

  while (visited.size < nodes.length) {
    // Find unvisited node with minimum distance (simple linear search, equivalent to O(V^2))
    let u = null;
    let minDistance = Infinity;

    nodes.forEach(node => {
      if (!visited.has(node) && distances[node] < minDistance) {
        minDistance = distances[node];
        u = node;
      }
    });

    // If remaining nodes are unreachable or we reached the destination
    if (u === null || u === endNode) {
      break;
    }

    visited.add(u);

    // Update neighbors
    const neighbors = HIGHWAYS[u] || {};
    for (const v in neighbors) {
      if (!visited.has(v)) {
        const alt = distances[u] + neighbors[v];
        if (alt < distances[v]) {
          distances[v] = alt;
          prev[v] = u;
        }
      }
    }
  }

  // Reconstruct path
  const path = [];
  let curr = endNode;
  if (distances[endNode] !== Infinity || startNode === endNode) {
    while (curr !== null) {
      path.unshift(curr);
      curr = prev[curr];
    }
  }

  return {
    distance: distances[endNode],
    path: path
  };
}

// ==========================================
// 4. MAP INITIALIZATION & RENDERING
// ==========================================

function initMap() {
  // Center of India coordinates: [22.973, 78.656], Zoom level 5
  map = L.map('map', {
    center: [22.4, 79.5],
    zoom: 5,
    minZoom: 4,
    maxZoom: 9,
    zoomControl: false // Custom placement later
  });

  // Adding Custom Pista/Light Tile Layer (CartoDB Positron is ideal for clean light aesthetics)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // Position Zoom Control to Bottom Right
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Render Background Highways (Gray-green mesh)
  drawHighwayMesh();

  // Render City Markers
  drawCityMarkers();
}

function drawHighwayMesh() {
  const drawnEdges = new Set();

  for (const cityA in HIGHWAYS) {
    const coordsA = [CITIES[cityA].lat, CITIES[cityA].lng];

    for (const cityB in HIGHWAYS[cityA]) {
      const coordsB = [CITIES[cityB].lat, CITIES[cityB].lng];

      // Prevent duplicate line drawing
      const edgeKey = [cityA, cityB].sort().join('-');
      if (!drawnEdges.has(edgeKey)) {
        drawnEdges.add(edgeKey);

        const isFerry = (cityA === 'Port Blair' || cityB === 'Port Blair' || cityA === 'Kavaratti' || cityB === 'Kavaratti');

        // Draw light grey-green lines for normal highways, dashed blue-green for sea routes
        const polyline = L.polyline([coordsA, coordsB], {
          color: isFerry ? '#8eb8a3' : '#cce5d7',
          weight: isFerry ? 2.5 : 2,
          dashArray: isFerry ? '6, 6' : null,
          opacity: 0.65,
          interactive: false
        }).addTo(map);

        networkLayers.push(polyline);
      }
    }
  }
}

function drawCityMarkers() {
  for (const name in CITIES) {
    const city = CITIES[name];
    const coords = [city.lat, city.lng];

    // Define interactive HTML for markers
    // Small elegant green dots for normal cities, slightly larger pulsing ones for capitals
    const markerHtml = `
      <div class="custom-marker-wrapper ${city.isCapital ? 'capital' : ''}" id="marker-${name.replace(/\s+/g, '-')}">
        <div class="marker-pin"></div>
        <div class="marker-pulse"></div>
      </div>
    `;

    const customIcon = L.divIcon({
      html: markerHtml,
      className: 'leaflet-custom-icon',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    const marker = L.marker(coords, { icon: customIcon }).addTo(map);

    // Bind custom elegant Tooltip
    marker.bindTooltip(`
      <div class="map-tooltip">
        <strong>${name}</strong>
        <span>${city.state}</span>
      </div>
    `, {
      direction: 'top',
      offset: [0, -8],
      opacity: 0.95,
      className: 'custom-tooltip-style'
    });

    // Handle Marker Clicks to Open Set Popups
    marker.on('click', () => {
      openMarkerPopup(name, coords);
    });

    markers[name] = marker;
  }
}

// Custom Leaflet Popup for Set Start / End Actions
function openMarkerPopup(cityName, coords) {
  const content = `
    <div class="marker-popup-content">
      <h4>${cityName}</h4>
      <p class="popup-subtext">${CITIES[cityName].state}</p>
      <div class="popup-buttons">
        <button class="popup-btn start-btn" onclick="setAsSource('${cityName}')">Set Start</button>
        <button class="popup-btn end-btn" onclick="setAsDestination('${cityName}')">Set End</button>
      </div>
    </div>
  `;

  L.popup({
    closeButton: false,
    offset: [0, -6],
    className: 'custom-popup-style'
  })
  .setLatLng(coords)
  .setContent(content)
  .openOn(map);
}

// Global functions accessible via onclick in popup HTML
window.setAsSource = function(cityName) {
  selectSource(cityName);
  map.closePopup();
};

window.setAsDestination = function(cityName) {
  selectDestination(cityName);
  map.closePopup();
};

// ==========================================
// 5. SELECTION LOGIC & PATH RENDERING
// ==========================================

function selectSource(cityName) {
  sourceCity = cityName;
  document.getElementById('source-btn').innerText = cityName;
  document.getElementById('source-btn').classList.add('selected');
  updateMarkerHighlight();
  calculateAndDrawPath();
}

function selectDestination(cityName) {
  destinationCity = cityName;
  document.getElementById('dest-btn').innerText = cityName;
  document.getElementById('dest-btn').classList.add('selected');
  updateMarkerHighlight();
  calculateAndDrawPath();
}

function updateMarkerHighlight() {
  // Reset all marker classes
  Object.keys(markers).forEach(name => {
    const el = document.getElementById(`marker-${name.replace(/\s+/g, '-')}`);
    if (el) {
      el.classList.remove('source-highlight', 'dest-highlight', 'path-node-highlight');
    }
  });

  // Apply Source Highlight
  if (sourceCity) {
    const el = document.getElementById(`marker-${sourceCity.replace(/\s+/g, '-')}`);
    if (el) el.classList.add('source-highlight');
  }

  // Apply Destination Highlight
  if (destinationCity) {
    const el = document.getElementById(`marker-${destinationCity.replace(/\s+/g, '-')}`);
    if (el) el.classList.add('dest-highlight');
  }
}

function calculateAndDrawPath() {
  // Clear previous paths
  clearActivePath();

  if (!sourceCity || !destinationCity) return;

  if (sourceCity === destinationCity) {
    showResultCard([sourceCity], 0);
    return;
  }

  const result = runDijkstra(sourceCity, destinationCity);

  if (result.distance === Infinity || result.path.length === 0) {
    showNoPathMessage();
    return;
  }

  // Highlight all nodes in the calculated path
  result.path.forEach(node => {
    if (node !== sourceCity && node !== destinationCity) {
      const el = document.getElementById(`marker-${node.replace(/\s+/g, '-')}`);
      if (el) el.classList.add('path-node-highlight');
      activePathMarkers.push(node);
    }
  });

  // Extract coordinates for path line drawing
  const pathCoords = result.path.map(name => [CITIES[name].lat, CITIES[name].lng]);

  // Create glowing green Polyline
  activePathLayer = L.polyline(pathCoords, {
    color: '#427855', // Rich Pista Dark Accent
    weight: 5,
    opacity: 0.9,
    lineJoin: 'round'
  }).addTo(map);

  // Fit map boundaries to contain the path
  map.fitBounds(activePathLayer.getBounds(), {
    padding: [80, 80],
    animate: true,
    duration: 1.2
  });

  // Display results overlay
  showResultCard(result.path, result.distance);
}

function clearActivePath() {
  if (activePathLayer) {
    map.removeLayer(activePathLayer);
    activePathLayer = null;
  }

  // Clear path node markers
  activePathMarkers.forEach(node => {
    if (node !== sourceCity && node !== destinationCity) {
      const el = document.getElementById(`marker-${node.replace(/\s+/g, '-')}`);
      if (el) el.classList.remove('path-node-highlight');
    }
  });
  activePathMarkers = [];

  // Hide Result card
  document.getElementById('result-card').classList.remove('visible');
}

function resetApp() {
  sourceCity = null;
  destinationCity = null;

  document.getElementById('source-btn').innerText = 'Choose Starting City';
  document.getElementById('source-btn').classList.remove('selected');

  document.getElementById('dest-btn').innerText = 'Choose Destination City';
  document.getElementById('dest-btn').classList.remove('selected');

  clearActivePath();
  updateMarkerHighlight();

  // Reset map view to center of India
  map.setView([22.4, 79.5], 5, { animate: true, duration: 1 });
}

// ==========================================
// 6. UI OVERLAYS (MODALS & CARDS)
// ==========================================

function showResultCard(path, distance) {
  const card = document.getElementById('result-card');
  const routeList = document.getElementById('route-list');
  const distanceValue = document.getElementById('distance-value');

  // Clear past list
  routeList.innerHTML = '';

  // Setup text
  distanceValue.innerHTML = `<strong>${distance.toLocaleString()}</strong> km`;

  // Draw breadcrumbs
  path.forEach((city, index) => {
    const li = document.createElement('li');
    li.className = 'route-step';
    li.innerHTML = `
      <span class="step-num">${index + 1}</span>
      <div class="step-details">
        <span class="step-name">${city}</span>
        <span class="step-state">${CITIES[city].state}</span>
      </div>
    `;
    routeList.appendChild(li);
  });

  card.classList.add('visible');
}

function showNoPathMessage() {
  const card = document.getElementById('result-card');
  const routeList = document.getElementById('route-list');
  const distanceValue = document.getElementById('distance-value');

  distanceValue.innerText = 'Unreachable';
  routeList.innerHTML = `<li class="route-error">No highway route exists between these cities.</li>`;
  card.classList.add('visible');
}

// Open Search Overlay Modal
function openModal(type) {
  modalTargetType = type;
  const modal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const modalTitle = document.getElementById('modal-title');

  modalTitle.innerText = type === 'source' ? 'Select Start City' : 'Select Destination';
  searchInput.value = '';
  modal.classList.add('active');

  // Populate list
  filterCities('');

  // Auto-focus input
  setTimeout(() => searchInput.focus(), 150);
}

function closeModal() {
  document.getElementById('search-modal').classList.remove('active');
}

function filterCities(query) {
  const listContainer = document.getElementById('cities-list');
  listContainer.innerHTML = '';

  const q = query.toLowerCase().trim();

  // Sort cities alphabetically
  const sortedNames = Object.keys(CITIES).sort();

  sortedNames.forEach(name => {
    const city = CITIES[name];
    const matchName = name.toLowerCase().includes(q);
    const matchState = city.state.toLowerCase().includes(q);

    // Exclude selected source as destination, and vice versa
    if (modalTargetType === 'source' && name === destinationCity) return;
    if (modalTargetType === 'destination' && name === sourceCity) return;

    if (matchName || matchState) {
      const btn = document.createElement('button');
      btn.className = 'modal-city-item';
      btn.innerHTML = `
        <div class="city-info">
          <span class="city-title">${name}</span>
          <span class="city-sub">${city.state}</span>
        </div>
        ${city.isCapital ? '<span class="capital-badge">Capital</span>' : ''}
      `;

      btn.addEventListener('click', () => {
        if (modalTargetType === 'source') {
          selectSource(name);
        } else {
          selectDestination(name);
        }
        closeModal();
      });

      listContainer.appendChild(btn);
    }
  });

  if (listContainer.children.length === 0) {
    listContainer.innerHTML = '<div class="no-results">No cities found matching your search.</div>';
  }
}

// ==========================================
// 7. EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initMap();

  // Open modal buttons
  document.getElementById('source-btn').addEventListener('click', () => openModal('source'));
  document.getElementById('dest-btn').addEventListener('click', () => openModal('destination'));

  // Close modal click handlers
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('search-modal').addEventListener('click', (e) => {
    if (e.target.id === 'search-modal') closeModal();
  });

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Search input typing handler
  document.getElementById('search-input').addEventListener('input', (e) => {
    filterCities(e.target.value);
  });

  // Reset button handler
  document.getElementById('reset-btn').addEventListener('click', resetApp);
});
