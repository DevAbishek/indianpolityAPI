const mongoose = require('mongoose');

const vicePresidentSchema  = mongoose.Schema({
    id: {
        type: String,
        // required: true
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
    appointmentDelay: {
        type: Number,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    dateOfDeath: {
        type: Date
    },
    degreesEarned: {
        type: String,
        required: true
    },
    politicalAffiliation: {
        type: String,
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
    }
})

const VicePresidents = mongoose.model("VicePresidents", vicePresidentSchema)
module.exports = VicePresidents