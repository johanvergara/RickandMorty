import React from 'react';
import {Link} from 'react-router-dom';
import logo from  '../img/Logo.png';

const Header = () => {
    return ( 
        <header>
            <div className="logo-container">
            <img src={logo} alt="Logo Ricky and Morty" />
            </div>

            <nav>
                <ul className="nav-links">
                    <Link to={'/'} className="nav-link">Inicio</Link>
                    <Link to={'/episodios'} className="nav-link">Episodios</Link>
                    <Link to={'/doc'} className="nav-link">Doc</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;