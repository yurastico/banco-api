const mongoose  = require("mongoose")
const config = require("../config/config")


mongoose.connect(config.dbpath,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected")
}).catch((error) => {
    console.log(error)
})

module.exports = mongoose