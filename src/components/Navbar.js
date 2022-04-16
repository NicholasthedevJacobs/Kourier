import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../contact';
import './Navbar.css'

function Navbar () {
    return(
        <>
            <nav className='navbar'>
               <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' >
                        <img src='kourierLogo.png' height='50px'/>
                    </Link>            
                    <Link to="/about" className='linkPages'>About</Link>
                    <Link to="/contact" className='linkPages'>Contact</Link>
                    <Link to="/store" className='linkPages'>Store</Link>
                    

                </div>      
            </nav>
        </>
    );
}

export default Navbar;