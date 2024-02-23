import React from "react";
import './Rank.css';

const Rank = ({name,entries}) => {
    return (
        <div style={{ position: 'relative', zIndex: 2, }} className="margin">
            <div className="white f5">
                <p className="text1" >
                    {`${name}, your current rank is ...`}
                    </p>
            </div>
            <div className="white f3">
                <p className=" text2" style={{ color:'#1095e8' }}>
                    {entries.entries}
                    </p>
            </div>
        </div>
    )
}

export default Rank;