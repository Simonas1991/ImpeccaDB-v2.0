const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        surname: {
            type: String,
            required: false
        },
        personalCode: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        number: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        from: {
            type: String,
            required: false
        },
        to: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

const Worker = mongoose.model('Worker', schema)

module.exports = Worker;