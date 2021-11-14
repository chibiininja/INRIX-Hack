import React from 'react';
import './MapSlot.css';
import { MapContainer, TileLayer, Rectangle} from 'react-leaflet'; 

class MapSlot extends React.Component {
  render() {
    return (
      <MapContainer center={[37.7785, -122.441]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {createGrid(this.props.coords)}
      </MapContainer>
    );
  }
}

function createGrid(coords) {
  return coords.map(createRow);
}

function createRow(row) {
  return row.map(createRectangle);
}

function createRectangle(coord) {
  const rectangle = [Number(coord.br), Number(coord.tl)];
  
  let color = {};

  if(coord.count > 10) 
    color = { color: 'red' };
  else
    color = { color: 'green' };
  return <Rectangle bounds={rectangle} pathOptions={color} />
}

export default MapSlot