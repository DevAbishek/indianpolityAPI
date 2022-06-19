const mongoose = require('mongoose');

const presidentSchema  = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    reasonForTenureEnd: {
        type: String
    },
    daysInOffice: {
        type: Number
    },
    acting: {
        type: Boolean,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    yearOfDeath: {
        type: Date
    },
    degreesEarned: {
        type: String,
        required: true
    },
    politicalAffiliation: {
        type: String,
        required: true
    },
    married: {
        type: String
    },
    lokSabha: {
        type: String,
        required: true
    },
    rajyaSabha: {
        type: Boolean,
        required: true
    },
    mla: {
        type: String,
        required: true
    },
    mlc: {
        type: Boolean,
        required: true
    },
    governor: {
        type: String,
        required: true
    },
    unionCabinet: {
        type: Boolean,
        required: true
    },
    stateCabinet: {
        type: Boolean,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    mercyAccepted: {
        type: Number
    },
    mercyRejected: {
        type: Number
    },
    mercyDisposed: {
        type: Number,
        required: true
    },
    ordinances: {
        type: Number,
        required: true
    },
    presidentRule: {
        type: Number,
        required: true
    }
})

const Presidents = mongoose.model("Presidents", presidentSchema)
module.exports = Presidents