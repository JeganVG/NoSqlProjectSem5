
const Department = require('../models/Departments')

createDept = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const Depart = new Department(body)

    if (!Depart) {
        return res.status(400).json({ success: false, error: err })
    }

    Depart
        .save()
        .then(() => {
            return res.json({
                id: Depart._id,
                message: 'Deparment created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Deparment not created!',
            })
        })
}

updateDept = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Department.findOne({ Department_ID: req.params.Deparment_ID }, (err, YT) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        YT.Deparment_ID = body.Deparment_ID
        YT.Department_Name = body.Department_Name
        YT.Members = body.Members
        YT.Videos_Produced = body.Videos_Produced
        YT
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'Department updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Department not updated!',
                })
            })
    })
}

deleteDept = async (req, res) => {
    const body = req.body
    await Department.findOneAndDelete({ Department_ID:body.Department_ID}, (err, YT) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!YT) {
            return res
                .status(404)
                .json({ success: false, error: `Department not found` })
        }

        return res.status(200)
    }).catch(err => console.log(err))
}

getDeptById = async (req, res) => {
    await Department.findOne({ _id: req.params.id }, (err, dept) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!dept) {
            return res
                .status(404)
                .json({ success: false, error: `Dept not found` })
        }
        return res.status(200).json({ success: true, data: dept })
    }).catch(err => console.log(err))
}

getDept = async (req, res) => {
    await Department.find({}, (err, dept) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!dept.length) {
            return res
                .status(404)
                .json({ success: false, error: `Department not found` })
        }
        return res.json({ data:dept })
    }).catch(err => console.log(err))
}

module.exports = {
    createDept,
    updateDept,
    deleteDept,
    getDept,
    getDeptById,
}