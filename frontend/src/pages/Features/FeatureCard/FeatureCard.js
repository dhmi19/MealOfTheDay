import React from 'react';
import classes from './FeatureCard.module.css';

const FeatureCard = (props) => {
    return (
        <div className={classes.FeatureCards}>
            <div className={classes.FeatureCard}>
                <h3>{props.title}</h3>
                <div className={classes.image}>
                    <img src={props.image}/>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;