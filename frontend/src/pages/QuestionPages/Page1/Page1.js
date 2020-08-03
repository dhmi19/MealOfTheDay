import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import classes from './Page1.module.css';
import Typed from 'react-typed';
import OptionCard from '../../../components/Shared/OptionCard/OptionCard';

const Page1 = () => {

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
                    strings={['How long do you have?']}
                    typeSpeed={40}
                />
            </div>
            <div className={classes.Options}>
                <OptionCard 
                    number={1} 
                    selected={optionStatus[0]} 
                    onClick={onSelectHandler}
                    content="20 mins tops! In a rush today 😅."
                />
                <OptionCard 
                    number={2} 
                    selected={optionStatus[1]}
                    onClick={onSelectHandler}
                    content="I can spare an hour, let's see what we can make!"
                />
                <OptionCard 
                    number={3} 
                    selected={optionStatus[2]} 
                    onClick={onSelectHandler}
                    content="I got all day. Give me something extravagent!"
                />
            </div>
            <div className={classes.Button}>
                <Link
                    style={{ textDecoration: 'none'}}
                    className={buttonClasses.join(" ")} 
                    to='/page2'
                >
                    Continue
                </Link>
            </div>
        </div>
    );
};

export default Page1;