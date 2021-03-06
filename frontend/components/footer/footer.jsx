import React from 'react';

const Footer = () => {
    return (
        <div className="footer-outer-container">
            <div className="footer-inner-container">
                <div className="footer-name-container">
                    <p>JONATHAN DIAZ</p>
                </div>
                <div className="footer-links-outer-container">
                    <p>JOIN ME ON</p>
                    <div className="footer-links-inner-container">
                        <a href="https://www.linkedin.com/in/jonathan-diaz-72033315/" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
                        <a href="https://github.com/KingApe714" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/fluent/48/000000/github.png" /></a>
                        <a href="https://angel.co/u/jonathan-diaz-24" target="_blank"><img alt="about-us" className="a-u-link" src="https://img.icons8.com/ios/50/000000/angelist.png" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;