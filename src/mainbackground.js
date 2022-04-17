import React from 'react';
import './mainbackground.css';
import App from './App.css';

function MainBackground() {
    return (
        <div className='mainbackground-container'>
            <video src='./video/SolumCycleVideo.mp4' autoPlay loop muted />
        </div>
    )
}

export default MainBackground;