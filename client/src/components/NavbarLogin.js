// libs
import React from 'react';
/* ------------------------------------------ */

// custom css
import './Navbar.css';
/* ------------------------------------------ */

// logo
import Logo from '../images/logo1.png';
/* ------------------------------------------ */

const NavbarLogin = () => {
    return (
        <nav className='navbar-container'>
            <img className='navbar-container__logo' src={Logo} alt="" />
            <div className='navbar-container__list'>
            </div>
        </nav>
    )
}

export default NavbarLogin
