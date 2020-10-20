import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import logo from '../images/Logo.svg';

import '../styles/pages/OrphanateMap.css';
import 'leaflet/dist/leaflet.css';
import happyMapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitudade: number;
  name: string;
}


function OrphanateMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  return (
    <div id="page-map">
      <aside >
        <header>
          <img src={logo} alt="HappY" />
          <h2> Escolha um orfanato no Mapa </h2>
          <p> Muitas crianças estão esparando a sua visita :) </p>
        </header>

        <footer>
          <strong> Serra </strong>
          <span> Espiríto Santo </span>
        </footer>

      </aside>

      <Map
        center={[-20.165736, -40.2578524]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {orphanages.map(orphanage => (
          <Marker
            position={[orphanage.latitude, orphanage.longitudade]}
            icon={happyMapIcon}
            key={orphanage.id}
          >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanage/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#ffffff" />
      </Link>

    </div>
  );
}

export default OrphanateMap;