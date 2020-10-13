import React from 'react';
import './styles/global.css';
import './styles/pages/Landing.css';

import logo from './images/Logo.svg';

function App() {
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
      </div>

      <a href="" className="enter-app">
        >
      </a>

    </div>
  );
}

export default App;
