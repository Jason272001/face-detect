import React from "react";
import { Tilt } from 'react-tilt'
import face from './face.png';
import './Logo.css';


const Logo = () => {
    return (
        
        <div className="ma3 mt0"  style={{ position: 'relative', zIndex: 2 }}>
            <Tilt className="Tilt br2 shadow-2 ba b--silver" options={{ max:90 }} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner pa3"><img style={{paddingTop:'5px'}} alt="log" src={ face} /></div>
            </Tilt>
        </div>
        
    );
}

export default Logo;