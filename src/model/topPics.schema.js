const mongoose = require('mongoose');
const playerSchema = require("./player.schema");

const schema = new mongoose.Schema({
    playerSchema
});

const TopPics = mongoose.model('toppics', schema);

module.exports = TopPics;
