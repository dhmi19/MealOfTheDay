import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../images/Meal of the Day.png';

const Navbar = () => {
    return (
        <header className={classes.Navbar}>
            <div className= {classes.Logo}>
                <img src={Logo}>
                </img>
            </div>
        </header>
    );
};

export default Navbar;