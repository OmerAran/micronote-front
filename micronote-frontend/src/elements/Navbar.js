import React from 'react';
import {Link} from "react-router-dom";
import '../assets/Navbar.css';

const Navbar = () => {
    
    return (
        <nav>
            <div>
                <Link to={"/home"} style={{textDecoration:"none", color:'inherit'}}>theomerdev</Link>
            </div>
            <ul className="nav-links">
                <Link to="/home" style={{textDecoration:"none", color:'inherit'}}>home</Link>
                <Link to="/about" style={{textDecoration:"none", color:'inherit'}}>about</Link>
                <Link to="/contact" style={{textDecoration:"none", color:'inherit'}}>contact</Link>
                <Link to="/notes" style={{textDecoration:"none", color:'inherit'}}>notes</Link>

                </ul>
        </nav>
    );
};

export default Navbar;