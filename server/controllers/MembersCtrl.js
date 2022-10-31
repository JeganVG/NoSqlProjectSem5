
const Members = require('../models/Members')

createMembers = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const item = new Members(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id:item._id,
                message: 'Members created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Members created!',
            })
        })
}

updateMembers = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Members.findOne({ Member_ID: req.body.Member_ID }, (err, YT) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Members not found!',
            })
        }
        console.log('received');
        YT.Channel_Name = body.Channel_Name
        YT.Department_ID = body.Department_ID 
        YT.Member_ID = body.Member_ID
        YT.Member_Name = body.Member_Name
        YT.Videos_Worked = body.Videos_Worked
        YT
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'Members updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Members updated!',
                })
            })
    })
}

deleteMembers = async (req, res) => {
    const body = req.body
    await Members.findOneAndDelete({ Member_ID:body.Member_ID}, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Members not found` })
        }

        return res.status(200).json({ success: true, data: YT })
    }).catch(err => console.log(err))
}

getMembersById = async (req, res) => {
    await Youtuber.findOne({ _id: req.params.id }, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Members not found` })
        }
        return res.status(200).json({ success: true, data: YT})
    }).catch(err => console.log(err))
}

getMembers = async (req, res) => {
    await Members.find({}, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!YT.length) {
            return res
                .status(404)
                .json({ success: false, error: `Members not found` })
        }
        // return YT
        return res.status(200).json({ success: true, data: YT })
    }).catch(err => console.log(err))
}

module.exports = {
    createMembers,
    updateMembers,
    deleteMembers,
    getMembers,
    getMembersById,
}