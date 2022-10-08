const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Members = new Schema(
    {
        Channel_Name: { type: String, required: true },
        Department_ID: { type: String, required: true },
        Member_ID: { type: String, required: true },
        Member_Name: { type: String, required: true },
        Videos_Worked: { type: [String], required: true }
    },
    {collection:'Members'}
);

module.exports = mongoose.model('Members', Members)