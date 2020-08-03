import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import classes from './Page2.module.css';
import Typed from 'react-typed';
import OptionCard from '../../../components/Shared/OptionCard/OptionCard';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actions/questions';

const Page2 = (props) => {

    const [optionStatus, setOptionStatus] = useState([false, false, false]);
    const [enabled, setEnabled] = useState(true);

    const onSelectHandler = (number) => {

        let newState = [...optionStatus];

        let answer = "";
        switch(number-1){
            case 0:
                answer = "less ingredients";
                break;
            case 1: 
                answer = "medium ingredients";
                break;
            case 2: 
                answer = "many ingredients";
                break;
            default:
                answer = "medium ingredients";
                break;
        };

        console.log(number);
        for(var i = 0; i < newState.length; i++){
            if(i === number - 1){
                newState[i] = true;
            }else{
                newState[i] = false;
            }
        }
        props.onAnswerAdded(answer, "question2");
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
                    strings={['Do you feel like cooking today?']}
                    typeSpeed={40}
                />
            </div>
            <div className={classes.Options}>
                <OptionCard 
                    number={1} 
                    selected={optionStatus[0]} 
                    onClick={onSelectHandler}
                    content="Nah 😕! Minimum ingredients please."
                />
                <OptionCard 
                    number={2} 
                    selected={optionStatus[1]}
                    onClick={onSelectHandler}
                    content="My fridge is fairly full, I can spare a few ingredients."
                />
                <OptionCard 
                    number={3} 
                    selected={optionStatus[2]} 
                    onClick={onSelectHandler}
                    content="I'll buy whatever's needed! Ingredients are no problem 🥳"
                />
            </div>
            <div className={classes.Button}>
                <Link
                    style={{ textDecoration: 'none'}}
                    className={buttonClasses.join(" ")} 
                    to='/page3'
                >
                    Continue
                </Link>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return{
        onAnswerAdded : (answer, questionNumber) => dispatch(actionTypes.addAnswer(answer, questionNumber))
    }
}

export default connect(null, mapDispatchToProps)(Page2);