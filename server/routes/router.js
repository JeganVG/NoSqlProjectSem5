const express = require('express')

const DeptCtrl = require('../controllers/DeptCtrl')
const VideosCtrl = require('../controllers/VideosCtrl')
const YoutuberCtrl = require('../controllers/YoutuberCtrl')
const MembersCtrl = require('../controllers/MembersCtrl')
const ViewersCtrl = require('../controllers/ViewersCtrl')

const router = express.Router()


router.post('/CreateDept', DeptCtrl.createDept)
router.post('/CreateVideos', VideosCtrl.createVideos)
router.post('/CreateYoutuber', YoutuberCtrl.createYoutuber)
router.post('/CreateMembers', MembersCtrl.createMembers)
router.post('/CreateViewers', ViewersCtrl.createViewers)


router.post('/UpdateDept',DeptCtrl.updateDept)
router.post('/UpdateVideos',VideosCtrl.updateVideos)
router.post('/UpdateYoutuber',YoutuberCtrl.updateYoutuber)
router.post('/UpdateMembers',MembersCtrl.updateMembers)
router.post('/UpdateViewers', ViewersCtrl.updateViewers)



// router.put('/movie/:id', MovieCtrl.updateMovie)
// router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/Dept/:id', DeptCtrl.getDeptById)
router.get('/Dept', DeptCtrl.getDept)

module.exports = router