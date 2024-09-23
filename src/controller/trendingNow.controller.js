const express = require("express");

const router = express.Router();

const TrendingNow = require("../model/trendingNow.schema");

router.post("/trendingnow", async (req, res) => {
  try {
    const requestData = req.body;
    const count = await TrendingNow.countDocuments();
    const existingMovies = await TrendingNow.find();
    if (count < 15) {
      const newTrendingNow = new TrendingNow(requestData);
      await newTrendingNow.save();
      return res
        .status(200)
        .json({ message: "Data saved to TrendingNow collection" });
    } else {
      const lastItem = existingMovies.shift();
      console.log("last item",lastItem)
      await TrendingNow.findByIdAndDelete(lastItem._id);

      const newTrendingNow = new TrendingNow(requestData);
      await newTrendingNow.save();

      return res.status(200).json({
        message: "Oldest item removed, new data added to TrendingNow collection",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/trendingnow",async(req,res)=>{
    try{
        const data = await TrendingNow.find();
        return res.status(200).json({
            data
        })
    }catch(error){
        return res.status(500).json({error: error.message})
    }
})

module.exports = router;
