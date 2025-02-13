"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🔴 Vadodara SVG Marker
const vadodaraIcon = new L.DivIcon({
  className: "custom-marker",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
      <path fill="red" d="M12 2C8.14 2 5 5.14 5 9c0 4.42 7 13 7 13s7-8.58 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
    </svg>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// 🔵 Himachal Pradesh SVG Marker
const himachalIcon = new L.DivIcon({
  className: "custom-marker",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
      <path fill="blue" d="M12 2C8.14 2 5 5.14 5 9c0 4.42 7 13 7 13s7-8.58 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
    </svg>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const MapComponent = () => {
  return (
    <MapContainer 
      center={[26, 78]} 
      zoom={5.4} 
      scrollWheelZoom={false} 
      dragging={false} 
      doubleClickZoom={false} 
      touchZoom={false} 
      zoomControl={false} 
      className="h-[500px]  mt-6 w-full px-4   max-w-[1420px] mx-auto px-0"
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />

      {/* 📍 Vadodara Marker */}
      <Marker position={[22.3, 73.2]} icon={vadodaraIcon}>
        <Popup>Vadodara</Popup>
      </Marker>

      {/* 📍 Himachal Pradesh Marker */}
      <Marker position={[31.1, 77.2]} icon={himachalIcon}>
        <Popup>Himachal Pradesh</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
