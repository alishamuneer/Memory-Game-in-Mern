const { Player , validatePlayer } = require('../models/playerDetails')


const savePlayerDetails = async (req, res) => {

    
    const { error } = validatePlayer(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    const details = await Player.create({
        name : req.body.name,
        age : req.body.age
    })
    
    console.log(details)
    res.status(200).send('request Successful')
}


const getPlayerDetails = async (req,res) => {

    const detail = await Player.find({}).sort({_id:-1}).limit(1)
    res.send(detail);
}

module.exports = { savePlayerDetails , getPlayerDetails  }

