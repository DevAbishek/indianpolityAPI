const presidentModel = require('../models/presidentModel');

const getPresidentsController = async (req, res) => {
    try {
        const presidents = await presidentModel.find()
        console.log(presidents)
        res.status(200).send(presidents)
    } catch (error) {
        res.status(409).send({ message: error })
    }
}

const getPresidentController = async (req, res) => {
    try {
        const president = await presidentModel.findOne(req.params)
        res.status(200).json(president)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}

const searchPresidentController = async (req, res) => {
    try {
        const filters = req.params;
        const presidents = await presidentModel.find({
            name: { $regex: req.params.name, $options: 'i' }
        })
        res.status(200).json(presidents)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}



module.exports = { getPresidentsController, getPresidentController, searchPresidentController }