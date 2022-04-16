import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../contact';

function Navbar () {
    return(
        <>
            <nav className='navbar'>
               <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' >
                        <img src='kourierLogo.png' height='50px'/>

                    </Link>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/store">Store</Link>
                    </li>

                </div>      
            </nav>
        </>
    );
}

export default Navbar;