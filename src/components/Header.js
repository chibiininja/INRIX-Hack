import React from 'react';
import img from './logo.jpeg';

function Header() {
  return (
    <div>
      <header className="Header">
      
        <img src={img} className="logo" alt="WHERE YOU AT? OHHH OHHHH WHERE YOU AT"/>
      
      </header>
    </div>
  );
}

export default Header