import React from 'react';
import classes from './Home.module.css';
import Header from '../../components/Header/Header';
import Features from '../../pages/Features/Features';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className={classes.Home}>
            <Header/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Home;