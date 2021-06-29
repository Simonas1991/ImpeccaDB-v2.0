// libs
import React, { useRef } from 'react';
/* ------------------------------------------ */

// css
import './Footer.css'
/* ------------------------------------------ */

function Footer() {
    // hooks
    // -useRef
    const date = useRef(new Date().getFullYear());
    /* ------------------------------------------ */

    return (
        <footer className='footer-container'>
            <p>&copy; {date.current} All rights reserved by Impecca</p>
        </footer>
    );
}

export default Footer;
