import React from 'react';
import './Header.css';
import TopfoldBg from './Assets/Images/topfoldbg-v2.png'; // Background image
import Weblogo from './Assets/Images/logo192.png'; // Logo image

const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${TopfoldBg})` }}>
            <div className="header-container">
                <div className="header-top">
                    <img src={Weblogo} alt="Website Logo" className="logo" />
                    <nav className="nav">
                        <ul className="nav-links">
                            <li><a href="#our-company">Our Company</a></li>
                            <li><a href="#product">Products</a></li>
                            <li><a href="#solutions">Solutions</a></li>
                            <li><a href="#resources">Resources</a></li>
                            <li><a href="#partners">Partners</a></li>
                            <li><a href="#bitcoin">Bitcoin</a></li>
                        </ul>
                    </nav>
                    <button className="get-started">Get Started</button>
                </div>
                <div className="header-content">
                    <h1>Analysis.<br />AI Powered.<br />At Your Fingertips.</h1>
                    <p>The agility and insights you need at every level of decision making.</p>
                    <button className="learn-more">Learn more</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
