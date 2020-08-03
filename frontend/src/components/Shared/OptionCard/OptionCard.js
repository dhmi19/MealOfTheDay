import React from 'react';
import classes from './OptionCard.module.css';

const OptionCard = (props) => {


    let activeClasses = [classes.OptionCard];
    props.selected? activeClasses.push(classes.Selected): activeClasses.push(classes.unSelected)

    const selectHandler = () => {
        props.onClick(props.number);
    }

    return (
        <div className={activeClasses.join(" ")} onClick={selectHandler}>
            <h2>{props.content}</h2>
        </div>
    );
};

export default OptionCard;