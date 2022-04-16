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
               </div>      
            </nav>
        </>
    );
}

export default Navbar;