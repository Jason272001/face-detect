const ParticlesConfig = 
{
  "fullScreen": {
    "enable": true,
    "zIndex": -1
  },
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "cycle",  // The shape of the particles (options: "circle", "square", "triangle", "polygon", etc.)
      "options": {
        "sides": 70       // Number of sides for the polygon (only applicable if using "polygon" shape)
      }
    },
    "opacity": {
      "value": 0.9,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    // ... (other particle options)
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["grab"]
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 500,
        "line_linked": {
          "opacity": 1
        }
      },
      // ... (other interaction modes)
    },
  },
  "background": {
    "color": "#111",  // Background color
    "image": "",      // Background image (if any)
    "position": "50% 50%",
    "repeat": "repeat",
    "size": "cover"
  }
}





export default ParticlesConfig;