import React from "react";
import './ImageLinkForm.css';
const ImageLinkForm = ({ onInputChange,onButtonSubmit }) => {
    
    return (
        <div style={{ position: 'relative', zIndex: 2 }} className="f5">
            <p className="text3">
                {
                    'This website will detect faces in your pictures.'
                }
            </p>
            
            <div className="center">
                <div className=" form  center pa4 br3 shadow-5">
                <input className="f4 pa2 w-80 center br3" type="text"  onChange={onInputChange}/>
                    <button className="w-30 grow f5 link ph3 br3 pv2 dib white bg-light-purple  btn"
                        onClick={onButtonSubmit}>
                        Detect</button>
                    </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;