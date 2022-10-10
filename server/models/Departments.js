const mongoose = require('mongoose')
// const {Schema} = mongoose;
const Schema = mongoose.Schema

const Departments = new Schema(
    {
        Department_ID: { type: String, required: true },
        Department_Name: { type: String, required: true },
        Members: { type: [String], required: true },
        Videos_Produced: { type: [String], required: true },
    },
    {collection:'Departments'},
)

module.exports = mongoose.model('Departments', Departments)