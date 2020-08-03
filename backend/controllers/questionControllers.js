const HttpError = require('../models/httpError');
const processor = require('../processor');

const getAnswer = async (req, res, next) => {
    
    const {question1, question2, question3} = req.body;

    let answer;
    answer = await processor(question1,question2, question3);
    res.status(201).json({answer: answer});
};

exports.getAnswer = getAnswer;