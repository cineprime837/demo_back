const mongoose = require('mongoose');
const playerSchema = require("./player.schema");

const schema = new mongoose.Schema({
    ...playerSchema
});

const Latest = mongoose.model('latest', schema);

module.exports = Latest;
