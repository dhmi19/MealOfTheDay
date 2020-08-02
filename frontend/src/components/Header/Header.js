import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderBackdrop}>
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
                    <button className={classes.Start}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;