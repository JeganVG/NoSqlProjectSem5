
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
            return res.status(201).json({
                success: true,
                id: movie._id,
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

updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        movie.name = body.name
        movie.time = body.time
        movie.rating = body.rating
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
}

deleteMovie = async (req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        return res.status(200).json({ success: true, data: movie })
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
        return res.status(200).json({ success: true, data: dept })
    }).catch(err => console.log(err))
}

module.exports = {
    createDept,
    updateMovie,
    deleteMovie,
    getDept,
    getDeptById,
}