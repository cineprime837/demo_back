const {app, Port} = require("./src/index");

const connect = require("./src/config/db");


app.listen(Port, async()=>{
    try{
        await connect();
        console.log("connected")
    }catch(err){
        console.log("message: ", {"message":err.message})
    }
})