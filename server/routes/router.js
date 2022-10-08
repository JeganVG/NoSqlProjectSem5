const express = require('express')

const DeptCtrl = require('../controllers/ctrl')

const router = express.Router()


router.post('/Dept', DeptCtrl.createDept)
// router.put('/movie/:id', MovieCtrl.updateMovie)
// router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/Dept/:id', DeptCtrl.getDeptById)
router.get('/Dept', DeptCtrl.getDept)

module.exports = router