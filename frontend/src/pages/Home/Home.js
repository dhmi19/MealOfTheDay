import React from 'react';
import classes from './Home.module.css';
import Navbar from '../../components/NavBar/Navbar';
import Header from '../../components/Header/Header';
import Features from '../../pages/Features/Features';

const Home = () => {
    return (
        <div className={classes.Home}>
            <Navbar/>
            <Header/>
            <Features/>
        </div>
    );
};

export default Home;