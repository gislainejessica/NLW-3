import React from 'react';
import mapMarkerImg from '../images/happy.svg';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/components/Sidebar.css';
import { useHistory } from 'react-router-dom';

export default function SideBar() {

  const { goBack } = useHistory()
  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  )
}