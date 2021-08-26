import React from 'react';
import './Home.css'
import imgHomeShop from './shopimg.jpg';

const Home = () => {
    return (
        <div className="global-container">
            <h1 className="home-title">Bienvenue au <span>Shop</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequuntur corporis culpa
                ducimus fugit impedit officia, optio possimus provident sit soluta suscipit velit voluptas voluptatibus.
                Debitis iste molestias praesentium.</p>
            <img src={imgHomeShop} alt=""/>
        </div>
    );
};

export default Home;
