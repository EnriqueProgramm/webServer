
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const trainerSchema = new Schema({
    trainerName: { type: String, required: true},
    trainerSpeciality: { type: String, required: true},
    yearsOfExperience: { type: Number, required: true },   
}, {
    timestamps: true
});

const Trainer = new mongoose.model('Trainer', trainerSchema);
module.exports = Trainer;




