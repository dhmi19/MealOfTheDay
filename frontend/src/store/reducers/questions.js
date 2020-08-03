import * as actionTypes from '../actions/actionTypes';

const initialState = {
    question1: null, 
    question2: null,
    question3: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ANSWER:
            return{
                ...state, 
                [action.number]: action.answer
            };
        default:
            return{
                ...state
            };
    }
};

export default reducer;