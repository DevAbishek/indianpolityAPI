const mongoose = require('mongoose');
const dotenv = require('dotenv')
const connectDb = require('./config/config')

const presidentModel = require('./models/presidentModel')
const presidents = require('./utils/data-presidents')

const vicePresidentModel = require('./models/vicePresidentModel')
const vicePresidents = require('./utils/data-vicePresidents')

dotenv.config();
connectDb();


const importDataPresident = async () => {
    try {
        await presidentModel.deleteMany();
        await presidentModel.insertMany(presidents)
        console.log('Presidents data added')
    } catch (error) {
        console.log(error)
    }
}

const importDataVicePresident = async () => {
    try {
        await vicePresidentModel.deleteMany();
        await vicePresidentModel.insertMany(vicePresidents)
        console.log('Vice Presidents data added')
    } catch (error) {
        console.log(error)
    }
}

importDataVicePresident();