import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../styles/Map.css"; // Ensure the correct CSS file is imported

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[28.7041, 77.1025]}>
          <Popup>Camera Sensor - Delhi</Popup>
        </Marker>
        <Marker position={[19.076, 72.8777]}>
          <Popup>Microphone Sensor - Mumbai</Popup>
        </Marker>
        <Marker position={[13.0827, 80.2707]}>
          <Popup>LoRaWAN Sensor - Chennai</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
