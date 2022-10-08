const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Videos = new Schema(
    {
        Video_ID: { type: String, required: true },
        Genre: { type: String, required: true },
        Revenue_Collected: { type: Number, required: true },
        Total_Likes: { type: Number, required: true },    
        Total_Dislikes: { type: Number, required: true },
        Total_Views: { type: Number, required: true },
        Video_Name: { type: String, required: true },
        Youtuber_ID: { type: String, required: true },
    },
    {collection:'Videos'}
);

module.exports = mongoose.model('Videos', Videos)