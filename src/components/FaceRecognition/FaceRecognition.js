import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma" style={{ position: 'relative', zIndex: 2 }}>
      <div className="absolute mt2">
        <img id="inputimage" src={imageUrl} alt="" width='500px' height='auto' />
        {Array.isArray(box) &&
          box.map((face, index) => (
            <div
              key={index}
              className="bounding-box"
              style={{
                top: face.topRow + 'px',
                right: face.rightCol + 'px',
                bottom: face.bottomRow + 'px',
                left: face.leftCol + 'px'
              }}
            ></div>
          ))}
      </div>
    </div>
  );
}

export default FaceRecognition;
