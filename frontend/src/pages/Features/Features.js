import React from 'react';
import classes from './Features.module.css';
import FeatureCard from './FeatureCard/FeatureCard';
import Weather from '../../images/Weather.png';
import Time from '../../images/Time.png';
import Ingredients from '../../images/Ingredients.png';

const Features = () => {
    return (
        <div className={classes.Features}>
            <h1>The Perfect Meal</h1>
            <p className={classes.Subtitle}>We account for numerous factors to give you the perfect meal recommendation</p>
            <div className={classes.FeatureCards}>
                <FeatureCard 
                    title="Weather"
                    description="Account for the weather, because who doesn't love a pinacolada on a sunny evening"
                    image={Weather}
                />
                <FeatureCard 
                    title="Time"
                    description="In a rush? Don't worry, we can recommend recipes that's take you just 10 mins. We promise!"
                    image={Time}
                />
                <FeatureCard 
                    title="Ingredients"
                    image={Ingredients}
                    description="Whether you are running out of groceries or simply feeling lazy, there is always a dish you can make"
                />
            </div>
        </div>
    );
};

export default Features;