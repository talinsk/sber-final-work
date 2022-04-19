import React from 'react';
import Logo from '../Logo';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyrights">
                <div className="cntr copyrightsWrap">
                    <div className="copyrightsLeft">
                        &copy; 2022 Brand All Rights Reserved.
                    </div>
                    <div className="copyrightsRight">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                        <a href=""><i className="fab fa-pinterest-p"></i></a>
                        <a href=""><i className="fab fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;