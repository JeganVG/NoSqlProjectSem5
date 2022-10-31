
const Youtuber = require('../models/Youtubers')

createYoutuber = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const item = new Youtuber(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Youtuber created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Youtuber created!',
            })
        })
}

updateYoutuber = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Youtuber.findOne({ Youtuber_ID: body.Youtuber_ID }, (err, YT) => {
        console.log(YT)
        if (err) {
            return res.status(404).json({
                err,
                message: 'Youtuber not found!',
            })
        }
        YT.Channel_Name = body.Channel_Name
        YT.Total_Dislikes = body.Total_Dislikes
        YT.Total_Likes = body.Total_Likes
        YT.Videos = body.Videos
        YT.Youtuber_ID = body.Youtuber_ID
        YT.Youtuber_Name = body.Youtuber_Name
        YT
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Youtuber updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Youtuber updated!',
                })
            })
    })
}

deleteYoutuber = async (req, res) => {
    const body = req.body
    await Youtuber.findOneAndDelete({ Youtuber_ID:body.Youtuber_ID}, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Youtuber not found` })
        }

        return res.status(200).json({ success: true, data: YT })
    }).catch(err => console.log(err))
}

getYoutuberById = async (req, res) => {
    await Youtuber.findOne({ _id: req.params.id }, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Youtuber not found` })
        }
        return res.status(200).json({ success: true, data: YT})
    }).catch(err => console.log(err))
}

getYoutuber = async (req, res) => {
    await Youtuber.find({}, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!YT.length) {
            return res
                .status(404)
                .json({ success: false, error: `Youtuber not found` })
        }
        return res.status(200).json({ success: true, data: YT })
    }).catch(err => console.log(err))
}

module.exports = {
    createYoutuber,
    updateYoutuber,
    deleteYoutuber,
    getYoutuber,
    getYoutuberById,
}