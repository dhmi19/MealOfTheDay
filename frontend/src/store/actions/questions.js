import * as actionTypes from './actionTypes';

export const addAnswer = (answer, number) => {
    return{
        type: actionTypes.ADD_ANSWER,
        number: number,
        answer: answer
    };
};
