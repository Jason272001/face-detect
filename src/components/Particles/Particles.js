import Particles from "react-tsparticles";
import ParticlesConfig from "./ParticlesConfig";
import "./Particles.css";
import React from "react";

const Particle = () => { 



    return (
        <div>
            <Particles params={ParticlesConfig} className="particle-containe"></Particles>
            </div>
       

    )
}


export default Particle
