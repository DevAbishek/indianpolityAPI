const express = require('express')
const { getPresidentsController, getPresidentController, searchPresidentController } = require('../controllers/presidentController');


const router = express.Router();

router
    .route('/')
    .get(getPresidentsController);

router
    .route('/:id')
    .get(getPresidentController)

router
    .route('/search/:name')
    .get(searchPresidentController);

module.exports = router;
