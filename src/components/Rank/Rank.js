import React from "react";
import './Rank.css';

const Rank = () => {
    return (
        <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="white f3">
                {'Jason your current rank is ...'}
            </div>
            <div className="white f1">
                {'#5'}
            </div>
        </div>
    )
}

export default Rank;