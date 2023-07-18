import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer className={'footer'} style={{ backgroundColor: '#f2f2f2', color: 'black' }}>
            <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <h5>Quick Links</h5>
                        <ul>
                            <li><Link to={"/theomerdev"}>home</Link></li>
                            <li><Link to={"/theomerdev/about"}>about</Link></li>
                            <li><Link to={"/theomerdev/contact"}>contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Top Read List</h5>
                        <ul>
                            <li>Blog Post 1</li>
                            <li>Blog Post 2</li>
                            <li>Blog Post 3</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Newest Blog</h5>
                        <p>Blog Post 4</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;