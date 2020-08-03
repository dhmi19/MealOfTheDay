const express = require('express');

const questionControllers = require('../controllers/questionControllers');

const router = express.Router();

router.post('/', questionControllers.getAnswer);

module.exports = router;