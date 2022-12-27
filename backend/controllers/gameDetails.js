const { FreeMode, RestrictedMode } = require('../models/gameDetails')


const saveGameDetailsFreeMode = async (req, res) => {

    const details = await FreeMode.create({
        clicks: req.body.clicks,
        playerId : req.body.playerId,
    })

    console.log(details)
    res.status(200).send('request Successful')


}

const saveGameDetailsRestrictedMode = async (req, res) => {

    const details = await RestrictedMode.create({
        score: req.body.score,
        clicks: req.body.clicks,
        playerId : req.body.playerId,
    })

    console.log(details)
    res.status(200).send('request Successful')

}

const getGameDetailsFreeMode = async (req,res) => {

    const detail = await FreeMode.aggregate([
        { $sort: {"_id": -1}}, 
        { $limit: 2}, 
        { $sort: {"_id": 1}}, 
        { $limit: 1}
      ])
    res.send(detail);
}

const getGameDetailsRestrictedMode = async (req,res) => {

    const detail = await RestrictedMode.aggregate([
        { $sort: {"_id": -1}}, 
        { $limit: 2}, 
        { $sort: {"_id": 1}}, 
        { $limit: 1}
      ])
    res.send(detail);
}

module.exports = { saveGameDetailsFreeMode , saveGameDetailsRestrictedMode, getGameDetailsFreeMode, getGameDetailsRestrictedMode }