import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <>
        <nav className="navbar">
            <div className='navbar=container'>
                {/* <img src='kourierLogo.png' height="200" width="200" /> */}
                <Link to="/" className="navbar-logo">
                    Kourier
                </Link>

                
            </div>
        </nav>
    </>
  )
}

export default Navbar
