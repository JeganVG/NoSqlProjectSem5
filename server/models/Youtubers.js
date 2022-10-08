const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Youtubers = new Schema(
    {
        Channel_Name: { type: String, required: true },
        Total_Dislikes: { type: Number, required: true },
        Total_Likes: { type: Number, required: true },
        Videos: { type: [String], required: true },
        Youtuber_ID: { type: String, required: true },
        Youtuber_Name: { type: String, required: true }
    },
    {collection:'Youtubers'}
);

module.exports = mongoose.model('Youtubers', Youtubers)