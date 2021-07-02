// libs
import React from 'react';
/* ------------------------------------------ */

// img
import Image from '../images/hero.jpg'
/* ------------------------------------------ */

// material-ui components
import { makeStyles } from '@material-ui/core';
/* ------------------------------------------ */

// material-ui makeStyles
const useStyles = makeStyles(() => ({
    hero: {
        height: 'calc(100vh - 160px)',
        width: 'calc(100vw - (100vw - 100%))',
        objectFit: 'cover'
    }
}));
/* ------------------------------------------ */

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <img className={classes.hero} src={Image} alt="" />
        </div>
    )
}

export default Home;
