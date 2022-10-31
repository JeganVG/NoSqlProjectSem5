const express = require('express')

const DeptCtrl = require('../controllers/DeptCtrl')
const VideosCtrl = require('../controllers/VideosCtrl')
const YoutuberCtrl = require('../controllers/YoutuberCtrl')
const MembersCtrl = require('../controllers/MembersCtrl')
const ViewersCtrl = require('../controllers/ViewersCtrl')
const aggregation = require('../aggregation')

const router = express.Router()


router.post('/CreateDept', DeptCtrl.createDept)
router.post('/CreateVideos', VideosCtrl.createVideos)
router.post('/CreateYoutuber', YoutuberCtrl.createYoutuber)
router.post('/CreateMembers', MembersCtrl.createMembers)
router.post('/CreateViewers', ViewersCtrl.createViewers)


router.put('/UpdateDept',DeptCtrl.updateDept)
router.put('/UpdateVideos',VideosCtrl.updateVideos)
router.put('/UpdateYoutuber',YoutuberCtrl.updateYoutuber)
router.put('/UpdateMembers',MembersCtrl.updateMembers)
router.put('/UpdateViewers', ViewersCtrl.updateViewers)



router.delete('/DeleteDept', DeptCtrl.deleteDept)
// router.get('/ReadDept/:id', DeptCtrl.getDeptById)

router.get('/ReadDept', DeptCtrl.getDept)
router.get('/ReadVideos', VideosCtrl.getVideos)
router.get('/ReadMembers', MembersCtrl.getMembers)
router.get('/ReadYoutuber', YoutuberCtrl.getYoutuber)
router.get('/ReadViewers', ViewersCtrl.getViewers)

router.get('/agg1',aggregation.agg1)
router.get('/agg2',aggregation.agg2)
// router.get('/agg3',aggregation.agg3)
// router.get('/agg4',aggregation.agg4)

module.exports = router