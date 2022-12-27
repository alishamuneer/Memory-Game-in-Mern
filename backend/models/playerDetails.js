const mongoose = require('mongoose');
const Joi = require('joi');

const Player = mongoose.model('Player', new mongoose.Schema({

    name : {
        type : String,
        required : true,
        minlength: 3,
        maxlength: 256

    },
    age : {
        type : Number,
        required : true
    }

}))

function validatePlayer(player) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(50).required(),
      age: Joi.number().min(1).max(100).required(),
      
    });
    return schema.validate(player);
}

exports.Player = Player
exports.validatePlayer = validatePlayer