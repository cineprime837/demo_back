const express = require("express");

const router = express.Router();

const Latest = require("../model/latest.schema");

router.post("/latest", async (req, res) => {
  try {
    const requestData = req.body;
    const count = await Latest.countDocuments();
    const existingMovies = await Latest.find();
    if (count < 15) {
      const newLatest = new Latest(requestData);
      await newLatest.save();
      return res
        .status(200)
        .json({ message: "Data saved to Latest collection" });
    } else {
      const lastItem = existingMovies.shift();
      console.log("last item",lastItem)
      await Latest.findByIdAndDelete(lastItem._id);

      const newLatest = new Latest(requestData);
      await newLatest.save();

      return res.status(200).json({
        message: "Oldest item removed, new data added to Latest collection",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/latest",async(req,res)=>{
    try{
        const data = await Latest.find();
        return res.status(200).json({
            data
        })
    }catch(error){
        return res.status(500).json({error: error.message})
    }
})

module.exports = router;
