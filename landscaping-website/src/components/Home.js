import React from 'react';
import Slideshow from './Slideshow';
import WeatherWidget from './WeatherWidget';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Slideshow />
            <div className="mission-statement">
                <h2>Our Mission</h2>
                <p>We strive to create beautiful landscapes that enhance the natural beauty of your property.</p>
            </div>
            <WeatherWidget />
        </div>
    );
}

export default Home;
