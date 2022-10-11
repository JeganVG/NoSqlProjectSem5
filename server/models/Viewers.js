const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Viewers = new Schema(
    {
        Age: { type: Number, required: true },
        Contribution: { type: Number, required: true },
        Region: { type:String, required: true },
        Videos_Disliked: { type: [String], required: true },
        Videos_Liked: { type: [String], required: true }    
    },
    {collection:'Viewers'}
)

module.exports = mongoose.model('viewers', Viewers)