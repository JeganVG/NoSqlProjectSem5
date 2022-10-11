
const Videos = require('../models/Videos')

createVideos = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const item = new Videos(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Videos created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Videos created!',
            })
        })
}

updateVideos = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Videos.findOne({ _id: req.params.id }, (err, YT) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Videos not found!',
            })
        }
        YT.Videos_ID = body.Videos_ID
        YT.Genre = body.Genre 
        YT.Revenue_Collected = body.Revenue_Collected
        YT.Total_Likes = body.Total_Likes
        YT.Total_Dislikes = body.Total_Dislikes
        YT.Total_Views = body.Total_Views
        YT.Video_Name = body.Video_Name
        YT.Youtuber_ID = body.Youtuber_ID
        YT
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Videos updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Videos updated!',
                })
            })
    })
}

deleteVideos = async (req, res) => {
    await Videos.findOneAndDelete({ _id: req.params.id }, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Videos not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getVideosById = async (req, res) => {
    await Youtuber.findOne({ _id: req.params.id }, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Videos not found` })
        }
        return res.status(200).json({ success: true, data: YT})
    }).catch(err => console.log(err))
}

getVideos = async (req, res) => {
    await Videos.find({}, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!YT.length) {
            return res
                .status(404)
                .json({ success: false, error: `Videos not found` })
        }
        return res.status(200).json({ success: true, data: YT })
    }).catch(err => console.log(err))
}

module.exports = {
    createVideos,
    updateVideos,
    deleteVideos,
    getVideos,
    getVideosById,
}