import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const myIcon = L.icon({
  iconUrl: 'https://freepngimg.com/thumb/mario/20723-2-mario-image.png',
  iconSize: [50, 50],
  iconAnchor: [50, 50],
  popupAnchor: [-3, -76],
});

const Map = () => {
  return (
    <MapContainer
      center={[33.64618214781334, -117.84274459127637]}
      zoom={50}
      style={{ height: '1920' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/ghosnm/ckzq73c69001414nve9hlcx9d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2hvc25tIiwiYSI6ImNrenE2eTZqcjM1N2oyb3FyeXBkaGwzMHoifQ.Y1Fk71N1-mAY4AAmXHAt6Q"
      />
      <Marker position={[33.64618214781334, -117.84274459127637]} icon={myIcon}>
        <Popup>
          It&apos;s-a me, Mario <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
