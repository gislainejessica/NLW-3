import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/Landing.css';

import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="Happy Logo" />

        <main>
          <h1> Leve felicidade para o mundo </h1>
          <p> Visite orfanatos e mude o dia de muitas crianças. </p>
        </main>

        <div className="location">
          <strong> Serra/ES </strong>
          <span> Espírito Santo </span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>

      </div>
    </div>
  );
}

export default Landing;