const mongoose = require('mongoose');
const Worker = require('../models/WorkerModel');

const getWorkers = async (req, res) => {
    try {
        const workers = await Worker.find()
        res.status(200).json(workers)
    }
    catch (err) {
        res.status(404).json('Error: ' + err)
    }
};

const postWorker = async (req, res) => {
    const { name, surname, personalCode, address, number, email, type, to, from } = req.body

    try {
        const newWorker = await new Worker({ name, surname, personalCode, address, number, email, type, to, from })
        newWorker.save()
        res.status(200).json('Worker added!')
    }
    catch (err) {
        res.status(404).json('Error: ' + err)
    }
}

const patchWorker = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new Error(`Wrong id '${id}' format`);
        await Worker.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
        res.status(200).json('Worker updated!')
    }
    catch (err) {
        res.status(404).json('Error ' + err)
    }
}

const deleteWorker = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new Error(`Wrong id '${id}' format`);
        await Worker.findByIdAndDelete(id)
        res.status(200).json('Worker deleted')
    }
    catch (err) {
        res.status(404).json('Error: ' + err)
    }
}

module.exports = {
    getWorkers,
    postWorker,
    patchWorker,
    deleteWorker
}