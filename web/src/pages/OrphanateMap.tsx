import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import logo from '../images/Logo.svg';

import '../styles/pages/OrphanateMap.css';
// import { TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanateMap() {
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
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#ffffff" />
      </Link>

    </div>
  );
}

export default OrphanateMap;