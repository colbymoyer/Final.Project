import React from 'react';
import './Slideshow.css';

function Slideshow() {
    return (
        <div className="slideshow-container">
            <div className="slide">
                <img src="/assets/images/Work1.jpeg" alt="Work 1" />
            </div>
            <div className="slide">
                <img src="/assets/images/Work2.jpeg" alt="Work 2" />
            </div>
            <div className="slide">
                <img src="/assets/images/Work3.jpeg" alt="Work 3" />
            </div>
        </div>
    );
}

export default Slideshow;
