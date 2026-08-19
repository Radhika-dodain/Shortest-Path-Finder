# India Shortest Path Finder

An interactive web-based pathfinding visualizer that demonstrates **Dijkstra’s Algorithm** by calculating and highlighting the shortest highway route between major cities, state capitals, and union territories in India.

---

## Features

- **Extensive Geographic Dataset**: Over 45 major cities mapped, covering all 28 states, 8 Union Territories, and prominent commercial hubs.
- **Maritime Integration**: Includes shipping/ferry channels connecting island Union Territories like Port Blair (Andaman & Nicobar) and Kavaratti (Lakshadweep) to coastal ports.
- **Interactive Map Control**: Drag, zoom, and click directly on map markers to open customized Popups and assign starting/ending locations.
- **Quick Lookup Directory**: A search-enabled modal that dynamically filters cities and states alphabetically.
- **Path Highlight & Fit**: Automatically draws a high-contrast path line along the calculated highway segments and dynamically pans/zooms the map to fit the route.
- **Responsive Layout**: Glassmorphic overlay cards adapt seamlessly to mobile, tablet, and desktop viewports.

---

##  Technologies Used

- **Frontend Core**: HTML5 (Semantic Structure), Vanilla CSS3 (Custom Variables, Transitions), Vanilla JS (ES6+ Logic)
- **Map Render engine**: [Leaflet.js](https://leafletjs.com/) (Open-source interactive mapping)
- **Map Base Tiles**: CartoDB Positron (Elegant, distraction-free light tile schema)
- **Typography**: Google Fonts (Outfit)

---

##  Dijkstra's Algorithm implementation

Dijkstra's Algorithm is a greedy graph traversal algorithm used to find the shortest paths between nodes in a weighted graph.

In this project:
- **Vertices (Nodes)**: 45 Indian cities containing exact geographical coordinates (Latitude/Longitude).
- **Edges**: Real-world national highway sections connecting neighboring cities.
- **Edge Weights**: Actual highway distances (in kilometers) or maritime ferry distances.
- **Path Reconstruct**: Rebuilt back-to-front via parent-node pointers and visualized progressively.

---

## Live Demo - [Shortest Path Finder](https://radhika-dodain.github.io/Shortest-Path-Finder/)
