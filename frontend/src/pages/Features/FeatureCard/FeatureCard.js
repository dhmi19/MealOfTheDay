import React,{useState} from 'react';
import classes from './FeatureCard.module.css';

const FeatureCard = (props) => {

    const [hover, setHover] = useState(false);

    const onMouseEnterHandler = () => {
        setHover(true);
    }

    const onMouseLeaveHandler = () => {
        setHover(false);
    }

    const normalCard = (
        <div
            className={classes.FeatureCard}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave = {onMouseLeaveHandler}
        >
            <h3>{props.title}</h3>
            <div className={classes.image}>
                <img src={props.image}/>
            </div>
        </div>
    );

    const hoverCard = (
        <div 
            className={classes.FeatureCard}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave = {onMouseLeaveHandler}
        >
            <h3>{props.title}</h3>    
            <p>{props.description}</p>
        </div>
    );

    return (
        <div className={classes.FeatureCards}>
            {hover? hoverCard : normalCard}
        </div>
    );
};

export default FeatureCard;