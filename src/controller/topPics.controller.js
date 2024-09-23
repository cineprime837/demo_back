const express = require("express");

const router = express.Router();

const TopPics = require("../model/topPics.schema");

router.post("/toppics", async (req, res) => {
  try {
    const requestData = req.body;
    const count = await TopPics.countDocuments();
    const existingMovies = await TopPics.find();
    if (count < 15) {
      const newTopPics = new TopPics(requestData);
      await newTopPics.save();
      return res
        .status(200)
        .json({ message: "Data saved to TopPics collection" });
    } else {
      const lastItem = existingMovies.shift();
      console.log("last item",lastItem)
      await TopPics.findByIdAndDelete(lastItem._id);

      const newTopPics = new TopPics(requestData);
      await newTopPics.save();

      return res.status(200).json({
        message: "Oldest item removed, new data added to TopPics collection",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/toppics",async(req,res)=>{
    try{
        const data = await TopPics.find();
        return res.status(200).json({
            data
        })
    }catch(error){
        return res.status(500).json({error: error.message})
    }
})

module.exports = router;
