const vicePresidentModel = require('../models/vicePresidentModel');

const getVicePresidentsController = async (req, res) => {
    try {
        const vicePresidents = await vicePresidentModel.find()
        res.status(200).json(vicePresidents)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}

const getVicePresidentController = async (req, res) => {
    try {
        const vicePresident = await vicePresidentModel.findOne(req.params)
        res.status(200).json(vicePresident)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}

const searchVicePresidentController = async (req, res) => {
    try {
        const filters = req.params;
        const vicePresidents = await vicePresidentModel.find({
            name: { $regex: req.params.name, $options: 'i' }
        })
        res.status(200).json(vicePresidents)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}



module.exports = { getVicePresidentsController, getVicePresidentController, searchVicePresidentController }