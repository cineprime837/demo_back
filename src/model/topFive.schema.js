const mongoose = require('mongoose');
const playerSchema = require("./player.schema");

const schema = new mongoose.Schema({
    ...playerSchema
});

const TopFive = mongoose.model('topfive', schema);

module.exports = TopFive;
