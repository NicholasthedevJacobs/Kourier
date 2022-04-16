import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    return(
        <>
            <nav className='navbar'>
               <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' >
                        <img src='kourierLogo.png' height='50px'/>

                    </Link>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/cats">Contact</Link>
                    </li>
                    <li>
                        <Link to="/sheeps">Store</Link>
                    </li>

                </div>      
            </nav>
        </>
    );
}

export default Navbar;