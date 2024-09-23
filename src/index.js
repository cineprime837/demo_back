require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const topFiveController = require("./controller/topFive.controller");

const latest = require("./controller/latest.controller");

const topPics = require("./controller/topPics.controller");

app.use(express.json());
app.use(cors());




const router = express.Router();

app.use(router);

app.use("", topFiveController);
app.use("", latest);
app.use("", topPics);

app.get("/", (req, res) => {
    res.send("API is running");
});

const Port = process.env.PORT || 8080;

module.exports={
    app:app,
    Port:Port
}