const mongoose = require('mongoose');
const Joi = require('joi');

const FreeMode = mongoose.model('FreeMode', new mongoose.Schema({

    clicks : Number,
    playerId : String
}))

const RestrictedMode = mongoose.model('RestrictedMode', new mongoose.Schema({

    score : Number,
    clicks : Number,
    playerId : String
}))


exports.FreeMode = FreeMode;
exports.RestrictedMode = RestrictedMode;
