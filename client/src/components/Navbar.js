// libs
import React from 'react';
import { Link } from 'react-router-dom';

// custom css
import './Navbar.css';

// logo
import Logo from '../images/logo1.png';

const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <img className='navbar-container__logo' src={Logo} alt="" />
            <div className='navbar-container__list'>
                <ul>
                    <li><Link to='/login'>Prisijungti</Link></li>
                    <li><Link to='/workers'>Darbuotojų sąrašas</Link></li>
                    <li><Link to='/holiday-work-schedule'>Atostogų/Komandiruočių tvarkaraštis</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
