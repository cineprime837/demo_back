const mongoose = require("mongoose");

const uri=encodeURIComponent(process.env.KeyId);

const connect = () =>{
    return (mongoose.connect(`mongodb+srv://kiran:kirankumar@cluster0.jwmqg.mongodb.net/`))
};

module.exports = connect;