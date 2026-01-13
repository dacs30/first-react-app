import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='tc'>
            <h1>ROBOFRIENDS</h1>
            <div className='spinner-container'>
                <div className='spinner'></div>
                <p className='loading-text'>Loading Robots...</p>
            </div>
        </div>
    );
};

export default Spinner;
