import React from "react";

const Navigation = ({ onRouteChange, IsSignIn }) => {
    
    if (IsSignIn) {
          return (
        <nav style={{ display:'flex',justifyContent:'flex-end ', position: 'relative', zIndex: 2 }}>
            <p onClick={()=>onRouteChange('signout')} className="f3 link dim black underline pa4 pointer" style={{color:'#1095e8' }}>Sign Out</p>
        </nav>
    );

        
    }
    else {
          return (
        <nav style={{ display:'flex',justifyContent:'flex-end ', position: 'relative', zIndex: 2 }}>
            <p onClick={()=>onRouteChange('signin')} className="f3 link dim black underline pa4 pointer" style={{color:'#1095e8' }}>Sign in</p>
            <p onClick={()=>onRouteChange('signup')} className="f3 link dim black underline pa4 pointer" style={{color:'#1095e8' }}>Sign up</p>
        </nav>
    );
        }
}
  

export default Navigation;