import React, { useEffect, useState } from 'react';
import classes from './ResultsPage.module.css';
import { useHttpClient } from '../../hooks/http-hook';
import {connect} from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
const ResultsPage = (props) => {

    const { isLoading, error, sendRequest} = useHttpClient();

    const[answer, setAnswer] = useState({});

    useEffect(() => {
        const sendHttpRequest = async () => {
            let responseData = {};
            try{
                responseData = await sendRequest(
                    "https://mealoftheday.herokuapp.com/api/questions",
                    'POST',
                    JSON.stringify({
                        question1: props.question1,
                        question2: props.question2,
                        question3: props.question3
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );   
                const answer = responseData.answer;
                setAnswer(answer);
            }catch(error){
                console.log(error);
                setAnswer(responseData);
            }
        };
        sendHttpRequest();
    }, [props.question1,props.question2,props.question3,sendRequest]);


    const openRecipe = (href) => {
        const fullURL = "https://www.kitchenstories.com" + href;
        var win = window.open(fullURL, '_blank');
    };

    let cardContent;

    if(error){
        cardContent = (
            <div className={classes.ResultsCard}>
                <p>{error}</p>
            </div>
        );
    }else{
        if(isLoading){
            cardContent = (
                <div className={classes.Loading}>
                    <div className={classes.Center}>
                        <BounceLoader loading/>
                    </div>
                </div>
            );
        }else{
            cardContent = (
                <div className={classes.ResultsCard} onClick={() => {openRecipe(answer.href)}}>
                    <div className={classes.Image}>
                        <img src={answer.imageURL} alt={answer.title}/>
                    </div>
                    <div className={classes.Details}>
                        <p className={classes.Title}>{answer.title}</p>
                        <p className={classes.SmallerFont}>Ingredients: {answer.ingredients}</p>
                        <p className={classes.SmallerFont}>Difficulty: {answer.difficulty}</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className={classes.Result}>
            <h1>On the menu tonight:</h1>
            {cardContent}
        </div>
    );
};

const mapStateToProps = state => {
    return{
        question1: state.question1,
        question2: state.question2,
        question3: state.question3,
    };
}

export default connect(mapStateToProps, null)(ResultsPage);