const express = require('express')
const router = express.Router();
const {
    saveGameDetailsFreeMode,
    saveGameDetailsRestrictedMode,
    getGameDetailsFreeMode,
    getGameDetailsRestrictedMode } = require('../controllers/gameDetails')

router.post('/free', saveGameDetailsFreeMode)
router.post('/restricted', saveGameDetailsRestrictedMode)
router.get('/free', getGameDetailsFreeMode)
router.get('/restricted', getGameDetailsRestrictedMode)

module.exports = router