import React, {Fragment} from 'react';
import './App.css';
import logo from  './img/Logo.png';
import ImagenCentral from  './img/image-center.png';
import Episodios from '../src/components/Episodios';

function App() {
  return (
    <Fragment>

      {/* Header */}
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo Ricky and Morty" />
        </div>
        {/* Menu */}
        <nav>
          <ul className="nav-links">
            <li className="nav-link">Inicio</li>
            <li className="nav-link">Episodios</li>
            <li className="nav-link">Doc</li>
          </ul>
        </nav>
      </header>

      {/* Container */}
      <main>
        <section className="presentation">
          <div className="introduction">
            <div className="intro-text">
              <h1>Rick & Morty Episodios</h1>
              <p>Todos tus episodios favoritos de ricky and morty</p>
            </div>
            <div>
              <div className="search">
                <input type="text" placeholder=" Search..." className="buttom-search" />
                {/* <button type="button" className="cta-select">Search</button> */}
              </div>
            </div>
          </div>
          <div className="cover">
            <img src={ImagenCentral} alt="imagen principal" />
          </div>
        </section>
      </main>

      <Episodios />

    </Fragment>
  );
}

export default App;
