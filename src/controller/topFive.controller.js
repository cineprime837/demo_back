const express = require("express");

const router = express.Router();

const TopFive = require("../model/topFive.schema");

router.post("/topfive", async (req, res) => {
  try {
    const requestData = req.body;
    const count = await TopFive.countDocuments();
    const existingMovies = await TopFive.find();
    if (count < 5) {
      const newTopFive = new TopFive(requestData);
      await newTopFive.save();
      return res
        .status(200)
        .json({ message: "Data saved to TopFive collection" });
    } else {
      const lastItem = existingMovies.shift();
      console.log("last item",lastItem)
      await TopFive.findByIdAndDelete(lastItem._id);

      const newTopFive = new TopFive(requestData);
      await newTopFive.save();

      return res.status(200).json({
        message: "Oldest item removed, new data added to TopFive collection",
      });
    }
  } catch (err) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/topfive",async(req,res)=>{
    try{
        const data = await TopFive.find();
        return res.status(200).json({
            data
        })
    }catch(error){
        return res.status(500).json({error: error.message})
    }
})

module.exports = router;
