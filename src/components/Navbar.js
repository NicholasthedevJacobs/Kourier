import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../contact';
import './Navbar.css'

function Navbar () {
    return(
        <>
            <div className='navbar'>
               <div className='navbar-container'>
 
                  <ul>
                    <Link to="/" className='navbar-logo' >
                        <img src='kourierLogo.png' height='70px'/>
                    </Link>   
                    <li>
                        <Link to="/about" className='linkPages' >About</Link>
                    </li>         
                    <li>
                        <Link to="/contact" className='linkPages'>Contact</Link>
                    </li>
                    <li>
                        <Link to="/store" className='linkPages'>Store</Link>
                    </li>
                  </ul>
                    
                    
                    

                </div>      
            </div>
        </>
    );
}

export default Navbar;