import React from 'react';
import classes from './Features.module.css';
import FeatureCard from './FeatureCard/FeatureCard';
import Weather from '../../images/Weather.png';
import Time from '../../images/Time.png';

const Features = () => {
    return (
        <div className={classes.Features}>
            <h1>Features</h1>
            <h2>Get the perfect meal for your day:</h2>
            <div className={classes.FeatureCards}>
                <FeatureCard 
                    title="Weather"
                    description="Account for the weather, because who doesn't love a pinacolada on a sunny evening"
                    image={Weather}
                />
                <FeatureCard 
                    title="Time"
                    description="In a rush? Don't worry, we got you covered"
                    image={Time}
                />
                <FeatureCard 
                    title="Weather"
                    description="Account for the weather, because who wants doesn't love a pinacolada on a sunny evening"
                />
            </div>
        </div>
    );
};

export default Features;