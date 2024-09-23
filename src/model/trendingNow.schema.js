const mongoose = require('mongoose');
const playerSchema = require("./player.schema");

const schema = new mongoose.Schema({
    playerSchema
});

const TrendingNow = mongoose.model('trendingnow', schema);

module.exports = TrendingNow;
