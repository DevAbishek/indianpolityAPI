const express = require('express')
const { getVicePresidentsController, getVicePresidentController, searchVicePresidentController } = require('../controllers/vicePresidentController');


const router = express.Router();

router
    .route('/')
    .get(getVicePresidentsController);

router
    .route('/:id')
    .get(getVicePresidentController)

router
    .route('/search/:name')
    .get(searchVicePresidentController);

module.exports = router;
