const express = require('express')
const router = express.Router();
const {savePlayerDetails, getPlayerDetails} = require('../controllers/playerDetails')

router.post('/playerDetails' , savePlayerDetails)
router.get('/playerDetails' , getPlayerDetails)

module.exports = router