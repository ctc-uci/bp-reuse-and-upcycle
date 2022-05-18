import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { NominatimJS } from '@owsas/nominatim-js';

const myIcon = L.icon({
  iconUrl:
    'https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/280294238_1714211822246372_6906411544883688222_n.png?stp=cp0_dst-png&_nc_cat=100&ccb=1-6&_nc_sid=ae9488&_nc_ohc=qvJVBB5mCKAAX93lWAX&_nc_ht=scontent-lax3-2.xx&oh=03_AVKXfOMJau-7og9J8KW97q4kHZMjzyCDB-hgpMTsAm6inw&oe=62A322FE',
  iconSize: [35, 45],
  iconAnchor: [50, 50],
  popupAnchor: [-3, -76],
});

function findPoints(searchTerms) {
  // looping through search terms
  const newPoints = [];
  for (let i = 0; i < searchTerms.length; i += 1) {
    const [results, setResults] = useState([]);

    useEffect(() => {
      const getResults = async () => {
        const temp = await NominatimJS.search({
          q: searchTerms[i],
          limit: 50,
        });

        setResults(temp);
      };

      getResults();
    }, []);
    // looping through results and adding them to the points list
    for (let j = 0; j < results.length; j += 1) {
      newPoints.push(results[j]);
    }
  }
  return newPoints;
}

const Map = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const getPoints = async () => {
      const results = await NominatimJS.search({
        q: 'Goodwill, Orange County, California',
        limit: 50,
      });

      setPoints(results);
    };

    getPoints();
  }, []);

  useEffect(() => {
    console.log(points);
  }, [points]);

  const point = findPoints([
    'Goodwill, Orange County, California',
    'Thrift Store, Orange County, California',
    'Salvation Army, Orange County, California',
  ]);

  return (
    <div>
      <MapContainer
        center={[33.64618214781334, -117.84274459127637]}
        zoom={11}
        style={{ height: '1920' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/ghosnm/ckzq73c69001414nve9hlcx9d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2hvc25tIiwiYSI6ImNrenE2eTZqcjM1N2oyb3FyeXBkaGwzMHoifQ.Y1Fk71N1-mAY4AAmXHAt6Q"
          // Light Mode: "https://api.mapbox.com/styles/v1/ghosnm/cl2jlyr3t002b14kvqib2s4ax/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2hvc25tIiwiYSI6ImNrenE2eTZqcjM1N2oyb3FyeXBkaGwzMHoifQ.Y1Fk71N1-mAY4AAmXHAt6Q"
          // Dark Mode:  "https://api.mapbox.com/styles/v1/ghosnm/ckzq73c69001414nve9hlcx9d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2hvc25tIiwiYSI6ImNrenE2eTZqcjM1N2oyb3FyeXBkaGwzMHoifQ.Y1Fk71N1-mAY4AAmXHAt6Q"
        />

        {point.map(p => {
          return (
            <Marker key={p.place_id} position={[p.lat, p.lon]} icon={myIcon}>
              <Popup>{p.display_name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

// const Button = {} => {
//   return(
//     <Button

//     />
//   )
// }
export default Map;
