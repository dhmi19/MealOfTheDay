import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import classes from './Page3.module.css';
import Typed from 'react-typed';
import OptionCard from '../../../components/Shared/OptionCard/OptionCard';

const Page3 = () => {

    const [optionStatus, setOptionStatus] = useState([false, false, false]);
    const [enabled, setEnabled] = useState(true);

    const onSelectHandler = (number) => {
        let newState = [...optionStatus];
        console.log(number);
        for(var i = 0; i < newState.length; i++){
            if(i === number - 1){
                newState[i] = true;
            }else{
                newState[i] = false;
            }
        }
        console.log(newState);
        setOptionStatus(newState);
    }

    useEffect(() => {
        const [o1, o2, o3] = optionStatus;
        if(!o1 && !o2 && !o3){
            setEnabled(false);
        }else{
            setEnabled(true);
        }
    }, [optionStatus]);

    let buttonClasses = [classes.Start];
    enabled ? buttonClasses.push(classes.Enabled) : buttonClasses.push(classes.Disabled);

    return (
        <div className ={classes.Page1}>
            <div className={classes.Question}>
                <Typed
                    style={{fontSize: "2em", fontWeight: "bold"}}
                    strings={["How healthy should the meal be?"]}
                    typeSpeed={40}
                />
            </div>
            <div className={classes.Options}>
            <OptionCard 
                    number={1} 
                    selected={optionStatus[0]} 
                    onClick={onSelectHandler}
                    content="Today's cheat day!"
                />
                <OptionCard 
                    number={2} 
                    selected={optionStatus[1]}
                    onClick={onSelectHandler}
                    content="Can't say no to a healthy meal 😃"
                />
                <OptionCard 
                    number={3} 
                    selected={optionStatus[2]} 
                    onClick={onSelectHandler}
                    content="Gotta be healthy. No other way! 🏋️"
                />
            </div>
            <div className={classes.Button}>
                <Link
                    style={{ textDecoration: 'none'}}
                    className={buttonClasses.join(" ")} 
                    to='/results'
                >
                    Continue
                </Link>
            </div>
        </div>
    );
};

export default Page3;