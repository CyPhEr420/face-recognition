import React from "react";
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='  ma4 logo-center mt0'>
            <Tilty className=" Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="pa3 Tilt-inner"> <img style={{ paddingTop: '5px' }} src={brain} alt='logo' height="100px"></img> </div>
            </Tilty>

        </div>
    );
}

export default Logo;