import React from 'react';
import ImagenCentral from  '../img/image-center.png';


const Inicio = () => {
    return ( 
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
    );
}

export default Inicio;