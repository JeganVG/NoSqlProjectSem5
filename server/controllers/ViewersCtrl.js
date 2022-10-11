
const Viewers = require('../models/Viewers')

createViewers = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const item = new Viewers(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Viewers created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Viewers created!',
            })
        })
}

updateViewers = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Viewers.findOne({ _id: req.params.id }, (err, YT) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Viewers not found!',
            })
        }
        YT.Age = body.Age
        YT.Contribution = body.Contribution 
        YT.Region = body.Region
        YT.Videos_Disliked = body.Videos_Disliked
        YT.Videos_Liked = body.Videos_Liked
        YT.Viewer_Name = body.Viewer_Name
        YT
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Viewers updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Viewers updated!',
                })
            })
    })
}

deleteViewers = async (req, res) => {
    await Viewers.findOneAndDelete({ _id: req.params.id }, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Viewers not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getViewersById = async (req, res) => {
    await Youtuber.findOne({ _id: req.params.id }, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Viewers not found` })
        }
        return res.status(200).json({ success: true, data: YT})
    }).catch(err => console.log(err))
}

getViewers = async (req, res) => {
    await Viewers.find({}, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!YT.length) {
            return res
                .status(404)
                .json({ success: false, error: `Viewers not found` })
        }
        return res.status(200).json({ success: true, data: YT })
    }).catch(err => console.log(err))
}

module.exports = {
    createViewers,
    updateViewers,
    deleteViewers,
    getViewers,
    getViewersById,
}