import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export const Map = ({ ipData }) => {
  if (!ipData) {
    return null;
  }

  return (
    <MapContainer center={[ipData.latitude, ipData.longitude]} zoom={13}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Contribuyentes de OpenStreetMap</a>'
      />
      <Marker position={[ipData.latitude, ipData.longitude]}>
        <Popup>
          Un bonito popup de CSS.
          <br /> Fácil de personalizar.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
