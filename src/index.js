const express = require("express");
const app = express();
const cors = require("cors");

const topFiveController = require("./controller/topFive.controller");

const latest = require("./controller/latest.controller");

const topPics = require("./controller/topPics.controller");

app.use(express.json());
app.use(cors());



const Port = process.env.port || 8080;

const router = express.Router();

app.use(router);

app.use("", topFiveController);
app.use("", latest);
app.use("", topPics);


module.exports={
    app:app,
    Port:Port
}