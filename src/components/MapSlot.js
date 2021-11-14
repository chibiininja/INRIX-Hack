import React from 'react';
import './MapSlot.css';
import { MapContainer, TileLayer} from 'react-leaflet';

function MapSlot() {
  return (
    <MapContainer center={[37.7785, -122.441]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
  );
}

export default MapSlot