import React from 'react';
import './../style.css';
import ReactLogo from './../assets/logo.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={ReactLogo} alt="logo" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </div>
      );
};

export default Navbar;
