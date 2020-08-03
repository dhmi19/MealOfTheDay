import React from 'react';
import {Link} from 'react-router-dom'
import classes from './Header.module.css';
import Logo from '../../images/Meal of the Day.png';

const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderBackdrop}>
                <div className={classes.Logo}>
                    <img src={Logo} alt="Meal of the Day"/>
                </div>
                <div className={classes.Description}>
                    <h1>Meal Of The Day</h1>
                    <p>
                        Do you always get stuck on what to make for dinner? 
                        Are all the online websites too clutered and confusing?
                    </p>
                    <p>
                        Try the Food Recommender! 
                        Answer simple questions to get the perfect food recommendation for tonight's meal.
                    </p>
                    <Link 
                        style={{ textDecoration: 'none' }}
                        className={classes.Start} 
                        to='/page1'
                    >Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;